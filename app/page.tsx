import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-defense-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-defense-blue-900/50 to-defense-black"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-defense-accent-turquoise to-defense-accent-military bg-clip-text text-transparent animate-gradient">
              Olzh Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pioneering the Future of Defense Technology
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#contact" className="px-8 py-3 bg-defense-blue-600 hover:bg-defense-blue-700 rounded-lg transition-colors">
                Contact Us
              </Link>
              <Link href="#solutions" className="px-8 py-3 border border-defense-accent-turquoise text-defense-accent-turquoise hover:bg-defense-accent-turquoise/10 rounded-lg transition-colors">
                Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-defense-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Drone Systems",
                description: "Advanced UAV technology for defense and surveillance operations",
                icon: "🚀"
              },
              {
                title: "Software Solutions",
                description: "Cutting-edge software for defense systems integration",
                icon: "💻"
              },
              {
                title: "Research & Development",
                description: "Innovative defense technology research and development",
                icon: "🔬"
              }
            ].map((solution, index) => (
              <div key={index} className="p-6 bg-defense-gray-800 rounded-lg hover:transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-defense-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-defense-gray-800 border border-defense-gray-700 rounded-lg focus:ring-2 focus:ring-defense-accent-turquoise focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-defense-gray-800 border border-defense-gray-700 rounded-lg focus:ring-2 focus:ring-defense-accent-turquoise focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-defense-gray-800 border border-defense-gray-700 rounded-lg focus:ring-2 focus:ring-defense-accent-turquoise focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-defense-blue-600 hover:bg-defense-blue-700 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-defense-gray-900">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Olzh Tech. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
