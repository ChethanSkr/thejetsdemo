import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experience the Future of Flight
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover our exclusive collection of aerospace technology and equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}