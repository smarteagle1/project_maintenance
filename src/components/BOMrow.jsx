import React from "react"
export default function BOMrow({
    itemNo="1",
    itemName="Bracket",
    itemQty="4",
    // itemMaterial="Steel",
    className="",
    isHovered,
    mouseOut,
    mouseOver,
    partCall
}){
    return(
      <div onMouseEnter={mouseOver} 
           onMouseLeave={mouseOut}
           onClick={partCall} 
           className={`${isHovered ? "bg-yellow-500/20" : ""} grid grid-cols-4 gap-40 font-semibold border-b pb-2 mb-2 ${className}`}>
        <div>{itemNo}</div>
        <div>{itemName}</div>
        <div>{itemQty}</div>
        </div>)
}