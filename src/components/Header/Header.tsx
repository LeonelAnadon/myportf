import {
  createEffect,
  type Component,
  onCleanup,
  Show,
  createSignal,
} from "solid-js";
import styles from "./header.module.scss";
import signBlack from "../../assets/sign_black.png";
import signWhite from "../../assets/sign_white.png";
import langIcon from "../../assets/icons/language.svg";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";
import menuIcon from "../../assets/icons/menu.svg";
import { Trans, useTransContext } from "@mbarzda/solid-i18next";

interface HeaderProps {
  toggleDrawer: () => void;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: Component<HeaderProps> = (props) => {
  const [, i18n] = useTransContext();
  const [currentLanguage, setCurrentLanguage] = createSignal<string>(
    i18n.getI18next().language
  );

  const handleToggleLng = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(i18n.getI18next().language);
  };

  return (
    <header class={styles.container}>
      <div class={styles.imgContainer}>
        <Show when={!props.isDarkMode}>
          <img alt="leonel anadon firma" src={signBlack} />
        </Show>
        <Show when={props.isDarkMode}>
          <img alt="leonel anadon firma" src={signWhite} />
        </Show>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">
              <Trans key="nav.about" children={"Sobre mi"} />
            </a>
          </li>
          <li>
            <a href="#services">
              <Trans key="nav.services" children={"Mis servicios"} />
            </a>
          </li>
          <li>
            <a href="#contact">
              <Trans key="nav.contact" children={"Contactame"} />
            </a>
          </li>
        </ul>
      </nav>
      <div class={styles.btnContainers}>
        <Show when={currentLanguage() === "es"}>
          <button
            type="button"
            onClick={() => handleToggleLng("en")}
            title="English"
          >
            <img alt="seleccionar idioma" src={langIcon} />
            EN
          </button>
        </Show>
        <Show when={currentLanguage() === "en"}>
          <button
            type="button"
            onClick={() => handleToggleLng("es")}
            title="Español"
          >
            <img alt="seleccionar idioma" src={langIcon} />
            ES
          </button>
        </Show>
        <Show when={props.isDarkMode}>
          <button type="button" onClick={props.toggleDarkMode}>
            <img alt="seleccionar tema claro" src={sunIcon} />
          </button>
        </Show>
        <Show when={!props.isDarkMode}>
          <button type="button" onClick={props.toggleDarkMode}>
            <img alt="seleccionar tema claro" src={moonIcon} />
          </button>
        </Show>
        <button class={styles.menuHidden} onClick={() => props.toggleDrawer()}>
          <img alt="" src={menuIcon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
