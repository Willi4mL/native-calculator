import { StyleSheet, TouchableOpacity, Image } from 'react-native';

function Undo() {

	return (
		<TouchableOpacity style={styles.undoButton}>
			<Image source={require('../assets/undo.png')} style={styles.undoImg}></Image>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	undoButton: {
	  display: 'flex',
	  alignItems: 'flex-end',
	  width: '100%',
	},
	undoImg: {
	  width: 30,
	  height: 30,
	  tintColor: '#E6FFE6',
	  marginBottom: 90,
	},
})

export default Undo