import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TextInputBase, TouchableOpacity, View } from "react-native";

interface menuItem {
    id: string;
    nome: string;
    numero: number;
    endereco: string;
    pagamento: string;
    image: any;
}

function FlatListExample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />

            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━━━◎</Text>

            <View style={styles.header}>
                <Text style={styles.headerText}>✰𝕿𝖆𝖘𝖙𝖊 𝕺𝖋 𝖂𝖔𝖗𝖑𝖉✰</Text>
            </View>

            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━━━◎</Text>

            <View>
                <TextInput style={styles.nome} placeholder="Nome"></TextInput>
            </View>  

            <View>
                <TextInput style={styles.numero} placeholder="Número"></TextInput>
            </View>

            <View>
                <TextInput style={styles.endereco} placeholder="Endereço"></TextInput>
            </View>

            <View>
                <TextInput style={styles.pagamento} placeholder="Pagamento"></TextInput>
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
    nome: {
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 20,
        borderRadius: 30,
        borderColor: '#FFF',
        borderWidth: 3,
    },
    numero: {
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 20,
        borderRadius: 30,
        borderColor: '#FFF',
        borderWidth: 3,
    },
    endereco: {
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 20,
        borderRadius: 30,
        borderColor: '#FFF',
        borderWidth: 3,
    },
    pagamento: {
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 20,
        borderRadius: 30,
        borderColor: '#FFF',
        borderWidth: 3,
    }

});

export default FlatListExample;