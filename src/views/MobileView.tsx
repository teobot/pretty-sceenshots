import MobileDisplay from "../components/MobileDisplay";

import OverlayModel from "../models/OverlayModel";

export default function MobileView() {
  return (
    <div
      style={{
        height: "100%",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <MobileDisplay
        overlayImage={new OverlayModel("/phone/iphone-xhr.png", 30, 35, 40)}
        srcUrl="https://teobot.github.io/portfolio-build/"
      />
      <MobileDisplay
        overlayImage={new OverlayModel("/phone/iphone-xhr.png", 30, 35, 40)}
        srcUrl="https://teobot.github.io/portfolio-build/"
      />
      <MobileDisplay
        overlayImage={new OverlayModel("/phone/iphone-xhr.png", 30, 35, 40)}
        srcUrl="https://teobot.github.io/portfolio-build/"
      />
    </div>
  );
}
