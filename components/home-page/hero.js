import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <Image
        className={classes.image}
        src="/images/site/john.jpeg"
        alt="An image showing John"
        width={300}
        height={300}
      />
      <h1>Hi, I'm John</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
