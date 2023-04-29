import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreateIcon from "@mui/icons-material/Create";
import HistoryIcon from "@mui/icons-material/History";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import * as React from "react";

const isMenuList = (menu: any) => {
  if (menu === "履歴") {
    return {
      path: "/",
      icon: <HistoryIcon></HistoryIcon>,
    };
  }
  if (menu === "記録") {
    return {
      path: "/create",
      icon: <CreateIcon></CreateIcon>,
    };
  }
  if (menu === "編集") {
    return {
      path: "/aa/update",
      icon: <CreateIcon></CreateIcon>,
    };
  }
  if (menu === "削除") {
    return {
      path: "/delete",
      icon: <CalendarMonthIcon></CalendarMonthIcon>,
    };
  }
};

export default function BottomMenu({ menuList }: any) {
  const router = useRouter();
  const [bottomNavigation, setBottomNavigation] = React.useState(
    router.pathname
  );
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={bottomNavigation}
          onChange={(event, newValue) => {
            setBottomNavigation(newValue);
            router.push(newValue);
          }}
        >
          {menuList.map((menu: any, index: any) => (
            <BottomNavigationAction
              key={index}
              label={menu}
              value={isMenuList(menu)?.path}
              icon={isMenuList(menu)?.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
