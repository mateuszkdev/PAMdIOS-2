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
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});