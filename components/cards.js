import React from "react";
import Image from "next/image";
import Link from "next/link";


export function Card(props) {
  return (
    <Link href={props.link}>
      <div className="py-3 col-lg-6">
        <div className="content">
          <div className="content-overlay"></div>
          <div className="image-container">
            <img
              layout="fill"
              alt={props.alt}
              className="content-image"
              src={props.img}
            />
          </div>

          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">{props.title}</h3>
            <p className="content-text">{props.subtitle}</p>
            <p>{props.language}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}


export function ProjectCard(props) {
  return (
    <Card 
      title={props.title}
      subtitle={props.subtitle}
      language={props.language}
      img={props.img}
      alt={props.alt}
      link={"/projects/" + props.title}
    />
  );
}
