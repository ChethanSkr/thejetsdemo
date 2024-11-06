import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Jet Engine Model X-1',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80',
    description: 'Next-generation propulsion system'
  },
  {
    id: 2,
    name: 'Navigation Suite Pro',
    price: 1899.99,
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80',
    description: 'Advanced GPS and navigation system'
  },
  {
    id: 3,
    name: 'Cockpit Display Unit',
    price: 3299.99,
    image: 'https://images.unsplash.com/photo-1503829964103-53b5156f2d15?auto=format&fit=crop&q=80',
    description: 'High-resolution cockpit display'
  },
  {
    id: 4,
    name: 'Aerodynamic Wing Kit',
    price: 4599.99,
    image: 'https://images.unsplash.com/photo-1559627755-c1de9b6748c2?auto=format&fit=crop&q=80',
    description: 'Premium wing enhancement kit'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Featured Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">${product.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}