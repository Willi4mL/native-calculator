import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

function Erase() {

	return (
		<TouchableOpacity style={styles.eraseButton}>
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