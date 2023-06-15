export interface MovieViews {
  id: string;
  name: string;
  image: string;
  likes: number;
  views: number;
}

export interface Movie {
  id: string;
  name: string;
  images: string;
  likes: string;
  views: string;
  reviews: Reviews[];
}

interface Reviews {
  id: string;
  comment: string;
  userName: string;
  stars: number;
}

interface User {
  id: string;
  name: string;
  reviews: Reviews[];
}
