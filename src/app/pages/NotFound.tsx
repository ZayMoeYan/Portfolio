import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="mb-8 inline-flex rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#0046FF]">
          Error 404
        </div>
        <h1 className="mb-4 text-8xl font-semibold tracking-tight text-[#0046FF] sm:text-9xl">404</h1>
        <h2 className="mb-6 text-3xl tracking-tight text-black">Page Not Found</h2>
        <p className="mx-auto mb-8 max-w-md text-black/70">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="rounded-full px-8 transition-all duration-300 hover:-translate-y-0.5">
            <Home size={20} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
