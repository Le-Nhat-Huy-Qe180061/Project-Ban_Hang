import {
    WrapperHeader,
    WrapperHeaderAccout,
    WrapperTextHeader,
    WrapperTextHeaderSmall,
} from "./style";
import "./HeaderComponent.scss";
import { Col } from "antd";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";



const HeaderComponent = () => {
    return (
        <>
            <WrapperHeader gutter={[10, 20]}>
                <Col span={6}>
                    <WrapperTextHeader>NhatHuyDev</WrapperTextHeader>
                </Col>
                <Col span={12} className="header-center">
                    <ButtonInputSearch
                        size='large'
                        textButton='Tìm kiếm'
                        placeholder='Input search text'
                    />
                </Col>
                <Col span={6} className="header-right">
                    <WrapperHeaderAccout>
                        <UserOutlined style={{ fontSize: "30px", gap: "20px" }} />
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
                        <ShoppingCartOutlined
                            style={{ fontSize: "30px", color: "white" }}
                        />
                        <WrapperTextHeaderSmall className="header-right__cart--text">
                            Giỏ hàng
                        </WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </>
    );
};

export default HeaderComponent;
