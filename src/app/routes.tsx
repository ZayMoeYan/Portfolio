import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { BlogDetail } from "./pages/BlogDetail";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

// Admin
import { Login } from "./admin/pages/Login";
import { Dashboard } from "./admin/pages/Dashboard";
import { HomeEditor } from "./admin/pages/HomeEditor";
import { AboutEditor } from "./admin/pages/AboutEditor";
import { ServicesEditor } from "./admin/pages/ServicesEditor";
import { ReviewsEditor } from "./admin/pages/ReviewsEditor";
import { ContactEditor } from "./admin/pages/ContactEditor";
import { SettingsEditor } from "./admin/pages/SettingsEditor";
import { ContactInquiries } from "./admin/pages/ContactInquiries";
import { MediaLibrary } from "./admin/pages/MediaLibrary";
import { ProtectedRoute } from "./admin/components/ProtectedRoute";
import { AdminLayout } from "./admin/components/AdminLayout";

function AdminPage({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedRoute>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "blogs/:id", Component: BlogDetail },
      { path: "reviews", Component: Reviews },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
  { path: "/admin/login", element: <Login /> },
  { path: "/admin", element: <Navigate to="/admin/dashboard" replace /> },
  { path: "/admin/dashboard", element: <AdminPage><Dashboard /></AdminPage> },
  { path: "/admin/pages/home", element: <AdminPage><HomeEditor /></AdminPage> },
  { path: "/admin/pages/about", element: <AdminPage><AboutEditor /></AdminPage> },
  { path: "/admin/pages/services", element: <AdminPage><ServicesEditor /></AdminPage> },
  { path: "/admin/pages/reviews", element: <AdminPage><ReviewsEditor /></AdminPage> },
  { path: "/admin/pages/contact", element: <AdminPage><ContactEditor /></AdminPage> },
  { path: "/admin/settings", element: <AdminPage><SettingsEditor /></AdminPage> },
  { path: "/admin/inquiries", element: <AdminPage><ContactInquiries /></AdminPage> },
  { path: "/admin/media", element: <AdminPage><MediaLibrary /></AdminPage> },
]);
