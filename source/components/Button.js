import React from 'react';
import {Text ,TouchableOpacity} from 'react-native';

const Button =({onPress}) =>{
    const {buttonStyle,
           textStyle } = styles;

    return(
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>Buy Now</Text>
        </TouchableOpacity>

    );
};

const styles ={
    buttonStyle :{
        flex:1, // gets it to fill as much content as it can
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius:5,
        borderWidth :1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,

    },
    textStyle :{
        fontSize :14,
        alignSelf:'center',
        color :'#007aff',
        fontWeight:'600',
        paddingTop: 10,
        paddingBottom:10
    }
}

export default Button;