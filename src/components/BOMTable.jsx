import BOMrow from "./BOMrow";
import bomItems from "@/data/DataSetBOM(not used)";

export default function BOMTable({items, hoveredId, onRowHover, partForm, className=""}){
    return(
      <div className="mt-9 ml-9 mr-9 overflow-hidden">
      <div className={`bg-slate-700/40 rounded-md pt-5 px-8 w-full overflow-auto ${className}`}>
      {/* Header */}
      <div className="grid grid-cols-3 gap-40 font-semibold border-b pb-2 mb-2">
        <div>Part No</div>
        <div>Name</div>
        <div>Qty</div>

      </div>
      {/* Items */}
      {items.map((item)=>{
        return(<BOMrow
        key={item.id}
        itemNo={item.id}
        itemName={item.id}
        itemQty={item.qty}
        isHovered={hoveredId===item.id}
        mouseOver={()=>onRowHover?.(item.id)}
        mouseOut={()=>onRowHover?.(null)}
        partCall={()=>partForm?.(item.id)}
        />)})}
        </div>
        </div>
    )
}