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

const storedLng = localStorage.getItem("lng");
const initialLng = storedLng ? JSON.parse(storedLng) : "es";

const Header: Component<HeaderProps> = (props) => {
  const [, i18n] = useTransContext();
  const [currentLanguage, setCurrentLanguage] =
    createSignal<string>(initialLng);

  createEffect(() => {
    const localStorageHandler = () => {
      localStorage.setItem("lng", JSON.stringify(currentLanguage()));
    };
    localStorageHandler();

    onCleanup(() => {
      localStorageHandler();
    });
  });

  createEffect(() => {
    i18n.changeLanguage(initialLng);
  });

  const handleToggleLng = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(i18n.getI18next().language);
  };

  return (
    <header class={styles.container}>
      <div class={styles.imgContainer}>
        <Show when={!props.isDarkMode}>
          <img width={96} alt="leonel anadon firma" src={signBlack} />
        </Show>
        <Show when={props.isDarkMode}>
          <img width={96} alt="leonel anadon firma" src={signWhite} />
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
            aria-label={`Seleccionar idioma ${currentLanguage()}`}
            type="button"
            onClick={() => handleToggleLng("en")}
            title="English"
          >
            <img width={96} alt="seleccionar idioma" src={langIcon} />
            EN
          </button>
        </Show>
        <Show when={currentLanguage() === "en"}>
          <button
            aria-label={`Seleccionar idioma ${currentLanguage()}`}
            type="button"
            onClick={() => handleToggleLng("es")}
            title="Español"
          >
            <img width={96} alt="Seleccionar idioma" src={langIcon} />
            ES
          </button>
        </Show>
        <Show when={props.isDarkMode}>
          <button
            aria-label="Seleccionar tema claro"
            type="button"
            onClick={props.toggleDarkMode}
          >
            <img width={96} alt="seleccionar tema claro" src={sunIcon} />
          </button>
        </Show>
        <Show when={!props.isDarkMode}>
          <button
            aria-label="Seleccionar tema oscuro"
            type="button"
            onClick={props.toggleDarkMode}
          >
            <img width={96} alt="seleccionar tema oscuro" src={moonIcon} />
          </button>
        </Show>
        <button aria-label="Abrir menu" class={styles.menuHidden} onClick={() => props.toggleDrawer()}>
          <img width={96} alt="" src={menuIcon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
