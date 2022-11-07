import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "helpers/api";

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (data, thunkApi) => {
    try {
      const response = await getData()
   
      return response
    } catch (e) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)