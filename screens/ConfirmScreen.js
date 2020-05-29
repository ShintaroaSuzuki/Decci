import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Subscribe } from 'unstated';
import { Button } from 'react-native-paper';
import StateContainer from '../container/StateContainer';
import BaseStyles from '../styles/BaseStyles';

class ConfirmScreenContent extends React.Component {
    render() {
        let globalState = this.props.globalState
        return (
            <View style={BaseStyles.container}>
                <Text style={{fontSize: 25, marginBottom: 20}}>{globalState.state.names[globalState.state.turn]}<Text style={{fontSize: 22}}>さんですか？</Text></Text>
                <Button
                    mode="outlined"
                    onPress={() => {this.props.navigation.navigate('Theme');}
                    }
                    color="#24f2cc"
                    compact={true}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}                         
                >
                    はい
                </Button>
            </View>
        );
    }
}


const ConfirmScreen = ({ navigation }) => {
    return (
        <Subscribe to={[StateContainer]}>
            {globalState => <ConfirmScreenContent globalState={globalState} navigation={navigation} />}
        </Subscribe>
    );
}

export default ConfirmScreen;

const styles = StyleSheet.create({
    button: {
        width: 80,
    },
    buttonLabel: {
        fontSize: 25,
    },
  });