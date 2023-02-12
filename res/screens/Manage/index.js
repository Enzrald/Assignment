import { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Pressable, SafeAreaView, Text, Alert } from 'react-native';

const Manage = (props) => {
    const navigation = props.navigation;
    // const newItem = props.route.params.newItem;
    // const modifiedItem = props.route.params.modifiedItem;

    // useEffect(
    //     () => {
    //         //Code
    //         console.log('Mange: New Item = ' + newItem);
    //         if(newItem != undefined){
    //             const newList = [...list, newItem];
    //             setList(newList);
    //             console.log('Mange: New item added');
    //         }
    //     },
    //     [newItem]
    // )

    const [list,setList] = useState([
        {
            id: 1,
            name: 'Nguyễn Xuân Khoa',
            address: 'Hà Nội',
            number: '0968772513',
            logo: '../../../assets/icon.png',
            status: '0',
        },
        {
            id: 2,
            name: 'Nguyễn Văn B',
            address: 'Bình Dương',
            number: '0123456789',
            logo: 'image.png',
            status: '1',
        },
    ])

    const onAdd = () => {
        const idToAdd = list.length == 0
              ? 1
              : list[list.length - 1].id + 1
        console.log('Mange: Id sent ' + idToAdd);
        navigation.navigate(screenName, {idToAdd});
    }

    const onModify = (itemToModify) => {
        console.log('Manage: itemToModify = ' + itemToModify);
        navigation.navigate('Modify', {itemToModify: itemToModify});
    }

    const onDelete = (idToDelete) => {

        Alert.alert('Xóa', 'Bạn có muốn xóa id: ' + idToDelete + '?', [
            {
              text: 'Hủy',
              onPress: () => console.log('Mange: Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Xóa', onPress: () => deleteFunc(idToDelete)}
        ]);

    }
    
    const deleteFunc = (idToDelete) => {
        const newList = list.filter(item => item.id !== idToDelete);
        setList(newList);
    }

    return (
        <View style = {styles.container}>
            <Pressable onPress={() => {onAdd()}}>
                <Text style={[styles.text, styles.pressable, styles.add]}>Thêm mới</Text>
            </Pressable>
            <SafeAreaView>
                <FlatList
                    data = {list}            
                    renderItem = {({item}) => (
                        <View style={styles.item}>

                            <Text style={styles.text}>{item.id}</Text>

                            <Text style={styles.text}>{item.name}</Text>

                            <Text style={styles.text}>{item.address}</Text>

                            <Text style={styles.text}>{item.number}</Text>

                            <Image style={styles.image} source = {require('../../../assets/icon.png')} />

                            <Text style={styles.text}>{item.logo}</Text>

                            <Text style={styles.text}>Trạng thái: {item.status}</Text>

                            <Pressable  onPress={() => {onModify(item)}}>

                                <Text style={[
                                    styles.text, styles.pressable, styles.modAndDel
                                    ]}>Sửa</Text>

                            </Pressable>

                            <Pressable onPress={() => {onDelete(item.id)}}>

                                <Text style={[
                                    styles.text, styles.pressable, styles.modAndDel
                                    ]}>Xóa</Text>

                            </Pressable>
                        </View>
                    )}
                    keyExtractor = {(item) => {item.id}}
                />
            </SafeAreaView>
        </View>
    );
}

export default Manage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        paddingBottom: 60
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    },
    image: {
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
        marginHorizontal: 70,
        marginVertical: 5
    },
    item: {
        backgroundColor: '#d9d9d9',
        marginBottom: 10,
        paddingVertical: 2
    },
    add: {
        color: 'rgb(255, 255, 255)',
        fontSize: 30,
        marginVertical: 10,
        textTransform: 'uppercase'
    },
    modAndDel: {
        color: 'rgb(255, 255, 255)',
        fontSize: 20
    }
});