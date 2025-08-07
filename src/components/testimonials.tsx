'use client';

import React from 'react';

const testimonialsData = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Family Physician',
    image: '/testimonials/doctor1.jpg',
    content: 'ILKKA Healthcare provides exceptional medical supplies that I trust for my patients. Their products are reliable, accurate, and competitively priced.',
    rating: 5
  },
  {
    name: 'Ahmed Hassan',
    role: 'Pharmacy Owner',
    image: '/testimonials/pharmacy1.jpg',
    content: 'As a pharmacy owner, I appreciate ILKKA\'s commitment to quality and their excellent customer service. They consistently deliver on time and exceed expectations.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    role: 'Home Care Patient',
    image: '/testimonials/patient1.jpg',
    content: 'The blood pressure monitor I bought from ILKKA has been incredibly helpful for managing my health at home. Easy to use and very accurate.',
    rating: 5
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Cardiologist',
    image: '/testimonials/doctor2.jpg',
    content: 'ILKKA\'s monitoring devices are top-notch. I recommend their products to all my patients who need reliable home monitoring solutions.',
    rating: 5
  },
  {
    name: 'Fatima Al-Zahra',
    role: 'Nurse Practitioner',
    image: '/testimonials/nurse1.jpg',
    content: 'Working in healthcare, I need equipment I can trust. ILKKA consistently provides high-quality products that meet professional standards.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Clinic Manager',
    image: '/testimonials/manager1.jpg',
    content: 'ILKKA Healthcare has been our trusted partner for medical supplies. Their range of products and professional service make them our go-to supplier.',
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by healthcare professionals and patients across Ethiopia and Somaliland
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-primary to-primary/60">
                  <div className="w-full h-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <StarRating rating={testimonial.rating} />
              
              <p className="text-muted-foreground mt-4 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-primary font-medium">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
