export interface BrandLogoSlider {
  _id: number;
  name: string;
  imgUrl: string;
}

export interface BrandLogoSliderProps {
  data: BrandLogoSlider[];
  variant: "home2" | "home4";
}
