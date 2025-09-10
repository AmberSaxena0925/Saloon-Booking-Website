import React from 'react';
import { Users, Award, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist",
      experience: "12 years",
      image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Maria Rodriguez",
      role: "Spa Specialist",
      experience: "8 years",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Emily Chen",
      role: "Color Expert",
      experience: "10 years",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600"> Luxe Salon</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Luxe Salon has been the premier destination for luxury beauty services. 
              Our team of certified professionals combines traditional techniques with cutting-edge innovations 
              to deliver exceptional results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-6">
                  <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">Satisfied Clients</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-6">
                  <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-amber-600" />
                <span className="text-gray-700">100% Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-amber-600" />
                <span className="text-gray-700">Premium Products</span>
              </div>
            </div>
          </div>

          {/* Right Content - Team */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Expert Team</h3>
            <div className="space-y-6">
              {team.map((member, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-amber-600 font-medium">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.experience} experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}