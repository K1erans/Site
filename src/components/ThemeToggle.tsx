import { useTheme } from "../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {theme === "light" ? "☀" : "☾"}
    </button>
  );
}
