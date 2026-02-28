import Image from 'next/image';
import { ShoppingBag, Heart, User, ArrowUpRight } from 'lucide-react';

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 lg:px-20 py-8 relative z-50">
      <div className="text-2xl font-bold tracking-tight">Atelier</div>
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <a href="#" className="text-black">Home</a>
        <a href="#" className="text-gray-500 hover:text-black transition-colors">About</a>
        <a href="#" className="text-gray-500 hover:text-black transition-colors">Collection</a>
        <a href="#" className="text-gray-500 hover:text-black transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative hover:opacity-70 transition-opacity">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="hover:opacity-70 transition-opacity"><Heart className="w-5 h-5" /></button>
        <button className="hover:opacity-70 transition-opacity"><User className="w-5 h-5" /></button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative w-full max-w-[1800px] mx-auto min-h-[800px] h-[calc(100vh-100px)] px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Huge Text Background */}
      <h1 className="absolute top-0 left-6 md:left-12 lg:left-20 text-[20vw] xl:text-[280px] font-black leading-[0.8] tracking-tighter text-[#141414] z-0 select-none">
        Crafted
      </h1>
      <h1 className="absolute bottom-12 right-6 md:right-12 lg:right-20 text-[20vw] xl:text-[280px] font-black leading-[0.8] tracking-tighter text-[#141414] z-0 select-none">
        for living
      </h1>

      {/* Center Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[550px] aspect-square rounded-[40px] overflow-hidden z-10 shadow-2xl bg-[#E5DCCB]">
        <Image 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" 
          alt="Yellow Armchair" 
          fill 
          className="object-cover mix-blend-multiply opacity-90"
          priority
        />
      </div>

      {/* Left Content */}
      <div className="absolute top-[35%] left-6 md:left-12 lg:left-20 w-[280px] md:w-[320px] z-20">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
          Discover premium furniture designed to elevate your home with style, comfort, and durability.
        </p>
        <button className="flex items-center gap-2 bg-[#141414] text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-colors group">
          Explore Collection
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Left Image */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-20 w-[180px] md:w-[240px] aspect-square rounded-[32px] overflow-hidden z-20 shadow-xl hidden sm:block bg-[#E5DCCB]">
        <Image 
          src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000&auto=format&fit=crop" 
          alt="Wooden Chair" 
          fill 
          className="object-cover mix-blend-multiply opacity-90"
        />
      </div>

      {/* Right List */}
      <div className="absolute top-[15%] right-6 md:right-12 lg:right-20 flex flex-col items-start md:items-end gap-1 z-20">
        {['Dining', 'Office', 'Bedroom', 'Living Room', 'Lighting'].map((item, i) => (
          <div key={item} className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight cursor-pointer transition-colors ${item === 'Office' ? 'text-[#141414]' : 'text-gray-300 hover:text-gray-400'}`}>
            {item}
          </div>
        ))}
      </div>

      {/* Right Testimonial */}
      <div className="absolute top-[55%] right-6 md:right-12 lg:right-20 w-[220px] md:w-[260px] z-20 hidden md:block">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 relative shadow-md">
          <Image 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2000&auto=format&fit=crop" 
            alt="User Avatar" 
            fill 
            className="object-cover"
          />
        </div>
        <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
          We finally found furniture that&apos;s both stylish and comfortable.
        </p>
      </div>
    </section>
  );
}

function FeaturedCollection() {
  const products = [
    { id: 1, name: 'Lounge Chair', price: '$899', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=2000&auto=format&fit=crop' },
    { id: 2, name: 'Minimalist Table', price: '$1,299', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2000&auto=format&fit=crop' },
    { id: 3, name: 'Ceramic Vase', price: '$149', image: 'https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=2000&auto=format&fit=crop' },
    { id: 4, name: 'Pendant Lamp', price: '$299', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2000&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 py-32 bg-white rounded-t-[3rem]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-md text-lg font-medium">Curated pieces that blend form and function for your modern living space.</p>
        </div>
        <button className="mt-6 md:mt-0 pb-1 border-b-2 border-black font-bold hover:text-gray-600 hover:border-gray-600 transition-colors">
          View All Products
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <span className="text-gray-600 font-medium text-lg">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#141414] text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Atelier</h2>
          <p className="text-gray-400 max-w-sm text-lg font-medium">
            Crafting spaces that inspire. Premium furniture for the modern home.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-lg">Company</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-lg">Social</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1800px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
        <p>&copy; 2026 Atelier Furniture. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Footer />
    </main>
  );
}
