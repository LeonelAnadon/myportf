import { createSignal, type Component, createEffect, For } from "solid-js";
import styles from "./separator.module.scss";

const Separator: Component = () => {
  return (
    <div class={styles.container}>
      <div class={styles.sep}></div>
      {/* <div class={styles.sep2}></div> */}
    </div>
  );
};

export default Separator;
