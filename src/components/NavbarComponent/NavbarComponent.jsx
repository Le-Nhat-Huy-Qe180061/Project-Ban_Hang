import React from 'react'
import { WarrperLabelText, WarpperTextValue, WarpperContent, WarpperTextPrice } from './style'
import { Checkbox, Col, Row, Rate } from 'antd'
const NavbarComponent = () => {

    const renderContent = (type, options) => {

        const onChange = (checkedValues) => {
            console.log('checked = ', checkedValues);
        };

        switch (type) {
            case 'text':
                return options.map((options) => {
                    return (
                        <WarpperTextValue>{options}</WarpperTextValue>
                    )
                });
            case 'checkbox':
                return (
                    <Checkbox.Group
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}
                        onChange={onChange}
                    >
                        {options.map((option) => {
                            return (
                                <Checkbox
                                    value={option.value}
                                    style={{
                                        marginLeft: 0
                                    }}
                                >
                                    {option.label}
                                </Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <Rate
                                style={{
                                    fontSize: '12px'
                                }}
                                disabled
                                defaultValue={option}
                            />
                            <span>{`Tu ${option} sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return (
                       <WarpperTextPrice>{option}</WarpperTextPrice>
                    )
                })
            default:
                return {};
        }
    }

    return (
        <div >
            <WarrperLabelText>Label</WarrperLabelText>
            <WarpperContent>
                {renderContent('text', ['TV', 'Laptop', 'Iphone'])}
            </WarpperContent>
          
        </div>
    )
}

export default NavbarComponent