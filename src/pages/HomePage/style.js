

import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WarpperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WarpperButtonMore = styled(ButtonComponent)`
    &:hover{
        background: rgb(13, 92, 182);
        span{
            color: #fff;
        }
    }
`

export const WarrperProducts = styled.div` 
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-warp: warp;
`