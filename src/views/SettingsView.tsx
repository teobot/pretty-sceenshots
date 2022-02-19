import { Modal, Segment, Header, Grid, Button } from "semantic-ui-react";

import { useGlobalContext } from "../views/App";

import { SwatchesPicker, PhotoshopPicker } from "react-color";

import DeviceModel from "../models/DeviceModel";

import MiniMobileDisplay from "../components/MiniMobileDisplay";

export default function SettingsView() {
  const {
    open,
    backgroundColor,
    devices,
    setBackgroundColor,
    setOpen,
    addDevice,
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
      </Modal.Content>
    </Modal>
  );
}
