function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-3">
            <img src="/assets/logo-text.png" alt="DevStack" className="h-7" />
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-pink-500">GitHub</a>
            <a href="#" className="hover:text-pink-500">Twitter</a>
            <a href="#" className="hover:text-pink-500">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">Product</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-500">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">Company</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">About</a></li>
            <li><a href="#" className="hover:text-pink-500">Contact</a></li>
            <li><a href="#" className="hover:text-pink-500">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-pink-500">Privacy</a>
            <a href="#" className="hover:text-pink-500">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;