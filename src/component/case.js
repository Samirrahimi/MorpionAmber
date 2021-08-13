import React, { useState, useEffect } from 'react';

const Case = ({css_class, check}) =>

{
    let css=css_class
    let done=check
    let check_by=-1
    console.log({css})
    return (
        <div className={css}></div>        
        )

}

export default Case