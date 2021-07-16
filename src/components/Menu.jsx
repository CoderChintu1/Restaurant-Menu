import React from 'react';
import CarouselContainer from './Slider/components/CarouselContainer';
import Items from './Items/Items';

const Menu = () => {
    return (
    <>
        <div style = {{backgroundColor: `rgb(247, 244, 244)` }}>
            <CarouselContainer/>
            <Items/>
        </div>
    </>
    )
}

export default Menu;