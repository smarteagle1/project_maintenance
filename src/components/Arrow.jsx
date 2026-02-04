import { useEffect, useMemo, useState } from "react";
import Card from "@/components/Card";
import { useNavigate } from "react-router-dom";
import Stations from "@/data/Stations";
import { useAuth } from "@/Auth/AuthContext";

export default function Arrow() {
  const navigate = useNavigate();
  const shaftLength = 2500;
  const head = 40;
  const total = shaftLength + head;
  const {user}=useAuth()
  const userId=user?.id
  

    useEffect(() => {
    if(user)
      console.log("arrow userId",user.id)
  }, [user]);


  const [hoveredId, setHoveredId]=useState(null)

  const orderedStations = useMemo(()=>{
    if(!hoveredId) return Stations;
    const rest = Stations.filter(s=>s.id !== hoveredId);
    const hovered = Stations.find(s=>s.id === hoveredId);

    return hovered ? [...rest, hovered] : Stations;
    },[hoveredId]);

  function getStationAccess(stationId){
    let canOpen=true
    let showOpenButton=true

    if(userId===1){
      if(stationId==="ST-10") canOpen=true
      if(stationId==="ST-20") showOpenButton=false
      if(stationId==="ST-20") canOpen=false
    }

    if(userId===8){
      if(stationId==="ST-20") canOpen=true
      if(stationId==="ST-10") showOpenButton=false
      if(stationId==="ST-10") canOpen=false
    }

    if(userId!==1 && userId!==8){
      canOpen=false;
      showOpenButton=false
    }

    return{canOpen, showOpenButton}

  }
  

  return (
    <div className="flex">
    <svg
      className="w-full h-screen text-slate-700 "
      viewBox={`0 0 ${total} 500`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient 
        id="shaftGradient" 
        gradientUnits="userSpaceOnUse"
        x1="0%" 
        y1="0%" 
        x2={total} 
        y2="0%">
          <stop offset="0%" stopColor="#020618" />
          <stop offset="100%" stopColor="currentColor" />
        </linearGradient>
      
   
      <filter id="arrowShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="gray" floodOpacity="0.35" />
      </filter>
      </defs>

    <g filter="url(#arrowShadow)" fill="url(#shaftGradient)">
      {/* Arrow shaft */}
      <rect x="0" y="0" width={shaftLength-150} height="300"/>

      {/* Arrow head */}
      <path 
        d={`M${shaftLength-151} -80 L${(shaftLength) + head} 150 L${shaftLength-151} 380 Z`}
      />
    </g>

      {/* Card embedded in SVG */}
          {orderedStations.map((item,index)=>{
            return(
      <foreignObject key={item.id} x={item.x} y={item.y} width="660" height="650">
        <div xmlns="http://www.w3.org/1999/xhtml" 
            style={{ pointerEvents: "auto", paddingLeft:"40px", paddingTop:"30px" }}
            onPointerLeave={()=>setHoveredId(null)}
            onPointerEnter={()=> setHoveredId(item.id)}>
          <Card 
                title={item.title} 
                img={item.img} 
                clicked={()=>navigate(`/${item.id}`)}
                canOpen={getStationAccess(item.id).canOpen}
                showOpenButton={getStationAccess(item.id).showOpenButton}
              />
        </div>
      </foreignObject>)})}
    </svg>

    </div>
  );
}
