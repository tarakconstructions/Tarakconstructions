import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo No Bg.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const estimateWhatsAppURL = `https://wa.me/919381476076?text=${encodeURIComponent(`Hello Tarak Constructions Team,

I am interested in constructing my dream house in Visakhapatnam and would like to get a FREE construction estimate.

Please contact me regarding:
🏠 House Construction Consultation
📐 Plot Evaluation & Planning
💰 Budget Estimation
🧱 Construction Services Details
📍 Site Visit Availability

Please share complete details on WhatsApp.

Thank you.`)}`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        link.href.replace('#', '')
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);

        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    const id = href.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        72;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
            : 'bg-white/90 backdrop-blur-md py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* LOGO ONLY */}
            <button
              onClick={() => handleNavClick('#home')}
              className="shrink-0"
            >
              <div className="overflow-hidden flex items-center justify-center">
                <img
                  src={logo}
                  alt="Tarak Constructions Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </div>
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection ===
                      link.href.replace('#', '')
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                    }`}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {link.label}

                  {activeSection ===
                    link.href.replace('#', '') && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-5 h-0.5 rounded-full bg-orange-500" />
                    )}
                </button>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919381476076"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                +91 9381476076
              </a>

              <a
                href={estimateWhatsAppURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/20"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Get Free Estimate
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen
              ? 'max-h-[600px] opacity-100'
              : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() =>
                  handleNavClick(link.href)
                }
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection ===
                    link.href.replace('#', '')
                    ? 'bg-orange-50 text-orange-500'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                  }`}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919381476076"
                className="w-full text-center border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Call Now
              </a>

              <a
                href={estimateWhatsAppURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM BAR */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white shadow-2xl">
        <div className="grid grid-cols-2">
          {/* CALL */}
          <a
            href="tel:+919381476076"
            className="flex items-center justify-center gap-2 py-4 bg-orange-500 text-white font-semibold text-sm"
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>

            Call Now
          </a>

          {/* WHATSAPP */}
          <a
            href={estimateWhatsAppURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-semibold text-sm"
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>

            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}