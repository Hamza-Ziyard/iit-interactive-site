import { useMemo, useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { buildings } from '../data/buildings'
import { landmarks } from '../data/landmarks'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { MapPinIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/24/outline'
import studentImg from '../assets/img/student.png'

// Haversine formula to calculate distance between two coords
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371 // Radius of the earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c // Distance in km
}

export default function BuildingsList() {
  const [selectedId, setSelectedId] = useState(buildings[0]?.id)
  const [highlightedMarker, setHighlightedMarker] = useState(null)
  const [userLocation, setUserLocation] = useState(null)
  const [distances, setDistances] = useState({})
  const navigate = useNavigate()
  const mapRef = useRef(null)
  const selected = buildings.find((b) => b.id === selectedId) || buildings[0]

  // Get user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          setUserLocation({ lat: latitude, lng: longitude })
        },
        (err) => console.error("Geolocation error:", err),
        { enableHighAccuracy: true }
      )
    }
  }, [])

  // Calculate distances when user location is available
  useEffect(() => {
    if (userLocation) {
      const newDistances = {}
      buildings.forEach((b) => {
        newDistances[b.id] = getDistanceFromLatLonInKm(
          userLocation.lat,
          userLocation.lng,
          b.lat,
          b.lng
        ).toFixed(2) // 2 decimals
      })
      setDistances(newDistances)
    }
  }, [userLocation])

  // On first load, open popup for the initially selected building
  useEffect(() => {
    if (selected) {
      setHighlightedMarker(selected.id)
    }
  }, [])

  const handleBuildingClick = (buildingId) => {
    setSelectedId(buildingId)
    setHighlightedMarker(buildingId)
    if (mapRef.current) {
      const building = buildings.find(b => b.id === buildingId)
      if (building) {
        mapRef.current.setView([building.lat, building.lng],15.5, { animate: true })
      }
    }
  }

  // Only first 3 buildings have navigation on double-click
  const handleBuildingDoubleClick = (buildingId, index) => {
    if (index < 3) {
      navigate(`/buildings/${buildingId}`)
    }
  }

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: list */}
      <section className="overflow-y-auto">
        <ul className="space-y-2">
          {buildings.map((b, index) => (
            <li key={b.id}>
              <div
                onClick={() => handleBuildingClick(b.id)}
                onDoubleClick={() => handleBuildingDoubleClick(b.id, index)}
                className={`group relative bg-white shadow-sm transition-colors cursor-pointer ${
                  selectedId === b.id ? 'border-2 border-rose-500 bg-gray-50 rounded-3xl' : ''
                }`}
              >
                <div className="pl-3 pr-3 py-3">
                  <div className="flex gap-4">
                    <div className="w-24 py-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-100 ring-1 ring-gray-50">
                      <img src={`/src/assets/img/${b.icon}.png`} alt={b.name} />
                    </div>
                    <div className="flex-1 pt-3 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 text-left">
                          <h2 className="text-lg font-semibold text-gray-900 truncate">
                            IIT - {b.name}
                          </h2>
                          <p className="mt-3 mb-1 text-sm text-gray-500 truncate">
                            <span className="inline-flex items-center gap-2">
                              <ClockIcon className="h-5 w-5 text-gray-400" />
                              {distances[b.id] 
                                ? `${distances[b.id]} km away from you`
                                : "Calculating..."}
                            </span>
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            <span className="inline-flex items-center gap-2">
                              <MapPinIcon className="h-5 w-5 text-gray-400" />
                              {b.address}
                            </span>
                          </p>
                        </div>

                        {/* Only show button for first three buildings */}
                        {index < 3 && (
                          <div className='text-black'>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                navigate(`/buildings/${b.id}`)
                              }}
                              className="p-3 border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black"
                            >
                              <ChevronRightIcon className="h-4 w-4 stroke-2" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Right: Map */}
      <aside className="hidden md:block relative h-full">
        <div className="h-full w-full rounded-3xl overflow-hidden shadow-inner ring-1 ring-gray-200">
          <LeafletMap 
            selected={selected} 
            highlightedMarker={highlightedMarker}
            mapRef={mapRef}
            onMarkerClick={handleBuildingClick}
            userLocation={userLocation}
          />
        </div>
      </aside>
    </div>
  )
}

