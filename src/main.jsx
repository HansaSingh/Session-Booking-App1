import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
import "./index.css";
import Layout from "./Components/Layout";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from "./Components/Landing";
import ProfilePage from "./Components/ProfilePage";
import ConsultationCard from "./Components/ConsultationCard";
import BookingPage from "./Components/BookingPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="/Learning" element={<ProfilePage />} />
      <Route path="/LaunchPad" element={<BookingPage />} />
      <Route path="/Networking" element={<ConsultationCard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
