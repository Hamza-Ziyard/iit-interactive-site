import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [loading, setLoading] = useState(true)

  // Simulate async data loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-full">
      <div className="h-full max-w-6xl mx-auto md:flex md:gap-24">
        {/* Left column */}
        <div className="md:w-1/2 text-left md:pt-24">
          {loading ? (
            <>
              <SkeletonText className="h-6 w-32" />
              <SkeletonText className="h-14 w-80 mt-6" />
              <SkeletonText className="h-14 w-78 mt-3" />
              <SkeletonText className="h-14 w-60 mt-3" />
              <SkeletonText className="h-5 w-80 mt-8" />
              <SkeletonBox className="h-12 w-48 mt-7 rounded-full" />
            </>
          ) : (
            <>
              <div className="text-xl text-gray-700 ">Welcome to</div>
              <div className="mt-5 font-extrabold leading-[1.5] text-black">
                <div className="text-5xl md:text-7xl mb-2">
                  <span className="text-red-600">I</span>nformatics
                </div>
                <div className="text-5xl md:text-7xl mb-2">
                  <span className="text-red-600">I</span>nstitute of
                </div>
                <div className="text-5xl md:text-7xl">
                  <span className="text-red-600">T</span>echnology
                </div>
              </div>
              <p className="mt-8 max-w-xl text-gray-500">
                Discover where learning meets fun, friends, and endless possibilities.
              </p>
              <div className="mt-7">
                <Link
                  to="/buildings"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-lg px-10 py-4 text-md hover:from-rose-500 hover:to-rose-600 transition-colors"
                >
                  Start exploring
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Right column */}
        <div className="md:w-1/2 md:mt-0 h-full min-w-0">
          <div className="flex gap-6 w-full h-full items-stretch min-w-0 pt-8">
            {loading ? (
              <>
                <SkeletonImage className="w-[200px] h-[650px] rounded-lg" />
                <SkeletonImage className="w-[200px] h-[650px] rounded-lg" />
                <SkeletonImage className="w-[200px] h-[650px] rounded-lg" />
              </>
            ) : (
              <>
                <img src="/img/guidelines-book.png" className="w-[200px] h-[650px] rounded-lg hover:scale-105 transition duration-150 ease-in-out" alt="" />
                <img src="/img/roles-book.png" className="w-[200px] h-[650px] rounded-lg hover:scale-105 transition duration-150 ease-in-out" alt="" />
                <img src="/img/meet-team-book.png" className="w-[200px] h-[650px] rounded-lg hover:scale-105 transition duration-150 ease-in-out" alt="" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* Skeleton Components */
function SkeletonText({ className }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
}

function SkeletonBox({ className }) {
  return <div className={`animate-pulse bg-gray-200 ${className}`} />
}

function SkeletonImage({ className }) {
  return <div className={`animate-pulse bg-gray-300 ${className}`} />
}
