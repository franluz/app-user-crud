import React, { useContext } from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'
import UsersContext from '../context/UsersContext'
export default props => {
    const {state,dispatch} = useContext(UsersContext)
    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja Excluir o usuario?', [{
            text: 'SIM', onPress() { dispatch({ type: 'deleteUser', payload: user }) }
        }, { text: 'NÃO' }])
    }
    function getUserItem({ item: user }) {
        return (<ListItem  >
            <Avatar
                source={{ uri: user.avatarUrl }}
            />
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
            </ListItem.Content>
            <Button
                type='clear'
                icon={<Icon name="edit" size={25} color={"orange"} />}
                onPress={() => { props.navigation.navigate('UserForm', user) }} />
            <Button
                type='clear'
                icon={<Icon name="delete" size={25} color={"red"} />}
                onPress={() => { confirmUserDeletion(user) }} />
        </ListItem>)

    }
    return (<View><FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
    /></View>)
}
const style = StyleSheet.create({})