import firebase from "../../FirebaseModule";
import EventEmitter from "events";

let auth = firebase.auth(),
    db = firebase.firestore(),
    st = firebase.storage().ref();

class DBStore extends EventEmitter {
    constructor() {
        super();


    }

    async uploadBlob(blob, blob_name, metadata, path) {
        return new Promise((resolve, reject) => {
            let blobPut = st.child(path + blob_name).put(blob, metadata);
            blobPut.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log(error);
                reject("Failure to upload " + blob_name);
            },
            () => {
                blobPut.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('Blob available at', downloadURL);
                    resolve({
                        name: blob_name,
                        url: downloadURL
                    });
                });
            });
        })
    }

    async uploadLetter(blob, metadata) {
        return new Promise((resolve, reject) => {
            let letter_ref = db.collection("Letters").doc(),
                letter_id = letter_ref.id;
            this.uploadBlob(blob, letter_id, metadata, "Letters/").then((blob_obj) => {
                letter_ref.set({
                    url: blob_obj.url,
                    id: letter_id,
                    time: firebase.firestore.FieldValue.serverTimestamp()
                    // TODO: add any other data to upload to firebase!!! i.e geolocation data
                }).then(() => {
                    resolve();
                });
            }).catch((error) => {
                reject(error);
            });
        });
    }

}

let dbstore = new DBStore();
export default dbstore;