export interface SlideItem {
  id: number;
  image: string;
}

export interface SliderItemProps {
  slide: SlideItem;
}

export interface SliderControlsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}
