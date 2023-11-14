import { StyleSheet, View } from 'react-native';
import Erase from './components/Erase.js';
import History from './components/History.js';
import Calculate from './components/Calculate';
import Buttons from './components/Buttons';
import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState()

  const handlePassNumber = (newNumber) => {
    setNumber(newNumber)
  }

  return (
    <View style={styles.container}>
      <History />
      <Erase />
      <View style={styles.topSection}>
        <Calculate receiveNumber={number} />
      </View>
      <Buttons passNumber={handlePassNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#394654',
    paddingTop: 80,
  },
  topSection: {
    flex: 1,
    marginTop: 130,
    paddingRight: 20,
    maxHeight: 135,
  },
});
