import { Modal, Segment, Header, Grid, Button } from "semantic-ui-react";

import { useGlobalContext } from "../views/App";

import { SwatchesPicker, PhotoshopPicker } from "react-color";

import DeviceModel from "../models/DeviceModel";

import MiniMobileDisplay from "../components/MiniMobileDisplay";

import backgroundDesigns from "../css/backgrounds";

export default function SettingsView() {
  const {
    open,
    backgroundColor,
    devices,
    updateBackgroundColor,
    setOpen,
    addDevice,
    backgroundDesign,
    setBackgroundDesign,
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
                padding: 50,
              }}
            >
              {devices.map((device: DeviceModel, index: number) => (
                <MiniMobileDisplay device={device} />
              ))}
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
        {/* COLOUR PICKER */}
        <div>
          <Header as="h2" attached="top">
            Background Color
          </Header>
          <Segment attached>
            <Grid.Row>
              <Grid columns={2} stretched>
                <Grid.Column width={9}>
                  <PhotoshopPicker
                    color={backgroundColor}
                    onChange={(color: any) => updateBackgroundColor(color.hex)}
                    onAccept={() => updateBackgroundColor(backgroundColor)}
                  />
                </Grid.Column>
                <Grid.Column width={7}>
                  <SwatchesPicker
                    height={348}
                    width={425}
                    color={backgroundColor}
                    onChangeComplete={(color: any) =>
                      updateBackgroundColor(color.hex)
                    }
                  />
                </Grid.Column>
              </Grid>
            </Grid.Row>
            <Grid.Row>
              <Grid columns={2}>
                <Grid.Column width={9}>
                  {backgroundDesigns.map((design: any) => (
                    <div
                      key={Math.random()}
                      style={{
                        ...design,
                        height: 50,
                        width: 100,
                        margin: 5,
                        float: "left",
                        cursor: "pointer",
                        boxShadow: "0px 0px 5px black",
                        ...(backgroundDesign === design && {
                          border: "3px solid black",
                        }),
                      }}
                      onClick={() => setBackgroundDesign(design)}
                    />
                  ))}
                </Grid.Column>
                <Grid.Column width={7}>
                  {backgroundDesign ? (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        ...backgroundDesign,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "2em",
                        boxShadow: "0px 0px 10px black",
                      }}
                    >
                      Select a design to preview
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Segment>
        </div>
      </Modal.Content>
    </Modal>
  );
}
