import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Login(): JSX.Element {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        const dados = {
            nome: nome,
            email: email,
            password: password,
        }
        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />

            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━━━◎</Text>

            <View style={styles.header}>
                <Text style={styles.headerText}>✰𝕿𝖆𝖘𝖙𝖊 𝕺𝖋 𝖂𝖔𝖗𝖑𝖉✰</Text>
            </View>

            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━━━◎</Text>
            
            <View style={styles.card}>

            <TextInput style={styles.input} placeholder="Nome:"
                    placeholderTextColor={"#000000"}
                    onChangeText={(textNome) => setPassword(textNome)} secureTextEntry/>
                
            <TextInput style={styles.input} placeholder="Email:"
                    placeholderTextColor={"#000000"}
                    onChangeText={(textEmail) => setPassword(textEmail)} secureTextEntry/>

                <TextInput style={styles.input} placeholder="Senha:"
                    placeholderTextColor={"#000000"}
                    onChangeText={(textPassword) => setPassword(textPassword)} secureTextEntry/>

                <TouchableOpacity style={styles.button}
                    onPress={() => { login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.text}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.text}>Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000' ,
        flex: 1
    },
    header: {
        backgroundColor: "#000000",
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        paddingVertical: 10,
        borderColor: '#FFF',
        borderRadius: 30
    },
    headerText: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 65
    },
    linhaTitle: {
        color:'#FFF'
    },
    card: {
        backgroundColor: '#FFF',
        width: 350,
        borderRadius: 20,
        padding: 20,
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    input: {
        backgroundColor: '#FFF',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000'
    },
    button: {
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 8
    },
    buttonText: {
        color: '#000000',
        borderColor: '#000000',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
        borderRadius: 8,
        borderWidth: 1,
    },
    text: {
        color: '#000000',
        textAlign: 'center',
        marginTop: 10
    }
});

export default Login;