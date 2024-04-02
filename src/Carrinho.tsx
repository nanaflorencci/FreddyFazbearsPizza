import React, { useState } from "react";
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import {RadioButton} from "react-native";

interface ItensCarrinho {
    id: string;
    nome: string;
    preco: number;
    ingredientes: string;
    image: any;
}

const dados: ItensCarrinho[] = [
    {id: '1', nome: '𝒴𝒶𝓀𝒾𝓈𝑜𝒷𝒶', ingredientes: 'Massa, carne, molho tarê, cenoura e brocolis.', preco:  55.00, image: require('../src/assets/images/yakisoba.png')},
    {id: "2",nome: "𝒫𝒾𝓏𝓏𝒶", ingredientes: 'Massa, molho, queijo, peperone e manjericão.', preco:  35.00, image: require('../src/assets/images/pizza.png')},
    {id: "3",nome: "𝐵𝒶𝒷𝒶𝑔𝒶𝓃𝑜𝓊𝓈𝒽",  ingredientes: 'Berinjelas, pasta de gergelim, azeite e alho.', preco:  25.00, image: require('../src/assets/images/babaganoush.png')},
    {id: "4",nome: "𝐹𝑒𝒾𝒿𝑜𝒶𝒹𝒶",  ingredientes: 'Feijão preto, carne, linguiça, alho e cebolinha.', preco:  15.00, image: require('../src/assets/images/feijoada.png')},
    {id: "5",nome: "𝒯𝑜𝓅𝑜𝓀𝓀𝒾",  ingredientes: 'Bolinho de arroz, cebola, dashi, peixe e ovos.', preco:  20.00, image: require('../src/assets/images/topokki.png')},
    {id: "6",nome: "𝒯𝒶𝒸𝑜",  ingredientes: 'Tortilha, guacamole, chili, pimenta, tomate.', preco:  15.00, image: require('../src/assets/images/taco.png')},
    {id: "7",nome: "𝑀𝒶𝒸 𝒩 𝒞𝒽𝑒𝑒𝓈𝑒",  ingredientes: 'Macarrão, leite, queijo, alho e bacon.', preco:  15.00, image: require('../src/assets/images/macandcheese.png')},
    {id: "8",nome: "𝐿𝒶𝓂𝑒𝓃",  ingredientes: 'Macarrão, frango, cebolinha, alga e ovos.', preco:  25.00, image: require('../src/assets/images/lamen.png')},
    {id: "9",nome: "𝒞𝑜𝓆 𝒜𝓊 𝒱𝒾𝓃",  ingredientes: 'Frango, pimenta, alho, cebolinha e cenoura.', preco:  45.00, image: require('../src/assets/images/coqauvin.png')},
    {id: "10",nome: "𝐻𝒶𝓂𝒷𝓊𝓇𝑔𝓊𝑒𝓇",  ingredientes: 'Pão, hambúrguer, queijo, alface e tomate.', preco:  25.00, image: require('../src/assets/images/hamburguer.png')},
    {id: "11",nome: "𝐵𝓊𝓉𝓉𝑒𝓇 𝒞𝒽𝒾𝒸𝓀𝑒𝓃",  ingredientes: 'Frango, pimenta, páprica, cúrcuma e cominho.', preco:  40.00, image: require('../src/assets/images/butterchicken.png')},
    {id: "12",nome: "𝐵𝒶𝒸𝒶𝓁𝒽𝒶𝓊 𝒶 𝐵𝓇𝒶𝓈",  ingredientes: 'Bacalhau, batata, ovos, cebola e pimenta.', preco:  40.00, image: require('../src/assets/images/bacalhauabras.png')},
    {id: "13",nome: "𝒜𝓈𝒶𝒹𝑜",  ingredientes: 'Carne, chimichurri, erva, alho e vinagre.', preco:  40.00, image: require('../src/assets/images/asado.png')},
    {id: "14",nome: "𝒵𝑜𝓃𝑔 𝒵𝒾",  ingredientes: 'Carne, cogumelos, castanhas, feijão e ovos.', preco:  40.00, image: require('../src/assets/images/zongzi.png')},
    {id: "15",nome: "𝒞𝑒𝓋𝒾𝒸𝒽𝑒",  ingredientes: 'Tilápia, pasta de alho, pimenta e cebola.', preco:  40.00, image: require('../src/assets/images/ceviche.png')}
];

