export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About The Jets
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Founded in 1970, The Jets has been at the forefront of aerospace innovation for over 50 years. We specialize in providing cutting-edge aviation technology and equipment to professionals and enthusiasts alike.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Our commitment to quality and innovation has made us the leading supplier of aerospace components and systems worldwide.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-400 mb-2">50+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-400 mb-2">1000+</h3>
                <p className="text-gray-400">Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-400 mb-2">50k+</h3>
                <p className="text-gray-400">Customers</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559627755-c1de9b6748c2?auto=format&fit=crop&q=80"
              alt="About The Jets"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}