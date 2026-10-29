import { useState } from 'react';
import { 
  Server, Database, Globe, Wrench, GraduationCap, Briefcase, 
  Mail, Phone, Linkedin, ExternalLink, Code, Cpu, Box, Layers, 
  ChevronRight, CheckCircle2, Copy, Menu, X, ShieldCheck, Zap
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const copyEmail = () => {
    void navigator.clipboard.writeText('prajwalrawat2004@gmail.com')
      .then(() => showToast('Email copied to clipboard: prajwalrawat2004@gmail.com'))
      .catch(() => showToast('Unable to copy email. Please use the email address below.'));
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-500/50 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#090d16]/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-cyan-400 font-mono font-bold text-lg group-hover:scale-105 transition-transform">&lt;PR /&gt;</span>
            <span className="font-extrabold tracking-tight text-white bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Prajwal Rawat</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">Let's Talk</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 shadow-2xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">Projects</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-center px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold">Let's Talk</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-36 pb-24 md:pt-48 md:pb-32 z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Backend Developer &middot; Node.js & MERN Stack Specialist
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Backend Systems</span> & Real-time APIs.
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Passionate backend engineer with 1+ year of professional experience designing production-grade REST APIs, real-time Socket.io architectures, and blockchain integrations for live enterprise clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2">
                <Code className="w-4 h-4" /> Explore Projects
              </a>
              <a href="#contact" className="px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-white font-semibold transition-all flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" /> Get in Touch
              </a>
              <button 
                onClick={copyEmail}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all"
                title="Copy Email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-cyan-400" /> Chandigarh, India</span>
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-purple-400" /> Netset Software Solutions</span>
            </div>
          </div>

          {/* Terminal Card Graphic */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <span className="text-xs font-mono text-slate-400">server.js — Node.js</span>
                <div className="w-4"></div>
              </div>
              <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-2 overflow-x-auto">
                <p><span className="text-purple-400">const</span> express = <span className="text-yellow-400">require</span>(<span className="text-green-400">'express'</span>);</p>
                <p><span className="text-purple-400">const</span> mongoose = <span className="text-yellow-400">require</span>(<span className="text-green-400">'mongoose'</span>);</p>
                <p><span className="text-purple-400">const</span> app = <span className="text-blue-400">express</span>();</p>
                <br />
                <p className="text-slate-500">// Initialize Production Backend</p>
                <p>app.<span className="text-blue-400">use</span>(express.<span className="text-yellow-400">json</span>());</p>
                <p>app.<span className="text-blue-400">use</span>(<span className="text-green-400">'/api/v1'</span>, <span className="text-yellow-400">productionRoutes</span>);</p>
                <br />
                <p>mongoose.<span className="text-yellow-400">connect</span>(process.env.MONGO_URI, () =&gt; &#123;</p>
                <p className="pl-4">console.<span className="text-blue-400">log</span>(<span className="text-green-400">'Database & Socket.io Live'</span>);</p>
                <p>&#125;);</p>
              </div>
              <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-yellow-400" /> Node.js &middot; Express &middot; MongoDB</span>
                <span className="text-cyan-400 font-semibold">Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Summary Section */}
      <section id="about" className="py-24 bg-slate-950/40 border-t border-slate-800/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Professional Overview</h2>
            <h3 className="text-3xl font-extrabold">About Me</h3>
            <p className="text-slate-400">Backend developer engineering resilient systems, secure authentication, and real-time communication channels.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Backend Architecture</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specialized in building high-performance REST APIs with Node.js and Express.js. Experienced in database indexing, query optimization, and handling complex business workflows.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Blockchain & Real-time</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Integrated blockchain transaction mechanisms for secure digital asset transfers, alongside real-time bi-directional event emission using Socket.io and Firebase Cloud Messaging.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Full-Stack Capability</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Equipped with robust frontend proficiency in React.js, TypeScript, and modern Tailwind CSS to bridge seamless end-to-end feature delivery from UI client to database.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Expertise & Stack</h2>
            <h3 className="text-3xl font-extrabold">Technical Skills</h3>
            <p className="text-slate-400">Tools, frameworks, and technologies utilized in production environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Backend */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400"><Cpu className="w-5 h-5" /></div>
                <h4 className="font-bold text-lg text-white">Backend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io', 'Firebase FCM', 'JWT / RBAC'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300">{skill}</span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400"><Database className="w-5 h-5" /></div>
                <h4 className="font-bold text-lg text-white">Databases</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'Mongoose ODM', 'MongoDB Indexing', 'PostgreSQL', 'SQL Queries'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-purple-300">{skill}</span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400"><Code className="w-5 h-5" /></div>
                <h4 className="font-bold text-lg text-white">Frontend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-300">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400"><Wrench className="w-5 h-5" /></div>
                <h4 className="font-bold text-lg text-white">Tools & DevOps</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git & GitHub', 'Docker', 'Postman', 'API Testing'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-blue-300">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-950/40 border-t border-slate-800/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Career Path</h2>
            <h3 className="text-3xl font-extrabold">Professional Experience</h3>
            <p className="text-slate-400">Delivering production-grade applications across multiple domains.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 md:pl-10 border-l-2 border-cyan-500/40 space-y-12">
              <div className="relative group">
                <div className="absolute -left-[41px] md:-left-[49px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>

                <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">Backend Node.js Developer</h4>
                      <p className="text-cyan-400 font-medium">Netset Software Solutions</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono w-max">August 5, 2025 – September 30, 2026</span>
                  </div>

                  <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>Built and maintained Node.js and Express.js REST APIs and MongoDB-backed services for live, production client projects.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>Developed real-time features using Socket.io and Firebase push notifications for instant user alerts and seamless notification broadcasting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>Implemented robust JWT authentication and role-based access control (RBAC).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>Optimized slow API responses on large data volumes by engineering strategic MongoDB indexes and query tuning.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>Contributed to React.js frontend pages and collaborated closely with cross-functional teams on testing, debugging, and deployment workflows.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Portfolio Work</h2>
            <h3 className="text-3xl font-extrabold">Featured Production Projects</h3>
            <p className="text-slate-400">Key applications built and maintained in live production environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Big4Health */}
            <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">E-Commerce</span>
                  <a href="https://www.big4health.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" /> Visit website
                  </a>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Big4Health E-commerce Platform</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Online platform for purchasing medicines and health products, managing product catalogs, shopping carts, and automated ordering workflows.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> REST APIs for catalog, cart, and order processing</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> MongoDB schemas and Mongoose data models</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> JWT authentication and secure session handling</div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'JWT'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-cyan-300">{tech}</span>
                ))}
              </div>
            </div>

            {/* Museum Diamonds */}
            <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono border border-purple-500/20">Digital Platform</span>
                  <a href="https://console.museumdiamonds.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 text-sm flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" /> Visit website
                  </a>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Museum Diamonds</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Decentralized backend logic and APIs empowering users to buy and transfer high-value diamonds and precious stones securely.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Secure transaction data management</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Role-based access control & admin console management</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> End-to-end live environment maintenance</div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-purple-300">{tech}</span>
                ))}
              </div>
            </div>

            {/* Digital Revenue Systems */}
            <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">Full-Stack Digital Signage</span>
                  <a href="https://www.digitalrevsystems.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 text-sm flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" /> Visit website
                  </a>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Digital Revenue Systems (DRS)</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Full-stack digital signage platform for country clubs, fitness centers, and sports venues. Delivered end-to-end features from UI to database.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Responsive React.js frontend pages</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Backend REST APIs & MongoDB data models</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Seamless connection between UI client and backend workflows</div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'React.js'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-emerald-300">{tech}</span>
                ))}
              </div>
            </div>

            {/* NetsetSphere */}
            <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">Internal Production Platform</span>
                  <a href="https://netsetsphere.netsetsoftware.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" /> Visit website
                  </a>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">NetsetSphere</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Internal production platform featuring real-time bi-directional communication, Firebase push notifications, and performance optimizations.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Real-time event communication via Socket.io</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Firebase Cloud Messaging instant user push alerts</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> MongoDB query optimization and indexing for large datasets</div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {['Node.js', 'Socket.io', 'Firebase FCM', 'MongoDB'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-blue-300">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-slate-950/40 border-t border-slate-800/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Academic Background</h2>
            <h3 className="text-3xl font-extrabold">Education</h3>
            <p className="text-slate-400">Continuous academic pursuit in computer applications and software engineering.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 text-xl"><GraduationCap className="w-6 h-6" /></div>
                <div>
                  <h4 className="text-lg font-bold text-white">Master of Computer Applications (MCA)</h4>
                  <p className="text-cyan-400 text-sm">Graphic Era University, Dehradun</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 w-max">2025 – 2027</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 text-xl"><Code className="w-6 h-6" /></div>
                <div>
                  <h4 className="text-lg font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-purple-400 text-sm">Rayat Bahra University, Mohali, Punjab</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono border border-purple-500/20 w-max">2022 – 2025</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-slate-800 text-slate-400 text-xl"><ShieldCheck className="w-6 h-6" /></div>
                <div>
                  <h4 className="text-lg font-bold text-white">12th Standard (GMSSS, Sector-40B, Chandigarh)</h4>
                  <p className="text-slate-400 text-sm">Graduated with 70% &bull; 2022</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700 w-max">Class of 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950/40 border-t border-slate-800/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Get In Touch</h2>
            <h3 className="text-3xl font-extrabold">Let's Build Something Great</h3>
            <p className="text-slate-400">Feel free to reach out for professional opportunities, backend collaborations, or inquiries.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto text-xl">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white">Phone</h4>
              <p className="text-sm text-slate-400">+91-7717621469</p>
              <a href="tel:+917717621469" className="text-xs font-semibold text-cyan-400 hover:underline inline-block">Call Now &rarr;</a>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto text-xl">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white">Email</h4>
              <p className="text-sm text-slate-400 truncate">prajwalrawat2004@gmail.com</p>
              <button onClick={copyEmail} className="text-xs font-semibold text-purple-400 hover:underline inline-block">Copy Email &rarr;</button>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto text-xl">
                <Linkedin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white">LinkedIn</h4>
              <p className="text-sm text-slate-400 truncate">prajwal-rawat-872046252</p>
              <a href="https://linkedin.com/in/prajwal-rawat-872046252" target="_blank" rel="noreferrer" className="text-xs font-semibold text-blue-400 hover:underline inline-block">Connect &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800/80 text-center text-sm text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Prajwal Rawat. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/prajwal-rawat-872046252" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:prajwalrawat2004@gmail.com" className="hover:text-cyan-400 transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="tel:+917717621469" className="hover:text-cyan-400 transition-colors"><Phone className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
