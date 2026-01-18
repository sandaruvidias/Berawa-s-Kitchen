import { categories } from '../data/menu';

interface MenuTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const MenuTabs = ({ activeCategory, onCategoryChange }: MenuTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            activeCategory === category.id
              ? 'bg-primary-600 text-white shadow-lg scale-105'
              : 'bg-white text-neutral-700 hover:bg-neutral-100 shadow-md hover:shadow-lg'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

