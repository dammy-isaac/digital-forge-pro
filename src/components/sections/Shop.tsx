import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Cpu, ShoppingCart, Calendar, Filter, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  year: number;
  chip: string;
  specs: string[];
  price: string;
  image: string;
  category: 'iPhone' | 'Mac' | 'iPad';
}

const products: Product[] = [
  // 2012
  {
    id: 1,
    name: 'MacBook Pro (Retina 15")',
    year: 2012,
    chip: 'Intel Core i7',
    specs: ['8GB RAM', '256GB SSD', 'Retina Display'],
    price: '₦150,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  {
    id: 2,
    name: 'iPhone 5',
    year: 2012,
    chip: 'Apple A6',
    specs: ['1GB RAM', '32GB Storage', '4" Display'],
    price: '₦35,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  },
  // 2013
  {
    id: 3,
    name: 'MacBook Air 13"',
    year: 2013,
    chip: 'Intel Core i5',
    specs: ['4GB RAM', '128GB SSD', '12h Battery'],
    price: '₦180,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  {
    id: 4,
    name: 'iPad Air (1st Gen)',
    year: 2013,
    chip: 'Apple A7',
    specs: ['1GB RAM', '64GB Storage', '9.7" Display'],
    price: '₦65,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/ipad-tech-2a6f1507-1777742657909.webp',
    category: 'iPad'
  },
  // 2014
  {
    id: 5,
    name: 'iPhone 6 Plus',
    year: 2014,
    chip: 'Apple A8',
    specs: ['1GB RAM', '128GB Storage', '5.5" Display'],
    price: '₦55,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  },
  {
    id: 6,
    name: 'iMac Retina 5K 27"',
    year: 2014,
    chip: 'Intel Core i5',
    specs: ['16GB RAM', '1TB HDD', '5K Display'],
    price: '₦350,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  // 2015
  {
    id: 7,
    name: 'MacBook 12"',
    year: 2015,
    chip: 'Intel Core M',
    specs: ['8GB RAM', '256GB SSD', 'Gold Finish'],
    price: '₦220,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  {
    id: 8,
    name: 'iPad Pro 12.9" (1st Gen)',
    year: 2015,
    chip: 'Apple A9X',
    specs: ['4GB RAM', '128GB Storage', 'Apple Pencil Support'],
    price: '₦150,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/ipad-tech-2a6f1507-1777742657909.webp',
    category: 'iPad'
  },
  // 2016
  {
    id: 9,
    name: 'iPhone 7 Plus',
    year: 2016,
    chip: 'Apple A10 Fusion',
    specs: ['3GB RAM', '128GB Storage', 'Dual Camera'],
    price: '\u20a675,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  },
  {
    id: 10,
    name: 'MacBook Pro 13" (Touch Bar)',
    year: 2016,
    chip: 'Intel Core i5',
    specs: ['8GB RAM', '256GB SSD', 'Touch Bar'],
    price: '\u20a6320,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  // 2017
  {
    id: 11,
    name: 'iPhone X',
    year: 2017,
    chip: 'Apple A11 Bionic',
    specs: ['3GB RAM', '256GB Storage', 'Face ID'],
    price: '\u20a6165,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  },
  {
    id: 12,
    name: 'iMac Pro',
    year: 2017,
    chip: 'Intel Xeon W',
    specs: ['32GB RAM', '1TB SSD', 'Space Gray'],
    price: '\u20a6850,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  // 2018
  {
    id: 13,
    name: 'iPad Pro 11" (1st Gen)',
    year: 2018,
    chip: 'Apple A12X Bionic',
    specs: ['4GB RAM', '256GB Storage', 'USB-C'],
    price: '\u20a6280,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/ipad-tech-2a6f1507-1777742657909.webp',
    category: 'iPad'
  },
  {
    id: 14,
    name: 'MacBook Air 13" (Retina)',
    year: 2018,
    chip: 'Intel Core i5',
    specs: ['8GB RAM', '256GB SSD', 'Touch ID'],
    price: '\u20a6380,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  // 2019
  {
    id: 15,
    name: 'iPhone 11 Pro Max',
    year: 2019,
    chip: 'Apple A13 Bionic',
    specs: ['4GB RAM', '256GB Storage', 'Triple Camera'],
    price: '\u20a6350,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  },
  {
    id: 16,
    name: 'MacBook Pro 16" (Intel)',
    year: 2019,
    chip: 'Intel Core i9',
    specs: ['16GB RAM', '1TB SSD', 'Magic Keyboard'],
    price: '\u20a6750,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  // 2020
  {
    id: 17,
    name: 'MacBook Air (M1)',
    year: 2020,
    chip: 'Apple M1 Chip',
    specs: ['8GB RAM', '256GB SSD', 'Fanless Design'],
    price: '\u20a6650,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  {
    id: 18,
    name: 'iPhone 12 Pro',
    year: 2020,
    chip: 'Apple A14 Bionic',
    specs: ['6GB RAM', '128GB Storage', '5G Capable'],
    price: '\u20a6450,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  },
  // 2021
  {
    id: 19,
    name: 'MacBook Pro 14" (M1 Pro)',
    year: 2021,
    chip: 'Apple M1 Pro',
    specs: ['16GB RAM', '512GB SSD', 'Liquid Retina XDR'],
    price: '\u20a61,400,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  {
    id: 20,
    name: 'iPad Mini 6',
    year: 2021,
    chip: 'Apple A15 Bionic',
    specs: ['4GB RAM', '64GB Storage', '8.3" Liquid Retina'],
    price: '\u20a6450,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/ipad-tech-2a6f1507-1777742657909.webp',
    category: 'iPad'
  },
  // 2022
  {
    id: 21,
    name: 'iPhone 14 Pro Max',
    year: 2022,
    chip: 'Apple A16 Bionic',
    specs: ['6GB RAM', '256GB Storage', 'Dynamic Island'],
    price: '\u20a61,100,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  },
  {
    id: 22,
    name: 'MacBook Air 13" (M2)',
    year: 2022,
    chip: 'Apple M2 Chip',
    specs: ['8GB RAM', '256GB SSD', 'Midnight Finish'],
    price: '\u20a6950,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  // 2023
  {
    id: 23,
    name: 'iPhone 15 Pro Max',
    year: 2023,
    chip: 'Apple A17 Pro',
    specs: ['8GB RAM', '256GB SSD', 'Titanium Build'],
    price: '\u20a61,450,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  },
  {
    id: 24,
    name: 'MacBook Pro 16" (M3 Max)',
    year: 2023,
    chip: 'Apple M3 Max',
    specs: ['36GB RAM', '1TB SSD', 'Space Black'],
    price: '\u20a62,100,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp',
    category: 'Mac'
  },
  // 2024
  {
    id: 25,
    name: 'iPad Pro 13" (M4)',
    year: 2024,
    chip: 'Apple M4 Chip',
    specs: ['16GB RAM', '512GB SSD', 'Tandem OLED Display'],
    price: '\u20a61,600,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/ipad-tech-2a6f1507-1777742657909.webp',
    category: 'iPad'
  },
  {
    id: 26,
    name: 'iPhone 16 Pro Max',
    year: 2024,
    chip: 'Apple A18 Pro',
    specs: ['8GB RAM', '256GB SSD', 'Camera Control'],
    price: '₦1,950,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/iphone-tech-ba30bb9e-1777742656308.webp',
    category: 'iPhone'
  }
];

export const Shop = () => {
  const [activeYear, setActiveYear] = useState<number | 'All'>('All');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts = products.filter(p => {
    const yearMatch = activeYear === 'All' || p.year === activeYear;
    const catMatch = activeCategory === 'All' || p.category === activeCategory;
    return yearMatch && catMatch;
  });

  const years = Array.from(new Set(products.map(p => p.year))).sort((a, b) => b - a);
  const categoriesList = ['All', 'iPhone', 'Mac', 'iPad'];

  const handlePurchase = (productName: string) => {
    toast.success(`Redirecting to WhatsApp for ${productName} purchase...`);
    setTimeout(() => {
      window.open(`https://wa.me/2340000000000?text=I'm interested in purchasing the ${productName}`, '_blank');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Hardware Store</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Zisub <span className="text-indigo-500">Apple</span> Catalog</h3>
          
          {/* Updated Product Description as requested */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto mb-12 text-left">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-4">Apple MacBook (Premium Series)</h4>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Experience power, speed, and elegance with the Apple MacBook. Perfect for designers, developers, students, and business professionals. Built with high performance processors, long battery life, and sleek design, it delivers the ultimate productivity experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Original Apple quality
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> High performance for creative work
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Long-lasting battery life
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Perfect for business, design, and development
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                 <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/macbook-pro-tech-21ea7511-1777742659663.webp" 
                  alt="Apple MacBook Premium Series"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore our chronological legacy of excellence. From vintage classics to the latest 2024 innovations.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-slate-800 text-slate-400 gap-2 px-3 py-1">
              <Filter className="w-3 h-3" /> Filters
            </Badge>
            {categoriesList.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            <Calendar className="w-5 h-5 text-indigo-500 shrink-0" />
            <div className="flex gap-2">
              <button
                onClick={() => setActiveYear('All')}
                className={`px-4 py-2 rounded-lg text-sm font-bold shrink-0 transition-all ${
                  activeYear === 'All' 
                    ? 'bg-white text-slate-950' 
                    : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800'
                }`}
              >
                All Years
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold shrink-0 transition-all ${
                    activeYear === year 
                      ? 'bg-white text-slate-950' 
                      : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-slate-900 border border-slate-800/50 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col h-full shadow-xl relative">
                <Badge className="absolute top-4 left-4 bg-slate-950/80 text-white border-white/10 z-10">
                  {product.year}
                </Badge>
                
                <div className="relative aspect-square overflow-hidden bg-slate-950 p-8 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-1 text-yellow-500 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-1 line-clamp-1">{product.name}</h4>
                  <div className="text-indigo-400 text-xs font-bold mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <Cpu className="w-3 h-3" /> {product.chip}
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="text-slate-500 text-[10px] flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800/50">
                    <span className="text-xl font-black text-white">{product.price}</span>
                    <Button 
                      size="sm"
                      onClick={() => handlePurchase(product.name)}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-4 h-9 shadow-lg shadow-indigo-600/20"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 mr-2" /> Buy
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-20 p-8 rounded-[2rem] bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 text-center">
        <h4 className="text-2xl font-bold text-white mb-4">Can't find what you're looking for?</h4>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          We source specific Apple models on request. Contact us for custom orders or bulk purchases.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-slate-950 hover:bg-slate-200 rounded-full px-10 font-bold"
          asChild
        >
          <a href="#contact">Send Inquiries</a>
        </Button>
      </div>
    </div>
  );
};