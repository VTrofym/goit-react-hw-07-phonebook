import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, setData, deleteData } from "helpers/api";

export const getApiAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await getData()
      return response
    } catch (e) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkApi) => {
    try {
      const response = await setData(data)
      // console.log('data :>> ', data);
      return response
    } catch (e) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (data, thunkApi) => {
    try {
      const response = await deleteData(data)
      return response
    } catch (e) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)