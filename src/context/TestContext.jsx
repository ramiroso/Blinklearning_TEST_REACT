import { createContext, useState } from "react";
const TestContext = createContext();
const initialState = {
    test: {
        done: false
    }
}
const TestProvider = ({children}) => {
    const [state, setTestResponse] = useState(initialState);
    const updateTestResponses = (response) => {
        setTestResponse({test: {...response } });
    }
    return (
        <TestContext.Provider value={
            {
                testResponses: state.test,
                updateTestResponses
            }
        }>
            {children}
        </TestContext.Provider>
    )
}

export { TestProvider }
export default TestContext;