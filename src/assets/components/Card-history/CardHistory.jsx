import React from 'react';

const CardHistory = ({ selectedCard}) => {
    console.log(selectedCard)
    return (
        <div>
            {
                selectedCard.map(history => console.log(history))
            }
        </div>
    );
};

export default CardHistory;