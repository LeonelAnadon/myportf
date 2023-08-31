import type { Component } from "solid-js";
import App from "./App";
import { TransProvider, Trans } from "@mbarzda/solid-i18next";
import { resources } from "./i18n/lng";

const Main: Component = () => {
  return (
    <TransProvider options={{ resources, lng: "es" }}>
      <App />
    </TransProvider>
  );
};

export default Main;
