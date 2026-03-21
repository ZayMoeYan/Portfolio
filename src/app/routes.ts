import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Blogs } from "./pages/Blogs";
import { BlogDetail } from "./pages/BlogDetail";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";
import { FAQs } from "./pages/FAQs";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "blogs", Component: Blogs },
      { path: "blogs/:id", Component: BlogDetail },
      { path: "reviews", Component: Reviews },
      { path: "contact", Component: Contact },
      { path: "faqs", Component: FAQs },
      { path: "*", Component: NotFound },
    ],
  },
]);
