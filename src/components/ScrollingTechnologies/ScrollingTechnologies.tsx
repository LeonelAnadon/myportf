import {
  For,
  type Component,
  createSignal,
  createEffect,
  Show,
} from "solid-js";
import styles from "./scrollingtechnologies.module.scss";
import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import sparkles from "../../assets/icons/sparkles.svg";
import sparklesLight from "../../assets/icons/sparkles_light.svg";

interface ScrollingProps {
  isDarkMode: boolean;
}

const ScrollingTechnologies: Component<ScrollingProps> = (props) => {
  const [t] = useTransContext();
  const [techArray, setTechArray] = createSignal([]);

  createEffect(() => {
    const translatedArray = t("scrltech.tech", { returnObjects: true });
    setTechArray(translatedArray);
  });

  return (
    <section class={styles.container}>
      <article>
        <For each={techArray()}>
          {(tech, index) => (
            <div>
              <span>
                {tech}
              </span>
            </div>
          )}
        </For>
      </article>
      <article aria-hidden="true">
        <For each={techArray()}>
          {(tech, index) => (
            <div>
              <span>
                {tech}
              </span>
            </div>
          )}
        </For>
      </article>
    </section>
  );
};

export default ScrollingTechnologies;
