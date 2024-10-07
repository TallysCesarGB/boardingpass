import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    textTransform: "uppercase",
    color: colors.gray[400],
  },
  value: {
    fontSize: 40,
    fontFamily: fontFamily.bold,
    color: colors.black,
    marginTop: -12,
  },
});
