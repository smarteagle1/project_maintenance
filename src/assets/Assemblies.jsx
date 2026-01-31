import { Conv_L } from "../Conv_L";
import { Conv_R } from "../Conv_RE";
import { Conv_static } from "../Conv_static";
import { ConvCarrier_R } from "../ConvCarrier_RE";
import { ConvCarrier } from "../ConvCarrier";
import { EnChain } from "../EnChain";
import { LoadStFrame } from "../LoadStFrame";
import { PilotV } from "../PilotV";
import { VTerminal } from "../VTerminal";
import { Carrier_Vertical } from "../Carrier_Vertical";

const Assemblies = [
  { id: "ConvCarrier", Model:ConvCarrier},
  { id: "LoadStFrame", Model:LoadStFrame},
  { id: "Conv_L", Model:Conv_L},
  { id: "Conv_R", Model:Conv_R},
  { id: "Conv_static", Model:Conv_static},
  { id: "ConvCarrier_R", Model:ConvCarrier_R},
  { id: "EnChain", Model:EnChain},
  { id: "PilotV", Model:PilotV},
  { id: "VTerminal", Model:VTerminal},
  { id: "Carrier_Vertical", Model:Carrier_Vertical},
];

export default Assemblies
