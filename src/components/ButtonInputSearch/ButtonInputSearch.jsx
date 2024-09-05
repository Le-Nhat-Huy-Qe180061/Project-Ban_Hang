
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
    const {
        size,
        placeholder,
        textButton,
        bordered,
        backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props;

    return (
        <>
            <InputComponent
                size={size}
                placeholder={placeholder}
                border = {bordered}
                style={{ backgroundColor: backgroundColorInput }}
            />
            <ButtonComponent
                size={size}
                styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color: colorButton }} />}
                textButton={textButton}
                styleTextButton={{color: colorButton}}
            />
        </>
    );
};

export default ButtonInputSearch;
