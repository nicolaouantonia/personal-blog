import React from "react";
import styles from "./Bio.module.css";
const bioIcon = require("../routes/about/me.jpg");

interface BioProps {
  className?: string;
}

function Bio(props: BioProps) {
  return (
    <div>
      <div
        className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
      >
        <img src={bioIcon} alt="Me" />
        <p>
          Hey! I am{" "}
          <a href="https://mobile.twitter.com/AntwniaNicolaou" target="_blank">
            @AntwniaNicolaou
          </a>
          , a passionate Web Developer from Cyprus🇨🇾 and I love React and Node.
          <br />
          Through this blog I share my experiences and the things that I’ve
          learned!
        </p>
      </div>
      <div className={`${styles.FullWidthBio}`}>
        <blockquote className={`${styles.FullWidthBioBlockQuote}`}>
          This blog is more like a personal diary and you all have the keys to
          it!
        </blockquote>
        <br />I hope you will find something interesting here! 🤔 And if you find, please feel free to <b>share my articles</b> on any social media channel!
        <br />
        <br />
        PS: As I have just started writing, I'd love to hear your comments on my
        posts. Any feedback would be much appreciated! 🙏
      </div>
    </div>
  );
}

export default Bio;
