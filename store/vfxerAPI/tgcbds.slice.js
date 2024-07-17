import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_tgcbd_list = createAsyncThunk(
  "tgcbds/api_v1_tgcbd_list",
  async payload => {
    const response = await apiService.api_v1_tgcbd_list(payload)
    return response.data
  }
)
export const api_v1_tgcbd_create = createAsyncThunk(
  "tgcbds/api_v1_tgcbd_create",
  async payload => {
    const response = await apiService.api_v1_tgcbd_create(payload)
    return response.data
  }
)
export const api_v1_tgcbd_retrieve = createAsyncThunk(
  "tgcbds/api_v1_tgcbd_retrieve",
  async payload => {
    const response = await apiService.api_v1_tgcbd_retrieve(payload)
    return response.data
  }
)
export const api_v1_tgcbd_update = createAsyncThunk(
  "tgcbds/api_v1_tgcbd_update",
  async payload => {
    const response = await apiService.api_v1_tgcbd_update(payload)
    return response.data
  }
)
export const api_v1_tgcbd_partial_update = createAsyncThunk(
  "tgcbds/api_v1_tgcbd_partial_update",
  async payload => {
    const response = await apiService.api_v1_tgcbd_partial_update(payload)
    return response.data
  }
)
export const api_v1_tgcbd_destroy = createAsyncThunk(
  "tgcbds/api_v1_tgcbd_destroy",
  async payload => {
    const response = await apiService.api_v1_tgcbd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tgcbdsSlice = createSlice({
  name: "tgcbds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_tgcbd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tgcbd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tgcbd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tgcbd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tgcbd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tgcbd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tgcbd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tgcbd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_tgcbd_list,
  api_v1_tgcbd_create,
  api_v1_tgcbd_retrieve,
  api_v1_tgcbd_update,
  api_v1_tgcbd_partial_update,
  api_v1_tgcbd_destroy,
  slice: tgcbdsSlice
}
