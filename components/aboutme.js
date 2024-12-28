import React from "react";
import Section from "./section.js";

export default function AboutMe() {
  return (
    <Section name="About Me">
      <div className="text-base md:text-lg lg:text-xl flex flex-col-reverse md:flex-row items-start justify-start w-full gap-10">
        <img
          className="md:w-1/4 aspect-square rounded-md "
          alt="Jordan Wells"
          src="/me.jpg"
        />
        <div className="text-left max-w-prose">
          <p>
            I&apos;m Jordan Wells! I am a curious, project-oriented software
            engineer.
          </p>
          <br></br>
          <p>
            I&apos;m currently a Software Developer at D.E. Shaw Research.I
            graduated in May of 2023 from the University of Texas at Austin with
            a degree in Chemical Engineering, as well as a certificate in
            Elements of Computing.
          </p>
          <br></br>
          <p>
            My interests are in Software Engineering, Data Science,
            Computational Biology, and Machine Learning.
          </p>
        </div>
      </div>
    </Section>
  );
}
