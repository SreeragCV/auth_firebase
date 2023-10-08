import './App.css';
import {auth, db} from './config/firebase';
import { collection, doc, setDoc, getDocs, addDoc, deleteField, updateDoc, deleteDoc, increment } from "firebase/firestore"; 
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'




//for creating a collection
const citiesRef = collection(db, "cities");

await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

//to add data using 'id'
await setDoc(doc(collection(db, "Users"), "John"), {
  name: "John,", age: 22, from: "San Fransico"
})


// for simply adding a data without 'id'

//await addDoc(collection(db, "cities"), {
//name: "Tokyo",
//country: "Japan",capital: false, population: 3900000,
//regions: ["west_coast", "socal"] 
//});


//for getting all datas
    const querySnapshot = await getDocs(collection(db, "cities"));
    querySnapshot.forEach((doc) => {
     // console.log(doc.id, " => ", doc.data());
    });

    

// Remove the 'capital' field from the document
const cityRef = doc(db, 'cities', 'BJ');
await updateDoc(cityRef, {
    population: increment(500)
});

 


deleteDoc(doc(db, "cities", "USsMhHmYqgDSBW4CFT8l"))
deleteDoc(doc(db, "cities", "XakaEgMJHAA1tYgXtJoW"))
deleteDoc(doc(db, "cities", "Ym2tQVAjUZpvrCaTMVeq"))
deleteDoc(doc(db, "cities", "p9CGear7mkJH1YI3LgFE"))
deleteDoc(doc(db, "cities", "EEPmltUepE6AQUyiiple"))
deleteDoc(doc(db, "cities", "qMPHJw4Hj0cradIHkqrH"))
deleteDoc(doc(db, "cities", "rOQ0eRvtXwitwQkIoILJ"))
deleteDoc(doc(db, "cities", "uSMFpWFY3e3KunXpUQMf"))

















function App() {


  return (
    <div className="App">

      <button onClick={()=> {createUserWithEmailAndPassword(auth, 'sm28222@gmail.com', '123456')
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });}}>Click ME
      </button>




      <button onClick={()=> { deleteDoc(doc(db, "cities", "DC"))}}>delete me
      </button>








    </div>
  )
}

export default App;
