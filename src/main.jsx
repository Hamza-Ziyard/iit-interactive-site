import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "leaflet/dist/leaflet.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BuildingsList from "./pages/BuildingsList.jsx";
import BuildingDetail from "./pages/BuildingDetail.jsx";
import CommonGuidelines from "./pages/CommonGuidelines.jsx";
import Roles from "./pages/Roles.jsx";
import MeetTeam from "./pages/MeetTeam.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is your layout (with header/footer)
    children: [
      { index: true, element: <Home /> },
      { path: "institutes", element: <BuildingsList /> },
      { path: "institutes/:buildingId", element: <BuildingDetail /> },
      { path: "common-guidelines", element: <CommonGuidelines /> },
      { path: "roles-and-responsibilities", element: <Roles /> },
      { path: "meet-the-team", element: <MeetTeam /> },
      { path: "*", element: <div>Page not found</div> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
