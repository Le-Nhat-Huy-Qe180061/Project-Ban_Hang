import { Col, Row, Image, InputNumber, } from 'antd'
import { StarFilled, MinusCircleOutlined, PlusCircleOutlined  } from '@ant-design/icons'
import React from 'react';
import imageProduct from '../../assets/images/test.webp';
import imageProductSub from '../../assets/images/imageProductSub.webp';
import { WarrperStyleColImage, WarrperStyleImageSmall, WarrperStyleNameProduct, WarrperStyleTextSell, WrapperAddressProduct, WrapperBtnQuantityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct } from './style';
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ProductDetailComponent = () => {
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight:'8px'}}>
                <Image src={imageProduct} alt='image product' preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WarrperStyleColImage span={4}>
                        <WarrperStyleImageSmall src={imageProductSub} alt='image small' preview='false' />
                    </WarrperStyleColImage>
                    <WarrperStyleColImage span={4}>
                        <WarrperStyleImageSmall src={imageProductSub} alt='image small' preview='false' />
                    </WarrperStyleColImage>
                    <WarrperStyleColImage span={4}>
                        <WarrperStyleImageSmall src={imageProductSub} alt='image small' preview='false' />
                    </WarrperStyleColImage>
                    <WarrperStyleColImage span={4}>
                        <WarrperStyleImageSmall src={imageProductSub} alt='image small' preview='false' />
                    </WarrperStyleColImage>
                    <WarrperStyleColImage span={4}>
                        <WarrperStyleImageSmall src={imageProductSub} alt='image small' preview='false' />
                    </WarrperStyleColImage>
                    <WarrperStyleColImage span={4}>
                        <WarrperStyleImageSmall src={imageProductSub} alt='image small' preview='false' />
                    </WarrperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: '10px'}}>
                <WarrperStyleNameProduct>Tiểu Thuyết - Thám Tử Lừng Danh Conan: Ngôi Sao 5 Cánh 1 Triệu Đô</WarrperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                    <WarrperStyleTextSell>| Da ban 1000+</WarrperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000 đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến</span>
                    <span className='address'>381 Trần Phú An Nhơn</span>
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddressProduct>

                <div style={{margin: '10px 0 20px', borderTop: '1px solid #e5e5e5', padding: '10px 0', borderBottom: '1px solid #e5e5e5'}}>
                    <div style={{marginBottom: '6px'}}>Số lượng</div>
                    <WrapperQualityProduct>
                        <MinusCircleOutlined style={{ color: '#000', fontSize: '20px' }}/>
                        <InputNumber min={1} max={10} defaultValue={1} />
                        <PlusCircleOutlined style={{ color: '#000', fontSize: '20px' }}/>
                    </WrapperQualityProduct>       
                </div>
                <div style={{display: 'flex', aliggItems:'center', gap: '12px'}}>
                    <ButtonComponent
                    bordered={false}
                    size={20}
                    styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '220px',
                        border: 'none',
                        borderRadius: '4px',
                    }}
                    textButton={'Chọn mua'}
                    styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}

                    >              
                    </ButtonComponent>
                    <ButtonComponent
                    bordered={false}
                    size={20}
                    styleButton={{
                        background: '#fff',
                        height: '48px',
                        width: '220px',
                        border: '1px solid rgb(13, 92, 182)',
                        borderRadius: '4px',
                    }}
                    textButton={'Mua trả sau'}
                    styleTextButton={{color: 'rgb(13, 92, 182)', fontSize: '15px',fontWeight: '700'}}
                    >              
                    </ButtonComponent>
                </div>

            </Col>
        </Row>
    )
}

export default ProductDetailComponent