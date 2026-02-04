
export default function Card({
  title = "Station",
  status = "OK",
  img="/missing.jpg",
  className = "",
  clicked,
  stationID,
  canOpen=true,
  showOpenButton=true
}) {
  return (
    <div
      className={[
        "w-150 h-125 rounded-3xl",
        "bg-white/90 text-slate-900",
        "border border-slate-200/80",
        "shadow-lg shadow-black/10",
        "backdrop-blur",
        "transition-all duration-100",
        "hover:-translate-y-4 hover:shadow-xl hover:shadow-black/15",
        "hover:ring-8 hover:ring-amber-400/60",
        className,
      ].join(" ")}
    >
      {/* header */}
      <div className="p-5 h-full flex flex-col">
        {/* header row */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-start">
          {/* left spacer */}
          <div />

          {/* middle text */}
          <div className="text-center">
            <div className="text-2xl font-extrabold tracking-wide text-slate-900">
              {title}
            </div>
            <div className="mt-1 text-xs text-slate-500">Assembly line</div>
          </div>

          {/* right pill */}
          <div className="flex justify-end">
            <button className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xl font-medium text-amber-800">
              {status}
            </button>
          </div>
        </div>
  
        

        {/* divider */}
        <div className="mt-4 h-px w-full bg-slate-200/70" />

        {/* body */}
        <div className="mt-4 flex flex-col gap-3 flex-1">
          {/* <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div className="text-xs text-slate-500">Temperature</div>
            <div className="text-lg font-semibold">36°C</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div className="text-xs text-slate-500">Vibration</div>
            <div className="text-lg font-semibold">Normal</div>
          </div> */}

                    {/* image */}
          <div className="mt-4 flex-row self-center gap-3">
          <div className="h-75 w-100 flex justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3">
           <img src={img} alt="station image" />
          </div>
          </div>
          {/* image */}

        {showOpenButton &&
        <div className="grid grid-cols-1 mt-auto">
        <button className="rounded-2xl border border-slate-200 hover:bg-amber-300  bg-white px-4 py-3">
            <div onClick={clicked} className="text-lg font-semibold">Open Station</div>
          </button>
        </div> }  
        
        </div>
      </div>
    </div>
  );
}
