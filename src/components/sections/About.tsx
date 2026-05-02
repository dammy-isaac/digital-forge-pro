import { motion } from 'framer-motion';
import { Target, Code, Palette, Laptop, Sparkles } from 'lucide-react';

export const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/attachments/28305a40-1549-467a-8353-be294d4fb313/1777741084249_WhatsApp_Image_2026-04-29_at_12.25.57_PM.jpeg" 
              alt="ADEGBOHUNGBE OLUWADAMILOLA ISAAC" 
              className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 aspect-[4/5] lg:aspect-auto"
            />
            {/* Subtle overlay for text readability on mobile if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 lg:opacity-0 group-hover:opacity-40 transition-opacity" />
            
            {/* Bottom label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl p-4">
                <p className="text-white font-bold text-lg md:text-xl">ADEGBOHUNGBE OLUWADAMILOLA ISAAC</p>
                <p className="text-indigo-400 text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-3 h-3" /> Founder of Zisub Tech
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-600/10 blur-3xl rounded-full z-0 animate-pulse" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-600/10 blur-3xl rounded-full z-0 animate-pulse" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-indigo-500/20 rounded-2xl z-0" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">About Zisub Tech</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Bridging Innovation with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Excellence</span>
          </h2>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
            <p>
              <span className="text-white font-semibold">Zisub Tech</span> is a modern Nigerian-based digital technology brand focused on delivering innovative and high-quality tech solutions. We specialize in creative and technical services including video content creation, graphic design, mobile app development, and the sale of premium Apple products such as MacBooks.
            </p>
            <p>
              We are passionate about transforming ideas into powerful digital experiences. Whether it is building a brand identity, developing a mobile application, or producing engaging video content, <span className="text-indigo-400 font-medium">Zisub Tech</span> is committed to excellence, creativity, and customer satisfaction.
            </p>
            <p>
              Our mission is to empower individuals, businesses, and organizations across Nigeria and beyond with digital tools and services that help them grow, stand out, and succeed in today\u2019s competitive world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Code className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-white font-bold">App Development</h4>
              </div>
              <p className="text-slate-500 text-sm">Building scalable, high-performance Android applications using Flutter.</p>
            </div>

            <div className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Palette className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-white font-bold">Creative Design</h4>
              </div>
              <p className="text-slate-500 text-sm">Crafting visually engaging content and professional brand identities.</p>
            </div>

            <div className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Laptop className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-white font-bold">Apple Tech</h4>
              </div>
              <p className="text-slate-500 text-sm">Providing premium hardware solutions to enhance your professional workflow.</p>
            </div>

            <div className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-white font-bold">Mission-Driven</h4>
              </div>
              <p className="text-slate-500 text-sm">Combining creativity and technology to deliver modern digital solutions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};