// eslint-disable-file no-use-before-define

import { Box, useMediaQuery } from "@mui/material";
import Navbar from "pages/navbar";
import UserWidget from "pages/widgets/UserWidget";
import { useSelector } from "react-redux";
import MyPostWidget from "pages/widgets/MyPostWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import AdWidget from "pages/widgets/AdWidget";
import FriendsListWidget from "pages/widgets/FriendsListWidget";

const Homepage = () => {
  const isNotMobileScreen = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  const getFlexBasis = () => {
    if (isNotMobileScreen) {
      return "26%";
    } else {
      return undefined;
    }
  };
  const getaDisplayForNotMobileScreen = () => {
    if (isNotMobileScreen) {
      return "flex";
    } else {
      return "block";
    }
  };
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={getaDisplayForNotMobileScreen}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={getFlexBasis}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNotMobileScreen ? "42%" : undefined}
          mt={isNotMobileScreen ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNotMobileScreen && (
          <Box flexBasis="26%">
            <AdWidget />
            <Box m="2rem 0" />
            <FriendsListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Homepage;
