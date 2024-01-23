import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripItem from "./components/TripItem";
import TripDetail from "./components/TripDetail";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Nav />
//         <Home />
//       </div>
//     ),
//   },
//   {
//     path: "/Trips",
//     element: (
//       <div>
//         <Nav />
//         <TripsList />
//       </div>
//     ),
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { path: "/", element: <App /> },
      { path: "/Trips", element: <TripsList /> },
      { path: "/Trips/:id", element: <TripDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
