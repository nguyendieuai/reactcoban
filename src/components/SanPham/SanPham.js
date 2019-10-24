import React from 'react';


const sanPham = (props) => {
    return(
        <div>
            <p>{ props.masanpham}</p>
            <p>{ props.tensanpham}</p>
            <p>{ props.gia}</p>
        </div>
    );
}

export default sanPham;