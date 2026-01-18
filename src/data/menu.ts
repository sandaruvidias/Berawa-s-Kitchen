export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'lunch' | 'dinner' | 'drinks' | 'desserts';
  tags?: ('vegan' | 'spicy' | 'gluten-free')[];
  image?: string;
}

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: '1',
    name: 'Nasi Goreng Traditional',
    description: 'Traditional Indonesian fried rice with chicken, prawns, and a sunny-side-up egg',
    price: 85000,
    category: 'breakfast',
    tags: ['spicy'],
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Banana Pancake Stack',
    description: 'Fluffy pancakes with caramelized bananas and coconut syrup',
    price: 75000,
    category: 'breakfast',
    tags: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Balinese Breakfast Bowl',
    description: 'Organic rice, tempe, vegetables, and sambal with fresh herbs',
    price: 65000,
    category: 'breakfast',
    tags: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Avocado Toast Deluxe',
    description: 'Sourdough bread, smashed avocado, poached eggs, and cherry tomatoes',
    price: 70000,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop',
  },
  
  // Lunch
  {
    id: '5',
    name: 'Beef Rendang',
    description: 'Slow-cooked beef in rich coconut curry with aromatic spices',
    price: 125000,
    category: 'lunch',
    tags: ['spicy'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
  },
  {
    id: '6',
    name: 'Grilled Fish with Sambal Matah',
    description: 'Fresh catch of the day with Balinese raw sambal and steamed rice',
    price: 145000,
    category: 'lunch',
    tags: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
  },
  {
    id: '7',
    name: 'Tempeh & Tofu Curry',
    description: 'Creamy coconut curry with crispy tempeh and silken tofu',
    price: 95000,
    category: 'lunch',
    tags: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop',
  },
  {
    id: '8',
    name: 'Balinese Chicken Satay',
    description: 'Marinated chicken skewers with peanut sauce and rice cakes',
    price: 110000,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop',
  },
  {
    id: '9',
    name: 'Gado-Gado Salad',
    description: 'Mixed vegetables, tempeh, and hard-boiled eggs with peanut dressing',
    price: 85000,
    category: 'lunch',
    tags: ['vegan'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
  },
  
  // Dinner
  {
    id: '10',
    name: 'Babi Guling Set',
    description: 'Traditional Balinese roast pork with crackling, vegetables, and rice',
    price: 165000,
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop',
  },
  {
    id: '11',
    name: 'Seafood Platter',
    description: 'Grilled prawns, squid, and fish with sambal and vegetables',
    price: 185000,
    category: 'dinner',
    tags: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
  },
  {
    id: '12',
    name: 'Lamb Curry with Potatoes',
    description: 'Tender lamb slow-cooked in aromatic curry sauce',
    price: 155000,
    category: 'dinner',
    tags: ['spicy'],
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop',
  },
  {
    id: '13',
    name: 'Vegetarian Nasi Campur',
    description: 'Mixed rice with tempeh, tofu, vegetables, and coconut sambal',
    price: 105000,
    category: 'dinner',
    tags: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
  },
  
  // Drinks
  {
    id: '14',
    name: 'Fresh Coconut Water',
    description: 'Chilled young coconut straight from the shell',
    price: 35000,
    category: 'drinks',
    tags: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1528610566362-d141f52f3df3?w=600&h=400&fit=crop',
  },
  {
    id: '15',
    name: 'Bali Kopi',
    description: 'Traditional Balinese coffee served hot or iced',
    price: 40000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
  },
  {
    id: '16',
    name: 'Turmeric & Ginger Tonic',
    description: 'Fresh turmeric, ginger, lemon, and honey',
    price: 45000,
    category: 'drinks',
    tags: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=400&fit=crop',
  },
  {
    id: '17',
    name: 'Fresh Mango Smoothie',
    description: 'Blended with yogurt and a hint of mint',
    price: 55000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1505252585461-04c97a0a0e16?w=600&h=400&fit=crop',
  },
  {
    id: '18',
    name: 'Tropical Fruit Juice',
    description: 'Mix of pineapple, orange, and passion fruit',
    price: 45000,
    category: 'drinks',
    tags: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop',
  },
  
  // Desserts
  {
    id: '19',
    name: 'Black Rice Pudding',
    description: 'Traditional Balinese dessert with coconut milk and palm sugar',
    price: 55000,
    category: 'desserts',
    tags: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
  },
  {
    id: '20',
    name: 'Coconut Pancake',
    description: 'Warm pancakes filled with palm sugar and grated coconut',
    price: 65000,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
  },
  {
    id: '21',
    name: 'Ice Cream Selection',
    description: 'Three scoops: coconut, pandan, and salted caramel',
    price: 75000,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
  },
];

export const categories = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' },
] as const;

