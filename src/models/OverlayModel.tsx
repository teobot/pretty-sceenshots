export default class OverlayModel {
  imageSrc: string;
  imageHeightReduction: number;
  imageWidthReduction: number;
  imageBorderRadius: number;

  constructor(
    imageSrc: string,
    imageHeightReduction: number,
    imageWidthReduction: number,
    imageBorderRadius: number
  ) {
    this.imageSrc = imageSrc;
    this.imageHeightReduction = imageHeightReduction;
    this.imageWidthReduction = imageWidthReduction;
    this.imageBorderRadius = imageBorderRadius;
  }
}
