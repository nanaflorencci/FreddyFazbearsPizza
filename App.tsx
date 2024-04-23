import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cardapio from './src/Cardapio';
import Carrinho from './src/Carrinho';
import Login from './src/Login';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroCliente';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cardapio' component={Cardapio} options={{headerShown: false}}/>
        <Stack.Screen name='Carrinho' component={Carrinho} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='CadastroProduto' component={CadastroProduto} options={{headerShown: false}}/>
        <Stack.Screen name='CadastroCliente' component={CadastroCliente} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;