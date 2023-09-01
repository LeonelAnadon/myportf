import {
  createSignal,
  type Component,
  createEffect,
  Show,
  on,
  onCleanup,
  Match,
  createResource,
} from "solid-js";
import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import styles from "./themodal.module.scss";
import { IFormData, IModalTechData } from "../../interfaces/global";
import Spinner from "../Spinner/Spinner";
import { sendMsg } from "../../services/sendMsg";
import closeIcon from "../../assets/icons/close.svg";

interface ModalProps {
  toggleModal: () => void;
  show: boolean;
  modalTechData?: IModalTechData;
}

const TheModal: Component<ModalProps> = (props) => {
  const [t] = useTransContext();

  const [isShow, setIsShow] = createSignal(false);
  const [msgSended, setMsgSended] = createSignal(false);
  const [isError, setIsError] = createSignal(false);

  const [formData, setFormData] = createSignal<IFormData>({
    name: "",
    email: "",
    msg: "",
  });

  const [sformData, setsFormData] = createSignal<IFormData>({
    name: "",
    email: "",
    msg: "",
  });

  const [data] = createResource(sformData, sendMsg);

  createEffect(() => {
    const c = props.show;
    if (!c) return;
    setTimeout(() => {
      setIsShow(c);
      document.body.classList.add("no-scroll");
    }, 0);

    onCleanup(() => {
      setIsShow(false);
    });
  });

  createEffect(() => {
    if (data() === "ok") {
      setFormData({
        name: "",
        email: "",
        msg: "",
      });
      setMsgSended(true);
    }
    if (data() === "error") {
      setIsError(true);
    }
  });

  const toggleModalOut = () => {
    if (data.loading) return;
    setIsShow(false);
  };
  const toggleModalExit = () => {
    if (!isShow()) {
      document.body.classList.remove("no-scroll");
      props.toggleModal();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setsFormData(formData());
  };

  return (
    <Show when={props.show}>
      <div class={styles.overlay} onClick={() => toggleModalOut()}></div>

      <div
        class={`${styles.popup} ${isShow() ? styles.show : styles.hide}`}
        onTransitionEnd={() => toggleModalExit()}
      >
        <span class={styles.closeBtnContainer}>
          <button onClick={() => toggleModalOut()}>
            <img alt="close" src={closeIcon} />
          </button>
        </span>
        <div>
          <h3>{t("modal.the_text")}</h3>
        </div>
        <div>
          <Show when={isError()}>
            <div class={styles.msgSendedContainer}>
              <b>¡Ups! Algo salió mal</b>
              <p>Por favor intentá nuevamente</p>
              <p>¡Muchas gracias!</p>
              <div class={styles.msgSendedBtnContainer}>
                <button onClick={() => setMsgSended(false)}>Volver</button>
                <button onClick={() => toggleModalOut()}>Cerrar</button>
              </div>
            </div>
          </Show>
          <Show when={msgSended() && !isError()}>
            <div class={styles.msgSendedContainer}>
              <b>El mensaje fue enviado correctamente</b>
              <p>Pronto estaré en contacto</p>
              <p>¡Muchas gracias!</p>
              <div class={styles.msgSendedBtnContainer}>
                <button onClick={() => setMsgSended(false)}>Volver</button>
                <button onClick={() => toggleModalOut()}>Cerrar</button>
              </div>
            </div>
          </Show>
          <Show when={!msgSended() && !isError()}>
            <h4>{t("modal.title")}</h4>
            <form onSubmit={handleSubmit}>
              <div>
                <label>{t("modal.label_name")}</label>
                <input
                  required
                  disabled={data.loading}
                  type="text"
                  value={formData().name}
                  onInput={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div>
                <label>{t("modal.label_email")}</label>
                <input
                  required
                  disabled={data.loading}
                  type="email"
                  value={formData().email}
                  onInput={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div>
                <label>{t("modal.label_msg")}</label>
                <textarea
                  required
                  disabled={data.loading}
                  rows={6}
                  value={formData().msg}
                  onInput={(e) => handleInputChange("msg", e.target.value)}
                />
              </div>
              <button type="submit" disabled={data.loading}>
                <Show when={!data.loading} fallback={<Spinner />}>
                  {t("modal.btn_submit")}
                </Show>
              </button>
            </form>
          </Show>
        </div>
      </div>
    </Show>
  );
};

export default TheModal;
