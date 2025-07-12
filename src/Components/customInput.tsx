import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";

interface CustomInputType {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  onchange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeText?: (text: string) => void;
  value?: string;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  svgIcon?: React.ReactNode;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  defaultValue?: string;
  onBlur?: () => void;
  // Note: You don’t need [key: string]: any because ...props handles extra props
}

const CustomInput = ({
  style,
  placeholder = "Enter placeholder name...",
  title = "Enter Title",
  titleStyle,
  onchange,
  onChangeText,
  value,
  secureTextEntry,
  placeholderTextColor = "grey",
  svgIcon,
  keyboardType,
  defaultValue,
  onBlur,
  ...props
}: CustomInputType) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[{ fontSize: 13, fontWeight: "500" }, titleStyle]}>
          {title}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        {svgIcon}
        <TextInput
          onChange={onchange}
          onChangeText={onChangeText}
          value={value}
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          defaultValue={defaultValue}
          onBlur={onBlur}
          {...props}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  titleContainer: {
    marginVertical: 10,
    top: 20,
    zIndex: 1,
    maxWidth: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 7,
    backgroundColor: "white",
    borderColor: "grey",
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});
