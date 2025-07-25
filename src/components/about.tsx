import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            About ILKKA
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/team.png"
                alt="Our Team"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by a team of passionate professionals, <span className="font-bold text-primary">ILKKA</span> is built on the twin pillars of <span className="font-semibold">“Care & Quality.”</span> Our mission is to elevate healthcare standards, making superior medical services accessible and affordable for everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At our core, we blend <span className="font-semibold">innovation, compassion, and expertise</span> to deliver exceptional healthcare solutions. We are committed to empowering individuals and communities to lead longer, healthier, and more fulfilling lives through continuous improvement and a relentless pursuit of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
