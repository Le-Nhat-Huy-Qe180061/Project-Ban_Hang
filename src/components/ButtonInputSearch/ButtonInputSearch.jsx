import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

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
            <Input
                size={size}
                placeholder={placeholder}
                style={{ backgroundColor: backgroundColorInput }}
            />
            <Button
                size={size}

                style={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color: colorButton }} />}
            >
                <span style={{ color: colorButton }}> {textButton}</span>
            </Button>
        </>
    );
};

export default ButtonInputSearch;
