import { useGlobalContext } from "../views/App";

import DeviceModel from "../models/DeviceModel";

import overlaysModels from "../config/OverlayModels";

import { TextArea, Dropdown, Button, Form } from "semantic-ui-react";

export default function MiniMobileDisplay(props: any) {
  const {
    updateDeviceUrl,
    removeDevice,
    changeDeviceOverlay,
    setDeviceScale,
    setDeviceZoom,
  } = useGlobalContext();

  const overlayList = overlaysModels.map((overlay) => ({
    key: overlay.id,
    text: overlay.deviceName,
    value: overlay.id,
  }));

  const { id, overlay, url, scale, zoom } = props.device as DeviceModel;

  return (
    <div
      key={id}
      style={{
        width: 425 / 2,
        height: 900 / 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: `10px ${overlay.borderWidth}px`,
        position: "relative",
      }}
    >
      <img
        alt="mobile"
        style={{
          zIndex: 1000,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          pointerEvents: "none",
        }}
        src={require(`../images${overlay.imageSrc}`)}
      />
      <div
        style={{
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Form>
          <Form.Field>
            <label>Website URL</label>
            <TextArea
              onChange={(e: any) =>
                updateDeviceUrl(props.device, e.target.value)
              }
              value={url}
              style={{ width: "100%" }}
            />
          </Form.Field>
          <Form.Field>
            <label>Overlay</label>
            <Dropdown
              placeholder="Device Overlay"
              selection
              fluid
              options={overlayList}
              value={overlay.id}
              onChange={(e, data) => {
                let overlay = overlaysModels.find((o) => o.id === data.value);
                if (overlay) {
                  changeDeviceOverlay(id, overlay);
                }
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Device Scale : {scale}</label>
            <input
              type="range"
              min="1"
              max="20"
              value={scale * 10}
              onChange={(e) =>
                setDeviceScale(id, parseInt(e.target.value) / 10)
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Device Zoom : {zoom}</label>
            <input
              type="range"
              min="1"
              max="20"
              value={zoom * 10}
              onChange={(e) => setDeviceZoom(id, parseInt(e.target.value) / 10)}
            />
          </Form.Field>
        </Form>
        <div>
          <Button negative onClick={() => removeDevice(id)}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
