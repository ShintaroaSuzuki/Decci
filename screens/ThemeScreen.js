import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Subscribe } from 'unstated';
import { Button } from 'react-native-paper';
import StateContainer from '../container/StateContainer';
import BaseStyles from '../styles/BaseStyles';
class ThemeScreenContent extends React.Component {
    render() {
        let globalState = this.props.globalState
        if (globalState.state.turn == globalState.state.decciNumber) {
            return (
                <View style={BaseStyles.container}>
                    <Text style={[styles.instruction, {color: "red"}]}>話をデッチあげてください</Text>
                    <Text style={styles.theme}>{globalState.state.themes[globalState.state.turn]}</Text>                    
                    <Button
                        mode="outlined"
                        onPress={async () => {
                            await globalState.nextTurn();
                            if (globalState.state.turn < globalState.state.numPlayer) {
                                this.props.navigation.navigate('Confirm');
                            } else {
                                this.props.navigation.navigate('Question');
                            }
                        }}
                        color="#24f2cc"
                        compact={true}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}                             
                    >
                        確認しました
                    </Button>
                </View>
            );
        } else {
            return(
                <View style={BaseStyles.container}>
                    <Text style={[styles.instruction, {color: "#1b6dfa"}]}>思い出を語ってください</Text>
                    <Text style={styles.theme}>{globalState.state.themes[globalState.state.turn]}</Text>                    
                    <Button
                        mode="outlined"
                        onPress={async () => {
                            await globalState.nextTurn();
                            if (globalState.state.turn < globalState.state.numPlayer) {
                                this.props.navigation.navigate('Confirm');
                            } else {
                                this.props.navigation.navigate('Question');
                            }
                        }}
                        color="#24f2cc"
                        compact={true}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}                        
                    >
                        確認しました
                    </Button>
                </View>               
            );
        }
    }
}


const ThemeScreen = ({ navigation }) => {
    return (
        <Subscribe to={[StateContainer]}>
            {globalState => <ThemeScreenContent globalState={globalState} navigation={navigation} />}
        </Subscribe>
    );
}

export default ThemeScreen;

const styles = StyleSheet.create({
    theme: {
        fontSize: 25,
        marginBottom: 40,
    },
    instruction: {
        fontSize: 21,
        marginBottom: 15,
    },
    button: {
        width: 160,
    },
    buttonLabel: {
        fontSize: 25,
    },
  });