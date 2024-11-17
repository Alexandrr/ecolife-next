"use client";
import React, { useEffect } from "react"; 
import { Input } from "antd";
import { Divider } from 'antd';
import AppGrid from "@/app/components/AppGrid"
import { useSearchParams } from "next/navigation";

function isNullOrUndefined(value) {
  return value === undefined || value === null;
}



const { Search } = Input;

export default function page() {
  const searchParam = useSearchParams();
  const searchValue = searchParam.get('value');
  const [searchResult, setSearchResult] = React.useState(null);
   
  const onSearch = (value) => {
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
  useEffect(() => {
    if (!isNullOrUndefined(searchValue))
      {
        onSearch(searchValue);
      }
    }, [searchValue])  
    
    
 
  return (
    <div className="main-content">
        <div className="search-section">
          <Search placeholder="Введите номенклатуру" 
          onSearch={onSearch}
          allowClear  
          style={{
            width: 300,
          }}
          enterButton
          defaultValue={searchValue}         
          />
          {searchResult && (           
          <div className='results'>
                <Divider orientation="left">Результат поиска</Divider>
                <AppGrid resultItems = {searchResult.nomenclatures}/>               
          </div>
            )}
        </div>
    </div>
  )
}

