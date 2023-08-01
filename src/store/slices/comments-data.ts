import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Comments } from '../../types/app-type';
import { fetchCommentsAction, postCommentAction } from '../api-action';

const initialState = {
  comments: [],
  isCommentsLoading: false,
} as {
  comments: Comments;
  isCommentsLoading: boolean;
};

export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.comments = [];
        state.isCommentsLoading = false;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(postCommentAction.rejected, () => {
        true;
      });
  },
});
