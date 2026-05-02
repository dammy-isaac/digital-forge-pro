import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Olumide Balogun',
    role: 'Creative Director, Lagos Media House',
    content: 'Zisub Tech transformed our branding. Their video content creation is top-notch and helped us increase our engagement by 40% in just two months. Truly professional!',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/olumide-balogun-b4aca846-1777741616194.webp'
  },
  {
    name: 'Chidi Eze',
    role: 'Tech Lead, FinTech Solutions',
    content: 'We bought several MacBooks for our engineering team from Zisub. The process was seamless, the prices were the best in Lagos, and the customer support is outstanding.',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/chidi-eze-43427bd8-1777741615918.webp'
  },
  {
    name: 'Amina Yusuf',
    role: 'Founder, Northern Chic E-commerce',
    content: 'The branding and graphic design work they did for my store is incredible. They really captured the essence of my brand. I highly recommend their services!',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/amina-yusuf-e153ea79-1777741616719.webp'
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Professional Photographer',
    content: 'As a photographer, I need reliable gear. Zisub Tech provided me with a high-spec MacBook Pro that has handled my editing workflow perfectly. Reliable and fast delivery.',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/tunde-adeyemi-98d451b1-1777741618710.webp'
  },
  {
    name: 'Nneka Okoro',
    role: 'CEO, HealthTrack Nigeria',
    content: 'The Android app they developed for us using Flutter is incredibly smooth. They really understood our healthcare vision and delivered beyond our expectations.',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/nneka-okoro-69da42c2-1777741616056.webp'
  },
  {
    name: 'Ibrahim Musa',
    role: 'Marketing Manager, Prime Realty',
    content: 'Their digital solutions have significantly improved our lead generation. From social media graphics to app performance, Zisub Tech is our go-to partner.',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/ibrahim-musa-f676ca31-1777741615811.webp'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-indigo-500 uppercase tracking-[0.2em] mb-4"
          >
            Social Proof
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by Leaders Across Nigeria
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Don't just take our word for it. Here's what some of our valued clients have to say about their experience with Zisub Tech.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl relative hover:border-indigo-500/50 transition-colors duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors" />
              
              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-slate-300 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-indigo-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-slate-800 group-hover:border-indigo-500/30 transition-colors"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">{testimonial.name}</h4>
                  <p className="text-indigo-400 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};