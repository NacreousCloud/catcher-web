import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-16 border-b-2 flex items-center justify-around">
      <div>
        <LinkButton href={"/"}>TEMP HEADER</LinkButton>
      </div>
      <div>
        <LinkButton href={"about-me"}>About Me</LinkButton>
        <LinkButton href={"articles"}>Articles</LinkButton>
        <LinkButton href={"projects"}>Projects</LinkButton>
        <LinkButton href={"contact"}>Contact</LinkButton>
      </div>
    </header>
  );
};

const LinkButton = ({ href, children }: { href: string; children: string }) => (
  <span className="mx-4">
    <Link href={href}>{children}</Link>
  </span>
);

export default Header;
