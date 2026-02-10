import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

const faqData = [
  {
    keywords: ["delivery", "deliver", "shipping", "ship"],
    answer: "We offer free delivery across Maharashtra! Standard delivery takes 5-7 working days. For urgent orders, express delivery is available at a nominal charge.",
  },
  {
    keywords: ["price", "cost", "rate", "budget", "affordable", "cheap", "expensive"],
    answer: "Our furniture starts from ₹8,000 for shoe racks and goes up to ₹55,000+ for premium bedroom sets. We offer EMI options and seasonal discounts. Contact us for the best quotes!",
  },
  {
    keywords: ["warranty", "guarantee", "repair"],
    answer: "All our products come with a 10-year warranty covering manufacturing defects. We also provide free maintenance support for the first year.",
  },
  {
    keywords: ["custom", "customize", "design", "bespoke", "made to order"],
    answer: "Yes! We specialize in custom furniture. Share your design ideas or room measurements, and our expert team will create the perfect piece for you. Custom orders take 2-3 weeks.",
  },
  {
    keywords: ["material", "wood", "quality", "plywood", "teak"],
    answer: "We use premium-grade engineered wood, solid teak, sheesham, and high-quality plywood. All materials are termite-treated and moisture-resistant for long-lasting durability.",
  },
  {
    keywords: ["return", "refund", "exchange", "cancel"],
    answer: "We have a 7-day return policy for manufacturing defects. Custom-made furniture is non-returnable, but we ensure quality checks before delivery.",
  },
  {
    keywords: ["location", "address", "showroom", "visit", "shop", "where"],
    answer: "Our showroom is located in Chinwada, Maharashtra. We're open Monday to Saturday, 10:00 AM - 8:00 PM. Walk-ins are welcome!",
  },
  {
    keywords: ["emi", "installment", "payment", "pay", "finance"],
    answer: "We accept cash, UPI, bank transfer, and all major cards. EMI options are available on purchases above ₹15,000 through select bank partners.",
  },
  {
    keywords: ["sofa", "living room", "couch"],
    answer: "Our premium sofa sets start from ₹45,000. We have L-shaped, 3-seater, recliner, and modular options in fabric, leatherette, and genuine leather.",
  },
  {
    keywords: ["bed", "bedroom", "mattress"],
    answer: "King size beds start from ₹55,000. We offer storage beds, platform beds, and poster beds in various finishes. Mattresses available separately.",
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good evening"],
    answer: "Hello! 👋 Welcome to ProSmart Accessories. How can I help you today? You can ask about our products, pricing, delivery, or anything else!",
  },
];

const quickQuestions = [
  "What are your prices?",
  "Do you offer custom designs?",
  "Delivery options?",
  "Warranty details?",
];

interface Message {
  text: string;
  isBot: boolean;
}

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! 👋 I'm ProSmart's assistant. Ask me anything about our furniture, pricing, delivery, or services!",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findAnswer = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    for (const faq of faqData) {
      if (faq.keywords.some((kw) => lowerQuery.includes(kw))) {
        return faq.answer;
      }
    }
    return "I'm not sure about that! 🤔 For detailed queries, please chat with our team directly on WhatsApp for instant help.";
  };

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { text: msg, isBot: false }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: findAnswer(msg), isBot: true }]);
    }, 600);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isOpen ? "bg-foreground rotate-0" : "bg-gold"
        }`}
        aria-label="Toggle FAQ chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageSquare className="w-6 h-6 text-primary-foreground" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-[10.5rem] right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] transition-all duration-500 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-background rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-gold-dark to-gold flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-semibold text-primary-foreground text-sm">
                ProSmart Assistant
              </p>
              <p className="text-xs text-primary-foreground/70">
                Ask us anything!
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[350px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                {msg.isBot && (
                  <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-gold" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm font-body leading-relaxed ${
                    msg.isBot
                      ? "bg-secondary text-foreground rounded-tl-sm"
                      : "bg-gold text-primary-foreground rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {!msg.isBot && (
                  <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4 text-gold-dark" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1.5 rounded-full text-xs font-body font-medium bg-gold/10 text-gold-dark hover:bg-gold/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border-none outline-none font-body text-sm text-foreground placeholder:text-muted-foreground"
              />
              <button
                onClick={() => handleSend()}
                className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center hover:bg-gold-dark transition-colors"
              >
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
            <a
              href="https://wa.me/917741913386?text=Hi, I need help with furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 text-xs font-body text-muted-foreground hover:text-gold transition-colors"
            >
              Or chat live on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQChatbot;
