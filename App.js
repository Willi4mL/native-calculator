import { StyleSheet, View } from 'react-native';
import Undo from './components/Undo.js';
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
      <View style={styles.topSection}>
        <Undo />
        <Calculate receiveNumber={number}/>
      </View>
     <Buttons passNumber={handlePassNumber}/>
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
    flexWrap: 'wrap',
    textAlign: 'right',
    paddingRight: 20
  },
});
