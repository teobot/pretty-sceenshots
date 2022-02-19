import OverlayInterface from "../interfaces/OverlayInterface";

export default class OverlayModel implements OverlayInterface {
  id: string;
  deviceName: string;
  imageSrc: string;
  borderHeight: number;
  borderWidth: number;
  borderRadius: number;
  offset?: any;

  constructor(
    deviceName: string,
    imageSrc: string,
    borderHeight: number,
    borderWidth: number,
    borderRadius: number,
    offset?: any
  ) {
    this.id = `${deviceName}_${Math.random()}`;
    this.deviceName = deviceName;
    this.imageSrc = imageSrc;
    this.borderHeight = borderHeight;
    this.borderWidth = borderWidth;
    this.borderRadius = borderRadius;
    this.offset = offset;
  }
}
