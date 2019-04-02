import React, {useState, useEffect} from 'react';
/*
header is consisting from three parts
1- logo.
2- Views navigation.
3- actions
*/
function Header(props) {
    const {logo} = props;

    // function onScrollChange() {
    //     if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    //         document.getElementById("header").style.height = "6rem";
    //         document.getElementById("logo").style.height = "5rem";
    //     } else {
    //         document.getElementById("header").style.height = `8rem`;
    //         document.getElementById("logo").style.height = "6rem";
    //     }
    // }

    useEffect(() => {
        // window.addEventListener('scroll', onScrollChange);
        return () => {
            // window.removeEventListener('scroll', onScrollChange);
        };
    });


    return (
        <header id="header" className="header">
            <div className="header__logo-box">
                <img id="logo" className="header__logo" src={logo} alt="Logo"/>
            </div>
            <div className="header__action-container">
                <div className="header__left">
                    {props.navigation}
                </div>
                <div className="header__right">
                    {props.rightActions}
                </div>
            </div>
        </header>
    );
}

export default Header;