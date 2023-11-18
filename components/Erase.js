import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useRecoilState } from 'recoil';
import { calculationResultState } from '../states';

function Erase() {
	const [resultState, setResultState] = useRecoilState(calculationResultState)

	function handleErase() {
		const separateNumber = resultState.split('')
		separateNumber.pop()
		let composit = ''
		separateNumber.forEach(item => {
			composit += item
		})
		setResultState(composit)	
		console.log(composit);
		console.log('result: ', resultState);
	}

	return (
		<TouchableOpacity 
		onPress={handleErase}
		style={styles.eraseButton}>
			<Text style={styles.eraseText}>(Erase)</Text>
			<Image source={require('../assets/erase.png')} style={styles.eraseImg}></Image>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	eraseButton: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
	},
	eraseText: {
		color: '#E6FFE6',
		fontWeight: 'bold',
		fontFamily: 'Damascus',
		fontSize: 16
	},
	eraseImg: {
		marginRight: 20,
		width: 30,
		height: 30,
		tintColor: '#E6FFE6',
		marginLeft: 10
	},
})

export default Erase