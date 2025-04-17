import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import styles from "./layout.module.css"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout