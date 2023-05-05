import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCvtv_MlU-nY13pVD9Vc9JKKjD82ffihzQ",
  authDomain: "crud-practise-57114.firebaseapp.com",
  projectId: "crud-practise-57114",
  storageBucket: "crud-practise-57114.appspot.com",
  messagingSenderId: "640098991200",
  appId: "1:640098991200:web:483545619854e199581705",
  databaseURL: "https://crud-practise-57114-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);

export { fireDb };
