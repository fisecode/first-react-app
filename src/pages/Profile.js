import { useEffect } from "react";
export default function Profile() {
  useEffect(function () {
    document.title = "Profile";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile</h1>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        facilis magnam ducimus magni officiis molestiae recusandae, perspiciatis
        officia ad voluptatibus quae cupiditate molestias deleniti.
      </p>
    </section>
  );
}
