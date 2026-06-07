import Image from "next/image";
import './globals.css'

export default function Home() {
  return (
    <div className={`w-full flex flex-col gap-4 justify-center items-center h-[50vh]`}>
      <h1 className={`pixelify-sans-800 text-5xl w-[50vw] text-center uppercase`}>The simplest way to organize and attend tech events</h1>
        <h6 className={``}>simply create, attend and manage tech events</h6>
    </div>
  );
}
