import styles from "components/mobile-app-bar/MobileAppBar.module.scss";
import { ReactComponent as ArrowDown } from "images/icon-arrow-down.svg";
import remindersIcon from "images/icon-reminders.svg";
import planningIcon from "images/icon-planning.svg";
import calendarIcon from "images/icon-calendar.svg";
import todoIcon from "images/icon-todo.svg";
import closeMenuIcon from "images/icon-close-menu.svg";
import { useState } from "react";

type Props = {
  open: boolean;
  closeMobileMenu: () => void;
};

export default function MobileAppBar(props: Props) {
  let [openDropdown1, setOpenDropdown1] = useState(false);
  let [openDropdown2, setOpenDropdown2] = useState(false);
  const openDropdown1ClassName = openDropdown1 ? styles['open-dropdown'] : "";
  const openDropdown2ClassName = openDropdown2 ? styles['open-dropdown'] : "";
  const openClassName = props.open ? styles.open : "";
  return (
    <>
      <div className={`${styles.container} ${openClassName}`}>
        <div className={styles.actions}>
          <img
            onClick={props.closeMobileMenu}
            src={closeMenuIcon}
            alt="close menu icon"
          />
        </div>
        <div
          className={`${styles["dropdown-button"]} ${openDropdown1ClassName}`}
          onClick={() => setOpenDropdown1((prev) => !prev)}
        >
          <div className={styles["dropdown-button-content"]}>
            <span>Features</span>
            <ArrowDown />
          </div>
          <div className={styles.dropdown}>
            <div className={styles["dropdown-item"]}>
              <img src={todoIcon} alt="icon" />
              <span>Todo List</span>
            </div>
            <div className={styles["dropdown-item"]}>
              <img src={calendarIcon} alt="icon" />
              <span>Calendar</span>
            </div>
            <div className={styles["dropdown-item"]}>
              <img src={remindersIcon} alt="icon" />
              <span>Reminders</span>
            </div>
            <div className={styles["dropdown-item"]}>
              <img src={planningIcon} alt="icon" />
              <span>Planning</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles["dropdown-button"]} ${openDropdown2ClassName}`}
          onClick={() => setOpenDropdown2((prev) => !prev)}
        >
          <div className={styles["dropdown-button-content"]}>
            <span>Company</span>
            <ArrowDown />
          </div>
          <div className={styles.dropdown}>
            <div className={styles["dropdown-item"]}>
              <span>History</span>
            </div>
            <div className={styles["dropdown-item"]}>
              <span>Our Team</span>
            </div>
            <div className={styles["dropdown-item"]}>
              <span>Blog</span>
            </div>
          </div>
        </div>
        <a href="google">Careers</a>
        <a href="google">About</a>
        <a href="google" className={styles.login}>
          Login
        </a>
        <a href="google" className={styles.register}>
          Register
        </a>
      </div>
      <div onClick={props.closeMobileMenu} className={`${styles.overlay} ${openClassName}`}></div>
    </>
  );
}
