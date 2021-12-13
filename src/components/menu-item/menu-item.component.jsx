import React from 'react';

import './menu-item.style.scss';

const MenuItem = ( { title } ) => {
    return (
        <div className='menu-item'>
            <div className='container'>
                <div className='inner-container'>
                    <h1 className='title'>{ title }</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;