import { Show, type Component } from "solid-js";
import styles from "./footer.module.scss";
import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import signBlack from "../../assets/sign_black.png";
import signWhite from "../../assets/sign_white.png";
import gitLogo from "../../assets/icons/logo-github.svg";
import linkedinLogo from "../../assets/icons/logo-linkedin.svg";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: Component<FooterProps> = (props) => {
  const theYear = new Date().getFullYear();

  const [t] = useTransContext();

  return (
    <footer class={styles.container}>
      <div>
        <div class={styles.footerDetails}>
          <Show when={!props.isDarkMode}>
            <img alt="" src={signBlack} />
          </Show>
          <Show when={props.isDarkMode}>
            <img alt="" src={signWhite} />
          </Show>
          <div class={styles.sep}></div>
          <div>
            <div>
              <p>{t("footer.text_1")}</p>
              <p>{t("footer.text_2")}</p>
              <p>{t("footer.text_3")}</p>
            </div>
          </div>
          <div class={styles.sep}></div>
          <div class={styles.rrssContainer}>
            <a href="https://github.com/LeonelAnadon" target="_blank">
              <img alt="" src={gitLogo} />
            </a>
            <a href="https://www.linkedin.com/in/leonelanadon/" target="_blank">
              <img alt="" src={linkedinLogo} />
            </a>
          </div>
        </div>
        <div class={styles.copyContainer}>
          <p>
            &copy; {theYear} Leonel Anadón. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
