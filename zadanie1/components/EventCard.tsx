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
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  button: {
    marginTop: 10,
  },

  buttonText0: {
    fontWeight: "bold",
    color: "green",
  },

  buttonText1: {
    fontWeight: "bold",
    color: "red",
  },
});