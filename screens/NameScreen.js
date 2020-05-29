import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Subscribe } from 'unstated';
import { Button } from 'react-native-paper';
import StateContainer from '../container/StateContainer';
import BaseStyles from '../styles/BaseStyles';

class NameScreenContent extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            text: '',
        }
    }

    render() {
        let globalState = this.props.globalState
        return (
            <View style={BaseStyles.container}>
            <ScrollView scrollEnabled={false}>
                <View style={{alignItems: 'center'}}>
                    <TextInput                    
                        style={styles.textInput}
                        placeholder={globalState.state.placeholders[globalState.state.turn]}
                        onChangeText={(text) => this.setState({text: text})}
                        maxLength={10}
                        returnKeyType={"done"}
                    />
                    <Button
                        mode="outlined"
                        compact={true}
                        onPress={async () => {
                            if (this.state.text == '') {
                                return
                            }
                            await globalState.nextTurn();
                            if (globalState.state.turn < globalState.state.numPlayer) {
                                globalState.rename(this.state.text);
                                this.props.navigation.push('Name');
                            } else {
                                globalState.clearTurn();
                                globalState.rename(this.state.text);
                                this.props.navigation.navigate('Confirm');
                            }
                        }}
                        color="#24f2cc"
                        style={styles.button}
                        labelStyle={styles.buttonLabel}                    
                    >
                            決定
                    </Button>
                </View>
            </ScrollView>
            </View>
        );
    }
}


const NameScreen = ({ navigation }) => {
    return (
        <Subscribe to={[StateContainer]}>
            {globalState => <NameScreenContent globalState={globalState} navigation={navigation} />}
        </Subscribe>
    );
}

export default NameScreen;

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: "#555",
        width: 200,
        height: 40,
        marginTop: 250,
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    button: {
        width: 80,
    },
    buttonLabel: {
        fontSize: 25,
    },
  });
