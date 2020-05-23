import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Appbar,Button } from 'react-native-paper';
import Display from './components/displayResult';

class App extends React.Component{
  state={
    Fname:"",
    Sname: ""
  }

  OnSubmit(){
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.Fname}&sname=${this.state.Sname}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "8d1ba86e02mshd970b30bfa5c5dap1e9948jsn79b3d19fbb88"
        }
      })
      .then(response => response.json())
      .then(response=>{
        this.setState({
          percentage:response.percentage,
          result:response.result
        })
        console.log(response);
      })
      .catch(err => {
       console.log(err);
      });
  }
  
  render(){
    return (
      <View style={styles.container}>
        
        <Appbar.Header dark="true">
          <Appbar.Content
            title="Love % Calculator"
            style={{alignItems:"center"}}
          />
        </Appbar.Header>

        <TextInput
          label="Person 1 Name"
          value={this.state.Fname}
          onChangeText={text => this.setState({Fname:text })}
        />
        <TextInput
          label="Person 2 Name"
          value={this.state.Sname}
          onChangeText={text => this.setState({ Sname:text })}
        />
        
        <Button icon="camera" mode="contained" 
          onPress={this.OnSubmit.bind(this)}
          style={{margin:10}}>
          Calculate
        </Button>
        <Display percent={this.state.percentage} result={this.state.result}/>
        
        </View>
    )
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
