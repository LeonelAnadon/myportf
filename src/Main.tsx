import {
  createSignal,
  type Component,
  createEffect,
  onCleanup,
} from "solid-js";
import App from "./App";
import { TransProvider, Trans } from "@mbarzda/solid-i18next";
import { resources } from "./i18n/lng";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import GLOBAL from "./constants/global";
import signImg from "./assets/images/imgportaitfirma.png";

const Main: Component = () => {
  return (
    <TransProvider options={{ resources, lng: "es" }}>
      <MetaProvider>
        <Meta name="msapplication-TileColor" content={GLOBAL.TILE_COLOR} />
        <Meta name="robots" content="index, follow" />
        <Meta name="referrer" content="origin-when-cross-origin" />
        <Meta name="title" content={GLOBAL.META_TITLE} />
        <Meta name="keywords" content={GLOBAL.KEYWORDS} />
        <Meta name="author" content={GLOBAL.AUTHOR} />
        <Meta name="language" content={GLOBAL.LANGUAGE} />
        <Meta charset="utf-8" />
        <Meta name="description" content={GLOBAL.DESCRIPTION} />
        <Meta property="og:url" content={GLOBAL.URL} />
        <Meta property="og:title" content={GLOBAL.TITLE} />
        <Meta property="og:image" content={signImg} />
        <Meta property="og:image:type" content="image/jpeg" />
        <Meta property="og:image:width" content="1000" />
        <Meta property="og:image:height" content="379" />
        <Link rel="canonical" href={GLOBAL.URL} />
        <Title>{GLOBAL.TITLE}</Title>
        <App />
      </MetaProvider>
    </TransProvider>
  );
};

export default Main;
