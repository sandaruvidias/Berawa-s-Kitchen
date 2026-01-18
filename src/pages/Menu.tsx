import { useState } from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { MenuTabs } from '../components/MenuTabs';
import { Button } from '../components/Button';
import { Download } from 'lucide-react';
import { menuItems } from '../data/menu';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('breakfast');

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const formatPrice = (price: number) => {
    return `IDR ${price.toLocaleString('id-ID')}`;
  };

  const tagColors = {
    vegan: 'bg-green-100 text-green-700',
    spicy: 'bg-red-100 text-red-700',
    'gluten-free': 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="pt-16 lg:pt-20 pb-20">
      <Container>
        <SectionTitle
          title="Our Menu"
          subtitle="Discover authentic Balinese flavors and international favorites"
          centered
        />

        <div className="mt-12 text-center mb-8">
          <a href="/menu.pdf" download className="inline-flex items-center gap-2">
            <Button variant="outline">
              <Download size={18} className="mr-2" />
              Download PDF Menu
            </Button>
          </a>
        </div>

        <MenuTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                    <span className="text-primary-600 text-4xl">🍽️</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-serif font-semibold text-neutral-900">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-primary-600 whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </div>
                <p className="text-neutral-600 mb-4 leading-relaxed">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          tagColors[tag] || 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-neutral-500">
            No items available in this category.
          </div>
        )}
      </Container>
    </div>
  );
};

