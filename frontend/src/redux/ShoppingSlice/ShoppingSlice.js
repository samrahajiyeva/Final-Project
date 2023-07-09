// import { createSlice } from "@reduxjs/toolkit";

// const shoppingSlice = createSlice({
//     name: "shoppingcart",
//     initialState: {
//         items: [],
//     },
//     reducers: {
//         addToCart: (state, action) => {
//             const newItem = action.payload;
//             const existingItem = state.items.find((item) => item.id === newItem.id);
//             if (existingItem) {
//                 existingItem.count += 1;
//             } else {
//                 state.items.push({ ...newItem, count: 1 });
//             }
//         },
//         removeFromCart: (state, action) => {
//             const itemId = action.payload;
//             const index = state.items.findIndex((item) => item.id === itemId);
//             if (index !== -1) {
//                 const item = state.items[index];
//                 if (item.count === 1) {
//                     state.items.splice(index, 1);
//                 } else {
//                     item.count -= 1;
//                 }
//             }
//         },
//         empty: (state, action) => {
//             state.count = 0;
//             state.value = [];
//         }
//     },
// });

// export const { addToCart, removeFromCart , empty } = shoppingSlice.actions;
// export default shoppingSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shoppingcart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ ...newItem, count: 1, ordered: false });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        const item = state.items[index];
        if (item.count === 1) {
          state.items.splice(index, 1);
        } else {
          item.count -= 1;
        }
      }
    },
    markItemsAsOrdered: (state) => {
      state.items.forEach((item) => {
        item.ordered = true;
      });
    },
    empty: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, markItemsAsOrdered, empty } = shoppingSlice.actions;
export default shoppingSlice.reducer;
