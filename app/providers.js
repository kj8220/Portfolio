"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
  // This component will render the ToastContainer and any other
  // client-side providers you might add in the future.
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}