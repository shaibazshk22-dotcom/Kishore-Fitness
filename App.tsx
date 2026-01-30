
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Star, 
  ChevronRight, 
  Zap, 
  Heart, 
  Flame, 
  User, 
  ArrowUpRight,
  Menu,
  X,
  Send
} from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "STRENGTH & ENDURANCE", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
    { title: "INDOOR CYCLE", img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80&w=800" },
    { title: "HIGH INTENSITY", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" },
    { title: "MIND & BODY", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800" },
    { title: "CROSSFIT WORKOUT", img: "https://images.unsplash.com/photo-1552196564-972b385104d7?auto=format&fit=crop&q=80&w=800" },
    { title: "WHOLE BODY FITNESS", img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=800" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Top Utility Bar */}
      <div className="hidden md:flex bg-neutral-900 border-b border-white/5 py-2 px-6 justify-between items-center text-xs tracking-wider uppercase">
        <div className="flex gap-6 items-center">
          <a href="tel:+917978536701" className="flex items-center gap-2 hover:text-red-500 transition-colors">
            <Phone size={14} className="text-red-500" /> +91 79785 36701
          </a>
          <a href="mailto:info@kishorfitness.com" className="flex items-center gap-2 hover:text-red-500 transition-colors">
            <Mail size={14} className="text-red-500" /> info@kishorfitness.com
          </a>
        </div>
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-red-500" /> Mon - Sat: 6am - 10pm
          </span>
          <div className="flex gap-4">
            <Instagram size={14} className="hover:text-red-500 cursor-pointer" />
            <Facebook size={14} className="hover:text-red-500 cursor-pointer" />
            <Twitter size={14} className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-oswald font-black text-2xl italic">K</div>
          <span className="font-oswald text-2xl font-bold tracking-tighter">KISHOR FITNESS</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          {['home', 'about', 'programs', 'reviews', 'contact'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item)}
                className="hover:text-red-500 transition-colors cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-neutral-800 rounded-full"><Star size={18} /></button>
          <button 
             onClick={() => scrollToSection('contact')}
             className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-xs font-black uppercase tracking-widest rounded-sm transition-all shadow-lg shadow-red-600/20"
          >
            JOIN NOW
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 text-2xl font-oswald uppercase transition-all">
          {['home', 'about', 'programs', 'reviews', 'contact'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="hover:text-red-600">
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-red-600 px-8 py-3 text-lg font-black uppercase rounded-sm"
          >
            START TRAINING
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Lightened Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src="https://www.pexels.com/download/video/4745810/"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale-0 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <p className="font-oswald text-red-600 text-3xl md:text-5xl font-black mb-2 tracking-tighter uppercase italic drop-shadow-lg">
            Personal Trainer Kishor
          </p>
          <h1 className="font-oswald text-6xl md:text-[120px] leading-[0.9] font-black uppercase tracking-tighter mb-8 text-white drop-shadow-2xl">
            THE ULTIMATE <br/><span className="text-white">TRAINING</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('programs')}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2 group transition-all"
            >
              START TODAY <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-sm font-medium text-neutral-400 max-w-xs md:text-left md:ml-6">
              Certified by K11 Academy. Expert in Functional & Core Training. 
              Mumbai's top-rated results coach.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-10"></div>
      </section>

      {/* Services Grid (Matches Reference Layout) */}
      <section id="programs" className="bg-white py-24 px-6 md:px-12 text-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-oswald text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter italic">
                BUILD YOUR <br/><span className="text-red-600">BEST BODY</span>
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest rounded-sm">
              ALL PROGRAMS <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`relative group overflow-hidden bg-black aspect-[4/5] ${idx === 3 ? 'md:col-span-1 md:row-span-1' : ''}`}
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="font-oswald text-2xl font-bold text-white tracking-tight mb-4">{service.title}</h3>
                  <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - #BECOMESTRONGER */}
      <section className="bg-white border-t border-neutral-100 py-24 px-6 md:px-12 text-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-oswald text-red-600 text-2xl font-bold uppercase italic mb-2 tracking-tight">How you can</p>
          <h2 className="font-oswald text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20">#BECOMESTRONGER</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 text-left">
            <FeatureItem 
              icon={<Zap className="text-white" size={24} />} 
              title="DISCOVER THE POWER" 
              desc="Unlock your physical limits with Kishor's specialized strength programs. Designed to build functional muscle that lasts." 
            />
            <FeatureItem 
              icon={<Flame className="text-white" size={24} />} 
              title="DIET IS EVERYTHING" 
              desc="Customized nutritional plans focused on your goals—be it weight gain or fat loss. Science-backed fueling." 
            />
            <FeatureItem 
              icon={<User className="text-white" size={24} />} 
              title="PERSONALIZED COACHING" 
              desc="1-on-1 sessions tailored to your body composition and fitness levels. No generic routines here." 
            />
            <FeatureItem 
              icon={<Heart className="text-white" size={24} />} 
              title="YOUR HEALTH - YOUR WAY" 
              desc="Improve cardio-respiratory endurance and flexibility. Fitness that enhances your daily quality of life." 
            />
            <FeatureItem 
              icon={<ArrowUpRight className="text-white" size={24} />} 
              title="STAMINA DEVELOPMENT" 
              desc="Intense functional training designed to increase your threshold and push your performance metrics higher." 
            />
            <FeatureItem 
              icon={<Star className="text-white" size={24} />} 
              title="CERTIFIED EXPERTISE" 
              desc="Trained at K11 Academy & Inspired Fitness. Professional guidance from a certified expert in Mumbai." 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-neutral-950 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-600 z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipMNjKFfPGTDOjMX9pkOwZRCfAEhw0gGfNR395OC=s1360-w1360-h1020-rw" 
              alt="Trainer Kishor" 
              className="grayscale w-full aspect-square object-cover shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-red-600 p-8 text-center shadow-xl">
              <span className="block font-oswald text-4xl font-black">10+</span>
              <span className="block text-xs font-bold uppercase tracking-widest">Years Experience</span>
            </div>
          </div>
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Certified Expert</span>
            <h2 className="font-oswald text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
              MEET TRAINER <span className="text-red-600 italic">KISHOR</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Kishor is a premier fitness professional based in Mumbai, trained at the prestigious <strong>K11 Fitness Academy</strong> and <strong>Inspired Fitness Training Institute</strong>. 
              With a 4.9-star rating, he helps clients master the five core components of fitness:
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-10">
              {['Cardio Endurance', 'Muscular Strength', 'Flexibility', 'Ideal Body Comp', 'Functional Training', 'Core Strength'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-sm font-black uppercase tracking-widest transition-all"
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-black py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
             {[1,2,3,4,5].map(i => <Star key={i} size={24} className="fill-red-600 text-red-600" />)}
             <span className="font-oswald text-2xl font-bold ml-2">4.9/5.0</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 italic">CLIENT SUCCESS STORIES</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sameer Shah", text: "Kishor's functional training changed how I move. Best trainer in Worli without a doubt!", rating: 5 },
              { name: "Priya Malhotra", text: "Lost 8kg in 3 months with his fat loss program. Highly disciplined and motivating coach.", rating: 5 },
              { name: "Ankit Gupta", text: "I struggled with back issues for years. His core training fixed my posture and strength.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-neutral-900/50 p-10 text-left border border-white/5 hover:border-red-600/50 transition-colors">
                <p className="text-neutral-400 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-red-600">{review.name[0]}</div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm">{review.name}</p>
                    <p className="text-xs text-neutral-500 uppercase">Satisfied Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 px-6 md:px-12 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-oswald text-5xl font-black uppercase tracking-tighter mb-8 italic">GET IN TOUCH</h2>
            <p className="text-neutral-600 mb-12">Ready to transform your life? Fill out the form or reach out directly via WhatsApp for a personalized plan.</p>
            
            <div className="space-y-8">
              <ContactInfoItem 
                icon={<MapPin size={24} className="text-red-600" />} 
                title="Location" 
                detail="C Wing, 5th Floor, Jari Mari Darshan CHS, 52, P.K. Atre Road, Worli, Mumbai - 400018" 
              />
              <ContactInfoItem 
                icon={<Phone size={24} className="text-red-600" />} 
                title="Direct Call" 
                detail="+91 79785 36701" 
              />
              <ContactInfoItem 
                icon={<Mail size={24} className="text-red-600" />} 
                title="Email Us" 
                detail="info@kishorfitness.com" 
              />
              <ContactInfoItem 
                icon={<Clock size={24} className="text-red-600" />} 
                title="Working Hours" 
                detail="Mon-Sat: 6:00 AM – 10:00 PM (Sunday Closed)" 
              />
            </div>

            {/* Google Map Embed */}
            <div className="mt-12 w-full h-64 bg-neutral-200 rounded-lg overflow-hidden relative border border-neutral-300">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0163351988894!2d72.8122!3d18.9961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce82562479f3%3A0x6a0a09e078b671a5!2sWorli%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-neutral-50 p-10 md:p-16 border border-neutral-200">
            <h3 className="font-oswald text-3xl font-bold uppercase tracking-tight mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="FULL NAME" placeholder="Enter your name" />
                <Input label="PHONE NUMBER" placeholder="+91 XXXX XXX XXX" />
              </div>
              <Input label="EMAIL ADDRESS" placeholder="email@example.com" />
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase text-neutral-500">Service Required</label>
                <select className="w-full bg-white border border-neutral-300 p-4 text-sm font-bold uppercase tracking-widest focus:border-red-600 outline-none">
                  <option>Personal Training</option>
                  <option>Weight Gain Program</option>
                  <option>Fat Loss Program</option>
                  <option>Functional Training</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase text-neutral-500">Message</label>
                <textarea rows={4} className="w-full bg-white border border-neutral-300 p-4 text-sm focus:border-red-600 outline-none resize-none" placeholder="Tell Kishor about your fitness goals..."></textarea>
              </div>
              <button className="w-full bg-red-600 text-white font-black uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-2 group transition-all">
                SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-oswald font-black italic">K</div>
              <span className="font-oswald text-xl font-bold tracking-tighter">KISHOR FITNESS</span>
            </div>
            <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-neutral-500">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-500">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-red-500">About</button>
              <button onClick={() => scrollToSection('programs')} className="hover:text-red-500">Programs</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-red-500">Contact</button>
            </div>
            <div className="flex gap-4">
               <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors cursor-pointer"><Instagram size={16} /></div>
               <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors cursor-pointer"><Facebook size={16} /></div>
               <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors cursor-pointer"><Twitter size={16} /></div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-xs text-neutral-600 font-medium tracking-wider">
            &copy; {new Date().getFullYear()} KISHOR PERSONAL FITNESS TRAINER MUMBAI. ALL RIGHTS RESERVED. <br/>
            C WING, JARI MARI DARSHAN CHS, WORLI, MUMBAI – 400018
          </div>
        </div>
      </footer>

      {/* Floating Action Button for WhatsApp */}
      <a 
        href="https://wa.me/917978536701?text=Hi Kishor, I'm interested in personal training. Please share more details." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.484 2.247 2.247 3.484 5.232 3.484 8.404 0 6.556-5.332 11.888-11.888 11.888-2.096 0-4.141-.547-5.945-1.587l-6.042 1.588zm6.657-3.473c1.554.922 3.151 1.408 4.799 1.408 5.176 0 9.388-4.212 9.388-9.388 0-2.508-.977-4.866-2.753-6.641s-4.132-2.753-6.64-2.753c-5.176 0-9.388-4.213-9.388 9.388 0 1.649.487 3.245 1.408 4.799l-.924 3.376 3.461-.908zm10.748-6.191c-.266-.134-1.579-.778-1.822-.867-.243-.088-.419-.133-.596.133-.177.266-.686.866-.84.1.044-.155.155-.308-.266-.443-.443-.134-1.889-.696-3.6-2.221-1.332-1.188-2.23-2.654-2.496-3.1-.266-.443-.028-.682.193-.902.198-.198.443-.518.665-.776.222-.258.295-.443.443-.739.148-.295.074-.554-.037-.776-.111-.222-.596-1.439-.817-1.97-.215-.519-.434-.448-.596-.456l-.51-.008c-.177 0-.465.066-.708.332-.243.266-.931.91-.931 2.22 0 1.309.952 2.574 1.085 2.752.133.177 1.873 2.859 4.538 4.009.633.274 1.127.437 1.513.559.637.202 1.215.173 1.673.105.51-.077 1.579-.643 1.802-1.264.223-.62.223-1.152.155-1.263-.066-.111-.243-.177-.51-.311z"/></svg>
      </a>
    </div>
  );
};

/* Helper Components */

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-6 items-start">
    <div className="w-14 h-14 bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
      {icon}
    </div>
    <div>
      <h3 className="font-oswald text-xl font-bold uppercase tracking-tight mb-2 italic leading-none">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; detail: string }> = ({ icon, title, detail }) => (
  <div className="flex gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-1">{title}</p>
      <p className="font-bold text-sm tracking-wide">{detail}</p>
    </div>
  </div>
);

const Input: React.FC<{ label: string; placeholder: string }> = ({ label, placeholder }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black tracking-widest uppercase text-neutral-500">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder}
      className="w-full bg-white border border-neutral-300 p-4 text-sm focus:border-red-600 outline-none transition-colors"
    />
  </div>
);

export default App;
