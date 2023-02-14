import { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';

const Add = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    const idToAdd = route.params?.idToAdd || -1;

    useEffect(
        () => {
            const route = props.route;
            const idToAdd = route.params?.idToAdd || -1;
            console.log('Add: Id received: ' + idToAdd);
        },
        []
    )

    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [number,setNumber] = useState('');
    const [logo,setLogo] = useState('');
    const [status,setStatus] = useState('-1');

    const onSaving = () => {
        //Code
        const newItem = {
            id: idToAdd,
            name: name,
            address: address,
            number: number,
            logo: logo,
            status: status
        }

        console.log('Add: newItem = ' + newItem);

        //Finish
        if(idToAdd == -1){
            console.log('Add: ID -1');
            navigation.navigate('Manage');
        }else{
            console.log('Add: Sending newItem');
            navigation.navigate('Manage', {newItem : newItem});
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Tên' onPress={(input) => setName(input)} />
            <TextInput placeholder='Địa chỉ' onPress={(input) => setAddress(input)} />
            <TextInput placeholder='SĐT' onPress={(input) => setNumber(input)} />
            <TextInput placeholder='Logo' onPress={(input) => setLogo(input)} />
            <TextInput placeholder='Trạng thái' onPress={(input) => setStatus(input)} />
            <Pressable onPress={() => onSaving()}>
                <Text style={styles.pressable}>Lưu</Text>
            </Pressable>
        </View>
    );
}

export default Add;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        marginVertical: 10,
        marginHorizontal: 30
    },
    pressable: {
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderColor: 'rgb(0, 123, 255)',
        borderWidth: 1,
        backgroundColor: 'rgb(18, 158, 105)',
        textAlign: 'center',
        padding: 5
    },
});