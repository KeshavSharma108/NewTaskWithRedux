import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  DimensionValue,
  TextStyle,
} from "react-native";
import React from "react";

interface CustomButtonType {
  title: string;
  backgroundColor: string;
  style?: StyleProp<ViewStyle>;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
}

const CustomButton = ({
  title,
  backgroundColor,
  style,
  color,
  onPress,
  size = "large",
  loading,
  disabled,
}: CustomButtonType) => {
  const getSizeStyle = (): {
    width: DimensionValue;
    height: number;
    textStyle: TextStyle;
  } => {
    switch (size) {
      case "small":
        return { width: "20%", height: 40, textStyle: { fontSize: 12 } };
      case "medium":
        return { width: "50%", height: 40, textStyle: { fontSize: 16 } };
      case "large":
        return { width: "100%", height: 40, textStyle: { fontSize: 17 } };
      default:
        return { width: "100%", height: 40, textStyle: { fontSize: 16 } };  // Default font size
    }
  };

  const sizeStyle = getSizeStyle();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        style,
        { backgroundColor: disabled ? "#d3d3d3" : backgroundColor }, // Light gray when disabled
        { width: sizeStyle.width, height: sizeStyle.height },
      ]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size="small" color={color || "#fff"} />
      ) : (
        <Text style={[styles.text, { color }, sizeStyle.textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 5,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
  },
});
