import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'unstated';
import * as SplashScreen from 'expo-splash-screen';

import StateContainer from './container/StateContainer';
import BaseStyles from './styles/BaseStyles';

import HomeScreen from './screens/HomeScreen';
import NameScreen from './screens/NameScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import ThemeScreen from './screens/ThemeScreen';
import QuestionTimeScreen from './screens/QuestionTimeScreen';
import JudgeScreen from './screens/JudgeScreen';
import ResultScreen from './screens/ResultScreen';


export default class App extends React.Component {

    state = {
        appIsReady: false,
    };

    async componentDidMount() {
        try {
            await SplashScreen.preventAutoHideAsync();
        } catch (e) {
            console.warn(e);
        }
        this.prepareResources();
    }

    prepareResources = async() => {
        await sleep(3000);
        this.setState({ appIsReady: true }, async () => {
            await SplashScreen.hideAsync();
        });
    };

    render() {
        if (!this.state.appIsReady) {
            return (
                <View style={BaseStyles.container}>
                    <Text style={styles.splashScreen}>Decci</Text>
                </View>
            )
        }

        let globalState = new StateContainer()
        const Layout = createAppContainer(Stack)
        return (
            <Provider inject={[globalState]}>
                <Layout />
            </Provider>
        )
    }
}

const sleep = (sec) => {
  return new Promise(resolve => {
      setTimeout(resolve, sec);
  })
}

const Stack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Name: {screen: NameScreen},
    Confirm: {screen: ConfirmScreen},
    Theme: {screen: ThemeScreen},
    Question: {screen: QuestionTimeScreen},
    Judge: {screen: JudgeScreen},
    Result: {screen: ResultScreen},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gestureEnabled: false,
      headerShown: false,
      animationEnabled: false,
    },
  }
);

const styles = StyleSheet.create({
    splashScreen: {
        fontSize: 100,
    },
});