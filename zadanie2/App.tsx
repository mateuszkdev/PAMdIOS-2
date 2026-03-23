import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import ProfileCard from './components/ProfileCard';
import SettingsRow from './components/SettingsRow';

const BIO_LIMIT = 150;
const PASSWORD_MIN_LENGTH = 6;

const App: React.FC = () => {

  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState('Mateusz Kalaga');
  const [email, setEmail] = useState('mateusz@example.com');
  const [city, setCity] = useState('Dąbrowa Górnicza');
  const [bio, setBio] = useState('Full-stack Developer');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const styles = createStyles(isDark);

  const handleBioChange = (text: string) => {
    if (text.length <= BIO_LIMIT) {
      setBio(text);
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      setMessage({ type: 'error', text: 'Imie nie moze byc puste' });
      return;
    }

    if (!email.includes('@')) {
      setMessage({ type: 'error', text: 'Email musi zawierac znak @' });
      return;
    }

    if (bio.length > BIO_LIMIT) {
      setMessage({ type: 'error', text: `Bio nie moze przekraczac ${BIO_LIMIT} znakow` });
      return;
    }

    if (password && password.length < PASSWORD_MIN_LENGTH) {
      setMessage({ type: 'error', text: `Haslo musi miec minimum ${PASSWORD_MIN_LENGTH} znakow` });
      return;
    }

    setMessage({ type: 'success', text: 'Dane zostaly zapisane!' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleLogout = () => {
    Alert.alert(
      'Wylogowanie',
      'Czy na pewno chcesz sie wylogowac?',
      [
        { text: 'Anuluj', style: 'cancel' },
        { text: 'Wyloguj', style: 'destructive', onPress: () => Alert.alert('Wylogowano') },
      ]
    );
  };

  const handleAbout = () => {
    Alert.alert('O aplikacji', 'Panel uzytkownika v1.0');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {message && (
          <View style={[styles.banner, message.type === 'error' ? styles.bannerError : styles.bannerSuccess]}>
            <Text style={styles.bannerText}>{message.text}</Text>
          </View>
        )}

        <ProfileCard name={name} city={city} bio={bio} isDark={isDark} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Edycja danych</Text>

          <Text style={styles.inputLabel}>Imie</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Wprowadz imie"
            placeholderTextColor={isDark ? '#888' : '#aaa'}
          />

          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Wprowadz e-mail"
            placeholderTextColor={isDark ? '#888' : '#aaa'}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.inputLabel}>Miasto</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={setCity}
            placeholder="Wprowadz miasto"
            placeholderTextColor={isDark ? '#888' : '#aaa'}
          />

          <View style={styles.labelRow}>
            <Text style={styles.inputLabel}>Bio</Text>
            <Text style={[styles.counter, bio.length >= BIO_LIMIT && styles.counterLimit]}>
              {bio.length}/{BIO_LIMIT}
            </Text>
          </View>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={bio}
            onChangeText={handleBioChange}
            placeholder="Napisz cos o sobie"
            placeholderTextColor={isDark ? '#888' : '#aaa'}
            multiline
            numberOfLines={3}
          />

          <Text style={styles.inputLabel}>Haslo</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
              placeholder="Nowe haslo (opcjonalne)"
              placeholderTextColor={isDark ? '#888' : '#aaa'}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity style={styles.showButton} onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.showButtonText}>{showPassword ? 'Ukryj' : 'Pokaz'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Zapisz zmiany</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ustawienia</Text>
          <View style={styles.settingsContainer}>
            <SettingsRow
              label="Powiadomienia"
              type="switch"
              value={notifications}
              onValueChange={setNotifications}
              isDark={isDark}
            />
            <SettingsRow
              label="Prywatnosc"
              type="switch"
              value={privacy}
              onValueChange={setPrivacy}
              isDark={isDark}
            />
            <SettingsRow
              label="Ciemny motyw"
              type="switch"
              value={isDark}
              onValueChange={setIsDark}
              isDark={isDark}
            />
            <SettingsRow
              label="O aplikacji"
              type="arrow"
              onPress={handleAbout}
              isDark={isDark}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Wyloguj</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const createStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
    },
    content: {
      padding: 16,
      paddingTop: 50,
      paddingBottom: 40,
    },
    banner: {
      padding: 12,
      borderRadius: 8,
      marginBottom: 16,
    },
    bannerSuccess: {
      backgroundColor: '#4CAF50',
    },
    bannerError: {
      backgroundColor: '#f44336',
    },
    bannerText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '600',
    },
    section: {
      backgroundColor: isDark ? '#2a2a2a' : '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#333',
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 14,
      color: isDark ? '#aaa' : '#666',
      marginBottom: 6,
    },
    labelRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    counter: {
      fontSize: 12,
      color: isDark ? '#888' : '#999',
    },
    counterLimit: {
      color: '#f44336',
    },
    input: {
      backgroundColor: isDark ? '#3a3a3a' : '#f9f9f9',
      borderWidth: 1,
      borderColor: isDark ? '#555' : '#ddd',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      color: isDark ? '#fff' : '#333',
      marginBottom: 16,
    },
    textArea: {
      minHeight: 80,
      textAlignVertical: 'top',
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDark ? '#3a3a3a' : '#f9f9f9',
      borderWidth: 1,
      borderColor: isDark ? '#555' : '#ddd',
      borderRadius: 8,
      marginBottom: 16,
    },
    passwordInput: {
      flex: 1,
      padding: 12,
      fontSize: 16,
      color: isDark ? '#fff' : '#333',
    },
    showButton: {
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    showButtonText: {
      color: '#2196F3',
      fontWeight: '600',
    },
    saveButton: {
      backgroundColor: '#2196F3',
      borderRadius: 8,
      padding: 14,
      alignItems: 'center',
    },
    saveButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    settingsContainer: {
      borderRadius: 8,
      overflow: 'hidden',
    },
    logoutButton: {
      backgroundColor: '#f44336',
      borderRadius: 8,
      padding: 14,
      alignItems: 'center',
    },
    logoutButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default App