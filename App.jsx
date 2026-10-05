import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ChatList from './src/screens/ChatList';
import Conversation from './src/screens/Conversation';
import Profile from './src/screens/Profile';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{ title: 'All Messages' }}
        />
        <Stack.Screen
          name="Conversation"
          component={Conversation}
          options={({ route }) => ({
            title: `Chat: ${route.params.userName}`,
          })}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}