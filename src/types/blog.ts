export interface Blog {
  _id: string;
  title: string;
  image: string;
  link: string;
}

export interface BlogProps {
  blogs: Blog[];
  variant?: "home1" | "home3" | "home4";
}
