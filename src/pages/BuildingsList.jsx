import { useMemo, useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { buildings } from '../data/buildings'
import { landmarks } from '../data/landmarks'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { MapPinIcon, ChevronRightIcon, ClockIcon, MapIcon, XMarkIcon } from '@heroicons/react/24/outline'
import studentImg from '/img/student.webp'

// Haversine formula to calculate distance between two coords
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function SkeletonCard() {
  return (
    <div className="bg-white shadow-sm rounded-3xl p-4 animate-pulse">
      <div className="flex gap-4">
        <div className="w-24 h-20 bg-gray-200 rounded-xl"></div>
        <div className="flex-1 space-y-3 pt-2">
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  )
}

function SkeletonMap() {
  return (
    <div className="hidden md:block relative h-full">
      <div className="h-full w-full rounded-3xl bg-gray-200 animate-pulse"></div>
    </div>
  )
}

export default function BuildingsList() {
  const [selectedId, setSelectedId] = useState(buildings[0]?.id)
  const [highlightedMarker, setHighlightedMarker] = useState(null)
  const [userLocation, setUserLocation] = useState(null)
  const [distances, setDistances] = useState({})
  const [loading, setLoading] = useState(true)
  const [mapOpen, setMapOpen] = useState(false) // mobile sheet state
  const navigate = useNavigate()
  const mapRef = useRef(null)
  const selected = buildings.find((b) => b.id === selectedId) || buildings[0]

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        },
        (err) => console.error("Geolocation error:", err),
        { enableHighAccuracy: true }
      )
    }
    const timer = setTimeout(() => setLoading(false), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (userLocation) {
      const newDistances = {}
      buildings.forEach((b) => {
        newDistances[b.id] = getDistanceFromLatLonInKm(
          userLocation.lat,
          userLocation.lng,
          b.lat,
          b.lng
        ).toFixed(2)
      })
      setDistances(newDistances)
    }
  }, [userLocation])

  useEffect(() => {
    if (selected) setHighlightedMarker(selected.id)
  }, [])

  const handleBuildingClick = (buildingId) => {
    setSelectedId(buildingId)
    setHighlightedMarker(buildingId)
    if (mapRef.current) {
      const building = buildings.find(b => b.id === buildingId)
      if (building) {
        mapRef.current.setView([building.lat, building.lng], 15.5, { animate: true })
      }
    }
  }

  const handleBuildingDoubleClick = (buildingId, index) => {
    if (index < 3) navigate(`/buildings/${buildingId}`)
  }

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      {/* List */}
      <section className="overflow-y-auto">
        {loading ? (
          <ul className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => <li key={i}><SkeletonCard /></li>)}
          </ul>
        ) : (
          <ul className="space-y-2 md:pr-2.5">
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
                      <div className="w-16 md:w-24 py-2 md:py-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-100 ring-1 ring-gray-50">
                        <img src={`/img/${b.icon}.webp`} alt={b.name} />
                      </div>
                      <div className="flex-1 pt-1 md:pt-3 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 text-left">
                            <h2 className="text-md md:text-lg font-semibold text-gray-900 truncate">
                              IIT - {b.name}
                            </h2>
                            <p className="mt-2 md:mt-3 mb-1 text-xs md:text-sm text-gray-500 truncate">
                              <span className="inline-flex items-center gap-2">
                                <ClockIcon className="hidden md:block h-5 w-5 text-gray-400" />
                                {distances[b.id] ? `${distances[b.id]} km away` : "Calculating..."}
                              </span>
                            </p>
                            <p className="text-xs md:text-sm text-gray-500 truncate">
                              <span className="inline-flex items-center gap-2">
                                <MapPinIcon className="hidden md:block h-5 w-5 text-gray-400" />
                                {b.address}
                              </span>
                            </p>
                          </div>
                          {index < 3 && (
                            <div>
                              <button
                                onClick={(e) => { e.stopPropagation(); navigate(`/buildings/${b.id}`) }}
                                className="p-2 md:p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black"
                              >
                                <ChevronRightIcon className="h-3 w-3 md:h-4 md:w-4 stroke-2" />
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
        )}
      </section>

      {/* Desktop Map */}
      {loading ? (
        <SkeletonMap />
      ) : (
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
      )}

      {/* Floating Map Button (Mobile only) */}
      <button
        onClick={() => setMapOpen(true)}
        className="md:hidden fixed bottom-16 right-6 z-20 bg-rose-500 text-white p-5 rounded-full shadow-lg"
      >
        <MapIcon className="w-8 h-8" />
      </button>

      {/* Mobile Map Sheet */}
      {mapOpen && (
        <div className="md:hidden fixed inset-0 z-30 flex flex-col bg-black/40">
          <div
            className="flex-1"
            onClick={() => setMapOpen(false)}
          />
          <div className="bg-gray-100 rounded-t-3xl shadow-xl h-[95%] overflow-hidden animate-slide-up flex flex-col items-end gap-2 pt-2">
            <button
              onClick={() => setMapOpen(false)}
              className=" w-10 h-10 bg-white p-2 mr-2 rounded-full"
            >
              <XMarkIcon className=" text-gray-700" />
            </button>
            <LeafletMap
              selected={selected}
              highlightedMarker={highlightedMarker}
              mapRef={mapRef}
              onMarkerClick={handleBuildingClick}
              userLocation={userLocation}
            />
          </div>
        </div>
      )}
    </div>
  )
}

