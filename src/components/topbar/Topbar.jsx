import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@mui/icons-material/";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWarpper">
        <div className="topLeft">
          <span className="logo">TestAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://image.shutterstock.com/image-photo/isolated-portrait-smiling-business-woman-260nw-684509272.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
