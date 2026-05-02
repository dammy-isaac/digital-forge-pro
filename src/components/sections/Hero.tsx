import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Glow */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/hero-bg-tech-b06b465d-1777740631593.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <CheckCircle className="w-3.5 h-3.5" />
              Trusted Digital Partners
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Innovating <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital Creativity</span> in Nigeria and Beyond.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Your Vision, Our Digital Power. We empower brands with cutting-edge video content, stunning graphics, custom mobile applications, and high-end Apple hardware.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-14 text-base font-semibold shadow-xl shadow-indigo-600/20">
                <a href="#services" className="flex items-center gap-2">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-semibold border-slate-700 hover:bg-slate-800 text-white">
                <a href="#portfolio" className="flex items-center gap-2">
                  View Portfolio <Play className="w-4 h-4 fill-current" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-semibold text-slate-300 hover:text-white">
                <a href="#shop">Shop MacBooks</a>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 pt-10 border-t border-slate-800/50 flex flex-wrap gap-10 md:gap-20"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Projects Done</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};