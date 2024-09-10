import { Card } from "antd";
import styled from "styled-components";

export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;

export const WrapperReportText = styled.div`
  font-size: 1lpx;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
`;

export const WrapperPriceText = styled.div`  
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0px;
 `;

 
export const WrapperDiscountText = styled.span`  
color: rgb(255, 66, 78);
font-size: 12px;
font-weight: 500;
`;

export const WarpperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
`

export const WarrperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`

// export const WrapperImageStyle = styled.img`
//     top: -1px;
//     left: -1px;
//     boder-top-left-radius: 3px;
//     position: absolute;
//     height: 14px;
//     width: 68px;
// `