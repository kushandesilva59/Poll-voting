import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sider = () => {

    const { collapseSidebar, rtl } = useProSidebar();


    return (
        <div style={({ height: "100vh" }, { display: "flex", flexDirection: "row-reverse" })}>
            <Sidebar rtl={true} style={{ height: "100vh", position: "absolute"}}>
                <Menu>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {
                            collapseSidebar();
                        }}
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        <h2>Categories</h2>
                    </MenuItem>

                    <MenuItem icon={<HomeOutlinedIcon />}>Social</MenuItem>
                    <MenuItem icon={<PeopleOutlinedIcon />}>Technology</MenuItem>
                    <MenuItem icon={<ContactsOutlinedIcon />}>Sport</MenuItem>
                    <MenuItem icon={<ReceiptOutlinedIcon />}>Entertainment</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />}>Education</MenuItem>
                    <MenuItem icon={<CalendarTodayOutlinedIcon />}>Politics</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default Sider