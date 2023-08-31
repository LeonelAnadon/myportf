import type { Component } from "solid-js";
import styles from "./serviceitem.module.scss";
import { IServiceItems } from "../../interfaces/global";

interface ServiceItemProps {
  data: IServiceItems;
}

const ServiceItem: Component<ServiceItemProps> = (props) => {
  return (
    <div class={styles.container} data-aos="zoom-in">
      <div>{/* <h3>React</h3> */}</div>
      <div>
        <h4>{props.data.title}</h4>
        <p>{props.data.desc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
