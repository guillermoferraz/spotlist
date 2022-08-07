import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ListsService from "src/services/Lists";

export const saveList = createAsyncThunk('/lists/create', async (data: {id: string| undefined, name: string }) => {
  try {
    const response = await ListsService.saveList(data);
    return response;
  } catch (err) {
    console.error(err)
  }
});

export const getLists = createAsyncThunk('/lists', async() => {
  try {
    const response = await ListsService.getLists();
    return response;
  } catch (err) {
    console.error(err)
  }
});
export const deleteList = createAsyncThunk('/list/delete/:id', async (id: string) => {
  try {
    const response = await ListsService.delete(id);
    return response;
  } catch (err) {
    console.error(err)
  }
});

export const updateList = createAsyncThunk('/list/update/:id', async (listData: { _id: string, name: string, __v: number, userId: string }) => {
  try { 
    const response = await ListsService.updateList(listData);
    return response;
  } catch (err) {
    console.error(err)
  }
})
export const addTrack = createAsyncThunk('/list/add/track', async (data: { trackId: string|undefined, listId: string|undefined }) => {
  try {
    const response = await ListsService.addTrack(data);
    return response;
  } catch (err) {
    console.error(err)
  }
});
export const getTrackList = createAsyncThunk('/list/track/list/:id', async (id:string ) => {
  try {
    const response = await ListsService.getTrackList(id);
    return response;
  } catch (err) {
    console.error(err)
  }
})

const ListsSlice = createSlice({
  name: 'Lists',
  initialState: {
    saveListResponse: undefined,
    loading: false,
    lists: [ { _id: undefined, name: undefined } ],
    deleteResponse: undefined,
    updateResponse: undefined,
    addTrackResponse: undefined,
    trackList: {tracks: [], items: [], _id: undefined}
  },
  reducers: {
    setSaveResponse: (state, { payload }) => {
      state.saveListResponse = payload.value
    },
    setDeleteResponse: (state, { payload }) => {
      state.deleteResponse = payload.value
    },
    setUpdateResponse: (state, { payload }) => {
      state.updateResponse = payload.value
    },
    setAddTrackResponse: (state, { payload }) => {
      state.addTrackResponse = payload.value
    }
  },
  extraReducers: (builder) => {
    builder.addCase(saveList.fulfilled, (state, { payload }) => {
      state.saveListResponse = payload;
      state.loading = false;
    })
    .addCase(saveList.pending, (state) => {
      state.loading = true;
    })
    .addCase(getLists.fulfilled, (state, { payload }) => {
      state.lists = payload;
      state.loading = false
    })
    .addCase(getLists.pending, (state) => {
      state.loading = false
    })
    .addCase(deleteList.fulfilled, (state, { payload}) => {
      state.deleteResponse = payload;
      state.loading = false
    })
    .addCase(deleteList.pending, (state) => {
      state.loading = true
    })
    .addCase(updateList.fulfilled, (state, { payload}) => {
      state.updateResponse = payload;
      state.loading = false
    })
    .addCase(updateList.pending, (state) => {
      state.loading = true
    })
    .addCase(addTrack.fulfilled, (state, { payload}) => {
      state.addTrackResponse = payload;
      state.loading = false
    })
    .addCase(addTrack.pending, (state) => {
      state.loading = true
    })
    .addCase(getTrackList.fulfilled, (state, { payload } ) => {
      state.trackList = payload;
      state.loading = false;
    })
    .addCase(getTrackList.pending, (state, { payload } ) => {
      state.loading = true;
    })
  },
});
export default ListsSlice;