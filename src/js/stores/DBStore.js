import firebase from "../../FirebaseModule";
import EventEmitter from "events";

let auth = firebase.auth(),
    db = firebase.firestore(),
    st = firebase.storage();

class DBStore extends EventEmitter {
    constructor() {
        super();


    }
    
}

let dbstore = new DBStore();
export default dbstore;