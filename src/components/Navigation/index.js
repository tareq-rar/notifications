import React from 'react';

function Navigation(props){
    return(
        <div className="navigation">
            {
                React.Children.map(props.children, (child) => {
                    console.log(child, 'child child child');
                })
            }
        </div>
    );
}

export default Navigation;