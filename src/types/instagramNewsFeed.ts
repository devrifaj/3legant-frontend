export interface InstagramNewsFeedImage {
  _id: string;
  imageUrl: string;
}

export interface InstagramNewsFeedProps {
  variant?: "home2" | "home3" | "home4";
  images: InstagramNewsFeedImage[];
}
