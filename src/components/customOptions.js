import React from "react";
import { Box, Typography } from "@mui/material";
import TexturePicker from "./texturePicker";
const tableStyles = {
    border: "1px solid black",
    borderCollapse: "collapse",
    tableLayout: "auto",
    width: "100%",
};
const tableDataStyles = {
    textAlign: "center",
    fontWeight: "600",
    fontSize: "12px",
    padding: "5px",
    border: "1px solid grey",
    width: "90px",
    padding: "9px 0",
};
const tableHeaderStyles = {
    textAlign: "center",
    fontWeight: "700",
    fontSize: "14px",
    padding: "5px",
    border: "1px solid grey",
};
const tableHeader = {
    fontSize: "12px",
    height: "60px",
};
import ConfigurationTable from "./configurationTable";

const CustomOptions = (props) => {
  const {
    selectedPart,
    items,
    handleItems,
    fabricsArray,
    finishesArray,
    itemType,
  } = props;

  const displayTextureSelectors = () => {
    const finishes = items.find((item) => item.name.name === "Finish");
    const fabrics = items.find((item) => item.name.name === "Fabric");
    const joints = items.find((item) => item.name.name === "Joints");

    return (
      <>
        {finishes ? (
          <>
            <Box
              style={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                 height: "55px",
                                borderTop: "1px #12141d solid",
                                borderBottom: "1px #12141d solid",
                                paddingTop: "10px",
              }}
            >
              <Typography
              style={{
                                    fontWeight: "500",
                                    fontSize: "15px",
                }}
              >
                SELECT FINISH
              </Typography>
              
                            <Box
                                style={{
                                    padding: "0 10px",
                                    fontStyle: "italic",
                                    color: "#949494",
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: "7px",
                                        textAlign: "center",
                                        marginTop: "-14px",
                                    }}
                                >
                                    *DUE TO THE MANY VARIATIONS IN MONITORS AND
                                    BROWSERS, ACTUAL Fabric Colors MAY VARY ON
                                    DIFFERENT MONITORS
                                </Typography>
                            </Box>
                        </Box>
                        <Box style={{ height: "310px", overflowY: "scroll" }}>
                            <TexturePicker
                                selectedPart={selectedPart}
                                items={items}
                                handleItems={handleItems}
                                textures={finishesArray}
                textureType={"Finish"}
                joints={joints ? "joints" : ""}
                itemType={itemType}
              />
            </Box>
          </>
        ) : (
          <></>
        )}
        {fabrics ? (
          <>
            <Box
              style={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                height: "60px",
                borderTop: "1px #12141d solid",
                borderBottom: "1px #12141d solid",
                paddingTop: "10px",
              }}
            >
              <Typography
              style={{
                                    fontWeight: "500",
                                    fontSize: "15px",
                }}
              >
                SELECT FABRIC
              </Typography>
              <Box
                                style={{
                                    padding: "0 10px",
                                    fontStyle: "italic",
                                    color: "#949494",
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: "7px",
                                        textAlign: "center",
                                        marginTop: "-14px",
                                    }}
                                >
                                    *DUE TO THE MANY VARIATIONS IN MONITORS AND
                                    BROWSERS, ACTUAL Fabric Colors MAY VARY ON
                                    DIFFERENT MONITORS
                                </Typography>
              </Box>
               </Box>
             <Box
                            style={{
                                maxHeight: "400px",
                                overflowY: "auto",
                                padding: "0 20px",
                            }}
                        >
              <TexturePicker
                selectedPart={selectedPart}
                items={items}
                handleItems={handleItems}
                textures={fabricsArray}
                textureType={"Fabric"}
              />
            </Box>
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <>
      <Box style={{ border: "3px #12141d solid" }}>
        <Box
          style={{
            display: "grid",
            alignItems: "center",
            backgroundColor: "#12141d",
            width: "100%",
            height: "50px",
          }}
        >
          <Typography
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            CHOOSE CUSTOM OPTIONS
          </Typography>
        </Box>
        {displayTextureSelectors()}
        <ConfigurationTable />
      </Box>
    </>
  );
};

export default CustomOptions;
