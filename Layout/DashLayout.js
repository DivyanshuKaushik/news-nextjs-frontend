import React,{useContext, useEffect} from "react";
import Link from "next/link";
import { HomeIcon, CollectionIcon, LogoutIcon } from "@heroicons/react/outline";
import SwitchTheme from "../components/Utilities/SwitchTheme";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";
import { AppContext } from "../store/AppContext";
const DashLayout = ({ children }) => {

  const {actions} = useContext(AppContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        actions.setUser(user)
        // ...
       
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <div className="flex w-screen dashboard h-screen">
      <div className="hidden lg:w-1/6 lg:flex flex-col justify-between py-8 pl-5 pr-2 bg-dashmenu">
        <div className="w-full mb-10">
          <h1 className="text-center text-gray-100 text-2xl dark:text-yellow-500">Short News</h1>
        </div>
        <div className=" flex flex-col space-y-4 flex-1">
          <Link href="/dashboard" className="">
            <div className="flex text-gray-300 cursor-pointer">
              <HomeIcon className="h-5" />
              <span className="pl-1">Dashboard</span>
            </div>
          </Link>
          <Link href="/dashboard/posts">
            <div className="flex text-gray-300 cursor-pointer">
              <CollectionIcon className="h-5" />
              <span className="pl-1">Posts</span>
            </div>
          </Link>
          <Link href="/dashboard/posts">
            <div className="flex text-gray-300 cursor-pointer">
              <CollectionIcon className="h-5" />
              <span className="pl-1">All Posts</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <span className="flex"><LogoutIcon className="h-5 mr-1" /> Logout</span>
        <SwitchTheme />
        </div>
      </div>
      <main className="w-full bg-gray-100 dark:bg-dashpanel overflow-y-scroll relative">{children}</main>
    </div>
  );
};

export default DashLayout;
