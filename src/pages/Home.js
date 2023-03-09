import { useEffect } from "react";
export default function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">WELCOME</h1>
      <p className="section-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        debitis maiores blanditiis voluptates modi fuga voluptatem commodi odio
        eligendi delectus autem pariatur, assumenda ullam?
      </p>
    </section>
  );
}
