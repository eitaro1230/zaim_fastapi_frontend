import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";

export default function AlertDialog({
  openDialog,
  setOpenDialog,
  reset,
  responseData,
}: any) {
  const router = useRouter();

  return (
    <Dialog open={openDialog}>
      <DialogTitle>登録が完了しました</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ジャンル　：{responseData.genre}
          <br />
          支払い方法：{responseData.from_account}
          <br />
          金額　　　：{Number(responseData.amount).toLocaleString()} 円
          <br /> 日付　　　：{responseData.date.split("-")[0]}年
          {responseData.date.split("-")[1]}月{responseData.date.split("-")[2]}日
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            reset();
            setOpenDialog(false);
          }}
          autoFocus
        >
          続けて登録
        </Button>
        <Button onClick={() => router.push("/")}>履歴を確認</Button>
      </DialogActions>
    </Dialog>
  );
}
