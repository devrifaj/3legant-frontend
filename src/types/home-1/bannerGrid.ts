export interface BannerItem {
  title: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
  imageClassName: string;
}

export interface BannerGridProps {
  data: BannerItem[];
  variant?: "home1" | "home2" | "home3"
}