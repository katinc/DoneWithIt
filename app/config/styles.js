import { Platform } from "react-native";

import colors from "./colors";

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  colors: colors,
};
