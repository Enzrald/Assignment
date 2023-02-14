import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Home = (props) => {
    //Logic
    const navigation = props.navigation;

    const changeScreen = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Màn hình chính</Text>

            <Image 
                style={styles.image} 
                source={require('../../../assets/favicon.png')} />

            <Pressable onPress={() => {changeScreen('Info')}}>
                <Text style={styles.pressable}>Thông tin cá nhân</Text>
            </Pressable>

            <Pressable onPress={() => {changeScreen('Manage')}}>
                <Text style={styles.pressable}>Quản lý cửa hàng</Text>
            </Pressable>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 100,
        alignContent: 'center',
    },
    title: {
        fontSize: 30,
        color: 'rgb(8, 161, 216)',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        marginVertical: 20,
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    pressable: {
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderColor: 'rgb(0, 123, 255)',
        borderWidth: 1,
        backgroundColor: 'rgb(18, 158, 105)',
        marginHorizontal: -15,
        marginVertical: 5,
        textAlign: 'center'
    },
});