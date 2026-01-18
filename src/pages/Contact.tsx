import { useState, FormEvent } from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const contactInfo = {
  address: 'Jl. Pantai Berawa, Canggu, Bali',
  phone: '+62 812-3456-7890',
  email: 'hello@berawaskitchen.com',
  hours: 'Mon–Sun: 8:00 AM – 10:30 PM',
};

const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1!2d115.12!3d-8.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzknMDAuMCJTIDExNcKwMDcnMTIuMCJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="pt-16 lg:pt-20 pb-20">
      <Container>
        <SectionTitle
          title="Get in Touch"
          subtitle="We'd love to hear from you. Reach out anytime!"
          centered
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-6">
                Visit Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Address</h4>
                    <p className="text-neutral-600">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Phone</h4>
                    <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Opening Hours</h4>
                    <p className="text-neutral-600">{contactInfo.hours}</p>
                    <p className="text-sm text-neutral-500 mt-1">Kitchen closes at 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Berawa's Kitchen Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-neutral-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-neutral-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-neutral-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>

              {showSuccess && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

