
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WarpperTypeProduct } from "./style";


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
                HomePage
            </div>
        </>
    )
}

export default HomePage;