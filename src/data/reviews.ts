export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    rating: 5,
    text: 'Absolutely incredible food! The beef rendang was the best I\'ve had outside of Indonesia. The atmosphere is relaxed and the staff are wonderful. Can\'t wait to come back!',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'James Chen',
    rating: 5,
    text: 'Authentic Balinese cuisine with a modern twist. The seafood platter is a must-try. Great value for money and the location near the beach is perfect.',
    date: '2024-01-10',
  },
  {
    id: '3',
    name: 'Emma Thompson',
    rating: 5,
    text: 'Loved the vegetarian options! The tempeh curry was outstanding and the black rice pudding for dessert was the perfect ending. Highly recommend for anyone visiting Canggu.',
    date: '2024-01-08',
  },
];

