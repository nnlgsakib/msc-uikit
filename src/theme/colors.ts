import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#D35400", // Dark Blurry Orange
  primaryBright: "#E67E22", // Brighter Orange
  primaryDark: "#A04000", // Darker Orange
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F4F4F4",
  backgroundDisabled: "#D3D3D3",
  contrast: "#1C1C1E",
  invertedContrast: "#FFFFFF",
  input: "#E1E1E1",
  inputSecondary: "#C0C0C0",
  tertiary: "#BEBEBE",
  text: "#3A3A3C",
  textDisabled: "#8E8E93",
  textSubtle: "#636366",
  borderColor: "#BEBEBE",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F5F7FA 0%, #E8E9EB 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6E4AFF",
  background: "#18181B",
  backgroundDisabled: "#3A3A3C",
  contrast: "#E5E5EA",
  invertedContrast: "#1C1C1E",
  input: "#2C2C2E",
  inputSecondary: "#48484A",
  primaryDark: "#A04000", // Darker Orange
  tertiary: "#3A3A3C",
  text: "#F5F5F7",
  textDisabled: "#8E8E93",
  textSubtle: "#AEAEB2",
  borderColor: "#48484A",
  card: "#1C1C1E",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #3A3A3C 0%, #48484A 100%)",
  },
};
