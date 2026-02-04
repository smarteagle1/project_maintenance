import { Conv_L } from "@/three/Conv_L";
import { Conv_R } from "@/three/Conv_RE";
import { Conv_static } from "@/three/Conv_static";
import { ConvCarrier_R } from "@/three/ConvCarrier_RE";
import { ConvCarrier } from "@/three/ConvCarrier";
import { EnChain } from "@/three/EnChain";
import { LoadStFrame } from "@/three/LoadStFrame";
import { PilotV } from "@/three/PilotV";
import { VTerminal } from "@/three/VTerminal";
import { Carrier_Vertical } from "@/three/Carrier_Vertical";

const Assemblies = [
  { id: "ConvCarrier", Model:ConvCarrier, qty:"1"},
  { id: "LoadStFrame", Model:LoadStFrame, qty:"1"},
  { id: "Conv_L", Model:Conv_L, qty:"1"},
  { id: "Conv_R", Model:Conv_R, qty:"1"},
  { id: "Conv_static", Model:Conv_static, qty:"1"},
  { id: "ConvCarrier_R", Model:ConvCarrier_R, qty:"1"},
  { id: "EnChain", Model:EnChain, qty:"1"},
  { id: "PilotV", Model:PilotV, qty:"1"},
  { id: "VTerminal", Model:VTerminal, qty:"1"},
  { id: "Carrier_Vertical", Model:Carrier_Vertical, qty:"1"},
];

export default Assemblies
