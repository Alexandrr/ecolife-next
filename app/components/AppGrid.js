import React from 'react'
import { Row, Col } from 'antd'

export default function AppGrid(props) {
  const resultItems = props.resultItems
  return (
    <div className="gridApp">
        <Row>
                <Col flex="30px">&#8470;</Col>
                <Col flex="auto" >Код</Col>
                <Col flex="auto">Артикул</Col>
                <Col flex="auto">Номенклатура</Col>               
                <Col flex="auto">Источник</Col>
                <Col flex="auto">Колличество</Col>
                <Col flex="auto">Цена</Col>
            </Row>
        {           
            resultItems.map((col, i) =>(
            <Row>
                <Col flex="30px">{i}</Col>
                <Col flex="auto"  >{col.code}</Col>
                <Col flex="auto">{col.articul}</Col>
                <Col flex="auto">{col.nomenclature}</Col>               
                <Col flex="auto">{col.parent}</Col>
                <Col flex="auto">{col.quantity}</Col>
                <Col flex="auto">{col.price}</Col>
            </Row>
            ))}
    </div>
  )
}