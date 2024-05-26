// components/Notification.js
import { useState } from "react";
import styles from "./Notification.module.css";

const NotificationC = ({ message, type, show, onClose }) => {
  if (!show) return null;

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <p>{message}</p>
    </div>
  );
};

export default NotificationC;
