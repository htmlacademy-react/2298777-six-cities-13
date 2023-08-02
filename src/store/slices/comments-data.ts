import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Comments } from '../../types/app-type';
import { fetchCommentsAction, postCommentAction } from '../api-action';
import { toast } from 'react-toastify';

const initialState = {
  comments: [],
  isCommentsLoading: false,
  commentsLength: 0,
} as {
  comments: Comments;
  isCommentsLoading: boolean;
  commentsLength: number;
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
        state.comments = action.payload.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        state.comments = state.comments.slice(0, 10);
        state.isCommentsLoading = false;
        state.commentsLength = action.payload.length;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.comments = [];
        state.isCommentsLoading = false;
        state.commentsLength = 0;
        toast.warn('Error while fetching comments');
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments.unshift(action.payload);
        state.comments = state.comments.slice(0, 10);
        state.commentsLength = state.comments.length;
      })
      .addCase(postCommentAction.rejected, () => {
        toast.warn('Error while posting comment');
      });
  },
});
