import React from "react";
import styles from '@/app/page.module.css';

type BeforeLoginTypes = {
    children:React.ReactNode;
    modal:React.ReactNode
}
function Layout({children,modal}:BeforeLoginTypes) {
     return (
         <div className={styles.container}>
             {children}
             {modal}
         </div>
     )
}
export default Layout;