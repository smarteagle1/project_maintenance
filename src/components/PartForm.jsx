import { useEffect, useState } from "react";
import BOMrow from "./BOMrow";
import bomItems from "@/data/DataSetBOM(not used)";

export default function PartForm({partId, onCancel}){
  const [form, setForm]=useState({
    email:"",
    criticality:"",
    description:""
  })

  const emptyForm={
          email:"",
          criticality:"",
          description:""
    }

    useEffect(() => {
    if(!partId)return;

    const draftKey = `draft:${partId}`;
    const saved = localStorage.getItem(draftKey);

    if (saved) {
      console.log("saved", saved)
      setForm(JSON.parse(saved));
    } else {
      setForm(emptyForm)
    }
  }, [partId]);

  function handleChange(e){
    const {name, value}=e.target
    setForm((prev)=>({
      ...prev,
      [name]:value
    })
    )
   }

   function saveFormData() {
    if(!partId) return;

      const draftKey=`draft:${partId}`;
      localStorage.setItem(
        draftKey,
        JSON.stringify({
          ...form,
          savedAt: Date.now()
        })
      )
      console.log("Draft Saved", localStorage)
   }

    return(
      <div className="bg-slate-900 mt-9 ml-9 mr-9 h-118 rounded-md overflow-hidden flex flex-col border-2 border-amber-300">
      
      {/* Header section */}
      <div className="rounded-t-2xl pt-5 px-8 w-full overflow-auto">
      <div className="flex justify-center font-semibold gap-3 border-b pb-2 mb-2">
        <div className="text-center">Assembly: </div> 
        <div>{partId}</div>
          </div>
      </div>
      {/* Items section */}
      <div className="flex-1 pt-5 px-8 overflow-auto w-full">
      <form action="" className="flex flex-col gap-2">
        <label className="flex">Fill in your email address</label>
        <textarea name="email" 
                  value={form.email} 
                  onChange={handleChange}
                  className="border-2 bg-white w-full h-7 text-black" 
                  placeholder="write something" />
        
        <label className="flex">Choose criticality</label>

        <select name="criticality" 
                value={form.criticality}
                onChange={handleChange}  
                className="border-2 bg-white w-full h-8 text-black px-2 rounded">
          <option value="">-- Select criticality --</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        
        <label className="flex">Describe the problem</label>
        <textarea name="description" 
                  value={form.description} 
                  onChange={handleChange}
                  className=" text-start text-cyan-900 border-2 bg-white w-full h-40" 
                  placeholder="write something" />
        </form>
        </div>


    {/* buttons section */}
    
    <div className="flex pt-5 pb-5 px-8 justify-between">

    <button className="w-30 h-10 font-bold rounded-md text-amber-400 bg-slate-700"
            onClick={onCancel}> CANCEL </button>

    <button className="w-30 h-10 font-bold rounded-md text-amber-400 bg-slate-700"
            onClick={saveFormData}> SAVE </button>

    <button className="w-30  h-10 font-bold rounded-md text-amber-400 bg-slate-700"> SUBMIT </button>

    </div>

  </div>
    )
}