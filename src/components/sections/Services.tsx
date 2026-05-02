import { motion } from 'framer-motion';
import { Video, Palette, Smartphone, ShoppingCart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Video Content Creation',
    description: 'We produce high-quality video content for businesses, events, social media, and branding. From editing to full production, we help you tell your story in a powerful and engaging way.',
    icon: Video,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/service-video-editing-befcedda-1777740630093.webp'
  },
  {
    title: 'Graphic Design',
    description: 'We design professional visuals including flyers, posters, social media designs, branding kits, and promotional materials tailored for Nigerian businesses and individuals.',
    icon: Palette,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/service-graphic-design-f40a8af6-1777740630426.webp'
  },
  {
    title: 'Mobile App Development',
    description: 'We build modern Android applications using Flutter technology. Our apps are fast, user-friendly, and designed to solve real-world problems for businesses and customers.',
    icon: Smartphone,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/service-app-dev-af066fba-1777740630199.webp'
  },
  {
    title: 'Apple Product Sales',
    description: 'We supply original and high-performance Apple products, especially MacBook laptops, helping creatives, developers, and business owners work more efficiently and professionally.',
    icon: ShoppingCart,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/product-accessories-73114e0a-1777740630794.webp'
  }
];

export const Services = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-[0.2em] mb-3">Our Expertise</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Complete Digital Ecosystem</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We combine creativity with technical excellence to deliver solutions that drive results for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-slate-900 border-slate-800 overflow-hidden group hover:border-indigo-500/50 transition-all h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all" />
              </div>
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="text-indigo-400 text-sm font-bold flex items-center gap-2 group/link"
                >
                  Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};