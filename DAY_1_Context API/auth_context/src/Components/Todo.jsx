import React from 'react'
import { AuthContext } from '../Context/AuthContext';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext, useState } from 'react';
import styles from './Todo.module.css';
import axios from "axios";

const dark = { backgroundColor:"black", color: "white" }
const light = { backgroundColor: "white", color: "black" }

function Todo() {
    const { token, setToken } = useContext(AuthContext);
    const { theme, setTheme } = useContext(ThemeContext);
    
      const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const [formData, setFormData] = useState({});

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    
    const authorize = async () =>
    {
        const { data } = await axios.post('https://reqres.in/api/Login', formData)
        setToken(data.token);
        console.log(data);
    }
    
    const authorize1 = () =>
    {
        setToken("");
    }
    
    return token ? (
        <div style={theme === 'dark' ? dark : light} className={theme}>
            <div className={styles.navbar} >
                <div className={styles.Head}>Context API</div>
                <div>
            <button className={styles.btn} onClick={authorize1}>Logout</button>
            <label className={styles.switch}>
                 <input type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`} onClick={handleThemeChange}></span>
                    </label>
                    </div>
            </div>
                <h1 className={styles.inside}>Welcome {formData.email}</h1>
        </div>
    ) :
        (
            <div style={theme === 'dark' ? dark : light} >
                <div className={styles.navbar1} >
                    <div className={styles.Head}>Context API</div>
                    <div>
            <label className={styles.switch}>
                 <input type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`} onClick={handleThemeChange}></span>
                        </label>
                        </div>
                </div>
                <div className={`${styles.box} ${styles.inside}`}>
                    <h2>Please Login</h2>
            <input type="text" name="email" placeholder="Enter Username" onChange={handleChange} />
                    <br />
                    <br/>
            <input type="password" name="password" placeholder="Enter Password " onChange={handleChange} />
                    <br />
                    <br/>
            <button className={styles.btn} onClick={authorize}>Login</button>
                </div>
            </div>
        )
}

export default Todo
