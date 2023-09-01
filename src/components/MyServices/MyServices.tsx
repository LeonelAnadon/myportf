import { createSignal, type Component, createEffect, For } from "solid-js";
import styles from "./myservices.module.scss";
import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import ServiceItem from "./ServiceItem";

const MyServices: Component = () => {
  const [t] = useTransContext();
  const [servicesArray, setServicesArray] = createSignal([]);

  createEffect(() => {
    const translatedArray = t("myservices.services", { returnObjects: true });
    setServicesArray(translatedArray);
  });

  return (
    <section class={styles.container} id="services">
      <div>
        <div class={styles.skewContainer} >
          <h2>{t("myservices.title")}</h2>
        </div>
        <div class={styles.servicesContainer}>
          <For each={servicesArray()}>
            {(data) => <ServiceItem data={data} />}
          </For>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
