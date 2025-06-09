import { home3BannerImg } from "@/images";

export const home3BannerData = {
    bannerImg: home3BannerImg.src,
    bannerContent: {
        title: "Hurry up! 40% OFF",
        subtitle: "PROMOTION",
        description: "Thousands of high tech are waiting for you",
        buttonText: "Shop Now",
        buttonLink: "/products",
        endTime: new Date().getTime() + 3 * 24 * 60 * 60 * 1000
    },
    bannerStyles: {
        bgColor: "bg-neutral-7",
        title: "text-neutral-1",
        subtitle: "text-secondary-green",
        description: "text-neutral-1",
        button: "text-neutral-7 bg-secondary-green",
    },
    variant: "home3",
}