function LeafletMap({ selected, highlightedMarker, mapRef, onMarkerClick, userLocation }) {
  const center = useMemo(
    () => [selected?.lat || 6.9271, selected?.lng || 79.8612],
    [selected]
  )
  const markerRefs = useRef({})

  useEffect(() => {
    if (!highlightedMarker) return
    const marker = markerRefs.current[highlightedMarker]
    if (marker && marker.openPopup) {
      marker.openPopup()
    }
  }, [highlightedMarker])

  const baseIconOptions = {
    iconAnchor: [12, 41],
    popupAnchor: [35, -50],
    shadowSize: [70, 70],
  }

  const getBuildingIcon = (building) => {
    const isHighlighted = highlightedMarker === building.id
    if (building.icon) {
      const path = `src/assets/img/${building.mapIcon}.png`
      return new L.Icon({
        ...baseIconOptions,
        iconUrl: path,
        iconRetinaUrl: path,
        iconSize: isHighlighted ? [100, 100] : [60, 60],
        className: isHighlighted ? '' : '',
      })
    }
  }

  const getLandmarkIcon = (landmark) => {
    if (landmark.icon) {
      const path = `src/assets/img/${landmark.mapIcon}.png`
      return new L.Icon({
        ...baseIconOptions,
        iconUrl: path,
        iconRetinaUrl: path,
        iconSize: [40, 40],
      })
    }
    return new L.Icon({
      ...baseIconOptions,
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      iconRetinaUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSize: [70, 70],
    })
  }

  const userIcon = new L.Icon({
    iconUrl: studentImg,
    iconRetinaUrl: studentImg,
    iconSize: [100, 100],
    className: 'user-location-marker'
  })

  function RecenterView({ coords }) {
    const map = useMap()
    map.setView(coords, 15.5, { animate: true })
    return null
  }

  return (
    <MapContainer
      ref={mapRef}
      center={center}
      zoom={16}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom
    >
      <TileLayer
        url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />

      {/* User location marker */}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {/* Building markers */}
      {buildings.map((b, index) => (
        <Marker
          key={b.id}
          ref={(ref) => { if (ref) markerRefs.current[b.id] = ref }}
          position={[b.lat || 0, b.lng || 0]}
          icon={getBuildingIcon(b)}
          eventHandlers={{
            click: () => onMarkerClick(b.id)
          }}
        >
          <Popup>
            <div className="text-xs text-center">
              <img
                src={`src/assets/img/${b.icon}.png`}
                alt={b.name}
                className="block mx-auto w-40 object-cover py-4"
              />
              <div className="font-semibold text-xl">IIT - {b.name}</div>
              <div className="text-gray-500 py-2">{b.address}</div>
            </div>

            {/* Only first 3 buildings can navigate */}
            {index < 3 && (
              <Link
                to={`/buildings/${b.id}`}
                className="my-4 w-full block text-center px-3 py-3 rounded-full bg-blue-50 text-blue hover:bg-blue-100 transition-colors"
              >
                Explore
              </Link>
            )}
          </Popup>
        </Marker>
      ))}

      {/* Landmark markers */}
      {landmarks.map((lm) => (
        <Marker key={lm.id} position={[lm.lat || 0, lm.lng || 0]} icon={getLandmarkIcon(lm)}>
          <Popup>
            <div className="text-xs text-center">
              <img
                src={`src/assets/img/${lm.icon}.png`}
                alt={lm.name}
                className="block mx-auto w-24 object-cover py-2"
              />
              <div className="font-semibold text-md">{lm.name}</div>
              <div className="text-gray-500 py-1">{lm.address}</div>
            </div>
          </Popup>
        </Marker>
      ))}

      <RecenterView coords={center} />
    </MapContainer>
  )
}
