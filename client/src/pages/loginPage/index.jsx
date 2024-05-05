import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
const Loginpage = () => {
  const isNotMobileScreen = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          {" "}
          Sociopedia
        </Typography>
      </Box>
      <Box
        width={isNotMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography variant="h5" fontWeight="500" sx={{ mb: "1.5rem" }}>
          Welcome To Chatopedia for chatter boxes
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default Loginpage;
