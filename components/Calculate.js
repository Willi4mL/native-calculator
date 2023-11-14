import { ScrollView, StyleSheet, Text } from 'react-native';

function Calculate({ receiveNumber }) {

	return (
		<>
			<Text style={styles.calculateNumber}>3243+4334</Text>
			<ScrollView style={styles.scrollResult}>
				<Text style={styles.result}>{receiveNumber}</Text>
			</ScrollView>
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
		color: '#B6F6B6',
	},
})

export default Calculate