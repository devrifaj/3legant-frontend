export const navItems = [
  {
    label: "Home",
    route: "/",
    children: [
      { label: "Home style 1", route: "/" },
      { label: "Home style 2", route: "/home-2" },
      { label: "Home style 3", route: "/home-3" },
      { label: "Home style 4", route: "/home-4" },
    ],
  },
  {
    label: "Shop",
    route: "/collections",
    children: [
      { label: "All Categories", route: "/collections" },
      {
        label: "Furniture",
        route: "/collections/furniture",
        children: [
          { label: "Living Room", route: "/collections/furniture/living-room" },
          { label: "Bedroom", route: "/collections/furniture/bedroom" },
          { label: "Office", route: "/collections/furniture/office" },
          { label: "Outdoor", route: "/collections/furniture/outdoor" },
        ],
      },
      {
        label: "Headphones & Air birds",
        route: "/collections/headphones-air-birds",
        children: [
          {
            label: "Wireless Headphones",
            route: "/collections/headphones-air-birds/wireless-headphones",
          },
          {
            label: "Wired Headphones",
            route: "/collections/headphones-air-birds/wired-headphones",
          },
          {
            label: "Air Buds",
            route: "/collections/headphones-air-birds/air-buds",
          },
        ],
      },
      {
        label: "Golf & Sports",
        route: "/collections/golf-sports",
        children: [
          {
            label: "Golf Clothing",
            route: "/collections/sports/golf-clothing",
          },
          { label: "Golf Bats", route: "/collections/golf-sports/golf-bats" },
          { label: "Golf Balls", route: "/collections/golf-sports/golf-balls" },
          { label: "Golf Shoes", route: "/collections/golf-sports/golf-shoes" },
          {
            label: "Accessories",
            route: "/collections/golf-sports/accessories",
          },
        ],
      },
      {
        label: "Men's Winter Fashion",
        route: "/collections/mens-winter-fashion",
        children: [
          {
            label: "Puffers",
            route: "/collections/mens-winter-fashion/puffers",
          },
          {
            label: "Bombers",
            route: "/collections/mens-winter-fashion/bombers",
          },
          {
            label: "Lightweight jackets",
            route: "/collections/mens-winter-fashion/lightweight-jackets",
          },
          {
            label: "Gilets",
            route: "/collections/mens-winter-fashion/gilets",
          },
          {
            label: "Coats",
            route: "/collections/mens-winter-fashion/coats",
          },
          {
            label: "Rainwear",
            route: "/collections/mens-winter-fashion/rainwear",
          },
        ],
      },
    ],
  },
  {
    label: "Product",
    route: "/collections/all",
    children: [
      { label: "All Products", route: "/collections/all" },
      { label: "New Arrival", route: "/collections/new" },
      { label: "Best Selling", route: "/collections/best-selling" },
      { label: "Deals & Offers", route: "/collections/deals" },
    ],
  },
  {
    label: "Contact Us",
    route: "/contact-us",
  },
];
