import { Play, Eye } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const videos = [
  {
    title: "Living Room Showroom Tour",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    description: "Walk through our curated living room collection",
    duration: "3:24",
  },
  {
    title: "Bedroom Setup Showcase",
    thumbnail: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&h=400&fit=crop",
    description: "Explore our premium bedroom furniture range",
    duration: "4:15",
  },
  {
    title: "360° Dining Room View",
    thumbnail: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop",
    description: "Experience our dining sets in immersive 360°",
    duration: "2:48",
  },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="section-heading">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">
              Virtual Showroom
            </p>
            <h2>Explore in 360°</h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        {/* Featured video */}
        <ScrollReveal delay={100}>
          <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video max-w-4xl mx-auto group cursor-pointer shadow-xl">
            {activeVideo !== null ? (
              <div className="w-full h-full bg-foreground flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Eye className="w-16 h-16 mx-auto mb-4 text-gold" />
                  <p className="font-display text-2xl font-bold mb-2">{videos[activeVideo].title}</p>
                  <p className="font-body text-sm text-primary-foreground/70">
                    360° view coming soon — Visit our showroom for the full experience!
                  </p>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="mt-6 gold-btn-outline border-gold-light text-primary-foreground text-sm"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setActiveVideo(0)}
                    className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gold shadow-2xl"
                  >
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6">
                  <p className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                    {videos[0].title}
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70 mt-1">
                    {videos[0].description}
                  </p>
                </div>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-semibold bg-foreground/60 text-primary-foreground backdrop-blur-sm">
                  {videos[0].duration}
                </span>
              </>
            )}
          </div>
        </ScrollReveal>

        {/* Thumbnails grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <ScrollReveal key={video.title} delay={index * 100 + 200}>
              <div
                onClick={() => setActiveVideo(index)}
                className={`relative rounded-xl overflow-hidden aspect-video cursor-pointer group transition-all duration-300 ${
                  activeVideo === index
                    ? "ring-2 ring-gold ring-offset-2 ring-offset-background"
                    : "hover:shadow-lg"
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gold/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-3 right-3">
                  <p className="font-body text-xs font-semibold text-primary-foreground truncate">
                    {video.title}
                  </p>
                </div>
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-body bg-foreground/60 text-primary-foreground backdrop-blur-sm">
                  {video.duration}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
