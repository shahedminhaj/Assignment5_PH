import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="hidden md:flex items-center">
          <img src="./assets/logo-text.png" alt="DevStack" className="h-8" />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">☰</button>

        <div className="md:hidden flex items-center">
          <img src="./assets/logo-text.png" alt="DevStack" className="h-6" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-pink-500">Home</a>
          <a href="#" className="hover:text-pink-500">Technologies</a>
          <a href="#" className="hover:text-pink-500">Projects</a>
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-pink-500">Sign In</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 hover:opacity-90">
            Sign Up
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button className="text-xs font-medium text-gray-600">Sign In</button>
          <button className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3">
            Sign Up
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t px-4 py-4 space-y-3 bg-white">
          <a href="#" className="block text-pink-500 font-medium">Home</a>
          <a href="#" className="block text-gray-600 font-medium">Technologies</a>
          <a href="#" className="block text-gray-600 font-medium">Projects</a>
          <a href="#" className="block text-gray-600 font-medium">About</a>
          <a href="#" className="block text-gray-600 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;