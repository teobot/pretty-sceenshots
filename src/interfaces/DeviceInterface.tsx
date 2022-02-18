import OverlayModel from "../models/OverlayModel";

export default interface DeviceInterface {
  type: string;
  overlay: OverlayModel;
  url: string;
}
