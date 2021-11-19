import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styles from "./Todo.module.css";

const dark = { backgroundColor: "black", color: "white" };
const light = { backgroundColor: "white", color: "black" };

function Todo() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={theme === "light" ? light : dark} className={styles.body}>
      <div className={styles.box}>
        <h1> MyDashboard </h1>
        {/* <button className={styles.btn} onClick={handleThemeChange}>DarkMode</button> */}
        <label className={styles.switch}>
          <input type="checkbox" />
          <span
            className={`${styles.slider} ${styles.round}`}
            onClick={handleThemeChange}
          ></span>
        </label>
      </div>

      <div className={styles.block}>
        <div className={styles.line}>
          <h1>Active Users</h1>
          <h1>For August 2020</h1>
        </div>

        <div className={styles.line}>
          <h3>Nrupul Dev</h3>
          <h3>...</h3>
        </div>
        <div className={styles.line}>
          <div>Professional level 15</div>
          <div>4723 Points</div>
        </div>

        <div className={styles.line}>
          <h3>Sandhya</h3>
          <h3>...</h3>
        </div>
        <div className={styles.line}>
          <div>Professional level 11</div>
          <div>2339 Points</div>
        </div>

        <div className={styles.line}>
          <h3>Elon Tusk</h3>
          <h3>...</h3>
        </div>
        <div className={styles.line}>
          <div>Professional level 6</div>
          <div>1884 Points</div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
