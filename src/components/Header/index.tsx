import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-24 border-b-2">
      <h1>Header</h1>
      <Link href={"about-me"}>About Me</Link>
      <Link href={"articles"}>Articles</Link>
      <Link href={"projects"}>Projects</Link>
      <Link href={"contact"}>Contact</Link>
    </header>
  );
};

export default Header;
