import AccountIcon from "@/components/AccountIcon";
import BottomMenu from "@/components/BottomMenu";
import CategoryIcon from "@/components/CategoryIcon";
import Header from "@/components/Header";
import TopicPath from "@/components/TopicPath";
import dateFormat from "@/utils/dateFormat";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SimplePaper() {
  const router = useRouter();

  return (
    <>
      <Header titleName="履歴の詳細" buttonName="戻る" backButton></Header>
      <Link
        href={`/${router.query.id}/update`}
        style={{ textDecoration: "none" }}
      >
        <Paper sx={{ m: 1, p: 1 }}>
          <Typography variant="h6" align="center" sx={{ mt: 2 }}>
            {dateFormat(router.query.date)}
          </Typography>
          <Typography variant="h2" align="center" sx={{ mt: 2, mb: 3 }}>
            ¥ {Number(router.query.amount).toLocaleString()}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <CategoryIcon category={router.query.category} color></CategoryIcon>
            <TopicPath
              mode={router.query.mode}
              category={router.query.category}
              genre={router.query.genre}
            ></TopicPath>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, my: 2 }}>
            <AccountIcon
              mode={router.query.mode}
              from_account={router.query.from_account}
              to_account={router.query.to_account}
            ></AccountIcon>
            <Typography>{router.query.from_account}</Typography>
          </Box>
        </Paper>
      </Link>
      <BottomMenu menuList={["編集", "削除"]}></BottomMenu>
    </>
  );
}
