import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <div className="toggle-corner">
        <ThemeToggle />
      </div>
      <header className="header">
        <nav>
          <h1>Hi, im Kieran</h1>
        </nav>
      </header>
    </>
  );
}
