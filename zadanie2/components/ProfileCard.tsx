import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileCardProps {
  name: string;
  city: string;
  bio: string;
  isDark: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, city, bio, isDark }) => {
  const styles = createStyles(isDark);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/100' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name || 'Imie uzytkownika'}</Text>
      <Text style={styles.city}>{city || 'Miasto'}</Text>
      <Text style={styles.bio}>{bio || 'Brak opisu'}</Text>
    </View>
  );
};

const createStyles = (isDark: boolean) =>
  StyleSheet.create({
    card: {
      backgroundColor: isDark ? '#2a2a2a' : '#fff',
      borderRadius: 12,
      padding: 24,
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 12,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#333',
      marginBottom: 4,
    },
    city: {
      fontSize: 14,
      color: isDark ? '#aaa' : '#666',
      marginBottom: 8,
    },
    bio: {
      fontSize: 14,
      color: isDark ? '#ccc' : '#555',
      textAlign: 'center',
    },
  });

export default ProfileCard;
