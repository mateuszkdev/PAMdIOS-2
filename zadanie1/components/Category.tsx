import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";

const CATEGORIES = ["Wszystkie", "Muzyka", "Film", "Książki", "Sport", "Sztuka", "Kulinaria", "Technologia"]

export const Category: React.FC<{ value: string; onChange: (text: string) => void }> = ({ value, onChange }) => {
    return (
        <FlatList
            data={CATEGORIES}
            style={styles.container}
            keyExtractor={(item) => item}
            numColumns={5}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={[styles.categoryItem, value === item && styles.selectedCategory]}
                    onPress={() => onChange(item)}
                >
                    <Text style={[styles.categoryText, value === item && styles.selectedText]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            )}
            scrollEnabled={true}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        marginBottom: 0,
        maxHeight: 150,
    },
    categoryItem: {
        flex: 1,
        borderWidth: 0,
        borderRadius: 12,
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 6,
        backgroundColor: "#f5f5f5",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
        minWidth: 100
    },
    selectedCategory: {
        backgroundColor: "#007AFF",
    },
    categoryText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#333",
        textAlign: "center",
    },
    selectedText: {
        color: "#fff",
    },
});