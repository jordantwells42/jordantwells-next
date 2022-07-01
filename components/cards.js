/* eslint-disable @next/next/no-img-element */
import React from "react";
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
      <div className="flex flex-col border-2 my-3">
        <div className="group w-full h-80">
        <img className="transition-all ease-in-out duration-200 hover-none:brightness-[0.6] hover-hover:group-hover:brightness-[0.1]  object-cover w-full h-full " src={props.img} alt={props.alt} />
        <div className="transition-all ease-in-out duration-200 hover-none:opacity-100 hover-hover group-hover:cursor-pointer opacity-10 group-hover:opacity-100 -translate-y-full h-full w-full text-center flex flex-col items-center justify-center px-3">
          <h1 className="font-bold text-3xl">
            {props.title}
          </h1>
          <h2 className="italic font-bold text-blue-400 text-xl">
            {props.subtitle}
          </h2>
          <h2 className="font-bold text-lg mt-10">
            {props.language}
          </h2>
        </div>
        </div>


      </div>
    </Link>
  );
}
