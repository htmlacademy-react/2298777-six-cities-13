import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { Comments } from '../../../types/app-type';
import { toast } from 'react-toastify';
import { fetchCommentsAction, postCommentAction } from '../../api-actions/comment';

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
        state.commentsLength = action.payload.length;
        state.comments = action.payload.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        state.comments = state.comments.slice(0, 10);
        state.isCommentsLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentsLoading = false;
        toast.warn('Error while fetching comments');
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.commentsLength++;
        state.comments.unshift(action.payload);
        state.isCommentsLoading = false;
        state.comments = state.comments.slice(0, 10);
      })
      .addCase(postCommentAction.rejected, (state) => {
        toast.warn('Error while posting comment');
        state.isCommentsLoading = false;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isCommentsLoading = true;
      });
  },
});
