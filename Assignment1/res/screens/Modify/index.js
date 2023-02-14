import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import { useState } from 'react';

const Modify = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    const toModifyItem = route.params?.toModifyItem || {
        id: -1,
        name: 'Nguyễn Văn Lỗi',
        address: 'Bình Dương',
        number: '1234567890',
        logo: '../../../assets/bug.png',
        status: '-1',
    };

    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [number,setNumber] = useState('');
    const [logo,setLogo] = useState('');
    const [status,setStatus] = useState('-1');

    const onUpdate = () => {
        //Code

        const modifiedItem = {
            id: toModifyItem.id,
            name: name,
            address: address,
            number: number,
            logo: logo,
            status: status
        }

        console.log('Modify: mordifiedItem = ' + modifiedItem);

        navigation.navigate('Manage', {modifiedItem : modifiedItem});
    }

    return (
        <View style={styles.container}>
            <TextInput value={toModifyItem.name} placeholder='Tên' onPress={(input) => {setName(input)}} />
            <TextInput value={toModifyItem.address} placeholder='Địa chỉ' onPress={(input) => {setAddress(input)}} />
            <TextInput value={toModifyItem.number} placeholder='SĐT' onPress={(input) => {setNumber(input)}} />
            <TextInput value={toModifyItem.logo} placeholder='Logo' onPress={(input) => {setLogo(input)}} />
            <TextInput value={toModifyItem.status} placeholder='Trạng thái' onPress={(input) => {setStatus(input)}} />
            <Pressable onPress={() => {onUpdate()}}>
                <Text style={styles.pressable}>Cập nhật</Text>
            </Pressable>
        </View>
    );
}

export default Modify;

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