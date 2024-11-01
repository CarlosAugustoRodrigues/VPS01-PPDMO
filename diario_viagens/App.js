import PagLogin from './pages/paginaLoginUsuario'
import PagCadastro from './pages/paginaCadastroUsuario'
import PagRegistrarViagem from './pages/paginaRegistrarViagem'
import PagVisualizarViagens from './pages/paginaVisualizarViagens'
import PagVisualizarViagemIndividual from './pages/paginaVisualizarViagemIndividual'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="PagLogin"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(30, 30, 30)',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen
          name="Login"
          component={PagLogin}
        />

        <Stack.Screen
          name="Registrar"
          component={PagCadastro}
        />

        <Stack.Screen
          name="RegistrarViagem"
          component={PagRegistrarViagem}
        />

        <Stack.Screen
          name="VisualizarViagens"
          component={PagVisualizarViagens}
        />
        <Stack.Screen
          name="Viagem"
          component={PagVisualizarViagemIndividual}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


























































































// FEITO POR CARLOS AUGUSTO RODRIGUES