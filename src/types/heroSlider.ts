export interface SlideItem {
  id: number;
  image: string;
}

export interface SliderControlsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export interface SliderItemProps {
  slide: SlideItem;
}