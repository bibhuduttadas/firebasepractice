import React, { Component } from 'react'
import { TextInput ,View, Button} from 'react-native'
import {firebase} from '../firebase/config'

class Reg extends Component{
    constructor(){
    super();
    this.state ={
        Email:'',
        password:'',
    }
    }
    onRegister =()=>
    {
       firebase.auth()
       .createUserWithEmailAndPassword(this.state.Email,this.state.password)
       .then(res=>{
           console.log(res)
       })
    }
    render(){
        return(
            <View>
                <TextInput onChangeText={(email)=>this.setState({Email:email})} placeholder='Email'></TextInput>
                <TextInput  onChangeText={(Password)=>this.setState({password:Password})} placeholder='password'></TextInput>
                <Button onPress={this.onRegister} title='register' ></Button>

            </View>
        )
    }
}

export default Reg;