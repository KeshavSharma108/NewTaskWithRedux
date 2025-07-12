import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

interface MainlayoutProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Mainlayout: React.FC<MainlayoutProps> = ({ style, children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={[styles.mainContainer, style]}>{children}</View>

      <View style={styles.footerContainer}>
        {/* Optional footer */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Mainlayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "white",
  },
  footerContainer: {
    justifyContent: "flex-end",
  },
});
