import { createTheme } from "@mui/material/styles";

export const THEME = createTheme({
  palette: {
    primary: {
      main: "#ff4400",
    },
  },
});
export const DUMMY = [
  {
    id: 0,
    title: "test",
    description: "asdf",
  },
  {
    id: 1,
    title: "test2",
    description: "text1",
  },
  {
    id: 2,
    title: "test3",
    description: "text2",
  },
  {
    id: 3,
    title: "test4",
    description: "text3",
  },
  {
    id: 4,
    title: "test",
    description: "text4",
  },
];

export const DUMMY_HEADER = {
  id: "head",
  title: "test",
  description: "text4",
};

export const DUMMY_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
