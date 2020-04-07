import React from 'react';

function MyHeader(props: any) {
    return (
        <header>
            {props.children}
        </header>
    );
}

export default MyHeader;