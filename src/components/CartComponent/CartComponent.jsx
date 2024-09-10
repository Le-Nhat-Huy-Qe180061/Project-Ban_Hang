
import React from 'react';
import { StyleNameProduct, WarpperCardStyle, WrapperDiscountText,  WrapperPriceText, WrapperReportText, WarrperStyleTextSell } from './style';
import { StarOutlined } from '@ant-design/icons';

const CartComponent = () => {

   
    return (
        <>
            <WarpperCardStyle
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <img src='' style={{width: '68px', height:'14px',position: 'absolute', top:'-1', left:'-1', borderTopLeftRadius: '3px' }} />
                <StyleNameProduct>Iphone</StyleNameProduct>
                <WrapperReportText>
                    <span>
                        <span>4.96</span> <StarOutlined style={{ fontSize: '15px', color: 'yellow' }} />
                    </span>
                    <WarrperStyleTextSell>| Đã bán 1000+</WarrperStyleTextSell>
                </WrapperReportText>
                <WrapperPriceText>
                   <span style={{marginRight: '8px'}}>1.000.000đ</span>
                    <WrapperDiscountText>-5%</WrapperDiscountText>
                </WrapperPriceText>
            </WarpperCardStyle>
        </>
    )
}

export default CartComponent;