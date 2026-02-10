import { Heart, MessageCircle, Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    likes: 234,
    comments: 18,
    caption: "New premium sofa collection just arrived! 🛋️",
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop",
    likes: 189,
    comments: 12,
    caption: "Minimalist bedroom setup goals ✨",
  },
  {
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=400&fit=crop",
    likes: 312,
    comments: 24,
    caption: "Family dinner table crafted with love 🍽️",
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    likes: 156,
    comments: 9,
    caption: "Living room transformation complete! 🏠",
  },
  {
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop",
    likes: 278,
    comments: 15,
    caption: "Custom wardrobe design for our valued client 👔",
  },
  {
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=400&fit=crop",
    likes: 198,
    comments: 11,
    caption: "Dream bedroom setup delivered today 🛏️",
  },
];

const SocialFeed = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="section-heading">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">
              Follow Us
            </p>
            <h2>@ProSmartAccessories</h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-6">
                    <div className="flex items-center gap-1.5 text-primary-foreground">
                      <Heart className="w-5 h-5 fill-primary-foreground" />
                      <span className="font-body text-sm font-semibold">
                        {post.likes}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary-foreground">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-body text-sm font-semibold">
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Instagram icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Follow CTA */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gold-btn-outline"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SocialFeed;
