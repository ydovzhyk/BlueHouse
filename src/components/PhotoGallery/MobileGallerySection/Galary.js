import * as React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Rooms, Houses, Surroundings } from "./Galary-information";

import { WithTransLate } from "../../helpers/translating";
import ImageSlider from "./ImageSlider/ImageSlider";

function CustomTabPanel(props) {
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });
  const { children, value, index, Rooms } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`GALLERY-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography component="div">{children}</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(1, 1fr)"
                : "repeat(2, 1fr)",
              width: "100%",
              gap: isMobile ? "40px" : "18px",
              paddingX: "20px",
            }}
          >
            {Rooms.map((room, index) => (
              <Card
                key={index}
                sx={{
                  maxWidth: "100%",
                  boxShadow: "none",
                  borderRadius: "0px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <ImageSlider category={room.title} />
                  {room.title !== "Northern Lights" &&
                    room.title !== "Neighbourhood" &&
                    room.title !== "Activities" && (
                      <div
                        style={{
                          position: "absolute",
                          left: "0",
                          bottom: "0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: "2",
                          height: "60px",
                          width: "100%",
                          fontSize: "15px",
                          color: "white",
                          background:
                            "linear-gradient(to bottom, rgba(0, 0, 0,  0), rgba(0, 0, 0,  0.4), rgba(0, 0, 0, 0.8))",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        {/* <DotLottieReact
                          src="https://lottie.host/c5ab6f95-ee26-4dee-bc61-cf78f2044e6b/9KVNaXgEwD.lottie"
                          loop
                          autoplay
                          speed={0.6}
                        /> */}
                        <DotLottieReact
                          src="https://lottie.host/910a4f04-df80-4b5e-9ace-0564c5005b2e/7RauUmHT2f.lottie"
                          loop
                          autoplay
                          speed={0.6}
                        />
                      </div>
                    )}
                </div>
                <CardContent
                  sx={{ maxWidth: "280px", height: "10px", padding: 0, my: 1 }}
                >
                  <Typography
                    gutterBottom
                    fontSize="16px"
                    fontWeight="400"
                    color="#000000"
                    fontFamily="Josefin Sans"
                    component="div"
                  >
                    <WithTransLate text={room.title} />
                  </Typography>
                  <Typography
                    gutterBottom
                    fontSize="14px"
                    fontWeight="300"
                    color="#14202B"
                    component="div"
                  >
                    <WithTransLate text={room.From} />
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    height: "10px",
                    pt: 2,
                    pl: 0,
                    pr: 0,
                    mt: room.From ? 6 : 3,
                    width: "100%",
                    ml: 0,
                    mr: 0,
                  }}
                >
                  <Button
                    sx={{
                      maxWidth: "280px",
                      height: "46px",
                      textDecoration: "underline",
                      p: 0,
                      pr: "0",
                      color: "#1D3967",
                      fontFamily: "Josefin Sans",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                    }}
                    href={room.Link}
                    target="_blank"
                  >
                    {value === 2 ? (
                      <WithTransLate text="SEE MORE" />
                    ) : (
                      <WithTransLate text="BOOK NOW" />
                    )}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  Rooms: PropTypes.array.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `GALLERY-${index}`,
  };
}

const Gallery = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id="GALLERY"
      sx={{
        width: "100%",
        paddingTop: "50px",
        display: "block",
      }}
    >
      <Typography
        gutterBottom
        variant="h2"
        sx={{
          fontSize: "20px",
          marginLeft: "20px",
          fontFamily: "Oblik",
        }}
      >
        <WithTransLate sx={{}} text="GALLERY" />
      </Typography>

      <Box>
        <Tabs
          sx={{
            margin: "20px 20px",
            marginTop: "0px",
            "& .MuiTab-root": {
              fontFamily: "Josefin Sans",
              textTransform: "none",
              fontWeight: "400",
              fontSize: "18px",
              minWidth: 100,
              color: "#8F8F8F",
              position: "relative",
              border: "none",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%) scaleX(0)",
                height: "2px",
                backgroundColor: "#8F8F8F",
                transition: "transform 0.3s ease",
                transformOrigin: "center",
                boxSizing: "border-box",
              },
              "&.Mui-selected": {
                fontWeight: "600",
                color: "#1D3967",
              },
              "&.Mui-selected::after": {
                backgroundColor: "#1D3967",
                transform: "translateX(-50%) scaleX(1)",
              },
              "&:hover::after": {
                transform: "translateX(-50%) scaleX(1)",
              },
              "&.Mui-focusVisible": {
                outline: "none",
                borderColor: "none",
              },
              "&:focus": {
                outline: "none",
              },
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#1D3967",
            },
          }}
          centered
        >
          <Tab
            label="Rooms"
            sx={{ fontStyle: "inherit", width: "33%" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Houses"
            sx={{ fontStyle: "inherit", width: "33%" }}
            {...a11yProps(1)}
          />
          <Tab
            label="Surroundings"
            sx={{ fontStyle: "inherit", width: "33.9%" }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} Rooms={Rooms} index={0}>
        {/*Rooms*/}
      </CustomTabPanel>
      <CustomTabPanel value={value} Rooms={Houses} index={1}>
        {/*Houses*/}
      </CustomTabPanel>
      <CustomTabPanel value={value} Rooms={Surroundings} index={2}>
        {/*   Surroundings*/}
      </CustomTabPanel>
    </Box>
  );
};

export default Gallery;