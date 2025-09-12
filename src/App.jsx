import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import BuildingsList from './pages/BuildingsList'
import BuildingDetail from './pages/BuildingDetail'

// Import your logo/image
import logo from '/img/iit-logo.png' // adjust the path according to your folder structure

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-10 h-16 border-b bg-white/70 backdrop-blur">
          <div className="max-w-7xl h-full px-10 mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="IIT Campus Logo" className="h-10 w-auto" />
            </Link>
            <nav className="flex gap-4 text-sm">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-2 py-1 rounded hover:bg-slate-100 ${isActive ? 'text-blue-600' : 'text-slate-700'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/buildings"
                className={({ isActive }) =>
                  `px-2 py-1 rounded hover:bg-slate-100 ${isActive ? 'text-blue-600' : 'text-slate-700'}`
                }
              >
                Buildings
              </NavLink>
            </nav>
          </div>
        </header>

        <main className=" h-[calc(100vh-4rem-3rem)] overflow-y-auto">
          <div className="pt-16 mx-auto h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buildings" element={<BuildingsList />} />
              <Route path="/buildings/:buildingId" element={<BuildingDetail />} />
              <Route path="*" element={<div>Page not found</div>} />
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
