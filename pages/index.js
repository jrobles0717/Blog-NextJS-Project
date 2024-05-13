import FeaturedPosts from "../components/home-page/featured-posts";
import { Fragment } from "react";
import Hero from "../components/home-page/hero";

function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started With NestJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production - it makes building fullstack React app",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started With NestJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production - it makes building fullstack React app",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started With NestJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production - it makes building fullstack React app",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started With NestJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production - it makes building fullstack React app",
      date: "2022-02-10",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
