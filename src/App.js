import { RouterProvider } from "react-router-dom";

import router from "./Routes/Routes";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

function App() {
  const [preloader, setPreLoader] = useState(false);

  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 5000);
  }, []);
  return (
    <div className=" max-w-[1440px] mx-auto ">
      {preloader ? (
        <div className="flex justify-center items-center w-full h-screen">
          <BounceLoader
            color="#d63636"
            cssOverride={{}}
            loading
            size={150}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  );
}

export default App;
