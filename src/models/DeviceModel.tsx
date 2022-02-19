import DeviceInterface from "../interfaces/DeviceInterface";
import OverlayModel from "./OverlayModel";

export default class DeviceModel implements DeviceInterface {
  id: string;
  type: string;
  overlay: OverlayModel;
  url: string;
  scale: number = 1;

  constructor(
    type: string,
    overlay: OverlayModel,
    url: string,
    scale?: number
  ) {
    this.id = `${overlay.imageSrc}_${Math.random()}`;
    this.type = type;
    this.overlay = overlay;
    this.url = url;
    this.scale = scale ? scale : 1;
  }
}
