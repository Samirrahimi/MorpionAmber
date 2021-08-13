import React, { Component } from 'react';
import './Grille.css'
import Case from './case'

const Grille = () => {
    return (
        <div className='grille' >
            <Case check={false} css_class='case case1'/>
            <Case check={false} css_class='case case2'/>
            <Case check={false} css_class='case case3'/>
            <Case check={false} css_class='case case4'/>
            <Case check={false} css_class='case case5'/>
            <Case check={false} css_class='case case6'/>
            <Case check={false} css_class='case case7'/>
            <Case check={false} css_class='case case8'/>
            <Case check={false} css_class='case case9'/>
        </div>
      );
}
 
export default Grille