import { useEffect, useState } from "react";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";

import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

import { AiOutlineClose } from "react-icons/ai";

interface Movie {
  id: number;
  title: string;
  img: string;
}

export function SavedShows() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { user } = UserAuth();

  const movieRef = doc(db, "users", `${user?.email}`);

  function handleSliderLeft() {
    var slider = document.getElementById("slider");

    if (slider) slider.scrollLeft = slider.scrollLeft - 500;
  }

  function handleSliderRight() {
    var slider = document.getElementById("slider");

    if (slider) slider.scrollLeft = slider.scrollLeft + 500;
  }

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  async function handleDeleteShow(passedId: number) {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>

      <div className="relative flex items-center group">
        <MdOutlineChevronLeft
          onClick={handleSliderLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item.img}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex items-center justify-center h-full text-center">
                  {item?.title}
                </p>

                <p
                  onClick={() => handleDeleteShow(item.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdOutlineChevronRight
          onClick={handleSliderRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}
