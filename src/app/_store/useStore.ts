"use client"
import {create} from "zustand";

const TabStore =  create(set => ({
    tabState:'good',
    followClick:() => set({tabState:'fol'}),
    goodClick:() => set({tabState: 'good'}),

}))
export default  TabStore;