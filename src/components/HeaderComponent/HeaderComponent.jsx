import {
    WrapperHeader,
    WrapperHeaderAccout,
    WrapperTextHeader,
    WrapperTextHeaderSmall,
} from "./style";
import { useNavigate } from "react-router-dom";
import "./HeaderComponent.scss";
import { Badge, Col } from "antd";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useSelector } from "react-redux";



const HeaderComponent = () => {

    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/sign-in');
    }

    const user = useSelector((state) => state.user);

    console.log("user", user);


    return (
        <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
            <WrapperHeader >
                <Col span={5}>
                    <WrapperTextHeader>NhatHuyDev</WrapperTextHeader>
                </Col>
                <Col span={13} className="header-center">
                    <ButtonInputSearch
                        size='large'
                        textButton='Tìm kiếm'
                        placeholder='Index'
                    />
                </Col>
                <Col span={6} className="header-right">
                    <WrapperHeaderAccout>
                        <UserOutlined style={{ fontSize: "30px", cursor: 'pointer' }} />
                        {user.name ? (
                            <div>{user.name}</div>
                        ) : (
                            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                                <WrapperTextHeaderSmall>
                                    Đăng nhập / Đăng ký
                                </WrapperTextHeaderSmall>
                                <div className="header-right__account">
                                    <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                    <CaretDownOutlined />
                                </div>
                            </div>
                        )}
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
