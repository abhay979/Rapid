import { useState } from "react";
import { TabItem } from "./TabItem";
import { Divider } from "@mui/material";
export const Tabs = ({ list, activeTab, onTabSwitch}) => {
    let active = activeTab === '' ? list[0] : activeTab;
    console.log(active);
    return (
        <div >
            <div>
                {list.map((item, index) => {
                    return (
                       <> <TabItem 
                            title={item}
                            key={index}
                            index={index}
                            active={active === item}
                            setActive={onTabSwitch}
                            />
                            <Divider/></>
                    )
                })}
            </div>
        </div>
    )
}