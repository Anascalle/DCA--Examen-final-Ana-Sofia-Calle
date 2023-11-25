
import { initializeApp } from "firebase/app";
import { setDoc, getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import { collection, query, where, onSnapshot,getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addInfo = async (info:any)=>{
   try {
    const information = collection(db, "information");
    await setDoc( information {
        ...info
   })
console.log()
       }
    catch (error) {
    console.error(error)
   }

}

 export const getinfo  = async () =>{
    try {
        const information = collection(db, "information");
        const post : any =[]

        const querySnapshot = await getDocs(information);
        querySnapshot.forEach((doc) => {
           const info = doc.data();
           post.push= {
            id: doc.id
           }
        });
    } catch (error) {
        console.error(error);
    }
}
export default{
    addInfo,
    getinfo,
}