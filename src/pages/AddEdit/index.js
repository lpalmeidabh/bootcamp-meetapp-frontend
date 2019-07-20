import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { registerLocale, setDefaultLocale } from 'react-datepicker';

import { parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt-BR';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import BannerInput from './BannerInput';

import { Container, DTPicker } from './styles';

import api from '~/services/api';

export default function AddEdit({ match }) {
  const dispatch = useDispatch();

  registerLocale('pt', pt);
  setDefaultLocale('pt');

  const [meetupID] = useState(match.params.id);
  const [isUpdate, setIsUpdate] = useState(false);
  const [meetup, setMeetup] = useState({
    title: '',
    banner_id: 0,
    description: '',
    date: new Date(),
    location: '',
  });

  const [date, setDate] = useState(new Date());

  function handleSubmit(data) {
    // console.tron.error({ ...data, date, meetupID, isUpdate });
    if (isUpdate) {
      dispatch(updateMeetupRequest({ ...data, date, meetupID }));
    } else {
      dispatch(createMeetupRequest({ ...data, date }));
    }
  }

  function handleDateTimeChange(value) {
    setDate(value);
  }

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${meetupID}/details`);

      const data = {
        ...response.data,
        url: response.data.banner.url,
      };
      setIsUpdate(true);
      setDate(parseISO(data.date));
      setMeetup(data);
    }

    loadMeetup();
  }, [meetupID]);

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput image={meetup.url} imageID={meetup.banner_id} />
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" multiline />

        <DTPicker
          locale="pt"
          value={date}
          selected={date}
          onChange={handleDateTimeChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="dd 'de' MMMM 'de' yyyy, h:mm aa"
          timeCaption="Hora"
        />
        <Input name="location" placeholder="Local do Meetup" />
        <span>
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />{' '}
            {isUpdate ? 'Atualizar' : 'Adicionar'}
          </button>
        </span>
      </Form>
    </Container>
  );
}

AddEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
