import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Header";
import SideBar from "./SideBar";
import SectionFirst from "./SectionFirst";
import Footer from "./Footer";
import ChartBoard from "./ChartBoard";
import Profile from "./Profile";
import Jobs from "./Jobs";
import LatestJobs from "./LatestJobs";
import Application from "./Application";
import Settings from "./Settings";
import Calender from "./Calender";
import Analytics from "./Analytics";
import Notification from "./Notification";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>
      <SideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`page-wrapper ${sidebarOpen ? "shift" : ""}`}>
        <Header toggleSidebar={toggleSidebar} />

        <main className="main-content">
          <SectionFirst />
          <Routes>
            <Route path="/" element={<ChartBoard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/latestjobs" element={<LatestJobs />} />
            <Route path="/application" element={<Application />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
