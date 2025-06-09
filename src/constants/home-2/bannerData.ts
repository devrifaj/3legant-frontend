import { home2BannerImg } from "@/images";

export const home2BannerData = {
    bannerImg: home2BannerImg.src,
    bannerContent: {
        title: "Hurry up! 40% OFF",
        subtitle: "PROMOTION",
        description: "Thousands of high tech are waiting for you",
        buttonText: "Shop Now",
        buttonLink: "/products",
        endTime: new Date().getTime() + 3 * 24 * 60 * 60 * 1000
    },
    bannerStyles: {
        bgColor: "bg-[#FFAB0066]",
        title: "text-primary-black",
        subtitle: "text-secondary-blue",
        description: "text-primary-black",
        button: "text-white bg-neutral-7",
    },
    variant: "home2",
}