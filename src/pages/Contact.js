import { useEffect } from "react";
export default function Contact() {
  useEffect(function () {
    document.title = "Contact";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
        incidunt.
      </p>
      <ul>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
      </ul>
    </section>
  );
}
