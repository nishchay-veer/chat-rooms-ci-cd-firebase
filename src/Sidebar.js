import React from "react";
import './Sidebar.css';
// import {Avatar} from '@material-ui/core';
// import { Avatar  } from '@mui/material'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import db from './firebase';
import { useState, useEffect } from "react";
import Chat from './Chat';
import { useStateValue } from "./StateProvider";
function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    const [rooms , setRooms] = useState([]);
    useEffect(() => {
        const unsubscribe =  db.collection("rooms").onSnapshot((snapshot) => 
            setRooms(snapshot.docs.map((doc) => ({
                id : doc.id,
                data : doc.data(),
            }))

            )
        );
        return () => {
            unsubscribe();
        }
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src = {user?.photoURL}/>
                <div className="header__right">
                    <IconButton>

                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>


                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="search__main">
                    <SearchIcon />
                    <input type="text" placeholder="Search or start a new chat"></input>
                </div>
            </div>
            <div className="sidebar__chats">
                <Chat addNewChat/>
                {rooms.map((room) => (
                    <Chat key={room.id} id ={room.id} name={room.data.name}/>
                ))}
                
            </div>


        </div>
    )
}
export default Sidebar