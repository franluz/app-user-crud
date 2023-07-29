import React from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'
import user from '../data/user'
import {  Button, Icon, ListItem } from 'react-native-elements'
export default props => {
    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja Excluir o usuario?', [{
            text: 'SIM', onPress() { dispatch({ type: 'deleteUser', payload: user }) }
        }, { text: 'NÃO' }])
    }
    function getActions(user) {
        return (<><Button
            type='clear'
            icon={<Icon name="edit" size={25} color={"orange"} />}
            onPress={() => { props.navigation.navigate('UserForm', user) }} />
            <Button
                type='clear'
                icon={<Icon name="delete" size={25} color={"red"} />}
                onPress={() => { confirmUserDeletion(user) }} /></>)
    }
    function getUserItem({ item: user }) {
        return (<ListItem
            leftAvatar={{ source: { uri: user.avatarUrl } }}
            key={user.id}
            title={user.name}
            subtitle={user.email}
            rightElement={getActions(user)}
            bottomDivider
            onPress={() => {
                props.navigation.navigate("UserForm", user)
            }}
        />)
        // <Avatar
        //     source={{ uri: user.avatarUrl }}
        // />
    }
    return (<View><FlatList
        keyExtractor={user => user.id.toString()}
        data={user}
        renderItem={getUserItem}
    /></View>)
}
const style = StyleSheet.create({})