import React, { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { Results } from "./components/Results"
import { Search } from "./components/Search"
import { Event, events as e } from "./events"

const App = () => {

  const [events, setEvents] = useState<Event[]>(e)
  const [searchQuery, setSearchQuery] = useState("")
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  const toggleFavorite = (id: string) => {
    setEvents((e) => e.map((event) => event.id === parseInt(id) ? { ...event, favorite: !event.favorite } : event))
  }

  const filteredEvents = events.filter((e) => {
    const matches = e.title.toLowerCase().includes(searchQuery.toLowerCase()) || e.description.toLowerCase().includes(searchQuery.toLowerCase()) || e.location.toLowerCase().includes(searchQuery.toLowerCase())
    return showOnlyFavorites ? matches && e.favorite : matches
  })

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wydarzenia</Text>
      <Pressable 
        style={[styles.favoriteButton, showOnlyFavorites && styles.activeFavoriteButton]}
        onPress={() => setShowOnlyFavorites(!showOnlyFavorites)}
      >
        <Text style={styles.favoriteButtonText}>Pokaż tylko ulubione</Text>
      </Pressable>
      <Search value={searchQuery} onChange={setSearchQuery} />
      <Results events={filteredEvents} onToggleFavorite={toggleFavorite} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
  },

  favoriteButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: "#ccc",
    alignItems: "center",
  },

  activeFavoriteButton: {
    backgroundColor: "#d0e8ff",
    borderColor: "#007AFF",
  },

  favoriteButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },

  description: {
    color: "gray",
    marginBottom: 10,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },

  categoryButton: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    marginRight: 6,
    marginBottom: 6,
  },

  activeCategory: {
    backgroundColor: "#d0e8ff",
  },
});

export default App