import React, { useState } from "react";
import {ScrollView, Image, StatusBar, StyleSheet, Text, TextInput,TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastroProduto = async () => {
        try{
        const formData=new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('ingredientes', ingredientes);
        formData.append('imagem',{
            uri:imagem,
            type:'image/jpeg',
            name:new Date()+ '.jpg',
        });

const response= await axios.post('http://10.137.11.221:8000/api/produtos', formData,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
});
        }catch(error){
            console.log(error);
        }

    }
const abrirCamera=()=>{
    const options={
        mediaType:'photo',
        includeBase64:false,
        maxHeight:2000,
        maxWidth:2000
    };

    launchCamera(options, response =>{
        if(response.didCancel){
            console.log('Cancelado pelo usuário');
        }else if(response.error){
            console.log('Erro ao abrir a câmera');
        }else{
            let imageUri = response.uri|| response.assets?.[0]?.uri;
            setImagem(imageUri);
            console.log(imageUri);
        }
    });
}
const selecionarImagem=()=>{
    const options={
        mediaType:'photo',
        includeBase64:false,
        maxHeight:2000,
        masWidth:2000
    };
    
    launchImageLibrary(options,(response)=>{
        if(response.didCancel){
            console.log('Cancelado pelo usuário')
        }else if(response.error){
            console.log('Erro ao abrir a galeria');
        }else{
            let imageUri=response.uri || response.assets?.[0]?.uri;
            setImagem(imageUri);
        }
    });
}


    return (
        <View style={styles.container}>
            <ScrollView>
            <StatusBar backgroundColor="#000000" barStyle="light-content" />

            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━━━◎</Text>


            <View style={styles.header}>
                <Text style={styles.headerText}>✰𝕿𝖆𝖘𝖙𝖊 𝕺𝖋 𝖂𝖔𝖗𝖑𝖉✰</Text>
            </View>

            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━━━◎</Text>

            <View style={styles.form}>

            <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> :null}
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Nome do produto:"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Preço:"
                    value={preco}
                    onChangeText={setPreco}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingredientes:"
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline />
                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> :null}
                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={CadastroProduto}>
                    <Text style={styles.imageButtonText}>Cadastrar produto</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
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
    form: {
        marginTop: 50,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
        borderWidth: 10,
        borderColor: '#000000'
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    linhaTitle: {
        color:'#FFF',
    }
});


export default CadastroProduto;