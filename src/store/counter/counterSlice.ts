import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  history: number[];
  future: number[];
}

const initialState: CounterState = {
  value: 0,
  history: [],
  future: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
        state.history.push(state.value);
        state.value += 1;
        state.future = [];
      },
    decrement: (state) => {
      state.history.push(state.value);
      state.value -= 1;
      state.future = [];
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
        state.history.push(state.value);
      state.value += action.payload;
      state.future = [];
    },
    undo: (state) => {
      if (state.history.length > 0) {
        state.future.push(state.value);
        state.value = state.history.pop()!;
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        state.history.push(state.value);
        state.value = state.future.pop()!;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount, undo, redo } = counterSlice.actions;

export default counterSlice.reducer;