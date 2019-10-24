import React, {Component} from 'react';
import './App.css';

import SanPham from './components/SanPham/SanPham.js'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Bảng giá sản phẩm</h1>
        <SanPham masanpham="123" tensanphan="ghế" gia="1.200.000"></SanPham>
        <SanPham masanpham="124" tensanphan="bàn" gia="2.000.000"></SanPham>
        <SanPham masanpham="125" tensanphan="đèn bàn" gia="1.000.000"></SanPham>
        <SanPham masanpham="126" tensanphan="hoa" gia="100.000"></SanPham>
        <SanPham masanpham="127" tensanphan="sofa" gia="7.000.000"></SanPham> */}
      </div>
    );
  }
}

export default App;
