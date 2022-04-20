import { createContext, useState, FC } from 'react';
import {DUMMY_MEETUPS} from './dummy-meetups';

const initialState = {
    meetups: DUMMY_MEETUPS
}

export const Context = createContext<any>({});

const Store: FC = ({children, ...props}) => {
    const [state, setState] = useState(initialState)
    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

export default Store;