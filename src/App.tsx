/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from "react";
import "./App.css";
import MainLayout from "./layout/Layout";
import { useAppDispatch } from "./redux/hook";
import { isLoading } from "./redux/features/commonOptionsSlice";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/users/userSlice";
import { auth } from "./lib/firebase";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user?.email));
        dispatch(isLoading(false));
      } else {
        dispatch(isLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
