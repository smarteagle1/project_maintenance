import { useMemo, useState } from "react";
import BOMTable from "./BOMTable";
import StationST10 from "./StationST10";
import Assemblies from "./Assemblies";
import PartForm from "./PartForm";


export default function StationPage(){
  const [hovered, setHovered]=useState(null)
  const [selectedPart, setSelectedPart] = useState(null);


  const BOMitems=useMemo(
    ()=>Assemblies.map(({id, Model})=>({
      id,
      Model
    })),[]
  )

  const clicked=(itemid)=>{
    console.log("i am here", itemid);
    setSelectedPart(itemid)
  }

  const handleCancel=()=>{
    setSelectedPart(null)
  }

  return(
    <div className="min-h-screen flex flex-col">

    <div className="flex md:flex-row flex-col w-full max-h-100">
    <div className=" md:flex-1 min-w-0 md:h-full w-full h-1/2"><StationST10 
    hoveredId={hovered} setHoverId={setHovered} items={BOMitems} partForm={clicked}/>
    </div>


    <div className="md:flex-1 md:h-full w-full h-1/2"><BOMTable
          autoClear={false}
          hoveredId={hovered}
          onRowHover={setHovered}
          items={BOMitems}
          partForm={clicked}
    />
    </div>

    {/* Conditionally shown form only when certain item is clicked in BOM */}
    {selectedPart && (<div className="md:flex-1 md:h-full w-full h-1/2"><PartForm
       partId={selectedPart}
       onCancel={handleCancel}
    />
    </div>)}
    </div>
    </div>
  )
}