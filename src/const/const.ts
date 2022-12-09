import { createTheme } from "@mui/material/styles";

const DATE = new Date();
const TIME =
  +" " +
  DATE.getDate() +
  "-" +
  (DATE.getMonth() + 1) +
  "-" +
  DATE.getFullYear() +
  "  " +
  DATE.toLocaleTimeString("en-UK");

export const THEME = createTheme({
  palette: {
    primary: {
      main: "#ff4400",
    },
  },
});

export const imgOverlay = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    backgroundColor: "white",
  },
};

export const COMMENT: Comment = {
  id: "0",
  content: "Some comment that is a definitely a legit comment",
  currentTime: TIME,
};
export interface Comment {
  id: string;
  content: string;
  currentTime: string;
}

export const DUMMY = [
  {
    id: 0,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Technology",
    comments: [COMMENT],
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Technology",
    comments: [COMMENT],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Technology",
    comments: [COMMENT],
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Sports",
    comments: [COMMENT],
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Sports",
    comments: [COMMENT],
  },
];

export const DUMMY_HEADER = {
  id: "head",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  comments: [COMMENT],
};

const categories = ["Technology", "Sports"];

export const newsCategories = categories.map((categoryTitle) => ({
  title: categoryTitle,
  news: DUMMY.filter((article) => article.category == categoryTitle),
}));

export const DUMMY_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
