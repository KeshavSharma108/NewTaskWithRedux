import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface CustomTitleProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode; // anything that can be rendered, like text or JSX
}

const CustomTitle: React.FC<CustomTitleProps> = ({
  style,
  children = "Enter Title",
  textStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
});
