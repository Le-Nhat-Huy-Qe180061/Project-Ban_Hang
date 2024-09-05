
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WarpperTypeProduct } from "./style";

import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";

const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'Lap top']
    return (
        <>
            <div style={{ padding: '0 120px' }}>
                <WarpperTypeProduct>
                    {arr.map((item, _) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WarpperTypeProduct>
                <div id="container" style={{ background: '#efefef' }}>
                    <SliderComponent arrImage={[slider1, slider2, slider3]} />
                </div>
            </div>
        </>
    )
}

export default HomePage;