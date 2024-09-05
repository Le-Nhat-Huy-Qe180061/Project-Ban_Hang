import {
  WrapperHeader,
  WrapperHeaderAccout,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import "./HeaderComponent.scss";
import { Col, Input } from "antd";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const HeaderComponent = () => {
  return (
    <>
      <WrapperHeader gutter={[10, 20]}>
        <Col span={6}>
          <WrapperTextHeader>NhatHuyDev</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
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
