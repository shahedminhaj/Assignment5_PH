function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/logo-text.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold">
            Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">Stack</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-pink-500">Home</a>
          <a href="#" className="hover:text-pink-500">Technologies</a>
          <a href="#" className="hover:text-pink-500">Projects</a>
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-pink-500">Sign In</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;