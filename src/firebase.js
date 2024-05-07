import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4ZVQIGCIWz18DdL-WhhuNuUkarN-MLIM",
  authDomain: "gazonverde-2854b.firebaseapp.com",
  projectId: "gazonverde-2854b",
  storageBucket: "gazonverde-2854b.appspot.com",
  messagingSenderId: "1040362977465",
  appId: "1:1040362977465:web:546554d5bc5e8c3fb30368"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };
export default app;
