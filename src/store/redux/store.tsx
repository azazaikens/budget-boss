import { configureStore } from "@reduxjs/toolkit";

interface incomeState {
    salary: number[];
}

interface costsState {
    products: number[];
}

interface RootState {
    income: incomeState;
    costs: costsState;
}



const initialState: RootState = {
    income: {   
        salary: [12000, 21000, 1200],
    },
    costs: {
        products: [1000, 750, 320]
    },
}
const rootReducer = (state = initialState, action: any): RootState => {
    return state;
}

export const store = configureStore({
    reducer: rootReducer,
});