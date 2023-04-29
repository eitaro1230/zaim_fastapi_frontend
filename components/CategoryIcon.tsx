import { isCategoryColor } from "@/utils/categoryList";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SchoolIcon from "@mui/icons-material/School";
import TrainIcon from "@mui/icons-material/Train";

// todo:categoryNameがcategoryList.tsと二重管理になっている
const CategoryIcon = ({ category, color }: any) => {
  const categoryIconList = [
    {
      categoryName: "食費",
      categoryIcon: (
        <RestaurantIcon sx={color && { color: isCategoryColor(category) }} />
      ),
    },
    {
      categoryName: "日用雑貨",
      categoryIcon: (
        <RestaurantIcon sx={color && { color: isCategoryColor(category) }} />
      ),
    },
    {
      categoryName: "交通",
      categoryIcon: (
        <TrainIcon sx={color && { color: isCategoryColor(category) }} />
      ),
    },
    {
      categoryName: "交際費",
      categoryIcon: (
        <RestaurantIcon sx={color && { color: isCategoryColor(category) }} />
      ),
    },
    {
      categoryName: "エンタメ",
      categoryIcon: (
        <AudiotrackIcon sx={color && { color: isCategoryColor(category) }} />
      ),
    },
    {
      categoryName: "教育・教養",
      categoryIcon: (
        <SchoolIcon sx={color && { color: isCategoryColor(category) }} />
      ),
    },
    {
      categoryName: "美容・衣服",
      categoryIcon: (
        <DryCleaningIcon sx={color && { color: isCategoryColor(category) }} />
      ),
    },
    {
      categoryName: "医療・保険",
      categoryIcon: (
        <LocalHospitalIcon sx={color && { color: isCategoryColor(category) }} />
      ),
    },
    {
      categoryName: "立替金返済",
      categoryIcon: (
        <MonetizationOnIcon
          sx={color && { color: isCategoryColor(category) }}
        />
      ),
    },
    {
      categoryName: "臨時収入",
      categoryIcon: (
        <MonetizationOnIcon
          sx={color && { color: isCategoryColor(category) }}
        />
      ),
    },
    {
      categoryName: "その他",
      categoryIcon: (
        <MonetizationOnIcon
          sx={color && { color: isCategoryColor(category) }}
        />
      ),
    },
  ];

  const isCategoryIcon = (categoryName: string) => {
    const selectedCategoryIcon = categoryIconList.find(
      (category) => category.categoryName === categoryName
    );
    return selectedCategoryIcon?.categoryIcon;
  };

  return <>{isCategoryIcon(category)}</>;
};

export default CategoryIcon;

// const isCategoryIcon = (mode: any, category: any, color: boolean = false) => {
//   if (mode === "収入") {
//     return <MonetizationOnIcon></MonetizationOnIcon>;
//   }

//   if (category === "食費") {
//     return (
//       <RestaurantIcon
//         sx={color ? { color: isCategoryColor(category) } : null}
//       />
//     );
//   }
//   if (category === "日用雑貨") {
//     return (
//       <RestaurantIcon
//         sx={color ? { color: isCategoryColor(category) } : null}
//       />
//     );
//   }
//   if (category === "交通") {
//     return (
//       <TrainIcon sx={color ? { color: isCategoryColor(category) } : null} />
//     );
//   }
//   if (category === "交際費") {
//     return (
//       <RestaurantIcon
//         sx={color ? { color: isCategoryColor(category) } : null}
//       />
//     );
//   }
//   if (category === "エンタメ") {
//     return (
//       <AudiotrackIcon
//         sx={color ? { color: isCategoryColor(category) } : null}
//       />
//     );
//   }
//   if (category === "教養・教育") {
//     return (
//       <SchoolIcon sx={color ? { color: isCategoryColor(category) } : null} />
//     );
//   }
//   if (category === "美容・衣服") {
//     return (
//       <DryCleaningIcon
//         sx={color ? { color: isCategoryColor(category) } : null}
//       />
//     );
//   }
//   if (category === "医療・保険") {
//     return (
//       <LocalHospitalIcon
//         sx={color ? { color: isCategoryColor(category) } : null}
//       />
//     );
//   }
// };
