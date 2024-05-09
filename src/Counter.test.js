import { render } from "@testing-library/react";
import Count from "./Components/Count";

describe(Count, () => {
    it("counter displays correct initial count", () => {
        const {getByTestId} = render(<Count countfirst={1}/>);
        const countValue = getByTestId("count")
    });






})


