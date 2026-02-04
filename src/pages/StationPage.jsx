import { useMemo, useState } from "react";
import BOMTable from "@/components/BOMTable";
import StationST10 from "@/three/StationST10";
import Assemblies from "@/data/Assemblies";
import PartForm from "@/components/PartForm";

export default function StationPage(){
  const [hovered, setHovered]=useState(null)
  const [selectedPart, setSelectedPart] = useState(null);


  const BOMitems=useMemo(
    ()=>Assemblies.map(({id, Model, qty})=>({
      id,
      Model,
      qty
    })),[]
  )

  const clicked=(itemid)=>{
    // console.log("i am here", itemid);
    setSelectedPart(itemid)
  }

  const handleCancel=()=>{
    setSelectedPart(null)
  }

  return(
    <div className="min-h-screen bg-[url('/carbon.png')] w-full flex flex-col">

    <div className="flex lg:flex-row flex-col w-full min-h-0 lg:max-h-140 border-amber-300 border-2">
    <div className=" lg:flex-1 min-w-100 lg:h-full max-h-118 ml-10 mt-10"><StationST10 
    hoveredId={hovered} setHoverId={setHovered} items={BOMitems} partForm={clicked}/>
    </div>


    <div className="lg:flex-1 min-w-100 lg:h-full w-full"><BOMTable
          autoClear={false}
          hoveredId={hovered}
          onRowHover={setHovered}
          items={BOMitems}
          partForm={clicked}
    />
    </div>
            {/* Conditionally shown form only when certain item is clicked in BOM */}
    {selectedPart && (<div className="flex flex-col lg:flex-1 lg:h-full w-full h-1/2"><PartForm
       partId={selectedPart}
       onCancel={handleCancel}
    />
    
    </div>)}


    </div>
    
    <div>

    </div>
    </div>
  )
}