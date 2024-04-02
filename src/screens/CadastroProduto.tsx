import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera } from "react-native-image-picker";

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<string>('');

    const CadastrarProduto = async()=>{

    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 200
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuário')
            }else if(response.error){
                console.log('erro ao abrir a câmera')
            }else{
                let imagemUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imagemUri);
                console.log(imagemUri);
            }
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000000" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>𝔗𝔬𝔭 𝔉𝔬𝔬𝔡</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do produto"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Preço"
                    value={preco}
                    onChangeText={setPreco}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingredientes"
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline/>
                    <View style={styles.alinhamentoImagemSelecionada}>
                        {imagem ? <Image source={{uri:imagem}} style={styles.imagemSelecionada}/> :null}
                    </View>
                    <TouchableOpacity style={styles.imageButton}>
                        <Text style={styles.imageButtonText}>Selecionar imagem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                        <Text style={styles.imageButtonText}>Tirar foto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton}>
                        <Text style={styles.imageButtonText}>Cadastrar produto</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },

        header: {
            backgroundColor: '#000000',
            paddingVertical: 10,
            alignItems: 'center'
        },
        headerText: {
            fontSize: 40,
            fontWeight: 'bold',
            color: 'white'
        },
        form: {
            padding: 10,
            backgroundColor: '#f0f0f0',
            marginBottom: 10
        },
        input: {
            height: 40,
            borderColor: 'grey',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 10
        },
        imageButton: {
            backgroundColor: '#000000',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginBottom: 10
        },
        imageButtonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        imagemSelecionada: {
            width: 200,
            height: 200,
            resizeMode: 'cover',
            borderRadius: 5,
            marginBottom: 10
        },
        alinhamentoImagemSelecionada: {
            alignItems: 'center'
        },
        button: {
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center'
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold'
        }
    })
export default CadastroProduto;