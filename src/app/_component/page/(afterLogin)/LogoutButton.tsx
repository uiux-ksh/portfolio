"use client"

import style from "../../css/(afterLogin)/logoutButton.module.css";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

 function LogoutButton() {
     const router = useRouter();
     const {data:me} = useSession();
     console.log(me);

    const onLogout = () => {
        signOut({redirect:false}).then(() => {
            router.replace('/');
        })
    };

    if(!me?.user) {
        return null;
    }

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <img src={me.user.image} alt={me.user.email}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.user?.name}</div>
                <div>@{me.user?.email}</div>
            </div>
        </button>
    )
}
export default LogoutButton;