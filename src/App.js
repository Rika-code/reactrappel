import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/guest/Home";
import Coworkings from "./page/guest/Coworkings";
import CoworkingDetailsPage from "./page/guest/CoworkingDetailsPage";
import DashboardPage from "./page/admin/DashboardPage";
import LoginPage from "./page/guest/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coworkings" element={<Coworkings />} />
        <Route path="/coworking/details/:id" element={<CoworkingDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
