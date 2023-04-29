import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useRouter } from "next/router";
import * as React from "react";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header({ titleName, buttonName, backButton }: any) {
  const router = useRouter();
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar sx={{ pl: 1, justifyContent: "space-between", gap: 3 }}>
            {backButton ? (
              <Button
                variant="text"
                color="inherit"
                startIcon={<ArrowBackIosNewIcon />}
                disableRipple
                sx={{ width: 70 }}
                onClick={(e) => router.back()}
              >
                {buttonName}
              </Button>
            ) : (
              <Box component="div" width={70}></Box>
            )}
            <Typography variant="h5" component="div">
              {titleName}
            </Typography>
            <Box component="div" width={64}></Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
