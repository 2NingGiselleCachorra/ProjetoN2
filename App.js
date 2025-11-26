// Importa os componentes principais de navegação.
import { NavigationContainer } from "@react-navigation/native"; // NavigationContainer: responsável por manter todo o sistema de navegação funcionando.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Bottom Tabs: cria as abas inferiores.
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Stack: cria a navegação por pilha (permitindo ir para telas como "Detalhes").

// Importa as telas do app.
import AddScreen from "./screens/AddScreen";
import ContatoScreen from "./screens/ContatoScreen";
import DetalheScreen from "./screens/DetalheScreen";
import ConfigScreen from "./screens/ConfigScreen";

const Tab = createBottomTabNavigator(); // Cria o componente de abas (tabs inferiores).
const Stack = createNativeStackNavigator(); // Cria o componente de navegação em pilha.

// Função que monta as tabs (telas principais do app).
function Tabs() {
  return (
    // Tab.Navigator organiza as telas no rodapé do app.
    <Tab.Navigator>
      <Tab.Screen name="Adicionar" component={AddScreen} />
      <Tab.Screen name="Contatos" component={ContatoScreen} />
      <Tab.Screen name="Configurações" component={ConfigScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // NavigationContainer é OBRIGATÓRIO.
    // Sem ele nada de navegação funciona.
    <NavigationContainer>
      {/* Stack.Navigator organiza as telas como páginas sobrepostas. Útil para abrir a tela de detalhes. */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tela inicial que contém as tabs. */}
        <Stack.Screen name="HomeTabs" component={Tabs} />

        {/* Tela que será aberta ao clicar em "ver detalhes". */}
        <Stack.Screen name="Detalhes" component={DetalheScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
