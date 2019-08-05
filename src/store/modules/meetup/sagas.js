import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import {
  createUpdateMeetupSuccess,
  createUpdateMeetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  console.tron.log(payload);
  try {
    const { title, description, location, date, banner_id } = payload.data;

    const meetup = Object.assign({
      title,
      description,
      location,
      date,
      banner_id,
    });
    const response = yield call(api.post, 'meetups', meetup);
    toast.success('Meetup criada com sucesso!');
    history.push(`/details/${response.data.id}`);
    yield put(createUpdateMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao criar meetup. Confira seus dados e tente novamente!');

    yield put(createUpdateMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const {
      title,
      description,
      location,
      date,
      banner_id,
      meetupID,
    } = payload.data;

    const meetup = Object.assign({
      title,
      description,
      location,
      date,
      banner_id,
    });

    const response = yield call(api.put, `meetups/${meetupID}`, meetup);

    toast.success('Meetup atualizada com sucesso!');

    history.push(`/details/${response.data.id}`);

    yield put(createUpdateMeetupSuccess(response.data));
  } catch (err) {
    toast.error(
      `${err} - Erro ao atualizar meetup. Confira seus dados e tente novamente!`
    );

    yield put(createUpdateMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
