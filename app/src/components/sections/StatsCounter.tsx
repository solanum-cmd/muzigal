import React from 'react';

const StatsCounter: React.FC = () => {
  const stats = [
    {
      value: '400+',
      label: 'Teachers',
    },
    {
      value: '10,000+',
      label: 'Students enrolled',
    },
    {
      value: '40,000+',
      label: 'Classes completed',
    },
  ];

  return (
    <section 
      className="w-full relative overflow-hidden flex flex-col items-center justify-center pt-[80px] pb-[80px]"
      style={{ 
        backgroundColor: '#fef3f7', // Light pink/lavender background as seen in images
        minHeight: '400px'
      }}
    >
      {/* Background Decor element (abstract music sheet/shape) */}
      <div 
        className="absolute top-0 left-0 w-[200px] h-[200px] opacity-10 pointer-events-none select-none translate-x-[-20%] translate-y-[-20%]"
        style={{
          backgroundColor: '#d63384',
          borderRadius: '40px',
          zIndex: 0
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[150px] h-[150px] opacity-10 pointer-events-none select-none translate-x-[30%] translate-y-[30%]"
        style={{
          backgroundColor: '#d63384',
          borderRadius: '40px',
          zIndex: 0
        }}
      />

      <div className="container relative z-10 max-w-[1200px] px-6 text-center">
        <h2 
          className="font-display font-bold text-[#132742] mb-[64px] text-[32px] md:text-[36px] leading-[1.2] tracking-tight"
          style={{ 
            fontSize: '32px', 
            fontWeight: 700, 
            lineHeight: 1.3,
            marginBottom: '64px'
          }}
        >
          The future of music education is here
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center"
            >
              <div 
                className="font-display font-bold text-[#132742] mb-1"
                style={{ 
                  fontSize: '48px', 
                  lineHeight: '1.2',
                  fontWeight: 700 
                }}
              >
                {stat.value}
              </div>
              <div 
                className="font-display text-[#132742] opacity-80"
                style={{ 
                  fontSize: '16px', 
                  fontWeight: 400,
                  lineHeight: '1.6'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;