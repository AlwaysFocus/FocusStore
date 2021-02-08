import Link from "next/link";
import {useContext} from "react";
import {useRouter} from "next/router";
import AuthContext from "../context/AuthContext"

import styles from "../styles/header.module.css";

export default function Header() {

    const router = useRouter()
    const isHome = router.pathname === "/"

    const goBack = (e) => {
        e.preventDefault()
        router.back()
    }


    const {user} = useContext(AuthContext)
  return (
    <div className={styles.nav}>
        {!isHome && 
        <div className={styles.back}>
        <a href="#" onClick={goBack}>{"<"}Back</a>
        </div>}
      <div className={styles.title}>
        <Link href="/">
          <a>
            <h1>Focus Commerce</h1>
          </a>
        </Link>
      </div>

      <div className={styles.auth}>
          {user ? (
              <Link href="/account">
                  <a className={styles.userIcon}>View Profile</a>
              </Link>
          ): (<Link href="/login">
            <a>Login</a>
          </Link>)}
      </div>
    </div>
  );
}
