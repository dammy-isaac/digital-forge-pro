import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Download, 
  Video, 
  Palette, 
  Smartphone, 
  Loader2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

// --- Types & Constants ---

type Category = 'All' | 'Video Editing' | 'Graphic Design' | 'App Development';

interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<Category, 'All'>;
  thumbnail: string;
  description: string;
  details?: string;
  videoUrl?: string; // Placeholder for video source
  downloadUrl?: string; // Placeholder for design download
  appLink?: string; // Link to app or demo
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Video Editing
  {
    id: 'v1',
    title: 'Lagos Grand Wedding Coverage',
    category: 'Video Editing',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/lagos-wedding-coverage-thumbnail-a1fd9afc-1777743279519.webp',
    description: 'Cinematic event coverage capturing every emotional moment of a premium Lagos wedding.',
    details: 'Duration: 2:45 | 4K Cinematic Grade',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' // Placeholder video
  },
  {
    id: 'v2',
    title: 'TechNexus Business Promo',
    category: 'Video Editing',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/business-promo-thumbnail-77975803-1777743278736.webp',
    description: 'A high-impact corporate promotional video for a Nigerian tech hub.',
    details: 'Duration: 1:30 | Corporate Motion Graphics',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'v3',
    title: 'Abuja Gospel Concert Highlights',
    category: 'Video Editing',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/church-program-video-thumbnail-4f26b44b-1777743279090.webp',
    description: 'Vibrant highlight reel for a major church convention and gospel concert.',
    details: 'Duration: 3:00 | Multi-cam Edit',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'v4',
    title: 'Zara Lagos Social Ad',
    category: 'Video Editing',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/fashion-brand-social-ad-thumbnail-54fe0d51-1777743278988.webp',
    description: 'Dynamic social media advertisement for a leading Nigerian fashion brand.',
    details: 'Duration: 0:45 | Optimized for Reels/TikTok',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  // Graphic Design
  {
    id: 'g1',
    title: 'Afrobeat Summer Jam Flyer',
    category: 'Graphic Design',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/afrobeat-concert-flyer-3add8ba2-1777743279159.webp',
    description: 'Vibrant, bold concert flyer design for a major music festival in Lagos.',
    details: 'CMYK Ready | High-Resolution Poster',
    downloadUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/afrobeat-concert-flyer-3add8ba2-1777743279159.webp'
  },
  {
    id: 'g2',
    title: 'Grace Tabernacle Poster',
    category: 'Graphic Design',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/church-revival-poster-2d7c57d5-1777743279276.webp',
    description: 'Elegant and spiritual event poster design for a church revival program.',
    details: 'Elegant Typography | 300 DPI Print Ready',
    downloadUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/church-revival-poster-2d7c57d5-1777743279276.webp'
  },
  {
    id: 'g3',
    title: 'Mama J Jollof Promo',
    category: 'Graphic Design',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/restaurant-advert-design-6cf8696c-1777743280820.webp',
    description: 'Appetizing marketing graphic for a local restaurant specialty.',
    details: 'Social Media Kit | Food Photography Grade',
    downloadUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/restaurant-advert-design-6cf8696c-1777743280820.webp'
  },
  {
    id: 'g4',
    title: 'PaySwift Brand Identity',
    category: 'Graphic Design',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/fintech-app-graphic-14b5ce76-1777743280503.webp',
    description: 'Modern and clean visual assets for a Nigerian fintech startup launch.',
    details: 'Brand Book | Social Media Templates',
    downloadUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/fintech-app-graphic-14b5ce76-1777743280503.webp'
  },
  // App Development
  {
    id: 'a1',
    title: 'NairaPay Fintech App',
    category: 'App Development',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/naira-pay-app-ui-a2b433b7-1777743280549.webp',
    description: 'A secure mobile payment solution for cross-border Naira transactions.',
    details: 'Solves: Delayed bank transfers and high transaction fees.',
    appLink: '#'
  },
  {
    id: 'a2',
    title: 'EkoLogistics Dashboard',
    category: 'App Development',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/logistics-app-ui-ef9bf90e-1777743280699.webp',
    description: 'Real-time delivery tracking system for Lagos-based logistics providers.',
    details: 'Solves: Poor fleet visibility and delivery delays.',
    appLink: '#'
  },
  {
    id: 'a3',
    title: 'FoodieExpress Nigeria',
    category: 'App Development',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9ef3cc9-b9f1-4f9d-83c0-c51c9e08df4b/food-delivery-app-ui-08df2305-1777743281127.webp',
    description: 'Hyper-local food delivery app connecting Nigerian vendors to consumers.',
    details: 'Solves: Limited access to local traditional dishes.',
    appLink: '#'
  }
];

