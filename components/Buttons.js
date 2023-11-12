import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')
const windowWidth = width
const gap = 3
const itemPerRow = 4
const totalGapSize = (itemPerRow - 1) * gap
const childWidth = (windowWidth - totalGapSize) / itemPerRow

function Buttons() {


	return (
		<View style={styles.bottomSection}>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.c, styles.buttonSymbol]}>C</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.plusMinus, styles.buttonSymbol]}>+/-</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.percent, styles.buttonSymbol]}>%</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.divide, styles.buttonSymbol]}>/</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.seven, styles.button]}>7</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.eight, styles.button]}>8</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.nine, styles.button]}>9</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.multiplie, styles.buttonSymbol]}>X</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.four, styles.button]}>4</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.five, styles.button]}>5</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.six, styles.button]}>6</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.subtraction, styles.buttonSymbol]}>-</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.one, styles.button]}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.two, styles.button]}>2</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.three, styles.button]}>3</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.plus, styles.buttonSymbol]}>+</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.zero, styles.button]}>0</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.doubleZero, styles.button]}>00</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={[styles.dot, styles.buttonSymbol]}>.</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonContainer}>
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
		paddingTop: 30,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: gap / 2,
		marginVertical: gap / 2,
		minWidth: childWidth,
		maxWidth: childWidth,
		minHeight: childWidth,
		maxHeight: childWidth,
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
