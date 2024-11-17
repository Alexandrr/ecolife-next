import React from 'react'
import { Row, Col, Divider } from 'antd'

export default function AppGrid(props) {
  const resultItems = props.resultItems
  return (
    <div className="gridApp">
        <Row justify="start" key={"header"}>
                <Col flex="30px">&#8470;</Col>
                <Col flex="2" >Код</Col>
                <Col flex="3">Артикул</Col>
                <Col flex="6">Номенклатура</Col>               
                <Col flex="3">Источник</Col>
                <Col flex="2">Колличество</Col>
                <Col flex="1">Цена</Col>
            </Row>
            <Divider></Divider>
        {           
            resultItems.map((col, i) =>(
            <Row key={"content"}>
                <Col flex="30px">{i}</Col>
                <Col flex="2">{col.code}</Col>
                <Col flex="3">{col.articul}</Col>
                <Col flex="6">{col.nomenclature}</Col>               
                <Col flex="3">{col.parent}</Col>
                <Col flex="2">{col.quantity}</Col>
                <Col flex="1">{col.price}</Col>
            </Row>
            ))}
    </div>
  )
}