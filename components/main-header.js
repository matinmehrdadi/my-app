import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "../components/main-header.module.css";
export default function MainHeader() {
  return (
    <div className="bg-orange-700 h-96 text-white">
      <header className="flex text-center items-center content-center justify-between px-44 pt-12">
        <div className="flex text-center items-center">
          <Link href="/" className=" flex text-center items-center ">
            <Image width="100" src={logoImg} alt="A plate with food on it" />
            <div className="pl-12 text-4xl ">NEXTLEVEL FOOD</div>
          </Link>
        </div>
        <nav className={classes.nav}>
          <ul className="flex gap-10 text-2xl pr-5">
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
