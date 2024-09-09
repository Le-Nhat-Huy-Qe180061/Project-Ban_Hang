
import React, { Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CartComponent from '../../components/CartComponent/CartComponent'
import { Row, Col, Pagination } from 'antd'
import { WarrperProducts, WarrperNavbar } from './style'

const TypeProductPage = () => {
    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    return (
        <div style={{ padding: '0 120px', background: '#efefef', }}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WarrperNavbar span={4}>
                    <NavbarComponent />
                </WarrperNavbar>
                <Col span={20}>
                    <WarrperProducts >
                        <CartComponent />
                        <CartComponent />
                        <CartComponent />
                        <CartComponent />
                        <CartComponent />
                        <CartComponent />
                        <CartComponent />
                        <CartComponent />
                    </WarrperProducts>
                    <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
                </Col>
            </Row>
        </div>
    )
}

export default TypeProductPage