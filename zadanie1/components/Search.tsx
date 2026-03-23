import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const Search: React.FC<{ value: string; onChange: (text: string) => void }> = ({ value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Szukaj wydarzenia... (tytuł, opis, lokalizacja)"
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
});