/* eslint-disable @next/next/no-img-element */
export default function ProjectLanding(props){
    return (
        <div className="bg-slate-600 w-full flex flex-col">
        <div className="h-screen w-full border-b-2 ">
            <img className="brightness-[0.2] object-cover w-full h-full " alt={props.title + " " + props.subtitle} src={props.src} />
            <div className="-translate-y-2/3 h-full px-10 ">
            <h2 className="text-center text-6xl text-blue-400">{props.title}</h2>
            <h1 className="text-center text-5xl text-white">{props.subtitle}</h1>
            </div>
        </div>
        </div>
    )
}