import { Person } from "@/models";
import { LocalStorageTypes } from "@/models/localStorage";
import { getLocalStorage, setLocalStorage } from "@/utilities/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState:Person[] = [];






export const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string ) : initialState,
    reducers : {
        addPeople: (state, action) => {
           setLocalStorage(LocalStorageTypes.PEOPLE, state)
           return action.payload;
        },
    }
})

export const { addPeople } = peopleSlice.actions