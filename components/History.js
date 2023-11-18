import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useRecoilState } from 'recoil';
import { calculationResultState, calculationState } from '../states';

function History() {
	const [resultState, setResultState] = useRecoilState(calculationResultState)
	const[calculation, setCalculation] = useRecoilState(calculationState)

	function handleHistory() {
		setResultState(calculation)
	}

	return (
		<TouchableOpacity 
		onPress={handleHistory}
		style={styles.historyButton}>
			<Text style={styles.historyText}>(History)</Text>
			<Image source={require('../assets/history.png')} style={styles.undoImg}></Image>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	historyButton: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
	},
	historyText: {
		color: '#E6FFE6',
		fontWeight: 'bold',
		fontFamily: 'Damascus',
		fontSize: 16,
		marginBottom: 30,
	},
	undoImg: {
		marginRight: 20,
		width: 30,
		height: 30,
		tintColor: '#E6FFE6',
		marginBottom: 30,
		marginLeft: 10
	},
})

export default History