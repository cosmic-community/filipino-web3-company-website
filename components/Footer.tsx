export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Filipino Web3</h3>
            <p className="text-gray-400">
              Leading Web3 development company in the Philippines, specializing in blockchain solutions with a unique retro aesthetic.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">
              Ready to start your Web3 project?
            </p>
            <a
              href="mailto:hello@filipinoweb3.com"
              className="text-primary-light hover:text-primary transition-colors"
            >
              hello@filipinoweb3.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Filipino Web3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}