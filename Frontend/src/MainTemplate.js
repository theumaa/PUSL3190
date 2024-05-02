import styles from "./MainTemplate.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

function MainTemplate() {
  const [user, setUser] = useState(
    sessionStorage.getItem("auth") ? sessionStorage.getItem("user") : false
  );

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className={styles.MainTemplate}>
        <NavBar />
        <div className={styles.Body}>
          <div className={styles.ColorArea}>
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default MainTemplate;
