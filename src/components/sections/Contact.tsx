import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-[0.2em] mb-3">Contact Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing</h3>
          <p className="text-slate-400 mb-10 text-lg">
            Have a project in mind? Or want to buy a MacBook? Get in touch with us today. Our team is ready to assist you.
          </p>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email Us</h4>
                <p className="text-slate-400">hello@zisubtech.com</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Call Us</h4>
                <p className="text-slate-400">+234 (0) 800 123 4567</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-slate-400">Innovation Hub, Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 gap-2 w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/2340000000000', '_blank')}
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-slate-800 p-8 md:p-10 rounded-3xl backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                <Input 
                  required
                  placeholder="John Doe" 
                  className="bg-slate-950 border-slate-800 h-12 focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <Input 
                  required
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-slate-950 border-slate-800 h-12 focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
              <Input 
                required
                placeholder="Project Inquiry / MacBook Purchase" 
                className="bg-slate-950 border-slate-800 h-12 focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
              <Textarea 
                required
                placeholder="Tell us about your project or the product you're looking for..." 
                className="bg-slate-950 border-slate-800 min-h-[150px] focus:border-indigo-500 transition-colors"
              />
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-indigo-600/20 gap-2">
              <Send className="w-5 h-5" /> Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};