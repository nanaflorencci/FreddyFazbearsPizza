import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface menuItem{
    id: string;
    nome: string;
    ingredientes: string;
    preco: string;
    image: any
}

const dados: menuItem[] = [
    {id: '1', nome: 'Yakisoba (Sessão da culinária japonesa)', ingredientes: 'Macarrão, carne, molho tarê, cenoura, brocolis.', preco:  "R$55.00", image: require('../src/assets/images/menu.png')},
    {id: "2",nome: "Pizza (Sessão da culinária italiana)", ingredientes: 'Massa, molho; queijo; peperone; manjericão.', preco:  "R$35.00", image: require('../src/assets/images/menu.png')},
    {id: "3",nome: "Babaganoush (Sessão da culinária árabe)",  ingredientes: 'Berinjelas, pasta de gergelim, azeite, alho.', preco:  "R$25.00", image: require('../src/assets/images/menu.png')},
    {id: "4",nome: "Feijoada (Sessão da culinária brasileira)",  ingredientes: 'Feijão preto, carne, linguiça, alho, cebolinha.', preco:  "R$15.00", image: require('../src/assets/images/menu.png')},
    {id: "5",nome: "Topokki (Sessão da culinária coreana)",  ingredientes: 'Bolinho de arroz, cebola, dashi, peixe, ovos cozidos.', preco:  "R$20.00", image: require('../src/assets/images/menu.png')},
    {id: "6",nome: "Taco (Sessão da culinária mexicana)",  ingredientes: 'Tortilha, guacamole, chili, pimenta, tomate.', preco:  "R$15.00", image: require('../src/assets/images/menu.png')},
    {id: "7",nome: "Mac N Cheese (Sessão da culinária canadense)",  ingredientes: 'Macarrão, leite, queijo, alho e bacon.', preco:  "R$15.00", image: require('../src/assets/images/menu.png')},
    {id: "8",nome: "Chucrute (Sessão da culinária alemã)",  ingredientes: 'Repolho, vinagre, pimenta, gengibre, azeite.', preco:  "R$25.00", image: require('../src/assets/images/menu.png')},
    {id: "9",nome: "Coq au Vin (Sessão da culinária francesa)",  ingredientes: 'Frango, pimenta, alho, folha de Louro, cenoura.', preco:  "R$45.00", image: require('../src/assets/images/menu.png')},
    {id: "10",nome: "Hambúrguer (Sessão da culinária estadunidense)",  ingredientes: 'Pão, hambúrguer, queijo, alface, tomate.', preco:  "R$25.00", image: require('../src/assets/images/menu.png')},
    {id: "11",nome: "Butter Chicken (Sessão da culinária indiana)",  ingredientes: 'Franfo, pimenta, páprica, cúrcuma, cominho.', preco:  "R$40.00", image: require('../src/assets/images/menu.png')},
    {id: "12",nome: "Bacalhau à brás (Sessão da culinária portuguesa)",  ingredientes: 'Bacalhau, batata, ovos, cebola, pimenta, salsa.', preco:  "R$40.00", image: require('../src/assets/images/menu.png')},
    {id: "13",nome: "Asado (Sessão da culinária argentina)",  ingredientes: 'Carne, chimichurri, erva, alho, vinagre.', preco:  "R$40.00", image: require('../src/assets/images/menu.png')},
    {id: "14",nome: "Zong Zi (Sessão da culinária chinesa)",  ingredientes: 'Carne, cogumelos, castanhas, feijão, ovos.', preco:  "R$40.00", image: require('../src/assets/images/menu.png')},
    {id: "15",nome: "Ceviche (Sessão da culinária peruana)",  ingredientes: 'Tilápia, pasta de alho, tomate, pimenta, cebola.', preco:  "R$40.00", image: require('../src/assets/images/menu.png')},

];

const renderItem = ({item}: {item: menuItem}) => (
    <View style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
    </View>
);

function FlatListExample(): React.JSX.Element{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>✰Taste Of World✰</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/pedidos.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/perfil.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/menu.png')} style={styles.footerIcon}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#edf6f9',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 15,
        borderWidth: 10,
        borderColor: '#000000'
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 40,
        fontWeight: '100',
        color: 'white'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    }
});

export default FlatListExample;
