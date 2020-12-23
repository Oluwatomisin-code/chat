import { Avatar } from '@material-ui/core';
import React from 'react';
import "./sidebarchat.css";

function sidebarChat () {
    return <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h2>Tomisin</h2>
                <p>This is my last msg to you</p>
            </div>
        </div>
    ;
}

export default sidebarChat;
