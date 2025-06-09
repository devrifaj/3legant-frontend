export type BannerProps = {
  bannerData: {
    bannerImg: string;
    bannerContent: {
      title: string;
      subtitle: string;
      description: string;
      buttonText: string;
      buttonLink: string;
      endTime?: number;
    };
    bannerStyles: {
      bgColor: string;
      title:string;
      subtitle: string;
      description: string;
      button: string;
    };
    variant?: "home2" | "home3" | "home4";
  };
};
