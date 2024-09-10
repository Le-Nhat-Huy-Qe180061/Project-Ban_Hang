
import { Row } from "antd";
import styled from 'styled-components';


export const WrapperHeader = styled(Row)`
    padding: 10px 0px;
    background-color: rgb(26, 148, 255);
    gap: 16px;
    align-items: center;
    flex-wrap:nowrap;
    width: 1270px;
`

export const WrapperTextHeader = styled.span`
   font-size: 18px;
   color: #fff;
   font-weight: bold;
   tex-align: left
`

export const WrapperHeaderAccout = styled.div`
    display:flex;
    align-item: center;
    color: white;
    gap: 10px;
    margin-left: 15px;
`

export const WrapperTextHeaderSmall = styled.div`
   font-size: 12px;
   color: #fff;
`


export const WrapperIconHeader = styled.div`
   font-size: 30px;
   color: #fff;
`