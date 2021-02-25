import { render } from "@testing-library/react";
import React, { Component } from 'react';
import wysh_logo from '../../assets/wysh_logo.png';
import search from '../../assets/search.JPG'
import './indexx.css';

export class Header extends Component {
    render() {
        return (
            <div class="main">
                
                <header >
                    <div>
                    <img src={wysh_logo} class="image"></img>;
                    </div>
                    
                <div class="search">
                        <img src={search} class="image2"></img>
                    </div>
                </header>
            </div>
        )

    }
}
