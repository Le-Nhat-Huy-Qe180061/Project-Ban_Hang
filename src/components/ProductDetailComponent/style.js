
import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";


export const WarrperStyleImageSmall = styled(Image)`  
    height: 64px;
    weight: 64px;
`

export const WarrperStyleColImage = styled(Col)`  
    flex-basis: unset;
    display: flex;
`

export const WarrperStyleNameProduct = styled.h1` 
    color: rgb(36,36,36);
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    word-break: break-word;
`

export const WarrperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`

export const WrapperPriceProduct = styled.div`
    background: rgb(250,250, 250);
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
`

export const WrapperAddressProduct = styled.div`
   span.address{
    tex-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsisl
   };

   span.change-address{{
    color: rgb(11, 116, 229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
   }}
`


export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    border-radius: 4px;
`




