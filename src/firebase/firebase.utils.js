import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc  } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";





const firebaseConfig =  {
    apiKey: "AIzaSyCHcQTkeWiBrInGGJ8h5LGRSJdJBY8vfyw",
    authDomain: "crown-shop-39417.firebaseapp.com",
    projectId: "crown-shop-39417",
    storageBucket: "crown-shop-39417.appspot.com",
    messagingSenderId: "35850292614",
    appId: "1:35850292614:web:5b40797ffe76a6eee73007",
    measurementId: "G-JHVWB7TWRB"
  }


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const docRef = doc(db, `users/${userAuth.uid}`);
    const docSnap = await getDoc(docRef); 
    // console.log(docSnap);
    // console.log('user Auth:', userAuth);
    // console.log('The uid: ', userAuth.uid);
    if (!docSnap.exists()) {
      const {displayName, email} = userAuth;
      const dateCreated = new Date;
      try{

        await setDoc(docRef, {
          //react is smart enough to do displayName: displayNameValue
          displayName,
          email,
          dateCreated,
          ...additionalData
        });

      }catch(error){
        console.log('Error creating user: ', error.message)
      }
    }

    return docRef;
  }



  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const provider = new GoogleAuthProvider();

  export const auth = getAuth();
  export const signInWithGoogle = () => signInWithPopup(auth, provider);
