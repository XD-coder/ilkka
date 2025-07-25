import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-muted-foreground mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 rounded bg-input border border-border focus:ring-2 focus:ring-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-muted-foreground mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 rounded bg-input border border-border focus:ring-2 focus:ring-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-muted-foreground mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full p-3 rounded bg-input border border-border focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 rounded hover:bg-primary/90 transition-colors">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Addis Ababa, Ethiopia</h3>
              <p className="text-muted-foreground">+25111 273 4554</p>
              <p className="text-muted-foreground">+251 91 366 7537</p>
              <p className="text-muted-foreground mt-2">Gulele Subcity, Woreda 09, House no new/Droga building</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Somaliland</h3>
              <p className="text-muted-foreground">+252 634 958 444</p>
              <p className="text-muted-foreground">+252 637 611 171</p>
              <p className="text-muted-foreground mt-2">Cabaaye Bus Station, Downtown, Hargeysa, Somaliland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
