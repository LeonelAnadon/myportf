import { Component } from "solid-js";
import styles from "./spinner.module.scss";

const Spinner: Component = () => {
  return (
    <span class={styles.loader}></span>
  );
};

export default Spinner;
