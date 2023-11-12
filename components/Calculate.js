import { StyleSheet, Text } from 'react-native';

function Calculate() {

	return (
		<>
			<Text style={styles.calculateNumber}>250 + 250</Text>
			<Text style={styles.result}>500</Text>
		</>
	)
}

const styles = StyleSheet.create({
	calculateNumber: {
		width: '100%',
		textAlign: 'right',
		fontSize: 30,
		color: '#B6F6B6',
		opacity: 0.4,
	  },
	  result: {
		width: '100%',
		textAlign: 'right',
		fontSize: 70,
		color: '#B6F6B6'
	  },
}) 

export default Calculate