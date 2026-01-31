import BOMrow from "./BOMrow";
import bomItems from "./DataSetBOM(not used)";

export default function BOMTable({items, hoveredId, onRowHover, partForm}){
    return(
      <div className="bg-slate-800/50 mt-9 ml-9 mr-9 rounded-2xl overflow-hidden">
      <div className="bg-slate-700/20 min-h-108 rounded-2xl pt-5 px-8 w-full overflow-auto">
      {/* Header */}
      <div className="grid grid-cols-4 gap-2 font-semibold border-b pb-2 mb-2">
        <div>Part No</div>
        <div>Name</div>
        <div>Qty</div>
        <div>Material</div>
      </div>
      {/* Items */}
      {items.map((item)=>{
        return(<BOMrow
        key={item.id}
        itemNo={item.id}
        itemName={item.id}
        isHovered={hoveredId===item.id}
        mouseOver={()=>onRowHover?.(item.id)}
        mouseOut={()=>onRowHover?.(null)}
        partCall={()=>partForm?.(item.id)}
        />)})}
        </div>
        </div>
    )
}