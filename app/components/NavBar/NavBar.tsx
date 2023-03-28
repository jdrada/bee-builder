"use client";
import React from "react";
import { initFirebase } from "@/firebase/firebaseApp";
import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const NavBar = () => {
  const app = initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  // const router = useRouter();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    // router.push("/dashboard");
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  console.log(app);
  return (
    <nav className="h-24 pr-4 bg-gray-800 flex items-center gap-8">
      <input className="p-2 grow rounded bg-gray-700" placeholder="Search" />
      <div className="flex gap-4">
        <button
          onClick={signIn}
          className="inlin-block text-white px-4 py-2 bg-slate-600 rounded-full"
        >
          Login
        </button>
        {/* <Image
          className="inline-block"
          src={darkMode}
          alt=""
          width={24}
          height={24}
        />
        <Image
          className="flex-none inline-block h-12 w-12 rounded-full ring-2 ring-white bg-gray-700"
          src=""
          alt=""
        /> */}
      </div>
    </nav>
  );
};

export default NavBar;
