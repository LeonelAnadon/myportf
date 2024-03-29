import type { Component } from "solid-js";
import styles from "./serviceitem.module.scss";
import { IServiceItems } from "../../interfaces/global";

interface ServiceItemProps {
  data: IServiceItems;
}

const ServiceItem: Component<ServiceItemProps> = (props) => {
  return (
    <div class={styles.container} data-aos="fade-left">
      <div>{/* <h3>React</h3> */}</div>
      <div>
        <strong itemprop="name">{props.data.title}</strong>
        <p itemprop="description">{props.data.desc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
