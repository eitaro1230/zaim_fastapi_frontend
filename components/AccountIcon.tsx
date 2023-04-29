import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PayPayIcon from "public/paypay_logo.svg";

const AccountIcon = ({ mode, from_account, to_account }: any) => {
  const isAccountIcon = (
    mode: string,
    from_account: string,
    to_account: string
  ) => {
    if (
      (mode === "支出" && from_account === "現金") ||
      (mode === "収入" && to_account === "現金")
    ) {
      return <AccountBalanceWalletIcon />;
    }
    if (
      (mode === "支出" && from_account === "PayPay") ||
      (mode === "収入" && to_account === "PayPay")
    ) {
      return <PayPayIcon width={24} height={24} />;
    }
  };
  return <>{isAccountIcon(mode, from_account, to_account)}</>;
};

export default AccountIcon;
