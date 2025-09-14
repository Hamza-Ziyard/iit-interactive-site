import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { buildings } from '../data/buildings'

// --- Skeleton Component ---
function Skeleton({ className }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
  )
}

// --- Icons ---
function ChevronDown({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 15.75a.75.75 0 0 1-.53-.22l-6-6a.75.75 0 1 1 1.06-1.06L12 13.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-.53.22Z" clipRule="evenodd" />
    </svg>
  )
}
function CoffeeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.5 6.75A.75.75 0 0 1 5.25 6h10.5a.75.75 0 0 1 .75.75 5.25 5.25 0 0 1-5.25 5.25H8.25A3.75 3.75 0 0 0 4.5 15.75v.75a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-.75a6.73 6.73 0 0 0 .53-2.25h.72a2.25 2.25 0 0 0 0-4.5h-.75a6 6 0 0 0-.56-1.5.75.75 0 0 1 .56-1.2H18a3.75 3.75 0 0 1 0 7.5h-.41a6.76 6.76 0 0 1-.59 1.5v.45A3.75 3.75 0 0 1 14.25 20.25h-7.5A3.75 3.75 0 0 1 3 16.5v-.75A5.25 5.25 0 0 1 8.25 10.5h3.75a3.75 3.75 0 0 0 3.57-2.25H5.25a.75.75 0 0 1-.75-.75Z"/>
    </svg>
  )
}
function UsersIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M15.75 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM1.5 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm10.5 0a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm-9 11.25a4.5 4.5 0 0 1 9 0v.75H3v-.75Zm10.5 0a4.5 4.5 0 0 1 7.5-3.422 6.708 6.708 0 0 0-2.25-.328 6.75 6.75 0 0 0-6.75 6.75v.75H13.5v-.75Z"/>
    </svg>
  )
}
function BuildingIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.5 3A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5H12V4.5A1.5 1.5 0 0 0 10.5 3h-6ZM12 9v9h7.5a.5.5 0 0 0 .5-.5V9H12Z"/>
    </svg>
  )
}

export default function BuildingDetail() {
  const { buildingId } = useParams()
  const building = buildings.find((b) => b.id === buildingId)
  const [activeSection, setActiveSection] = useState(null)
  const [loading, setLoading] = useState(true)

  const sections = building?.sections || []
  const floorImages = building?.floorImages || {}
  const activeIndex = sections.findIndex(s => s.key === activeSection)

  // Simulate loading (e.g., API/fetch images)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200) // 1.2s fake load
    return () => clearTimeout(timer)
  }, [])

  if (!building) {
    return (
      <div className="p-6">
        <p className="text-red-600">Building not found.</p>
        <Link className="text-blue-600 hover:underline" to="/buildings">Back to list</Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="h-1/2 md:h-full md:flex gap-8 p-6">
        {/* Left skeleton */}
        <div className="relative h-full flex-1">
          <Skeleton className="w-full h-full rounded-3xl" />
        </div>
        {/* Right skeleton */}
        <div className="bg-white rounded-2xl flex-1 md:h-full overflow-y-auto p-6 space-y-6">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex justify-between gap-8">
              <div className='w-full space-y-3'>
              <Skeleton className="w-3/5 h-8" />
              <Skeleton className="w-2/3 h-3" />

              </div>
              <Skeleton className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  const goPrev = () => {
    if (sections.length === 0) return
    const newIndex = (activeIndex - 1 + sections.length) % sections.length
    setActiveSection(sections[newIndex].key)
  }

  const goNext = () => {
    if (sections.length === 0) return
    const newIndex = (activeIndex + 1) % sections.length
    setActiveSection(sections[newIndex].key)
  }

  return (
    <div className="h-1/2 md:h-full md:flex gap-8"> 
      {/* Left visual panel */}
      <div className="relative h-full flex-1 mb-4">
        <div className="h-full w-full rounded-3xl overflow-hidden shadow-inner bg-sky-50 relative flex items-center justify-center">
          {activeSection === null && (
            <div>
              <h1 className='text-2xl font-bold md:text-4xl mb-4'>IIT - {building.name}</h1>
              <p className='text-md text-gray-500 mb-4'>{building.address}</p>
              <img
                src={`/img/${building.icon}.webp`}
                alt={building.name}
                className="w-full h-auto object-contain opacity-90"
              />
            </div>
          )}
          {sections.map((s) => (
            <img
              key={s.key}
              src={floorImages[s.key]}
              alt={s.key}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out 
                ${activeSection === s.key ? 'opacity-100' : 'opacity-0'}
              `}
            />
          ))}
        </div>

        {activeIndex >= 0 && (
          <div className="absolute bottom-6  left-1/2 -translate-x-1/2 flex items-center gap-3 ">
            <button onClick={goPrev} className="w-10 h-10 rounded-full bg-white shadow border border-gray-200 grid place-items-center text-gray-600 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 rotate-180" viewBox="0 0 24 24">
                <path d="M11.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 7.56l-5.47 4.97a.75.75 0 1 1-1.06-1.06l6-6Z"/>
              </svg>
            </button>
            <div className="px-6 py-4 rounded-full bg-rose-400 text-white text-sm shadow">
              {sections[activeIndex]?.title || 'Select a section'}
            </div>
            <button onClick={goNext} className="w-10 h-10 rounded-full bg-white shadow border border-gray-200 grid place-items-center text-gray-600 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M11.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 7.56l-5.47 4.97a.75.75 0 1 1-1.06-1.06l6-6Z"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Right accordion */}
      <div className="bg-white rounded-2xl flex-1 md:h-full overflow-y-auto">
        {sections.map((section, idx) => (
          <div key={section.key} className={idx > 0 ? 'border-t border-gray-300' : ''}>
            <button
              type="button"
              onClick={() => setActiveSection(activeSection === section.key ? null : section.key)}
              className="w-full flex items-start justify-between p-5"
            >
              <div className="text-left">
                <div className="text-lg font-semibold text-gray-900">{section.title}</div>
                <div className="text-xs text-gray-400 mt-1">{section.subtitle}</div>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${activeSection === section.key ? 'rotate-180' : ''}`}
              />
            </button>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden
                ${activeSection === section.key ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="px-5 pt-2 pb-6">
                <ul className="space-y-6 text-gray-700">
                  {section.items.map((item, idx2) => {
                    const renderIcon = () => {
                      switch (item.icon) {
                        case 'BuildingIcon':
                          return <BuildingIcon className="w-5 h-5 text-gray-500" />
                        case 'CoffeeIcon':
                          return <CoffeeIcon className="w-5 h-5 text-gray-500" />
                        case 'UsersIcon':
                          return <UsersIcon className="w-5 h-5 text-gray-500" />
                        default:
                          return <BuildingIcon className="w-5 h-5 text-gray-500" />
                      }
                    }
                    return (
                      <li key={idx2} className="flex items-start gap-6">
                        <span className="mt-0.5">{renderIcon()}</span>
                        <div className="text-left">
                          <div className="text-md font-medium">{item.label}</div>
                          <p className="text-xs text-gray-400 mt-2">
                            {item.description || 'No description available.'}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
