import {
    WrapperHeader,
    WrapperHeaderAccout,
    WrapperTextHeader,
    WrapperTextHeaderSmall,
} from "./style";
import "./HeaderComponent.scss";
import { Badge, Col } from "antd";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";



const HeaderComponent = () => {
    return (
        <div style={{width: '100%', background: 'rgb(26, 148, 255)', display:'flex', justifyContent:'center'}}>
            <WrapperHeader >
                <Col span={5}>
                    <WrapperTextHeader>NhatHuyDev</WrapperTextHeader>
                </Col>
                <Col span={13} className="header-center">
                    <ButtonInputSearch
                        size='large'
                        textButton='Tìm kiếm'
                        placeholder='Input search text'
                    />
                </Col>
                <Col span={6} className="header-right">
                    <WrapperHeaderAccout>
                        <UserOutlined style={{ fontSize: "30px"}} />
                        <div>
                            <WrapperTextHeaderSmall>
                                Đăng nhập / Đăng ký
                            </WrapperTextHeaderSmall>
                            <div className="header-right__account">
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccout>

                    <div className="header-right__cart">
                        <Badge count={4}>
                            <ShoppingCartOutlined
                                style={{ fontSize: "30px", color: "white" }}
                            />
                        </Badge>
                        <WrapperTextHeaderSmall className="header-right__cart--text">
                            Giỏ hàng
                        </WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;
