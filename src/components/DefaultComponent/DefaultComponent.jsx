import HeaderComponent from "../HeaderComponent/HeaderComponent";


const DefaultComponent = ({children}) => {

    return (
        <>
            <HeaderComponent />
            <br />
            {children}
        </>
    )
}

export default DefaultComponent;