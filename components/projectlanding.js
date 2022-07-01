/* eslint-disable @next/next/no-img-element */
export default function ProjectLanding(props){
    return (
        <div className="bg-slate-600 w-full flex flex-col justify-center items-center">
        <div className="h-screen w-full border-b-2 ">
            <img className="brightness-[0.4] object-cover w-full h-full " alt={props.title + " " + props.subtitle} src={props.src} />
            <div className="-translate-y-2/3 h-full px-10">
            <h2 className="text-center text-6xl font-bold text-white">{props.title}</h2>
            <h1 className="text-center text-xl italic ext-blue-400">{props.subtitle}</h1>
            
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce sticky mt-10 bottom-0 h-10 w-10 text-white z-50" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            </div>
        </div>
        </div>
    )
}
