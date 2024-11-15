"use client";
import React, { useEffect } from "react"; 
import { Input } from "antd";
import { Divider } from 'antd';

const { Search } = Input;

export default function page() {
  const [searchResult, setSearchResult] = React.useState(null);
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    fetch('http://468f0210607e.sn.mynetname.net:3050/api/GetData/databynom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({lang: "ru", nomenclature: value}),
    })
    .then(response => response.json())
    .then(data => {
      setSearchResult(data);
    })
    .catch(error => console.error('Ошибка:', error));
  }

  return (
    <div className="main-content">
        <div className="search-section">
          <Search placeholder="Введите номенклатуру" 
          onSearch={onSearch}
          allowClear  
          style={{
            width: 300,
          }}
          enterButton />
          {searchResult && (           
          <div className='results'>
                <Divider orientation="left">Результат поиска</Divider>
               
                {/* <p><strong>Артикул:</strong> {searchResult.articul}</p>
                <p><strong>Код:</strong> {searchResult.code}</p>
                <p><strong>Название:</strong> {searchResult.nomenclature}</p>
                <p><strong>Цена:</strong> {searchResult.price}</p>
                <p><strong>Количество:</strong> {searchResult.quantity}</p> */}
          </div>
            )}
        </div>
    </div>
  )
}

