import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "../components/main-header.module.css";
import MainHeaderBackground from "./main-header-background";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <div className=" backG w-[100%] h-96 text-white px-28 z-10 ">
        <header className="flex text-center items-center content-center justify-between pt-12">
          <div className="flex text-center items-center">
            <Link href="/" className=" flex text-center items-center ">
              <Image
                className=" max-w-32 min-w-32 max-h-32 min-h-32 relative right-10  "
                src={logoImg}
                alt="A plate with food on it"
              />
              <div className=" pl-12 z-10 text-4xl whitespace-nowrap px-44">
                NEXTLEVEL FOOD
              </div>
            </Link>
          </div>
          <nav className={classes.nav}>
            <ul className="flex z-10 gap-10 text-2xl pr-5 whitespace-nowrap">
              <li className="block z-10">
                <Link href="/meals">Browse Meals</Link>
              </li>
              <li className="z-10">
                <Link href="/community">Foodies Community</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
