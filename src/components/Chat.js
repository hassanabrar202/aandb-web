import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../utils/ContextProvider';
import {getLocalData} from "../utils/utils";

const Chat = () => {
    const { getUserWithName, userData, sendMessages, getListofMessages,getAllUsers } = useContext(AuthContext);
    const [name, setName] = useState(null);
    const [allUsers, setAllUsers] = useState(null);
    const [receiver, setReceiver] = useState(null);
    const [inputChange, setInputChange] = useState('');
    const [chats, setChats] = useState([]);

    const firebaseUser = getLocalData('firebaseUser')
    useEffect(() => {
        if (receiver?.user_id) {
            const unsubscribe = getListofMessages(receiver.user_id, updateMessages);
            return () => {
                unsubscribe();
            };
        }
    }, [receiver]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allUsers = await getAllUsers();
                console.log(allUsers,'hello all users')
                const data = await getUserWithName('hassan');
                console.log(data,userData);
                if (data?.length) {
                    const filteredUsers =allUsers.filter((usr) => usr.email !== firebaseUser.email)
                    setAllUsers(filteredUsers);
                    handleSetReceiver(filteredUsers[0])
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };


        fetchData();
    }, []);

    const updateMessages = (messages) => {
        const updatedMessages = messages.map(message => ({
            ...message,
            sender: message.member1 === firebaseUser.user_id ? true : false  // Adjust based on your data structure
        }));
        setChats(updatedMessages);
    };

    const handleChangeInput = async (value) => {
        setName(value);
        const data = await getUserWithName(value);
        if (data?.length) {
            setAllUsers(data.filter((usr) => usr.email !== userData.email));
        }
    };

    const handleSetReceiver = (receiverDetails) => {
        setReceiver(receiverDetails);
        getListofMessages(receiverDetails.user_id, updateMessages);
    };

    const onSubmitChats = async (e) => {
        e.preventDefault();
        if (inputChange.trim() === '') return;

        sendMessages(inputChange, receiver.user_id);
        setInputChange('');

        // Add the sent message to the UI
        setChats([...chats, { message: inputChange, sender: true }]);
    };

    console.log("all users",allUsers)

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <div className="w-1/4 bg-white border-r border-gray-300">
                    <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
                        <h1 className="text-2xl font-semibold">Chat Web</h1>
                    </header>
                    <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
                        {/* Render list of users */}
                        {allUsers &&
                            allUsers.map((user) => (
                                <div
                                    key={user.user_id}
                                    className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                                    onClick={() => handleSetReceiver(user)}
                                >
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                                        <img
                                            src={`https://placehold.co/200x/${user.user_id}/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato`}
                                            alt="User Avatar"
                                            className="w-12 h-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">{user.name}</h2>
                                        {/* Optionally display last message */}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="flex-1">
                    <header className="bg-white p-4 text-gray-700">
                        <h1 className="text-2xl font-semibold">{receiver?.name || 'Select a user'}</h1>
                    </header>

                    <div className="h-screen overflow-y-auto p-4 pb-36">
                        {chats.map((chat, index) => (
                            <div
                                key={index}
                                className={`flex mb-4 ${chat.sender ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`flex max-w-96 ${chat.sender ? 'bg-indigo-500 text-white rounded-lg' : 'bg-white text-black rounded-lg'} p-3 gap-3`}
                                >
                                    <p>{chat.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
                        <form onSubmit={onSubmitChats}>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
                                    value={inputChange}
                                    onChange={(e) => setInputChange(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Chat;
