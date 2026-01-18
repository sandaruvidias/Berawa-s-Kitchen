import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Clock, Star, UtensilsCrossed, Heart, Sparkles } from 'lucide-react';
import { menuItems } from '../data/menu';
import { reviews } from '../data/reviews';

const whatsappLink = 'https://wa.me/6281234567890';
const googleReviewLink = 'https://g.page/r/CYexample123/review';

const featuredDishes = menuItems.filter((item) => 
  ['1', '5', '10'].includes(item.id)
);

const valueProps = [
  {
    icon: UtensilsCrossed,
    title: 'Authentic Flavors',
    description: 'Traditional recipes passed down through generations, crafted with care and premium ingredients.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is prepared fresh daily by our passionate team who truly care about your dining experience.',
  },
  {
    icon: Sparkles,
    title: 'Perfect Ambiance',
    description: 'Relaxed beachside setting where you can unwind and enjoy the best of Balinese hospitality.',
  },
];

export const Home = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
            alt="Berawa's Kitchen Restaurant"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.style.background = 'linear-gradient(135deg, #fef7ed 0%, #f8bd6d 100%)';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        {/* Hero Content */}
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
              Taste the True Flavors of{' '}
              <span className="text-primary-400">Bali</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-md">
              Experience authentic Balinese cuisine in the heart of Canggu. 
              Fresh ingredients, traditional recipes, and warm hospitality await you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="w-full sm:w-auto shadow-2xl">
                  View Menu
                </Button>
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-2xl">
                  Reserve Table
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Today's Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionTitle title="Today's Highlights" subtitle="Chef's specially selected dishes" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  {dish.image ? (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-primary-100 to-primary-200" />
                  )}
                  <div className="absolute inset-0 bg-neutral-800/10 group-hover:bg-neutral-800/5 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      IDR {dish.price.toLocaleString('id-ID')}
                    </span>
                    {dish.tags && dish.tags.length > 0 && (
                      <div className="flex gap-2">
                        {dish.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu">
              <Button variant="outline">View Full Menu</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why People Love Us */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <Container>
          <SectionTitle title="Why People Love Us" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Opening Hours & Contact */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-neutral-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="text-primary-600" size={28} />
                <h3 className="text-2xl font-serif font-semibold text-neutral-900">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-2 text-neutral-700">
                <p className="text-lg font-medium">Mon–Sun: 8:00 AM – 10:30 PM</p>
                <p className="text-sm text-neutral-600">Kitchen closes at 10:00 PM</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-neutral-50 to-primary-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Star className="text-primary-600" size={28} />
                <h3 className="text-2xl font-serif font-semibold text-neutral-900">
                  Quick Contact
                </h3>
              </div>
              <div className="space-y-3 text-neutral-700">
                <p>+62 812-3456-7890</p>
                <p className="text-sm">Jl. Pantai Berawa, Canggu, Bali</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4"
                >
                  <Button size="sm">Message Us</Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <Container>
          <SectionTitle title="What Our Guests Say" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < review.rating ? 'fill-primary-400 text-primary-400' : 'text-neutral-300'}
                    />
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <span className="font-semibold text-neutral-900">{review.name}</span>
                  <span className="text-sm text-neutral-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Leave a Review</Button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

