import React from 'react';
import './Images.css';
import background from '../../background.jpeg';

class Images extends React.Component{
    render(){
        const myImage={
            width: '45%',
            margin: 'auto',
            display: 'block',
            marginTop: '75px'
        }
        return(
            <div>
                <img style={myImage} src={background} alt="background"/>
            </div>
        )
    }
}
export default Images;