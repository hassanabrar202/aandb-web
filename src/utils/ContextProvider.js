import React, { createContext, useState, useEffect } from 'react';
import firebaseApp from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {  getFirestore, doc, setDoc, getDoc, collection, getDocs, query, where, addDoc, orderBy ,onSnapshot} from "firebase/firestore";
import {authApi} from "../api/auth";

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {



    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);

    const [userData, setUserData] = useState(null)
    const [dbUserData , setDbUserData] = useState(null)

    const registerUser = (creds) => {
        const { email, password, firstname, lastname,username } = creds;
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                const docref = doc(db, "users", user.uid);
                const userDetail =await setDoc(docref, {
                    user_id: user.uid,
                    name: username,
                    email,
                    age: '',
                    address: "",
                    createdAt: (new Date()).getDate()
                })

                const data = authApi.register(creds)
                console.log(data,"db data")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const loginUser = (creds) => {
        const { email, password } = creds;
        return new Promise((res, rej)=>{
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    const docref = doc(db, "users", user.uid)
                    const userDetail = await getDoc(docref)
                    console.log(userDetail.data());
                    setUserData(userDetail.data())
                    res(userDetail.data())

                    const data = authApi.login(creds)
                    console.log(data,"db data")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    rej(error)
                });
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,async (user) => {
            if (user) {
                const uid = user.uid;
                const docref = doc(db, "users", user.uid)
                const userDetail = await getDoc(docref)
                console.log(userDetail.data());
                setUserData(userDetail.data())
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    },[])

    const getUserWithName = async (name) => {
        return new Promise(async (res, rej)=>{
            const userRef = collection(db, "users");
            console.log(name,"name")
                // , where("name","==",name)
            const usersDoc = await getDocs(query(userRef));
            console.log(usersDoc, 'user docs')
            let users = [];
            usersDoc.forEach(element => {
                console.log(element.data());
                users.push(element.data())
            });
            res(users)
        })
    }

    const sendMessages = async (message, reciever_id) => {
        return new Promise( async (res, rej)=>{
            const chat_id = userData?.user_id > reciever_id ? userData?.user_id+reciever_id : reciever_id+userData?.user_id
            const docRef = doc(db, "chats", chat_id);
            const saveChat = await setDoc(docRef, {
                member1 : userData?.user_id,
                member2 : reciever_id
            })
            const messageRef = collection(docRef, "message")
            const messages =await addDoc(messageRef, {
                message: message,
                member1 : userData?.user_id,
                member2 : reciever_id,
                created_at : Date(),
            })
            res(messages)
        })
    }

    // const getListofMessages = (reciever_id) =>{
    //     return new Promise(async (resolve, reject) => {
    //         const chat_id = userData?.user_id > reciever_id ? userData?.user_id+reciever_id : reciever_id+userData?.user_id;
    //         const docRef = doc(db, "chats", chat_id);
    //         const messageRef = query(collection(docRef, "message"),orderBy('created_at', "asc"))
    //         const messageDocs =await getDocs(messageRef);
    //         let data = []
    //         messageDocs.forEach((message)=>{
    //             console.log(message)
    //             data.push(message.data());
    //         })
    //         resolve(data)
    //     })
    //
    // }

    const getListofMessages = (receiver_id, updateCallback) => {
        const chat_id =
            userData?.user_id > receiver_id
                ? userData?.user_id + receiver_id
                : receiver_id + userData?.user_id;
        const docRef = doc(db, "chats", chat_id);
        const messageRef = query(collection(docRef, "message"), orderBy("created_at", "asc"));

        const unsubscribe = onSnapshot(messageRef, (snapshot) => {
            const data = snapshot.docs.map((message) => message.data());
            updateCallback(data);
        });

        // Return the unsubscribe function to stop listening for updates when needed
        return unsubscribe;
    };

    return (
        <>
            <AuthContext.Provider value={{ registerUser, loginUser, userData, getUserWithName, sendMessages, getListofMessages }}>
                {
                    children
                }
            </AuthContext.Provider>
        </>
    )
}

export default ContextProvider