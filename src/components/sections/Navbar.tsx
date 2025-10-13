import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f4b68] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold">
          KRUZE
        </div>

        {/* Navigation Menu - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="hover:text-gray-200 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-200 transition-colors">About Us</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Price</a>
          <a href="#" className="hover:text-gray-200 transition-colors">References</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Blog</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <Button className="bg-[#156082] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1a5a7a] transition-all flex items-center gap-2">
          Download Now
          <ArrowRight size={18} />
        </Button>
      </div>
    </nav>
  );
}
