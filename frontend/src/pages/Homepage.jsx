import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <div className='bg-black h-screen flex flex-col items-center justify-center'>
      <h1 className='text-white text-center pt-10 text-7xl underline font-bold mb-12 text-blue-400'>
        WELCOME TO MY PORTFOLIO!🤗
      </h1>
      
      <div className="relative overflow-hidden w-80 h-96 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400 flex items-center justify-center mb-10">
        <div className="z-10 absolute w-full h-full peer"></div>
        <div
          className="absolute peer-hover:-top-24 peer-hover:-left-20 peer-hover:w-[150%] peer-hover:h-[150%] -top-24 -left-20 w-36 h-48 rounded-full bg-pink-300 transition-all duration-500"
        ></div>
        <div
          className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-24 -right-20 w-48 h-56 rounded-full bg-blue-300 transition-all duration-500"
        >
          Nice to meet you
          <br />
          <br />Mitchie❤️
        </div>
        <div className="w-full h-full items-center justify-center flex uppercase">
          WELCOME!❤️
        </div>
      </div>

      <Link to="/register"
        className=" flex items-center justify-center cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        CHECK IT OUT
      </Link>
    </div>
  )
}
