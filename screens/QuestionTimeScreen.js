import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Subscribe } from 'unstated';
import { Button } from 'react-native-paper';
import StateContainer from '../container/StateContainer';
import BaseStyles from '../styles/BaseStyles';

class QuestionTimeScreenContent extends React.Component {
    render() {
        let globalState = this.props.globalState
        return (
            <View style={BaseStyles.container}>
                <Text style={{fontSize: 22, marginBottom: 20}}>お互いに質問しあってください</Text>
                <Button
                    mode="outlined"
                    onPress={() => {
                        this.props.navigation.navigate('Judge');
                    }}
                    color="#24f2cc"
                    compact={true}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}                       
                >
                    投票を行う
                </Button>          
            </View>
        );
    }
}


const QuestionTimeScreen = ({ navigation }) => {
    return (
        <Subscribe to={[StateContainer]}>
            {globalState => <QuestionTimeScreenContent globalState={globalState} navigation={navigation} />}
        </Subscribe>
    );
}

export default QuestionTimeScreen;

const styles = StyleSheet.create({
    button: {
        width: 140,
    },
    buttonLabel: {
        fontSize: 25,
    },
  });