"use client";
import React from "react"; 
import { Button, Input } from "antd";
import { Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Link from "next/link";

const { Search } = Input;




export default function Code() {
  const [searchResult, setSearchResult] = React.useState(null);
  const onSearch = (value) => {
    fetch('http://468f0210607e.sn.mynetname.net:3050/api/GetData/databycode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({lang: "ru", code: value , searchCriterias:"code"}),
    })
    .then(response => response.json())
    .then(data => {
      setSearchResult(data);
    })
    .catch(error => console.error('Ошибка:', error));
  }
  function GetSearchValue(value){
    var kod = value.slice(value.indexOf("kod:_") +5, value.length)
    return kod;
    }
    
  return (
    <div className="main-content">
        <div className="search-section">
          <Search placeholder="Введите код товара" 
          onSearch={onSearch}
          allowClear  
          style={{
            width: 300,
          }}
          enterButton />
          {searchResult && (           
          <div className='results'>
                <Divider orientation="left">Результат поиска</Divider>
                <p><strong>Артикул:</strong> {searchResult.articul}</p>
                <p><strong>Код:</strong> {searchResult.code}</p>
                <p><strong>Название:</strong> {searchResult.nomenclature}  
                <Link href={{pathname: '/name', query: {value: GetSearchValue(searchResult.nomenclature)}}}>
                  <span><Button type="primary" shape="circle" icon={<SearchOutlined />}/></span>               
                </Link>
                </p>
                <p><strong>Цена:</strong> {searchResult.price}</p>
                <p><strong>Количество:</strong> {searchResult.quantity}</p>
          </div>
            )}
        </div>
    </div>
  )
}
