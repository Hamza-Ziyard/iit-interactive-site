import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

// Import your logo/image
import logo from "/img/iit-logo.svg"; // adjust the path according to your folder structure

function App() {
  return (
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
                `px-2 md:px-4 py-1 rounded-full hover:bg-rose-50 ${
                  isActive ? "text-rose-600 font-bold" : "text-slate-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/institutes"
              className={({ isActive }) =>
                `px-2 md:px-4 py-1 rounded-full hover:bg-rose-50 ${
                  isActive ? "text-rose-600 font-bold" : "text-slate-700"
                }`
              }
            >
              Institutes
            </NavLink>
          </nav>
        </div>
      </header>

      <main className=" h-[calc(100vh-4rem-10rem)]">
        <div className="pt-16 md:mx-auto h-full">
          <Outlet /> {/* Child routes render here */}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-12 border-t text-slate-500 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-sm py-2 md:py-0">
          <div className="mb-2 md:mb-0">© {new Date().getFullYear()} IIT</div>
          <div className="hidden md:block">
            Designed and developed by{" "}
            <a
              href="https://www.linkedin.com/in/umar-mahmoodh"
              className="text-blue-500 font-semibold"
              target="_blank"
            >
              Umar Mahmoodh
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/hamza-ziyard/"
              className="text-blue-500 font-semibold"
              target="_blank"
            >
              Hamza Ziyard
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/manul-singhe/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="text-blue-500 font-semibold"
              target="_blank"
            >
              Manul Singhe
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
