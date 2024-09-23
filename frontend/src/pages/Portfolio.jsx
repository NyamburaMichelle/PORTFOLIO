import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Portfolio() {
  const images = [
    "/public/pic1.jpg",
    "/public/pic2.jpg",
    "/public/pic3.jpg",
    "/public/pic4.jpg",
    "/public/pic5.jpg",
    "/public/pic6.jpg",
    "/public/pic7.jpg",
    "/public/pic8.jpg",
    "/public/pic9.jpg",
    "/public/pic10.jpg",
    "/public/pic11.jpg",
    "/public/pic12.jpg",
    "/public/pic13.jpg",
    "/public/pic14.jpg",
    "/public/pic15.jpg",
    "/public/pic16.jpg",
    "/public/pic17.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-700 h-screen w-full">
        <div className="relative w-full flex gap-4 p-4 ">
          <img
            className="h-64 w-36 aspect-video rounded-md object-cover object-center dark:bg-gray-500"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
          <h1 className="text-8xl font-bold text-white justify-center items-center flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-purple-400 underline">Portfolio</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
