import { Person } from "@/models";
import { LocalStorageTypes } from "@/models/localStorage";
import { getLocalStorage, setLocalStorage } from "@/utilities/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState:Person[] = [];


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string ) : initialState,
    reducers : {
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, state)
            return action.payload;
        }
    }
});

export const { addFavorite } = favoritesSlice.actions