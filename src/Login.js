import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './filebase';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const onChangeEmail = value => setEmail(value);
    const onChangePassword = value => setPassword(value);
    const onChangeFullName = value => setFullName(value);
    const onChangePhotoURL = value => setPhotoURL(value);
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }))
        })
        .catch(error => alert(error));
    };
    const register = () => {
        if (!fullName || !email || !password) {
            return alert('Please fill your information');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: fullName,
                    photoURL: photoURL
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: fullName,
                        photoURL: photoURL
                    }));
                });
            })
            .catch(error => alert(error));
    };
    return (
        <div className="login">
            <img src="/linkedin-banner.jpg" />
            <form >
                <input placeholder="Full name(required if registering)" type="text" onChange={e => onChangeFullName(e.target.value)} value={fullName} />
                <input placeholder="Photo Url (optoinal)" type="text" onChange={e => onChangePhotoURL(e.target.value)} value={photoURL} />
                <input placeholder="Email" type="email" onChange={e => onChangeEmail(e.target.value)} value={email} />
                <input placeholder="Password" type="password" onChange={e => onChangePassword(e.target.value)} value={password} />
                <button type="submit" onClick={loginToApp} >Sign In</button>
            </form>
            <p>Not a member?<span onClick={register}>Register Now</span></p>
        </div>
    )
}
