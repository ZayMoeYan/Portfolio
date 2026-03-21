import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a]">
      <div className="text-center px-4">
        <h1 className="text-9xl text-[#778da9] mb-4">404</h1>
        <h2 className="text-3xl text-[#e0e1dd] mb-6">Page Not Found</h2>
        <p className="text-[#778da9] mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd] transition-all duration-300 hover:scale-105">
            <Home size={20} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
