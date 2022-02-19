import OverlayModel from "../models/OverlayModel";

const overlaysModels: OverlayModel[] = [
  new OverlayModel(
    "Oneplus",
    "/phone/oneplus-oneplus8pro-portrait.png",
    25,
    8,
    30
  ),
  new OverlayModel(
    "Pixel 4",
    "/phone/google-pixel4-clearlywhite-portrait.png",
    30,
    15,
    35,
    { top: 30 }
  ),
  new OverlayModel(
    "Samsung S20",
    "/phone/samsung-galaxys20-cosmicgrey-portrait.png",
    15,
    10,
    35
  ),
  new OverlayModel(
    "Pixel 5",
    "/phone/google-pixel5-justblack-portrait.png",
    25,
    25,
    35
  ),
  new OverlayModel("IPhone XHR", "/phone/iphone-xhr.png", 30, 35, 40),
];

export default overlaysModels;
