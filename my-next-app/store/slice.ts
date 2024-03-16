import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SavedItemsState {
  posts: number[];
  photos: number[];
}

const initialState: SavedItemsState = {
  posts: [],
  photos: [],
};

const savedItemsSlice = createSlice({
  name: 'savedItems',
  initialState,
  reducers: {
    savePost(state, action: PayloadAction<number>) {
      state.posts.push(action.payload);
      localStorage.setItem('savedPosts', JSON.stringify(state.posts));
    },
    unsavePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((id) => id !== action.payload);
      localStorage.setItem('savedPosts', JSON.stringify(state.posts));
    },
    savePhoto(state, action: PayloadAction<number>) {
      state.photos.push(action.payload);
      localStorage.setItem('savedPhotos', JSON.stringify(state.photos));
    },
    unsavePhoto(state, action: PayloadAction<number>) {
      state.photos = state.photos.filter((id) => id !== action.payload);
      localStorage.setItem('savedPhotos', JSON.stringify(state.photos));
    },
    initializeFromStorage(state) {
      const savedPosts = localStorage.getItem('savedPosts');
      const savedPhotos = localStorage.getItem('savedPhotos');

      if (savedPosts) {
        state.posts = JSON.parse(savedPosts);
      }
      if (savedPhotos) {
        state.photos = JSON.parse(savedPhotos);
      }
    },
  },
});

export const { savePost, unsavePost, savePhoto, unsavePhoto, initializeFromStorage } = savedItemsSlice.actions;

export default savedItemsSlice.reducer;
