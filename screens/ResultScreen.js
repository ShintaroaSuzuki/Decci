import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Subscribe } from 'unstated';
import { Button } from 'react-native-paper';
import StateContainer from '../container/StateContainer';
import BaseStyles from '../styles/BaseStyles';

class ResultScreenContent extends React.Component {
    render() {
        let globalState = this.props.globalState
        if (this.props.navigation.state.params.judgeName == globalState.state.names[globalState.state.decciNumber]) {
            return(
                <View style={BaseStyles.container}>
                    <Text style={{fontSize: 21, marginBottom: 20}}><Text style={{fontSize: 23}}>{globalState.state.names[globalState.state.decciNumber]}</Text>さん<Text style={{fontSize: 25}}>以外</Text>の勝ち！</Text>
                    <Button
                        mode="outlined"
                        onPress={() => {
                            globalState.changeDecciNum();
                            globalState.sortThemes();
                            globalState.nextGame();
                            this.props.navigation.navigate('Confirm');
                        }}
                        color="#24f2cc"
                        compact={true}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}                             
                    >
                        次のゲームへ
                    </Button>
                    <Button
                        mode="outlined"
                        onPress={() => {
                            globalState.restart();
                            this.props.navigation.navigate('Home');
                        }}
                        color="#24f2cc"
                        compact={true}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}                             
                    >
                        人数変更・名前変更
                    </Button>                    
                </View>
            )
        } else {
            return(
                <View style={BaseStyles.container}>
                    <Text style={{fontSize: 21, marginBottom: 20}}><Text style={{fontSize: 25}}>{globalState.state.names[globalState.state.decciNumber]}</Text>さんの勝ち！</Text>
                    <Button
                        mode="outlined"
                        onPress={() => {
                            globalState.changeDecciNum();
                            globalState.sortThemes();
                            globalState.nextGame();
                            this.props.navigation.navigate('Confirm');
                        }}
                        color="#24f2cc"
                        compact={true}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}                             
                    >
                        次のゲームへ
                    </Button>
                    <Button
                        mode="outlined"
                        onPress={() => {
                            globalState.restart();
                            this.props.navigation.navigate('Home');
                        }}
                        color="#24f2cc"
                        compact={true}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}                        
                    >
                        人数変更・名前変更
                    </Button>                                
                </View>
            )
        }
    }
}


const ResultScreen = ({ navigation }) => {
    return (
        <Subscribe to={[StateContainer]}>
            {globalState => <ResultScreenContent globalState={globalState} navigation={navigation} />}
        </Subscribe>
    );
}

export default ResultScreen;

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
    },
    buttonLabel: {
        fontSize: 25,
    },
});