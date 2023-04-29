import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

export default function TopicPath({ mode, category, genre }: any) {
  const breadcrumbs = [
    <Typography key="1" color="text.primary">
      {mode}
    </Typography>,
    <Typography key="2" color="text.primary">
      {category}
    </Typography>,
    <Typography key="3" color="text.primary">
      {genre}
    </Typography>,
  ];

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}
