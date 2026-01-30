
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}
