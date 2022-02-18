import { useRef, useEffect, useState } from "react";

import {
  Modal,
  Segment,
  Header,
  Grid,
  Button,
  Input,
  TextArea,
} from "semantic-ui-react";

import { useGlobalContext } from "../views/App";

import { SwatchesPicker, PhotoshopPicker } from "react-color";

export default function SettingsView() {
  const {
    open,
    backgroundColor,
    devices,
    setBackgroundColor,
    setOpen,
    updateDeviceUrl,
    addDevice,
    removeDevice,
  } = useGlobalContext();

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
    >
      <Modal.Header>Settings</Modal.Header>
      <Modal.Content>
        {/* COLOUR PICKER */}
        <div>
          <Header as="h2" attached="top">
            Background Color
          </Header>
          <Segment attached>
            <Grid columns={2} stretched>
              <Grid.Column width={9}>
                <PhotoshopPicker
                  color={backgroundColor}
                  onChange={(color: any) => setBackgroundColor(color.hex)}
                />
              </Grid.Column>
              <Grid.Column width={7}>
                <SwatchesPicker
                  height={348}
                  width={425}
                  color={backgroundColor}
                  onChangeComplete={(color: any) =>
                    setBackgroundColor(color.hex)
                  }
                />
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
        {/* DEVICE SETTINGS */}
        <div>
          <Header as="h2" attached="top">
            Device Settings
          </Header>
          <Segment attached>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {devices.map((device, index) => {
                const { id, type, overlay, url } = device;
                return (
                  <div
                    key={id}
                    style={{
                      width: 200,
                      height: 400,
                      backgroundImage: `url(${require("../images" +
                        overlay.imageSrc)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: overlay.imageBorderRadius,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: overlay.imageWidthReduction / 2,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        height: "90%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <label>Website URL</label>
                        <TextArea
                          onChange={(e: any) =>
                            updateDeviceUrl(device, e.target.value)
                          }
                          value={url}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div>
                        <Button negative onClick={() => removeDevice(id)}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {devices.length < 3 && (
                <Button
                  onClick={addDevice}
                  icon="plus"
                  positive
                  circular
                  style={{ height: 100, width: 100 }}
                />
              )}
            </div>
          </Segment>
        </div>
      </Modal.Content>
    </Modal>
  );
}
