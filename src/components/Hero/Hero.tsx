import type { Component } from "solid-js";
import styles from "./hero.module.scss";
import { Trans } from "@mbarzda/solid-i18next";
import looperImg from "../../assets/images/looper.svg";

const Hero: Component = () => {
  return (
    <section
      class={styles.container}
      itemscope
      itemtype="http://schema.org/WebPage"
    >
      <div itemprop="name">
        <h2>
          <Trans key="hero.sub" children="HI THERE, I'M LEONEL" />
        </h2>
        <h1>
          <Trans key="hero.title" children={"FRONT END DEVELOPER"} />
          <span>{" </>"}</span>
        </h1>
      </div>
      <span class={styles.scrollIndicator}>&#94;</span>
      <img class={styles.bgImage} alt="" src={looperImg} />
    </section>
  );
};

export default Hero;
