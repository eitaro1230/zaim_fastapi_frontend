const dateFormat = (date: any) => {
  const weekDay: {
    [key: number]: string;
  } = {
    0: "日",
    1: "月",
    2: "火",
    3: "水",
    4: "木",
    5: "金",
    6: "土",
  };

  const dateFormat = new Date(date);
  const japanFormatDate = `${dateFormat.getFullYear()}年${
    dateFormat.getMonth() + 1
  }月${dateFormat.getDate()}日(${weekDay[dateFormat.getDay()]})`;
  return japanFormatDate;
};

export default dateFormat;
