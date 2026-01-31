import Card from "./Card";
import Arrow from "./Arrow";

export default function AssemblyLine(){

    return(
        <div className="relative flex-1 w-full bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 z-0">
            <div className="w-full">
            <Arrow />
            </div>
            </div>
            </div>
   
    )
}
