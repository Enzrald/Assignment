import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const Info = (props) => {
    //Logic
    const navigation = props.navigation;

    const changeScreen = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Họ tên: Nguyễn Xuân Khoa</Text>

            <Text style={styles.text}>Mã SV: PH27009</Text>

            <Image style={styles.image} source={require('../../../assets/icon.png')}/>

            <Pressable onPress={() => {changeScreen('Manage')}}>
                <Text style={styles.pressable}>Quản lý cửa hàng</Text>
            </Pressable>
        </View>
    );
}

export default Info;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 100,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
    pressable: {
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderColor: 'rgb(0, 123, 255)',
        borderWidth: 1,
        backgroundColor: 'rgb(18, 158, 105)',
        marginVertical: 5,
        color: 'rgb(255, 255, 255)',
        fontSize: 22,
        textAlign: 'center',
    },
});