import React, {Component} from 'react';
import './App.css';

import SinhVien from './components/SinhVien/SinhVien'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Ứng dụng react đầu tiên</h1>
        <p>Đến từ Nguyễn Thị Diệu Ái</p>
        <SinhVien hoten='Nguyễn Thị Tẹo' tuoi='35'>
          Sở thích: Bóng đá, chơi game, ăn vặt, ngủ nướng,.....
        </SinhVien>
        <SinhVien hoten='Nguyễn Thị Téo' tuoi='37'>
          Sở thích: Kẹo mút
        </SinhVien>
        <SinhVien hoten='Nguyễn Thị Teo' tuoi='39'/>
      </div>
    );
  }
}
export default App;
