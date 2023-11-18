import { signal } from '@preact/signals-react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { useRecoilState } from 'recoil';
import { calculationResultState, calculationState } from '../states';

const { width } = Dimensions.get('window')
const windowWidth = width
const gap = 3
const itemPerRow = 5
const totalGapSize = (itemPerRow - 1) * gap
const childWidth = (windowWidth - totalGapSize) / itemPerRow

let calculateNumber = signal('')
function Buttons() {
	const [resultState, setResultState] = useRecoilState(calculationResultState)
	const[calculation, setCalculation] = useRecoilState(calculationState)

	function handleAddCharacter(selected) {
		// Clear field
		if (selected === '') {
			calculateNumber = selected
			setResultState(calculateNumber)
			setCalculation(calculateNumber)
		}
		else if (selected === '=') {
			try {
				// Set calculation history
				setCalculation(calculateNumber)

				// Convert from string to number and calcluate the result
				let result = new Function('return ' + calculateNumber)()
				// Change the result back to a string
				setResultState(result.toString())
				calculateNumber = result
			}
			catch (error) {
				setResultState('Error')
				calculateNumber = ''
				console.log('Error message: ', error);
			}
		}
		else if (selected === '%') {
			const percent = calculateNumber / 100
			calculateNumber = percent
			setResultState(percent)
		}
		// Add plus or minus
		else if (selected === '+/-') {
			calculateNumber = calculateNumber.toString()
			if (!calculateNumber.includes('-')) {
				const addCharacter = ['-', ...calculateNumber]
				let composit = ''
				addCharacter.forEach(item => {
					composit += item
				})
				calculateNumber = composit
				setResultState(calculateNumber)
			}
			else if (calculateNumber.includes('-')) {
				const negativeArray = calculateNumber.split('')
				const removeMinus = negativeArray.slice(1)
				let composit = ''
				removeMinus.forEach(item => {
					composit += item
				})
				calculateNumber = composit
				setResultState(calculateNumber)
			}
			else {
				setResultState('Error')
				calculateNumber = ''
			}
		}
		else {
			// Add selected button character to calclutateNumber signal state
			calculateNumber += selected
			setResultState(calculateNumber)
		}
	}


	return (
		<View style={styles.bottomSection}>
			<TouchableOpacity
				onPress={() => handleAddCharacter('')}
				style={styles.buttonContainer}>
				<Text style={[styles.c, styles.buttonSymbol]}>C</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('+/-')}
				style={styles.buttonContainer}>
				<Text style={[styles.plusMinus, styles.buttonSymbol]}>+/-</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('%')}
				style={styles.buttonContainer}>
				<Text style={[styles.percent, styles.buttonSymbol]}>%</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('/')}
				style={styles.buttonContainer}>
				<Text style={[styles.divide, styles.buttonSymbol]}>/</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('7')}
				style={styles.buttonContainer}>
				<Text style={[styles.seven, styles.button]}>7</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('8')}
				style={styles.buttonContainer}>
				<Text style={[styles.eight, styles.button]}>8</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('9')}
				style={styles.buttonContainer}>
				<Text style={[styles.nine, styles.button]}>9</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('*')}
				style={styles.buttonContainer}>
				<Text style={[styles.multiplie, styles.buttonSymbol]}>x</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('4')}
				style={styles.buttonContainer}>
				<Text style={[styles.four, styles.button]}>4</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('5')}
				style={styles.buttonContainer}>
				<Text style={[styles.five, styles.button]}>5</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('6')}
				style={styles.buttonContainer}>
				<Text style={[styles.six, styles.button]}>6</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('-')}
				style={styles.buttonContainer}>
				<Text style={[styles.subtraction, styles.buttonSymbol]}>-</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('1')}
				style={styles.buttonContainer}>
				<Text style={[styles.one, styles.button]}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('2')}
				style={styles.buttonContainer}>
				<Text style={[styles.two, styles.button]}>2</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('3')}
				style={styles.buttonContainer}>
				<Text style={[styles.three, styles.button]}>3</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('+')}
				style={styles.buttonContainer}>
				<Text style={[styles.plus, styles.buttonSymbol]}>+</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('0')}
				style={styles.buttonContainer}>
				<Text style={[styles.zero, styles.button]}>0</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('00')}
				style={styles.buttonContainer}>
				<Text style={[styles.doubleZero, styles.button]}>00</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('.')}
				style={styles.buttonContainer}>
				<Text style={[styles.dot, styles.buttonSymbol]}>.</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleAddCharacter('=')}
				style={styles.buttonContainer}>
				<Text style={[styles.sum, styles.buttonSymbol]}>=</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	bottomSection: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginVertical: -(gap / 2),
		marginHorizontal: -(gap / 2),
		justifyContent: 'center',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: '#394654',
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: gap / 2,
		marginVertical: gap / 2,
		minWidth: childWidth,
		minHeight: childWidth,
		backgroundColor: '#586c83',
	},
	button: {
		color: '#E6FFE6',
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'Damascus',
	},
	buttonSymbol: {
		color: '#6acc65',
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'Damascus',
	}
});

export default Buttons
