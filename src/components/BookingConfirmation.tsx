import React from 'react';
import { CheckCircle, Calendar, Clock, User, Phone, Mail, MapPin, Printer, Download, Share2 } from 'lucide-react';

interface BookingData {
  confirmationNumber: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  price: string;
}

interface BookingConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingData;
}

export default function BookingConfirmation({ isOpen, onClose, bookingData }: BookingConfirmationProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a simple text version for download
    const confirmationText = `
LUXE SALON - BOOKING CONFIRMATION

Confirmation Number: ${bookingData.confirmationNumber}
Date: ${new Date().toLocaleDateString()}

APPOINTMENT DETAILS:
Service: ${bookingData.service}
Date: ${bookingData.date}
Time: ${bookingData.time}
Price: ${bookingData.price}

CUSTOMER INFORMATION:
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone}

SALON INFORMATION:
Luxe Salon
123 Beauty Street
Downtown, NY 10001
Phone: (555) 123-4567
Email: info@luxesalon.com

IMPORTANT NOTES:
- Please arrive 15 minutes before your appointment
- Cancellations must be made 24 hours in advance
- Bring a valid ID for your appointment
- We look forward to serving you!

Thank you for choosing Luxe Salon!
    `;

    const blob = new Blob([confirmationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `luxe-salon-confirmation-${bookingData.confirmationNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Luxe Salon Appointment Confirmation',
      text: `My appointment at Luxe Salon is confirmed! Service: ${bookingData.service}, Date: ${bookingData.date} at ${bookingData.time}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Confirmation details copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-t-2xl text-center">
          <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h2>
          <p className="text-white/90 text-lg">Your appointment has been successfully scheduled</p>
        </div>

        {/* Confirmation Details */}
        <div className="p-8">
          {/* Confirmation Number */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 mb-8 border border-amber-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirmation Number</h3>
              <div className="text-3xl font-bold text-amber-600 tracking-wider">
                {bookingData.confirmationNumber}
              </div>
              <p className="text-sm text-gray-600 mt-2">Please save this number for your records</p>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-amber-600 mr-2" />
                Appointment Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 rounded-full p-2">
                    <Calendar className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Service</p>
                    <p className="text-gray-600">{bookingData.service}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 rounded-full p-2">
                    <Calendar className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Date</p>
                    <p className="text-gray-600">{bookingData.date}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 rounded-full p-2">
                    <Clock className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Time</p>
                    <p className="text-gray-600">{bookingData.time}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 rounded-full p-2">
                    <span className="text-amber-600 font-bold text-sm">$</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Price</p>
                    <p className="text-gray-600">{bookingData.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="h-6 w-6 text-amber-600 mr-2" />
                Customer Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 rounded-full p-2">
                    <User className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Name</p>
                    <p className="text-gray-600">{bookingData.name}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 rounded-full p-2">
                    <Mail className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">{bookingData.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 rounded-full p-2">
                    <Phone className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">{bookingData.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Requests */}
          {bookingData.message && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Special Requests</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">{bookingData.message}</p>
              </div>
            </div>
          )}

          {/* Salon Information */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-6 w-6 text-amber-600 mr-2" />
              Salon Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900">Luxe Salon</p>
                <p className="text-gray-600">123 Beauty Street</p>
                <p className="text-gray-600">Downtown, NY 10001</p>
              </div>
              <div>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: info@luxesalon.com</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Important Notes</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Please arrive 15 minutes before your appointment time</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Cancellations must be made at least 24 hours in advance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Please bring a valid ID for your appointment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>A confirmation email has been sent to your email address</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={handlePrint}
              className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Printer className="h-5 w-5" />
              <span>Print Confirmation</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download</span>
            </button>
            <button
              onClick={handleShare}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Close Confirmation
          </button>
        </div>
      </div>
    </div>
  );
}