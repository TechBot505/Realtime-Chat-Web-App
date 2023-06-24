import { useState, useContext, useEffect } from "react";

import {Context} from '../context/store';

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() => import("react-chat-engine").then((module) => module.ChatEngine));

const MessageFormSocial = dynamic(() => import("react-chat-engine").then((module) => module.MessageFormSocial));

const Chats = () => {
    const { username, secret } = useContext(Context);
    const [showChat, setShowChat] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if(typeof document !== null) {
            setShowChat(true);
        }
    })

    useEffect(() => {
        if(username.length === 0 || secret.length === 0) router.push('/');
    })

    if(!showChat) return <div />

    return ( 
        <div className="background">
            <div className="shadow">
                <ChatEngine 
                    height="calc(100vh - 200px)"
                    projectID={process.env.PROJECT_ID}
                    userName={username}
                    userSecret={secret}
                    renderNewMessageForm={() => <MessageFormSocial />}
                />
            </div>
        </div>
    )
};

export default Chats;