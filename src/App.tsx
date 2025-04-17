import React, { useState, useEffect } from 'react';
import { Building2, BarChart as ChartBar, Shield, Users, Briefcase, Target, BookOpen, LineChart, ChevronRight, Phone, Mail, MapPin,Wallet, Calculator, FileCheck, Lightbulb, Workflow, Award, Coins, Cpu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const heroSlides = [
    {
      title: "Smarter Money Moves for a Changing World",
      subtitle: "Guiding your business through confident financial decisions",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
      position: "center"
    },
    {
      title: "Managing Partner",
      subtitle: "Anthony Kamunya, CPA - ICPAK No. 29818,Education-B. Comm, KCA University",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2070",
      position: "top"
    },
    {
      title: "Experience",
      subtitle: "Anthony has over nine years of rich experience in accounting, auditing, and taxation. His journey from Senior Accountant at EKV Consultancy to key roles at Freedom Airline and Avion Energy hones his ability to navigate complex financial landscapes.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
      position: "center"
    },
    {
      title: "Expertise",
      subtitle: "With active membership in ICPAK, he combines academic excellence with practical expertise. His proven track record in managing diverse tax and audit consultancy assignments across various sectors positions him as a trusted advisor.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2070",
      position: "center"
    }
  ];

  const aboutContent = {
    intro: {
      title: "Who We Are",
      content: "At ToneyGlad Consultancy Ltd, we're more than just number crunchers. We're your partners in financial success, offering a blend of expertise, innovation, and personalized service that sets us apart in the world of certified public accounting."
    },
    promise: {
      title: "Our Promise",
      items: [
        "We don't just meet standards; we set them. Our commitment to excellence drives us to deliver:",
        "Cutting-edge auditing solutions",
        "Strategic tax planning",
        "Comprehensive accounting services",
        "Insightful business advisory"
      ]
    },
    difference: {
      title: "The ToneyGlad Difference",
      items: [
        {
          title: "Tailored Approach",
          description: "No two businesses are alike, and neither are our solutions."
        },
        {
          title: "Forward-Thinking",
          description: "We anticipate tomorrow's challenges."
        },
        {
          title: "Client-Centric",
          description: "Your success is our success. Period."
        }
      ]
    },
    whyChoose: {
      title: "Why Choose ToneyGlad?",
      items: [
        "Expertise: A team of seasoned professionals at your service.",
        "Innovation: Cutting-edge solutions for modern business challenges.",
        "Integrity: Unwavering commitment to ethical practices.",
        "Client Focus: Your goals are our priority.",
        "Comprehensive Services: A one-stop-shop for all your financial needs."
      ]
    }
  };

  const aboutTabs = [
    {
      title: "Target Market",
      content: "We serve a diverse range of clients from startups to established enterprises, focusing on businesses seeking comprehensive financial solutions. Our target market includes companies in various sectors looking for strategic financial guidance, compliance support, and growth optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "Competitive Advantage",
      content: "Our unique blend of industry expertise, personalized service, and innovative solutions sets us apart. We leverage cutting-edge technology while maintaining the personal touch that clients value, ensuring superior service delivery and measurable results.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    },
    {
      title: "Key Partnerships",
      content: "Strategic alliances with leading financial institutions, technology providers, and industry experts enable us to deliver comprehensive solutions. Our partnerships enhance our service capabilities and provide added value to our clients.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80"
    },
    {
      title: "Impact & Sustainability",
      content: "We're committed to sustainable business practices and creating positive social impact. Our initiatives focus on environmental responsibility, community development, and promoting financial literacy across communities.",
      image: "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?auto=format&fit=crop&q=80"
    }
  ];

  const services = [
    {
      title: "Audit & Assurance",
      icon: Shield,
      description: "Comprehensive audit and assurance services ensuring compliance and accuracy.",
      details: [
        "External Audit Services",
        "Internal Audit Support",
        "Compliance Reviews",
        "Risk Assessment",
        "Financial Statement Audits",
        "Special Purpose Audits"
      ]
    },
    {
      title: "Tax Advisory",
      icon: LineChart,
      description: "Strategic tax planning and compliance services for optimal financial outcomes.",
      details: [
        "Tax Planning & Strategy",
        "Corporate Tax Compliance",
        "International Tax Services",
        "Transfer Pricing",
        "Tax Dispute Resolution",
        "VAT Consulting"
      ]
    },
    {
      title: "Accounting Services",
      icon: BookOpen,
      description: "Full-spectrum accounting solutions for business success.",
      details: [
        "Bookkeeping Services",
        "Financial Reporting",
        "Management Accounts",
        "Payroll Processing",
        "Account Reconciliation",
        "Financial Analysis"
      ]
    },
    {
      title: "Business Advisory",
      icon: Briefcase,
      description: "Expert guidance for business growth and optimization.",
      details: [
        "Strategic Planning",
        "Business Valuation",
        "Merger & Acquisition",
        "Due Diligence",
        "Performance Improvement",
        "Risk Management"
      ]
    },
    {
      title: "Payroll Services",
      icon: Wallet, // or use another relevant Lucide icon like 'DollarSign' or 'CreditCard'
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
      description: "Accurate and compliant payroll processing tailored to your business.",
      details: [
        "Salary Processing",
        "Tax & Statutory Deductions",
        "Payslip Generation",
        "Employee Benefits Management",
        "Compliance Reporting",
        "Payroll Audits"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={scrollToHome} className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
                ToneyGlad Consultancy Ltd
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={scrollToHome} className="text-gray-700 hover:text-blue-900 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-900 transition-colors">Services</button>
              <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-blue-900 transition-colors">Industries</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-900 transition-colors">Contact</button>
              <button onClick={() => scrollToSection('services')} className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors">
                Get Started
              </button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button onClick={scrollToHome} className="block w-full text-left py-2 text-gray-700 hover:text-blue-900">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-900">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-900">Services</button>
              <button onClick={() => scrollToSection('industries')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-900">Industries</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-900">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <header className="relative min-h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover filter blur-[2px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
                  <h1 className="text-3xl sm:text-2xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 mb-12 animate-fade-in-delay leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto text-lg"
                    >
                      Get Started
                      <ChevronRight className="inline-block ml-2 w-6 h-6" />
                    </button>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all w-full sm:w-auto text-lg"
                    >
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </header>

      <section id="about" className="py-24 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover filter blur-sm opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {/* Who We Are */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{aboutContent.intro.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutContent.intro.content}
              </p>
            </div>

            {/* Our Promise */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">{aboutContent.promise.title}</h3>
              <ul className="space-y-4">
                {aboutContent.promise.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The ToneyGlad Difference */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">{aboutContent.difference.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aboutContent.difference.items.map((item, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center">
                    <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose ToneyGlad */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">{aboutContent.whyChoose.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutContent.whyChoose.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
         {/* tabs information */}
         <div className="relative z-20 max-w-9xl mx-auto px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12"></h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {aboutTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === index
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">{aboutTabs[activeTab].title}</h3>
            <p className="text-gray-700 leading-relaxed">{aboutTabs[activeTab].content}</p>
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-white to-transparent" />

      <section id="services" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all ${
                    activeService === index
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <service.icon className={`w-8 h-8 ${
                      activeService === index ? 'text-white' : 'text-blue-600'
                    }`} />
                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className={`text-sm ${
                        activeService === index ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">{services[activeService].title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {services[activeService].details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-blue-50 to-transparent" />

      <section id="industries" className="py-32 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Industries background"
            className="w-full h-full object-cover filter blur-sm opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Financial Services',
              'Agribusiness',
              'Real Estate & Construction',
              'Hospitality & Tourism',
              'Information & Communication Technology',
              'Non-Governmental Organizations',
              'Fashion & Retail',
              'Security & Risk Management'
            ].map((industry, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center group">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-medium text-gray-800 group-hover:text-blue-900 transition-colors">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-transparent to-white" />

      <section id="contact" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Connect With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Office Location</p>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+254123456789" className="text-gray-600 hover:text-blue-900">+254 123 456 789</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@toneyglad.com" className="text-gray-600 hover:text-blue-900">info@toneyglad.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ToneyGlad Consultancy</h3>
              <p className="text-blue-200">Your trusted partner in financial success</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('industries')} className="hover:text-white transition-colors">Industries</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                {services.map((service, index) => (
                  <li key={index}>
                    <button onClick={() => {
                      scrollToSection('services');
                      setActiveService(index);
                    }} className="hover:text-white transition-colors">
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <a href="mailto:info@toneyglad.com" className="flex items-center hover:text-white transition-colors">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>info@toneyglad.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+254123456789" className="flex items-center hover:text-white transition-colors">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+254 123 456 789</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 ToneyGlad Consultancy Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;