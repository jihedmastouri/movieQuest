import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type BtnProps = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: BtnProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