/* ---------------- Map Component ---------------- */
function LeafletMap({ selected, highlightedMarker, mapRef, onMarkerClick, userLocation }) {
  const center = useMemo(() => [selected?.lat || 6.9271, selected?.lng || 79.8612], [selected])
  const markerRefs = useRef({})

  useEffect(() => {
    if (!highlightedMarker) return
    const marker = markerRefs.current[highlightedMarker]
    if (marker && marker.openPopup) marker.openPopup()
  }, [highlightedMarker])

  const baseIconOptions = { iconAnchor: [12, 41], popupAnchor: [35, -50], shadowSize: [70, 70] }

  const getBuildingIcon = (b) => {
    const path = `/img/${b.mapIcon}.webp`
    return new L.Icon({
      ...baseIconOptions,
      iconUrl: path,
      iconRetinaUrl: path,
      iconSize: highlightedMarker === b.id ? [90, 100] : [55, 60],
    })
  }

  const getLandmarkIcon = (lm) =>
    new L.Icon({
      ...baseIconOptions,
      iconUrl: `/img/${lm.mapIcon}.webp`,
      iconRetinaUrl: `/img/${lm.mapIcon}.webp`,
      iconSize: [40, 40],
    })

  const userIcon = new L.Icon({
    iconUrl: studentImg,
    iconRetinaUrl: studentImg,
    iconSize: [80, 80],
  })

  function RecenterView({ coords }) {
    const map = useMap()
    map.setView(coords, 15.5, { animate: true })
    return null
  }

  return (
    <MapContainer ref={mapRef} center={center} zoom={16} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.webp"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />

      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {buildings.map((b, i) => (
        <Marker
          key={b.id}
          ref={(ref) => { if (ref) markerRefs.current[b.id] = ref }}
          position={[b.lat, b.lng]}
          icon={getBuildingIcon(b)}
          eventHandlers={{ click: () => onMarkerClick(b.id) }}
        >
          <Popup>
            <div className="text-xs text-center">
              <img src={`/img/${b.icon}.webp`} alt={b.name} className="mx-auto w-32 py-3" />
              <div className="font-semibold text-lg">IIT - {b.name}</div>
              <div className="text-gray-500 py-2">{b.address}</div>
            </div>
            {i < 3 && (
              <Link
                to={`/buildings/${b.id}`}
                className="text-center mt-3 block px-3 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                Explore
              </Link>
            )}
          </Popup>
        </Marker>
      ))}

      {landmarks.map((lm) => (
        <Marker key={lm.id} position={[lm.lat, lm.lng]} icon={getLandmarkIcon(lm)}>
          <Popup>
            <div className="text-xs text-center">
              <img src={`/img/${lm.icon}.webp`} alt={lm.name} className="mx-auto w-20 py-2" />
              <div className="font-semibold">{lm.name}</div>
              <div className="text-gray-500">{lm.address}</div>
            </div>
          </Popup>
        </Marker>
      ))}

      <RecenterView coords={center} />
    </MapContainer>
  )
}
