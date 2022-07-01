/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";



export function ProjectCard(props) {
  return (
    <Card 
      title={props.title}
      subtitle={props.subtitle}
      language={props.language}
      img={props.img}
      alt={props.alt}
      link={"/projects/" + props.title}></Card>
  );
}


export function Card(props){
  return (
    <Link href={props.link}>
      <div className="flex flex-col" >
        <div className="group w-full h-80">
        <img className="transition-all ease-in-out object-cover w-full h-full group-hover:brightness-[0.1]" src={props.img} alt={props.alt} />
        <div className="transition-all ease-in-out opacity-10 group-hover:opacity-100  pt-20 group-hover:-mb-60 w-full flex-col text-center flex items-center justify-center -translate-y-80">
          <h1 className="bold text-3xl">
            {props.title}
          </h1>
          <h2 className="bold text-xl">
            {props.subtitle}
          </h2>
          <h2 className="bold text-lg mt-10">
            {props.language}
          </h2>
        </div>
        </div>


      </div>
    </Link>
  );
}