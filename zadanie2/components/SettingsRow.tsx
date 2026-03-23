import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

interface SettingsRowProps {
  label: string;
  isDark: boolean;
  type?: 'switch' | 'arrow';
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  onPress?: () => void;
}

const SettingsRow: React.FC<SettingsRowProps> = ({
  label,
  isDark,
  type = 'arrow',
  value,
  onValueChange,
  onPress,
}) => {
  const styles = createStyles(isDark);

  const content = (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      {type === 'switch' ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: '#ccc', true: '#4CAF50' }}
          thumbColor={value ? '#fff' : '#f4f3f4'}
        />
      ) : (
        <Text style={styles.arrow}>›</Text>
      )}
    </View>
  );

  if (type === 'arrow' && onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const createStyles = (isDark: boolean) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isDark ? '#2a2a2a' : '#fff',
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#444' : '#eee',
    },
    label: {
      fontSize: 16,
      color: isDark ? '#fff' : '#333',
    },
    arrow: {
      fontSize: 22,
      color: isDark ? '#888' : '#999',
    },
  });

export default SettingsRow;
