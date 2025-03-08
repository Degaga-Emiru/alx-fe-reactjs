// src/components/Profile.jsx
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default Profile;