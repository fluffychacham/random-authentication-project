import * as React from 'react';
import logo from '../assets/img/Logo.svg';
import './Logo.scss';

export class Logo extends React.Component {
    public render() {
        return (
            <div className="logo">
                <img src={logo} alt="Logo" />    
            </div>
        )   
    }
}
