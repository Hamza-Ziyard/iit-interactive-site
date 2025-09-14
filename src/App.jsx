import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import BuildingsList from './pages/BuildingsList'
import BuildingDetail from './pages/BuildingDetail'
import CommonGuidelines from './pages/CommonGuidelines'
import Roles from './pages/Roles'
import MeetTeam from './pages/MeetTeam'

// Import your logo/image
import logo from '/img/iit-logo.svg' // adjust the path according to your folder structure

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-10 h-16 border-b bg-white/70 backdrop-blur">
          <div className="max-w-7xl h-full px-4 md:px-12 mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="IIT Campus Logo" className="h-10 w-auto" />
            </Link>
            <nav className="flex gap-0 text-sm">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-2 md:px-4 py-1 rounded-full hover:bg-rose-50 ${isActive ? 'text-rose-600 font-bold' : 'text-slate-700'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/institutes"
                className={({ isActive }) =>
                  `px-2 md:px-4 py-1 rounded-full hover:bg-rose-50 ${isActive ? 'text-rose-600 font-bold' : 'text-slate-700'}`
                }
              >
                Institutes
              </NavLink>
            </nav>
          </div>
        </header>

        <main className=" h-[calc(100vh-4rem-3rem)]">
          <div className="pt-16 md:mx-auto h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/institutes" element={<BuildingsList />} />
              <Route path="/institutes/:buildingId" element={<BuildingDetail />} />
              <Route path="*" element={<div>Page not found</div>} />

          <Route path="/common-guidelines" element={<CommonGuidelines />} />
          <Route path="/roles-and-responsibilities" element={<Roles />} />
          <Route path="/meet-the-team" element={<MeetTeam />} />
            </Routes>
          </div>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 h-12 border-t text-slate-500 bg-white z-10">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center text-sm">
            © {new Date().getFullYear()} IIT
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
