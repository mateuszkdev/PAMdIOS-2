import React, { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { Results } from "./components/Results"
import { Search } from "./components/Search"
import { Event, events as e } from "./events"
import { Category } from "./components/Category"

const App = () => {

  const [events, setEvents] = useState<Event[]>(e)
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("")
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  const toggleFavorite = (id: string) => {
    setEvents((e) => e.map((event) => event.id === parseInt(id) ? { ...event, favorite: !event.favorite } : event))
  }

  const filteredEvents = events.filter((e) => {
    const matches = (e.title.toLowerCase().includes(searchQuery.toLowerCase()) || e.description.toLowerCase().includes(searchQuery.toLowerCase()) || e.location.toLowerCase().includes(searchQuery.toLowerCase())) && (category === "" || category === "Wszystkie" || e.category === category)
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
        <Category value={category} onChange={setCategory} />

      <Search value={searchQuery} onChange={setSearchQuery} />
      <Results events={filteredEvents} onToggleFavorite={toggleFavorite} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
    backgroundColor: "#f8f9fa",
  },

  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 16,
  },

  favoriteButton: {
    borderWidth: 0,
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  activeFavoriteButton: {
    backgroundColor: "#007AFF",
  },

  favoriteButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },

  description: {
    color: "#666",
    marginBottom: 10,
    fontSize: 14,
  },

  categoryButton: {
    borderWidth: 0,
    padding: 10,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: "#f0f0f0",
  },

  category: {
    marginBottom: 16,
  }
  
});

export default App