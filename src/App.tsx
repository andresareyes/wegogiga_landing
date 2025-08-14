import { useMemo, useState } from "react";
import { motion } from "framer-motion";

// --- Client-friendly data hooks ---
const usePortfolioData = () => {
  return useMemo(
    () => ({
      owner: {
        name: "We Go Giga",
        role: "Roblox Creators Helping Creators",
        location: "Supporting Creators Worldwide",
        email: "hello@wegogiga.com",
        x: "@WeGoGiga",
        logo: "/we_go_giga_icon_white.png",
      },
      stats: [
        { label: "Creators Supported", value: "25+" },
        { label: "Games Enhanced", value: "7" },
        { label: "Total Players Reached", value: "3.2M+" },
        { label: "Creator Success Rate", value: "100%" },
      ],
      mission: {
        headline: "Hey there! We're Roblox creators just like you, and we've spent 10+ years building and scaling games.",
        description: "We know what it's like to pour your heart into a game and want to see it succeed. That's why we help fellow creators take their games to the next level - whether you want to scale up, make more money, or find the right partnership to grow."
      },
      whatWeLookFor: [
        {
          criteria: "Creators with Heart",
          description: "We get it - you've put your soul into your game. We look for creators who are passionate about their work, not just the numbers. If your players love what you've built, we want to chat."
        },
        {
          criteria: "Active Player Communities",
          description: "It's not about having millions of players (though that's cool too!). We care more about having a community that actually enjoys playing your game and keeps coming back."
        },
        {
          criteria: "Games with Potential", 
          description: "Maybe your game isn't the biggest hit yet, but you know it could be something special. We've been there, and we can usually spot that potential from a mile away."
        },
        {
          criteria: "Clear Game Ownership",
          description: "Just need to make sure there aren't any messy legal issues with your game. Don't worry, we'll help sort through any complexity if needed."
        }
      ],
      faqs: [
        {
          q: "Wait, are you actually Roblox creators yourselves?",
          a: "Yep! We've been in the Roblox community for over 10 years, building games, dealing with the same challenges you face, and learning what works (and what doesn't). We're not some corporate entity - we're creators helping creators."
        },
        {
          q: "Will I lose control of my game if we work together?",
          a: "Absolutely not! We've been in your shoes and know how important creative control is. Most of our partnerships let you keep significant input on your game. We're here to amplify your vision, not replace it with ours."
        },
        {
          q: "How do you figure out what my game is worth?",
          a: "We look at everything - your revenue, how engaged your players are, growth potential, and honestly, we tend to be pretty generous. We remember what it was like starting out, so we always prioritize fair compensation."
        },
        {
          q: "My game isn't making tons of money yet - is that okay?",
          a: "Totally fine! Some of our best partnerships started with games that had potential but weren't making bank yet. We've been there - sometimes you have passionate players and a great concept, but the monetization just hasn't clicked yet."
        },
        {
          q: "How fast does this whole process move?",
          a: "We can usually chat within a day or two if you reach out. If we're a good fit, the whole partnership process typically takes 2-4 weeks. But honestly, we move at whatever pace feels right for you - no pressure."
        },
        {
          q: "Can I still work on other games?",
          a: "Of course! Most of our creator partners keep building new stuff. In fact, we often end up partnering on future projects too. We're not trying to lock you down - we want you to keep creating."
        }
      ]
    }),
    []
  );
};

export default function ClientFriendlyPortfolioSite() {
  const { owner, mission, whatWeLookFor, faqs } = usePortfolioData();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gameLink: "",
    message: "",
    partnershipInterest: "Partial Acquisition"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! We'll get back to you within 24 hours. We're excited to learn more about your game!`);
    setFormData({ name: "", email: "", gameLink: "", message: "", partnershipInterest: "Partial Acquisition" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-cyan-900 to-blue-950 text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-blue-950/80">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 font-bold text-xl tracking-tight">
            {owner.logo ? (
              <img
                src={owner.logo}
                alt="Logo"
                className="h-10 w-10 rounded-xl object-contain border border-white/20"
              />
            ) : null}
            <span>{owner.name}</span>
          </a>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <a href="#process" className="hover:text-white transition-colors">Our Process</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>
            <a href="#contact" className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg">Start a Conversation</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Ready to Take Your Roblox Game to the Next Level?
          </h1>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {mission.headline}
          </p>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            {mission.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
              Tell Us About Your Game
            </a>
            <a href="#faq" className="px-8 py-4 border border-cyan-400/30 hover:bg-cyan-500/10 rounded-xl font-semibold text-lg transition-all">
              Learn About Our Process
            </a>
          </div>
        </motion.div>
      </section>

      {/* What We Look For */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">What We Look For in Fellow Creators</h2>
          <p className="text-slate-400 mt-4 text-lg">It's not about being the biggest game on the platform - we care about the creator and the potential</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {whatWeLookFor.map((item, idx) => (
            <motion.div
              key={item.criteria}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">{item.criteria}</h3>
              <p className="text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Questions We Get All the Time</h2>
          <p className="text-slate-400 mt-4 text-lg">Straight answers to what you're probably wondering about</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-cyan-500/5 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <div className={`text-2xl transition-transform ${expandedFaq === idx ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>
              {expandedFaq === idx && (
                <div className="px-6 pb-6">
                  <div className="text-slate-300 leading-relaxed">{faq.a}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Let's Chat About Your Game!</h2>
            <p className="text-slate-400 mt-4 text-lg">
              Tell us what you're working on and what you're hoping to achieve. No pressure - just a friendly conversation between creators about what's possible.
            </p>
          </div>
          
          <div className="rounded-3xl p-8 border border-white/10 bg-white/5 shadow-2xl">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-sm font-semibold mb-2">Your Name</div>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="What should we call you?"
                    className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <div className="block text-sm font-semibold mb-2">Email or Discord</div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="How can we reach you?"
                    className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-sm font-semibold mb-2">Game Link (Optional)</div>
                  <input
                    value={formData.gameLink}
                    onChange={(e) => setFormData({...formData, gameLink: e.target.value})}
                    placeholder="Link to your Roblox game"
                    className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <div className="block text-sm font-semibold mb-2">Partnership Interest</div>
                  <select
                    value={formData.partnershipInterest}
                    onChange={(e) => setFormData({...formData, partnershipInterest: e.target.value})}
                    className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option>Partial Acquisition</option>
                    <option>Full Acquisition</option>
                    <option>Just Exploring Options</option>
                  </select>
                </div>
              </div>
              
              <div>
                <div className="block text-sm font-semibold mb-2">Tell Us About Your Game</div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="What makes your game special? What are your goals? Any questions for us? We'd love to hear your story and see if we can help..."
                  className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 min-h-[120px] focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Start the Conversation
              </button>
            </div>
            
            <div className="mt-8 text-center space-y-2">
              <div className="text-sm text-slate-400">
                Prefer email? Just shoot us a message at{" "}
                <a href={`mailto:${owner.email}`} className="text-cyan-300 hover:text-cyan-200 underline">
                  {owner.email}
                </a>
              </div>
              <div className="text-xs text-slate-500">
                We always respond within 24 hours (usually way faster because we're excited to hear from fellow creators!)
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-slate-500 py-12 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4">
            © {new Date().getFullYear()} {owner.name} · Supporting Roblox Creators Worldwide
          </div>
          <div className="text-xs">
            Built with care for the Roblox creator community
          </div>
        </div>
      </footer>
    </div>
  );
}