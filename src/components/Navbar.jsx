import { spotifyImg } from "../utils";
import { openingAud } from "../utils";
import { useEffect, useState } from "react";

function play() {
  new Audio(openingAud).play();
}
function pause() {
  newAudio(openingAud).pause();
}

const Navbar = () => {
  // const [isPlay, setIsPlay] = useState(false);
  // useEffect(() => {
  //   if (isPlay) {
  //     play();
  //   } else {
  //     pause();
  //   }
  // }, [isPlay]);
  return (
    <header className="w-full py-5 sm:px-1 px-1 flex justify-between bg-gray-100">
      <nav className="flex w-full screen-max-width items-start">
        <img
          src={spotifyImg}
          alt="Spotify"
          width={100}
          // onClick={setIsPlay(!isPlay)}
        />
        <div className="flex flex-1 justify-center items-end max-sm:hidden">
          {/* <div className="px-5 text-sm cursor-pointer text-black hover:text-white transition-all">
            Project
          </div>
          <div className="px-5 text-sm cursor-pointer text-black hover:text-white transition-all">
            Overview (Process + Reflections)
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