function Carrinho(): React.JSX.Element {
    const [checked, setChecked] = React.useState('first');
    const [count, setCount] = useState(9)

const renderItem = ({item}: {item: ItensCarrinho}) => (
        <View style={styles.itensCardapio}>
        <Image source={item.image} style={styles.images}/>
        <Text style={styles.nameText}>{item.nome}</Text>
        <Text style={styles.itensText}>{item.ingredientes}</Text>
        <Text style={styles.precoText}>R$: {item.preco}</Text>
        <TouchableOpacity onPress={() => setCount(count - 1)}>
        <Image source={require('./assets/images/lixo1.png')} style={styles.cartImage}/>
        </TouchableOpacity>
        </View>
       
);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <ImageBackground source={require('./assets/images/headerFundo.jpg')}
        style={styles.ImageBackgroundHeader}/>
            <Image source={require('./assets/images/logo.png')}
            style={styles.Logo}/>
            <Text style={styles.headerText}>Carrinho</Text>
        </View>
        <ImageBackground source={require('./assets/images/fundo2.jpg')}
        style={styles.ImageBackground}/>
        <FlatList showsVerticalScrollIndicator={false} data={dados}
        renderItem={renderItem} keyExtractor={(item) => item.id}/>
        

        <Text style={styles.pagamento}>Forma de pagamento:</Text>
         <View style={styles.RadioButton}>
         <RadioButton
        value="Pix"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')} />
        <Text style={styles.textRadioButton}>PIX</Text>
        </View>

        <View style={styles.RadioButton}>
        <RadioButton
        value="Cartao"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')} />
        <Text style={styles.textRadioButton}>Cartão</Text>
        </View>
   
        <View style={styles.RadioButton}>
        <RadioButton
        value="dinheiro fisico"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')} />
        <Text style={styles.textRadioButton}>Dinheiro</Text>
         </View>
        
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('./assets/images/home.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./assets/images/pedido.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./assets/images/profile.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./assets/images/menu.jpg')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={require('./assets/images/cartA.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>
            <Text style={styles.countText}>{count}</Text>
            
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itensCardapio: {
        padding: 10,
        marginVertical: 16,
        marginHorizontal: 16,
        flexDirection: 'column',
        borderRadius: 20,
    },
    ImageBackground: {
        flex: 1,
        width: 393,
        height: 516,
        marginVertical: -20,
        marginTop: 100,
       
    },
    ImageBackgroundHeader: {
        flex: 1,
        width: 413,
        height: 170,
    },
    Logo: {
        height: 150,
        width: 150,
        marginTop: -15,
    },
    images: {
        width: 100,
        height: 100,
        marginRight: 'auto',
        borderRadius: 20
    },
    cartImage: {
        width: 45,
        height: 45,
        marginLeft: 280,
        marginTop: -25,
    },
    header: {
        alignItems: 'center',
        height: 70,
       
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#bdbdbd',
        marginTop: -20,
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginStart: 110,
        marginTop: -105
    },
    countText: {
        backgroundColor: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        left: -13,
        width: 15,
        height: 15,
        borderRadius: 100,
        marginTop: -20       
    },
    itensText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        textAlign: 'left',
        marginStart: 110
    },
    precoText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        marginStart: -35
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 21
    },
    footerIcon: {
        left: 30,
        width: 30,
        height: 30
    },
    RadioButton: {
        flexDirection: 'row',
    },
    textRadioButton: {
        color: 'white',
        width: 70,
        marginTop: 5
    },
    pagamento: {
        color: 'white',
        fontSize: 20,
        marginTop: 10
    }
})

export default Carrinho;