import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";

import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

import CitizenDashboard from "../pages/Citizen/CitizenDashboard";

import OfficerDashboard from "../pages/Officer/OfficerDashboard";

import AdminDashboardPage from "../pages/Admin/AdminDashboardPage";

import ComplaintsPage from "../pages/Citizen/ComplaintsPage";

import ComplaintHistoryPage from "../pages/Citizen/ComplaintHistoryPage";

import ManageComplaintsPage from "../pages/Officer/ManageComplaintsPage";

import AnnouncementsPage from "../pages/Citizen/AnnouncementsPage";

import ViewAnnouncementsPage from "../pages/Officer/ViewAnnouncementsPage";

import PostAnnouncementPage from "../pages/Officer/PostAnnouncementPage";

import FeedbackPage from "../pages/Citizen/FeedbackPage";

import CitizenProfilePage from "../pages/Citizen/CitizenProfilePage";

import OfficerProfilePage from "../pages/Officer/OfficerProfilePage";

import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import FeedbackReviewPage from "../pages/Officer/FeedbackReviewPage";

import ManageCitizensPage from "../pages/Admin/ManageCitizensPage";
import ManageOfficersPage from "../pages/Admin/ManageOfficersPage";
import ComplaintMonitoringPage from "../pages/Admin/ComplaintMonitoringPage";
import AnnouncementMonitoringPage from "../pages/Admin/AnnouncementMonitoringPage";
import ReportsPage from "../pages/Admin/ReportsPage";
import ProfilePage from "../pages/Admin/ProfilePage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route
                path="/citizen/dashboard"
                element={<CitizenDashboard />}
            />

            <Route
                path="/officer/dashboard"
                element={<OfficerDashboard />}
            />

            <Route
                path="/admin/dashboard"
                element={<AdminDashboardPage />}
            />

            <Route
                path="/citizen/complaints"
                element={<ComplaintsPage />}
            />
            <Route path="/citizen/complaint-history"
                element={<ComplaintHistoryPage />}
            />

            <Route path="/officer/manage-complaints"
                element={<ManageComplaintsPage />}
            />

            <Route path="citizen/announcements"
                element={<AnnouncementsPage />}
            />

            <Route path="officer/view-announcements"
                element={<ViewAnnouncementsPage />}
            />

            <Route path="officer/post-announcement"
                element={<PostAnnouncementPage />}
            />

            <Route
                path="/citizen/feedback"
                element={<FeedbackPage />}
            />

            <Route
            path="/officer/review-feedback"
            element={<FeedbackReviewPage/>}
            />

            <Route
                path="/citizen/profile"
                element={<CitizenProfilePage />}
            />

            <Route 
            path="/officer/profile"
            element={<OfficerProfilePage/>}/>

            <Route 
            path="/forgot-password"
            element={<ForgotPasswordPage/>}
            />

            <Route
            path="/admin/manage-citizens"
            element={<ManageCitizensPage/>}/>

            <Route
            path="admin/manage-officers"
            element={<ManageOfficersPage/>}/>

            <Route 
            path="/admin/monitor-complaints"
            element={<ComplaintMonitoringPage/>}/>

            <Route
            path="/admin/monitor-announcements"
            element={<AnnouncementMonitoringPage/>}/>

            <Route 
            path="/admin/reports"
            element={<ReportsPage/>}/>

            <Route
            path="/admin/profile"
            element={<ProfilePage/>}/>

        </Routes>
    );
}

export default AppRoutes;