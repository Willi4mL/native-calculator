import { ScrollView, StyleSheet, Text } from 'react-native';
import { useRecoilState } from 'recoil';
import { calculationResultState, calculationState } from '../states';

function Calculate() {
	const [resultState, setResultState] = useRecoilState(calculationResultState)
	const[calculation, setCalculation] = useRecoilState(calculationState)

	return (
		<>
			<Text style={styles.calculateNumber}>{calculation}</Text>
			<ScrollView style={styles.scrollResult}>
				<Text style={styles.result}>{resultState}</Text>
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