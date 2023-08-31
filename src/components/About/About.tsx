import { onMount, type Component, createEffect, createSignal } from "solid-js";
import styles from "./about.module.scss";
import { Trans } from "@mbarzda/solid-i18next";
import TechBox from "./TechBox";
import burguerImg from "../../assets/images/burguer.svg";
import { IModalTechData } from "../../interfaces/global";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

const About: Component = (props) => {
  let refAbout1: HTMLParagraphElement | undefined;
  let refAbout2: HTMLParagraphElement | undefined;

  const useVisibilityObserver = createVisibilityObserver({
    threshold: 0.5,
    rootMargin: "-50px",
  });

  const isVisibleP1 = useVisibilityObserver(() => refAbout1);
  const isVisibleP2 = useVisibilityObserver(() => refAbout2);

  return (
    <section class={styles.container}>
      <div>
        <div class={styles.theTextCont}>
          <h2 class={styles.abtitle}>
            <Trans key="about.title" />
          </h2>
          <p
            ref={refAbout1}
            style={{
              opacity: isVisibleP1() ? "1" : "0",
              transform: `translateX(${isVisibleP1() ? "0" : "10rem"})`,
            }}
          >
            <Trans key="about.text" /> <img alt="burguer" src={burguerImg} />
          </p>
          <p
            ref={refAbout2}
            style={{
              opacity: isVisibleP2() ? "1" : "0",
              transform: `translateX(${isVisibleP2() ? "0" : "10rem"})`,
            }}
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
