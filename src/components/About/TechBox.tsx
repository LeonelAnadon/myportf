import {
  createSignal,
  type Component,
  createEffect,
  For,
  Index,
} from "solid-js";
import styles from "./techbox.module.scss";
import { useTransContext } from "@mbarzda/solid-i18next";
import { IModalTechData } from "../../interfaces/global";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

const TechBox: Component = () => {
  const [t] = useTransContext();
  const [techboxArray, setTechboxArray] = createSignal([]);
  const [techboxArrayBack, setTechboxArrayBack] = createSignal([]);

  createEffect(() => {
    const translatedArray = t("techbox.front.list", { returnObjects: true });
    const translatedArrayBack = t("techbox.back.list", { returnObjects: true });
    setTechboxArray(translatedArray);
    setTechboxArrayBack(translatedArrayBack);
  });

  return (
    <div class={styles.container}>
      <div data-aos="fade-left">
        <h3>{t("techbox.front.title")}</h3>
        <div>
          <For each={techboxArray()} fallback={<span>Cargando...</span>}>
            {(element) => {
              return <span data-aos="fade-left">{element}</span>;
            }}
          </For>
        </div>
      </div>
      <div data-aos="fade-left">
        <h3>{t("techbox.back.title")}</h3>
        <div>
          <For each={techboxArrayBack()} fallback={<span>Cargando...</span>}>
            {(element) => {
              return <span data-aos="fade-left">{element}</span>;
            }}
          </For>
        </div>
      </div>
    </div>
  );
};

export default TechBox;
