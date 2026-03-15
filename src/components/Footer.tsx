export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      @{year}{" "}
      <a href="https://www.linkedin.com/in/kierankearney10/">Kieran Kearney</a>{" "}
      <span>: Douglas, IM</span>
    </footer>
  );
}
