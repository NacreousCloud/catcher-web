import Image from "next/image";
import Page404Image from "../../public/404.png";
export default function Page404() {
  return (
    <div className="absolute w-full h-full top-0  flex flex-col content-center items-center justify-center">
      <div className="">
        <Image src={Page404Image} alt="notfoundimg" className="dark:bg-white" />
        <p className="">Page Not Found</p>
      </div>
    </div>
  );
}
