import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fontFamily.extraBold,
  },
  subtitle: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.medium,
  },
  ticket: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 24,
    paddingBottom: 24,
    overflow: "hidden",
  },
  content: {
    padding: 20,
  },
  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 60,
  },
  duration: {
    alignItems: "center",
  },
  hours: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[800],
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    textTransform: "uppercase",
    color: colors.gray[400],
  },
  name: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.black,
  },
  details: {
    marginTop: 60,
  },
  inline: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 24,
  },
  footerContent: {
    gap: 24,
    flex: 1,
  },
});
