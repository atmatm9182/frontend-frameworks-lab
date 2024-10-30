import PersonProfile from "./PersonProfile";
import FlexContainer from "./FlexContainer";
import { data } from "../module-data";

function Lab3() {
    return (
        <FlexContainer element={PersonProfile} data={data}>
        </FlexContainer>
    );
}

export default Lab3;
