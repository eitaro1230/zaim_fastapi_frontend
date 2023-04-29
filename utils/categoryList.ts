const categoryList = [
  { categoryName: "食費", categoryColor: "#a2cf6e", mode: "支出" },
  { categoryName: "日用雑貨", categoryColor: "#03a9f4", mode: "支出" },
  { categoryName: "交通", categoryColor: "#9c27b0", mode: "支出" },
  { categoryName: "交際費", categoryColor: "#ed4b82", mode: "支出" },
  { categoryName: "エンタメ", categoryColor: "#ff9800", mode: "支出" },
  { categoryName: "教育・教養", categoryColor: "#b23c17", mode: "支出" },
  { categoryName: "美容・衣服", categoryColor: "#4caf50", mode: "支出" },
  { categoryName: "医療・保険", categoryColor: "#b2a300", mode: "支出" },
  { categoryName: "立替金返済", categoryColor: "", mode: "収入" },
  { categoryName: "臨時収入", categoryColor: "", mode: "収入" },
  { categoryName: "その他", categoryColor: "", mode: "収入" },
];

const isCategoryColor = (categoryName: string) => {
  const selectedCategory = categoryList.find(
    (category) => category.categoryName === categoryName
  );
  return selectedCategory!.categoryColor;
};

export { categoryList, isCategoryColor };
