import { useContext } from "react";
import AppContext from "../data/AppContext";

function FlexContainer({ element, data }) {
    const { items } = useContext(AppContext);
    
    return (
        <div className="d-flex flex-row justify-content-center flex-wrap">
            {items.map((item, idx) => {
                return (
                    <div key={idx}>{element(item)}
                    </div>
                );
            })}
        </div>
    );
}

export default FlexContainer;
