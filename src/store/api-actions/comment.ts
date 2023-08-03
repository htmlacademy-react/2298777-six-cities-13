import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from '../../types/store';
import { APIRoute } from '../../const';
import { Comments, Comment } from '../../types/app-type';
import { AppDispatch } from '../../types/store';

const fetchCommentsAction = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, {extra: api}) => {
    const response = await api.get<Comments>(APIRoute.Comments(id));
    return response.data;
  }
);

const postCommentAction = createAsyncThunk<Comment, {comment: string; rating: number; offerId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async ({comment, rating, offerId}, {extra: api}) => {
    const response = await api.post<Comment>(APIRoute.Comments(offerId), {comment, rating});
    return response.data;
  }
);

export { fetchCommentsAction, postCommentAction };
