import React from 'react';
import heroImg from '../assets/img/hero/img001.svg';

const Hero: React.FC = () => {
  const trustIndicators = [
    { icon: "🌍", text: "Alcance Global" },
    { icon: "🎯", text: "Resultados Garantizados" },
    { icon: "🤝", text: "Seguimiento Directo" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-primary via-primary to-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[60%] bg-secondary/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start space-y-8 max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse mr-2"></span>
              <span className="text-gold text-sm font-medium tracking-wide">Asesoría Legal Integral</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Tu respaldo experto en <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-goldDark text-glow">derecho migratorio</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
              Estrategia legal de alto nivel con un enfoque humano, ágil y de resultados garantizados.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-2">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold text-primary font-bold text-lg text-center hover:bg-white hover:shadow-[0_0_25px_rgba(233,193,82,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#agendar"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary/30 border border-white/10 text-white font-semibold text-lg text-center backdrop-blur-sm hover:bg-secondary/50 hover:border-white/30 transition-all duration-300"
              >
                Agendar asesoría
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/10 w-full">
              <div className="flex flex-wrap items-center gap-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <span className="text-xl">{indicator.icon}</span>
                    <span className="text-sm font-medium">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            {/* Image Glow/Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-secondary/30 rounded-3xl blur-2xl transform scale-95 opacity-70"></div>
            
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={heroImg}
                alt="Andrés Soto - Abogado de Derecho Migratorio"
                className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              
              {/* Optional Floating Badge overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">Andrés Soto</p>
                    <p className="text-gold text-sm font-medium">Abogado Especialista</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
