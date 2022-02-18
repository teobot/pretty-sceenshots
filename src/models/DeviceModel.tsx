import DeviceInterface from "../interfaces/DeviceInterface";
import OverlayModel from "./OverlayModel";

export default class DeviceModel implements DeviceInterface {
  id: string;
  type: string;
  overlay: OverlayModel;
  url: string;
  constructor(type: string, overlay: OverlayModel, url: string) {
    this.id = `${overlay.imageSrc}_${Math.random()}`;
    this.type = type;
    this.overlay = overlay;
    this.url = url;
  }
}
