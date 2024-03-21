import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TextInputBase, TouchableOpacity, View } from "react-native";

interface menuItem {
    id: string;
    nome: string;
    preco: number;
    ingredientes: string;
    image: any;
}

const dados: menuItem[] = [
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

const renderItem = ({ item }: { item: menuItem }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.linhas}>◇───────────────◇───────────────◇</Text>
        <Text style={styles.textIngredientes}>{item.ingredientes}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.textPreco}>R${item.preco},00</Text>
    </TouchableOpacity>
);

function FlatListExample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />

            <View style={styles.header}>
                <Text style={styles.headerText}>✰𝕿𝖆𝖘𝖙𝖊 𝕺𝖋 𝖂𝖔𝖗𝖑𝖉✰</Text>
            </View>

            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━━━◎</Text>

            <View>
                <TextInput style={styles.pesquisar} placeholder="Pesquisar"></TextInput>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.webp')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/pedidos.webp')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/perfil.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/menu.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/carrinho.webp')} style={styles.footerIcon}/>
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
    item: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 10,
        borderRadius: 30,
        borderColor: '#FFF',
        borderWidth: 3
    },
    itemText: {
        color: '#FFF',
        flexDirection: 'column',
        fontSize:20,
        marginTop: 3
    },
    itemTitle:{
        fontSize: 30,
        color:'#FFF',
        marginTop: 3
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
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#FFF',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        height: 30,
        width: 30
    },
    image: {
        height: 100,
        width: 170,
        borderRadius: 10,
        borderWidth: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
    },
    linhas:{
        color:'#FFF'
    },
    textPreco: {
        color: '#FFF',
        flexDirection: 'column',
        fontSize:15,
        marginTop: 3,
        fontStyle: 'italic'
    },
    textIngredientes: {
        color: '#FFF',
        flexDirection: 'column',
        fontSize:17,
        marginTop: 3,
        fontStyle: 'italic',
        paddingVertical: 5,
    },
    pesquisar: {
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 30,
        borderRadius: 30,
        borderColor: '#FFF',
        borderWidth: 3,
    },
    linhaTitle: {
        color:'#FFF'
    }
});

export default FlatListExample;