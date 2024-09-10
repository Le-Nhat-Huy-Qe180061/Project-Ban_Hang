
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WarpperButtonMore, WarpperTypeProduct, WarrperProducts } from "./style";

import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import CartComponent from "../../components/CartComponent/CartComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

import './HomePage.scss'
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'Lap top']
    return (
        <>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WarpperTypeProduct>
                    {arr.map((item, _) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WarpperTypeProduct>
                <div className="body" style={{width: '100%', background: '#efefef' }}>
                    <div id="container" style={{height: '1000px', width: '1270px', margin: '0 auto' }}>
                        <SliderComponent arrImage={[slider1, slider2, slider3]} />
                        <WarrperProducts>
                            <CartComponent />
                            <CartComponent />
                            <CartComponent />
                            <CartComponent />
                            <CartComponent />
                            <CartComponent />
                        </WarrperProducts>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <WarpperButtonMore textButton="Xem thêm" type='outline' styleButton={{
                                border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                                width: '240px', height: '38px', borderRadius: '4px'
                            }} styleTextButton={{ fontWeight: 500 }} />
                        </div>
                        {/* <NavbarComponent /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;