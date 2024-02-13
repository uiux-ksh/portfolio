"use client";
import {useState} from "react";
import style from './tab.module.css';
import TabStore from "@/app/_store/useStore";

function  Tab() {
    const { tabState,followClick,goodClick } = TabStore(state => state);




    return (
        <div className={style.homeFixed}>
            <div className={style.homeText}>홈</div>
            <div className={style.homeTab}>
                <div onClick={goodClick}>
                    추천
                    <div className={style.tabIndicator} hidden={tabState === 'fol'}></div>
                </div>
                <div onClick={followClick}>
                    팔로우 중
                    <div className={style.tabIndicator} hidden={tabState === 'good'}></div>
                </div>
            </div>

        </div>
    )
}
export default  Tab;