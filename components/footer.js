import React from "react";
import FooterCol from "./footercol";

export default function Footer(props) {
  return (
    <div className="container py-5 justify-content-center">
      <div className="row justify-content-center">
        <div className="col">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "jordantwells@gmail.com",
                path: "mailto:jordantwells@gmail.com",
              },
              {
                title: "281-608-1825",
                path: "tel:+12816081825",
              },
            ]}
          />
        </div>
        <div className="col">
          <FooterCol
            heading="Socials"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/jordantwells/",
              },
              {
                  title: "Medium",
                  path: "https://medium.com/@jordantwells"
              }
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container justify-content-center">
          <p className="py-3 text-center">2022 - Jordan Wells - Built with Next.js</p>
        </div>
      </div>
    </div>
  );
}
