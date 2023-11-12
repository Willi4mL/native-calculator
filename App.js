import { StyleSheet, View } from 'react-native';
import Undo from './components/Undo.js';
import Calculate from './components/Calculate';
import Buttons from './components/Buttons';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Undo />
        <Calculate />
      </View>
     <Buttons />
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
