import React from 'react';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Benefits1 from './components/Benefits1';
import Benefits2 from './components/Benefits2';
import Options from './components/Options';

function Pages() {
    return (
        <div>
            <Navbar/>
            < Price/>
            <Benefits1/>
            <Benefits2/>
            <Options/>
        </div>
    )
}

export default Pages
