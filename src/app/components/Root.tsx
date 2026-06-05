import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export function Root() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <ScrollToTopButton />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
