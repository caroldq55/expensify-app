import * as firebase from "firebase";
import {googleAuthProvider} from "../firebase/firebase";

export function* startLoginHandler() {
    try {
        yield firebase.auth().signInWithPopup(googleAuthProvider);
    } catch (e) {

    }
}

export function* startLogoutHandler() {
    try {
        yield firebase.auth().signOut();
    } catch (e) {

    }
}