import DownArrow from "./downarrow";

/* eslint-disable @next/next/no-img-element */
export default function ProjectLanding (props) {
  return (
    <div className='bg-slate-600 w-full flex flex-col justify-center items-center'>
      <div className='h-screen w-full border-b-2 '>
        <img
          className='brightness-[0.4] object-cover w-full h-full '
          alt={props.title + ' ' + props.subtitle}
          src={props.src}
        />
        <div className='-translate-y-2/3 h-full px-10'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-center text-6xl font-bold text-white'>
              {props.title}
            </h2>
            <h1 className='text-center text-2xl font-bold pt-2 italic text-blue-300'>
              {props.subtitle}
            </h1>

            <DownArrow />
          </div>
        </div>
      </div>
    </div>
  )
}
