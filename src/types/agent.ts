export interface Agent {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
  rating: number;
  reviewCount: number;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  capabilities: string[];
  useCases: string[];
  featured: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}