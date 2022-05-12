import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import './Chat.css';
import db from './firebase';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from "react";
function Chat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');
    useEffect(() => {
        if (id) {
            db.collection("rooms").doc(id).collection('messages')
                .orderBy("timestamp", 'desc')
                .onSnapshot((snapshot) => (
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                ));
        }
    }, [id]);
    useEffect(() => { setSeed(Math.floor(Math.random() * 5000)) }, [])
    const createChat = () => {
        const roomName = prompt('Please enter a valid name for chat room.');
        if (roomName) {
            //...
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="chatBlock">
                <Avatar src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} />
                <div className="chatBlock__info">
                    <h4>{name}</h4>
                    <p>{messages[0]?.message}</p>
                </div>

            </div>

        </Link>

    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Create a new Chat room</h2>
        </div>
    )
}
export default Chat;