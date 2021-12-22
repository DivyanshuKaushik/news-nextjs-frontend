import React, { useEffect,useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted,setIsMounted] = useState(true)

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
    setTheme(theme === "light" ? "dark" : "light");
    }
  };
  

  return (
    <>
      {theme === "light" ? (
        <MoonIcon className="h-6 text-yellow-300" onClick={switchTheme} />
      ) : (
        <SunIcon className="h-6 text-gray-50" onClick={switchTheme} />
      )}
    </>
  );
};

export default SwitchTheme;
