import { Component } from "solid-js";
import styles from "./spinnerinit.module.scss";

const SpinnerInit: Component = () => {
  return (
    <span class={styles.loader}></span>
  );
};

export default SpinnerInit;
