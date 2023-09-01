import { onMount, type Component, createEffect, createSignal } from "solid-js";
import styles from "./about.module.scss";
import { Trans } from "@mbarzda/solid-i18next";
import TechBox from "./TechBox";
import burguerImg from "../../assets/images/burguer.svg";

const About: Component = (props) => {

  return (
    <section class={styles.container} id="about">
      <div>
        <div class={styles.theTextCont}>
          <h2 class={styles.abtitle}>
            <Trans key="about.title" />
          </h2>
          <p
           data-aos="fade-left"
          >
            <Trans key="about.text" /> <img alt="burguer" src={burguerImg} />
          </p>
          <p
           data-aos="fade-left"
          >
            <Trans key="my_tech.text" />{" "}
          </p>
        </div>
        <div class={`${styles.theTextCont} ${styles.mytech}`}>
          <h2>
            <Trans key="my_tech.title" />
          </h2>
          <TechBox />
        </div>
      </div>
    </section>
  );
};

export default About;
