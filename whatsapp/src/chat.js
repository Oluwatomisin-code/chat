import React, {useState, useEffect} from "react";
import { Avatar } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import "./chat.css";

import io from "socket.io-client";

const socket = io.connect('http://localhost:5000');


function Chat(){
    const [state, setState]= useState({Msg:''});
    const [chat, setChat] = useState([])

    useEffect(()=>{
        socket.on('Message', Msg =>{
            console.log(Msg);
            setChat([...chat,Msg])
        })
    },[chat])

    const onTextChange = e =>{
        setState({...state, [e.target.name]: e.target.value})
    }

    const onMsgSubmit=e=>{
        e.preventDefault();
        const {Msg} = state;
        socket.emit('Message', {Msg});
        setState({Msg:''})
    }
    const renderChat=()=>{
        return chat.map(({Msg}, index)=>(
            <div key={index} className="chat_message">
                <span className='chat_name'>tomisin</span>
                {Msg}
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </div>
        ))
    }

    return(
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>Tomisin Adeyinka</h3>
                    <p>Last Seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">tomisin</span>
                    my message to you
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message chat_receiver">
                    <span className="chat_name">tomisin</span>
                    my message to you
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                {renderChat()}
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form onSubmit={onMsgSubmit}>
                    <input name="Msg" type="text" onChange={e=>onTextChange(e)} value={state.Msg} placeholder="Type a message"/>
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}
export default Chat;