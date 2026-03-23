import React from "react"
import {
    View, Text, StyleSheet, Pressable
} from "react-native"
import { Event } from "../events"

type EventCardProps = Event & {
    onPress: () => void
}

export const EventCard: React.FC<EventCardProps> = ({
    title, description, date, location, onPress, favorite
}) => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
        
            <Text>{date}</Text>
            <Text>{location}</Text>
            <Text>{description}</Text>

            <Pressable style={styles.button} onPress={onPress}>
                <Text style={favorite ? styles.buttonText1 : styles.buttonText0}>
                    {favorite ? "X Usuń z ulubionych" : "+ Dodaj do ulubionych"}
                </Text>
            </Pressable>

        </View>
    )

}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1a1a1a",
  },

  button: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },

  buttonText0: {
    fontWeight: "600",
    color: "#10b981",
    textAlign: "center",
    fontSize: 14,
  },

  buttonText1: {
    fontWeight: "600",
    color: "#ef4444",
    textAlign: "center",
    fontSize: 14,
  },
});