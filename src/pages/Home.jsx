import { Link } from 'react-router-dom'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="h-full">
      <div className="h-full max-w-6xl mx-auto md:flex md:gap-24">
        {/* Left column */}
        <div className="md:w-1/2 text-left md:pt-24">
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
        </div>

        {/* Right column */}
        {/* add min-w-0 so flex children can shrink */}
        <div className="md:w-1/2 md:mt-0 h-full min-w-0">
          {/* add items-stretch and min-w-0 */}
          <div className="flex gap-6 w-full h-full items-stretch min-w-0 pt-8">
            <img src="/img/guidelines-book.png" className='w-[200px] h-[650px] rounded-lg hover:scale-105 transition duration-150 ease-in-out' alt="" />
            <img src="/img/roles-book.png" className='w-[200px] h-[650px] rounded-lg hover:scale-105 transition duration-150 ease-in-out'  alt="" />
            <img src="/img/meet-team-book.png" className='w-[200px] h-[650px] rounded-lg hover:scale-105 transition duration-150 ease-in-out'  alt="" />
            {/* <Card title="Common Guidelines">
              <PlaceholderIcon className='w-[100px] h-[100px]' />
            </Card>
            <Card title="Meet the team">
              <UsersCircleIcon  className='w-[100px] h-[100px]' />
            </Card>
            <Card title="Roles">
              <ShieldIcon  className='w-[100px] h-[100px]' />
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({ title, children }) {
    return (
      <div className="flex-1 basis-0 min-w-0 bg-rose-50 rounded-2xl border-2 border-rose-100 
                      hover:drop-shadow-md p-4 pt-6 flex flex-col items-center justify-between my-6">
        <button
          type="button"
          className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-400 text-white hover:bg-rose-500"
          aria-label="Open"
        >
          <ChevronUpIcon className="w-5 h-5" />
        </button>
  
        {/* full width title */}
        <h3 className="text-base md:text-2xl tracking-wider font-semibold text-left uppercase -rotate-90 text-gray-500 w-full whitespace-nowrap">
          {title}
        </h3>
  
        <div className="mt-6 md:mt-8 flex-0 w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    )
  }

function PlaceholderIcon({ className = '' }) {
  return (
    // explicit size and object-contain to avoid forcing parent width
    <img
      src="/img/guidelines.png"
      alt="guidelines"
      className={`${className} object-contain h-24 w-24`}
    />
  )
}

function UsersCircleIcon({ className = '' }) {
  return (
    <img
      src="/img/meet-team.png"
      alt="meet the team"
      className={`${className} object-contain h-24 w-24`}
    />
  )
}

function ShieldIcon({ className = '' }) {
  return (
    <img
      src="/img/roles.png"
      alt="roles"
      className={`${className} object-contain h-24 w-24`}
    />
  )
}
