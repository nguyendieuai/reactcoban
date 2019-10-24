import React, {Component} from 'react';
import './App.css';

import SinhVien from './components/SinhVien/SinhVien.js'

class App extends Component{
  state ={
    sinhVien :[
      { hoten:'Nguyễn Thị Tẹo', tuoi: 35, sothich:'Ngủ nướng'},
      { hoten:'Nguyễn Thị Teo', tuoi: 37, sothich:'Ăn vặt'},
      { hoten:'Nguyễn Thị Téo', tuoi: 39, sothich:'Không'}
    ],
    lop : 'Lập trình Reactjs'
  }
  
  xulyCapNhat = () => {
    this.setState(
      {
        sinhVien:[
          { hoten:'Nguyễn Thị Tẹo', tuoi: 35, sothich:'Ngủ nướng'},
          { hoten:'Nguyễn Thị Teo', tuoi: 36, sothich:'Ăn vặt'},
          { hoten:'Nguyễn Thị Téo', tuoi: 39, sothich:'Không'}
        ],
        lop: 'Lâp trình ReactJS'
      }
    );
  }

  render(){
    return(
      <div className="App">
        <h1>Ứng dụng react đầu tiên</h1>
        <p>Đến từ Nguyễn Thị Diệu Ái</p>
        <button onClick = {this.xulyCapNhat}>
          Cập nhật
        </button>

        <SinhVien 
        hoten={this.state.sinhVien[0].hoten} 
        tuoi={this.state.sinhVien[0].tuoi}>
          Sở thích: {this.state.sinhVien[0].sothich}
        </SinhVien>
        <SinhVien 
        hoten={this.state.sinhVien[1].hoten} 
        tuoi={this.state.sinhVien[1].tuoi}>
          Sở thích: {this.state.sinhVien[1].sothich}
        </SinhVien>
        <SinhVien 
        hoten={this.state.sinhVien[1].hoten} 
        tuoi={this.state.sinhVien[1].tuoi}>
          Sở thích: {this.state.sinhVien[1].sothich}
        </SinhVien>
      </div>
    );
  }
}
export default App;