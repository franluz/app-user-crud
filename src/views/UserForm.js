import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return (<View style={style.form}>
        <Text >Name</Text>
        <TextInput onChange={name => { setUser({ ...user, name }) }}
            placeholder='Informe o Nome'
            value={user.name}
            style={style.inout}
        />
        <Text >E-mail</Text>

        <TextInput onChange={email => { setUser({ ...user, email }) }}
            placeholder='Informe o E-mail'
            value={user.email}
            style={style.inout}
        />
        <Text >Url Avatar</Text>

        <TextInput onChange={avatarUrl => { setUser({ ...user, avatarUrl }) }}
            placeholder='Informe a url do Avatar'
            value={user.avatarUrl}
            style={style.inout}
        />
        <Button title='Salvar' onPress={()=>{ navigation.goBack()}}/>
    </View>)
}
const style = StyleSheet.create({
    form: {
        padding: 12,

    },
    inout: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})