const CATEGORIES: Category[] = ['All', 'Video Editing', 'Graphic Design', 'App Development'];

// --- Sub-Components ---

const PortfolioCard = ({ 
  item, 
  onPlay, 
  onDownload 
}: { 
  item: PortfolioItem, 
  onPlay: (url: string, title: string) => void,
  onDownload: (url: string, title: string) => void
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all shadow-xl"
    >
      {/* Media Preview */}
      <div className="aspect-video relative overflow-hidden bg-slate-800">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        )}
        
        {item.category === 'Video Editing' && item.videoUrl ? (
          <video
            src={item.videoUrl}
            onLoadedData={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-indigo-600/90 text-white border-none px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
            {item.category === 'Video Editing' && <Video className="w-3 h-3 mr-1 inline" />}
            {item.category === 'Graphic Design' && <Palette className="w-3 h-3 mr-1 inline" />}
            {item.category === 'App Development' && <Smartphone className="w-3 h-3 mr-1 inline" />}
            {item.category}
          </Badge>
        </div>

        {/* Video Play Overlay */}
        {item.category === 'Video Editing' && (
          <button
            onClick={() => onPlay(item.videoUrl!, item.title)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-2xl"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </motion.div>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-indigo-400 transition-colors">
          {item.title}
        </h4>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
          {item.description}
        </p>

        {/* Project Details / Problem Solved */}
        <div className="mb-6 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
          <p className="text-indigo-300 text-[11px] font-semibold uppercase tracking-wider mb-1">
            {item.category === 'App Development' ? 'Problem Solved' : 'Project Info'}
          </p>
          <p className="text-slate-200 text-xs italic line-clamp-2">
            {item.details}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {item.category === 'Video Editing' && (
            <Button 
              variant="default" 
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold gap-2"
              onClick={() => onPlay(item.videoUrl!, item.title)}
            >
              <Play className="w-4 h-4" /> Play Video
            </Button>
          )}

          {item.category === 'Graphic Design' && (
            <Button 
              variant="outline" 
              className="flex-1 border-slate-700 hover:bg-slate-800 text-white font-bold gap-2"
              onClick={() => onDownload(item.downloadUrl!, item.title)}
            >
              <Download className="w-4 h-4" /> Download
            </Button>
          )}

          {/* App Development section - View Demo button removed as requested */}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Portfolio Component ---

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter(item => 
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  const handlePlayVideo = useCallback((url: string, title: string) => {
    setSelectedVideo({ url, title });
  }, []);

  const handleDownload = useCallback((url: string, title: string) => {
    toast.success(`Starting download: ${title}`);
    // Simulate download
    setTimeout(() => {
      window.open(url, '_blank');
    }, 500);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-4 py-1.5 uppercase tracking-widest text-xs font-bold">
            Our Creative Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Nigerian Creativity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient-x">
              Meets Digital Excellence
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-medium">
            Explore some of our creative works delivering digital solutions across Nigeria. From cinematic video edits to user-centric app development.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-2 md:gap-4"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)]'
                  : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <PortfolioCard 
              key={item.id} 
              item={item} 
              onPlay={handlePlayVideo}
              onDownload={handleDownload}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-slate-500 text-xl">No projects found in this category.</p>
        </motion.div>
      )}

      {/* Video Modal Player */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-slate-950 border-slate-800 overflow-hidden">
          <DialogHeader className="p-4 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-xl font-bold text-white">
                  {selectedVideo?.title}
                </DialogTitle>
                <DialogDescription className="text-slate-400 text-xs">
                  Portfolio Video Preview \u2022 Zisub Tech
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          
          <div className="aspect-video bg-black relative">
            {selectedVideo && (
              <video
                src={selectedVideo.url}
                className="w-full h-full"
                controls
                autoPlay
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              >
                Your browser does not support the video tag.
              </video>
            )}
            
            {/* 3-minute limit warning / watermark overlay */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] text-white font-medium border border-white/10">
              Preview Mode (Max 3:00)
            </div>
          </div>
          
          <div className="p-4 bg-slate-900 flex justify-end gap-3">
             <Button variant="outline" className="border-slate-700 text-white" onClick={() => setSelectedVideo(null)}>
               Close Player
             </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};