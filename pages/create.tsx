import AlertDialog from "@/components/AlertDialog";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { categoryList } from "@/utils/categoryList";
import genreList from "@/utils/genreList";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { forwardRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

type Inputs = {
  category: string;
  genre: string;
  from_account: string;
  amount: string;
  date: Dayjs;
};

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        decimalScale={0}
        allowNegative={false}
        thousandSeparator
        valueIsNumericString
        suffix=" 円"
      />
    );
  }
);

const Payment = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [responseData, setResponseData] = useState({
    genre: "",
    from_account: "",
    amount: "",
    date: "",
  });

  const { handleSubmit, watch, control, reset, getValues } = useForm<Inputs>({
    defaultValues: {
      category: "",
      genre: "",
      from_account: "現金",
      amount: "",
      date: dayjs(),
    },
  });

  const validationRules = {
    category: { required: "カテゴリーを選択してください" },
    genre: { required: "ジャンルを選択してください" },
    from_account: { required: "支払い方法を選択してください" },
    amount: { required: "金額を入力てください" },
    date: { required: "日付を選択してください" },
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const submitData = {
      genre: data.genre,
      from_account: data.from_account,
      amount: data.amount,
      date: data.date.format("YYYY-MM-DD"),
    };
    setOpenLoading(true);
    await fetch(process.env.NEXT_PUBLIC_PAYMENT_CREATE_URL!, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((res) => res.json())
      .then((data) => {
        setOpenLoading(false);
        setOpenDialog(true);
        setResponseData({
          genre: data.genre,
          from_account: data.from_account,
          amount: data.amount,
          date: data.date,
        });
      })
      .catch((err) => {
        setOpenLoading(false);
        console.error("失敗", err);
      });
  };

  return (
    <>
      <Header titleName="記録" buttonName="戻る" backButton></Header>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 2, mx: 1 }}
      >
        <Stack spacing={4}>
          <Controller
            name="category"
            control={control}
            rules={validationRules.category}
            defaultValue=""
            render={({ field, fieldState }) => (
              <>
                <FormControl error={fieldState.invalid}>
                  <Paper elevation={0}>
                    <InputLabel id="category">カテゴリー</InputLabel>
                    <Select
                      fullWidth
                      labelId="category"
                      label="カテゴリー"
                      error={fieldState.invalid}
                      {...field}
                    >
                      <MenuItem value="" sx={{ color: "gray" }}>
                        未選択
                      </MenuItem>
                      {categoryList
                        .filter((category) => category.mode === "支出")
                        .map((category, index) => (
                          <MenuItem key={index} value={category.categoryName}>
                            {category.categoryName}
                          </MenuItem>
                        ))}
                    </Select>
                  </Paper>
                  {fieldState.error && (
                    <FormHelperText>{fieldState.error?.message}</FormHelperText>
                  )}
                </FormControl>
              </>
            )}
          />
          <Controller
            name="genre"
            control={control}
            rules={validationRules.genre}
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormControl error={fieldState.invalid}>
                <Paper elevation={0}>
                  <InputLabel id="genre">ジャンル</InputLabel>
                  <Select
                    fullWidth
                    labelId="genre"
                    label="ジャンル"
                    error={fieldState.invalid}
                    {...field}
                  >
                    <MenuItem value="" sx={{ color: "gray" }}>
                      未選択
                    </MenuItem>
                    {genreList
                      .filter(
                        (genre) => genre.categoryName === watch("category")
                      )
                      .map((genre, index) => (
                        <MenuItem key={index} value={genre.name}>
                          {genre.name}
                        </MenuItem>
                      ))}
                  </Select>
                </Paper>
                {fieldState.error && (
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Controller
            name="from_account"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Paper elevation={0}>
                <FormControl fullWidth>
                  <ToggleButtonGroup
                    color="primary"
                    size="large"
                    exclusive
                    fullWidth
                    {...field}
                  >
                    <ToggleButton value="現金">現金</ToggleButton>
                    <ToggleButton value="PayPay">PayPay</ToggleButton>
                  </ToggleButtonGroup>
                </FormControl>
              </Paper>
            )}
          />
          <Controller
            name="amount"
            control={control}
            rules={validationRules.amount}
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormControl error={fieldState.invalid}>
                <Paper elevation={0}>
                  <TextField
                    label="金額"
                    variant="outlined"
                    InputProps={{ inputComponent: NumericFormatCustom as any }}
                    fullWidth
                    error={fieldState.invalid}
                    {...field}
                  />
                </Paper>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <Paper elevation={0}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="支払い日"
                    format="YYYY年MM月DD日"
                    sx={{ width: "100%" }}
                    {...field}
                  />
                </LocalizationProvider>
              </Paper>
            )}
          />
          <Button variant="contained" type="submit" size="large" fullWidth>
            記録する
          </Button>
        </Stack>
      </Box>
      <Loading openLoading={openLoading}></Loading>
      <AlertDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        reset={reset}
        responseData={responseData}
      ></AlertDialog>
    </>
  );
};

export default Payment;
