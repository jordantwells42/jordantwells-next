/* eslint-disable @next/next/no-img-element */
export default function ProjectLanding(props){
    return (
        <div className="bg-slate-600 flex flex-col">
        <div className="h-screen w-full">
            <img className="brightness-[0.25] object-cover w-full h-full " src={props.src} />
            <div className="-translate-y-3/4 h-full">
            <h2 className="text-center text-6xl text-blue-400">{props.title}</h2>
            <h1 className="text-center text-5xl text-white">{props.subtitle}</h1>
            </div>
        </div>
        </div>
    )
}