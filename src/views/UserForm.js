import React, { useContext, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return (<View style={style.form}>
        <Text >Nome</Text>
        <TextInput onChangeText={name => setUser({ ...user, name })}
            placeholder='Informe o Nome'
            value={user.name}
            style={style.inout}
        />
        <Text >E-mail</Text>

        <TextInput onChangeText={email => setUser({ ...user, email })}
            placeholder='Informe o E-mail'
            value={user.email}
            style={style.inout}
        />
        <Text>URL do Avatar</Text>
        <TextInput
            style={style.inout}
            onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
            placeholder="Informe a URL do Avatar"
            value={user.avatarUrl}
        />
        {/* <Text >Url Avatar</Text>

        <TextInput onChangeText={avatarUrl => setUser({...user, avatarUrl})}
            placeholder='Informe a url do Avatar'
            value={user.avatarUrl}
            style={style.inout}
        /> */}
        <Button title='Salvar'
            onPress={() => {
                dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user
                })
                navigation.goBack()
            }} />
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