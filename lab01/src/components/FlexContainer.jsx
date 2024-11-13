import { useData } from "../hooks";

function FlexContainer({ element, data }) {
    const items = useData();

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
