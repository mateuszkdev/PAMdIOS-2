import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { EventCard } from "./EventCard";
import { Event } from "../events"


export const Results: React.FC<{ events: Event[]; onToggleFavorite: (id: string) => void }> = ({ events, onToggleFavorite }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>
        Znaleziono {events.length} wydarzeń
      </Text>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCard
            id={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            location={item.location}
            favorite={item.favorite}
            onPress={() => onToggleFavorite(item.id as any)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1
  },

  count: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});