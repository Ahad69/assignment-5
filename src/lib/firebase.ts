/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwxZ1T4gS3kDXL76UsBGrB_61Zy4hPLqE",
  authDomain: "assignment-12-42953.firebaseapp.com",
  projectId: "assignment-12-42953",
  storageBucket: "assignment-12-42953.appspot.com",
  messagingSenderId: "888250587282",
  appId: "1:888250587282:web:09bffb6521166c5c9fee4b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
