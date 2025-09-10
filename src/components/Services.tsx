import React from 'react';
import { Scissors, Sparkles, Heart, Palette, Clock, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Expert cuts, coloring, and styling for all hair types",
      services: ["Haircuts & Styling", "Hair Coloring", "Highlights & Lowlights", "Hair Treatments"],
      price: "Starting at $65",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Facial Treatments",
      description: "Rejuvenating facials for glowing, healthy skin",
      services: ["Deep Cleansing Facial", "Anti-Aging Treatment", "Hydrating Facial", "Acne Treatment"],
      price: "Starting at $85",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Spa Packages",
      description: "Complete relaxation and wellness experiences",
      services: ["Full Body Massage", "Aromatherapy", "Hot Stone Massage", "Couples Spa"],
      price: "Starting at $120",
      image: "https://images.pexels.com/photos/3757951/pexels-photo-3757951.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: Palette,
      title: "Makeup Services",
      description: "Professional makeup for all occasions",
      services: ["Bridal Makeup", "Special Events", "Makeup Lessons", "Photoshoot Makeup"],
      price: "Starting at $75",
      image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: Star,
      title: "Nail Services",
      description: "Complete nail care and artistic designs",
      services: ["Manicure & Pedicure", "Gel Nails", "Nail Art", "French Manicure"],
      price: "Starting at $35",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: Clock,
      title: "Express Services",
      description: "Quick beauty touch-ups for busy schedules",
      services: ["Express Facial", "Quick Blowout", "Eyebrow Shaping", "Lip Treatment"],
      price: "Starting at $25",
      image: "https://images.pexels.com/photos/3997952/pexels-photo-3997952.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, each designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <service.icon className="h-6 w-6 text-amber-600" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                  <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}