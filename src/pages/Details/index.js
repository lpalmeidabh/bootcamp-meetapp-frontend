import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {
  MdModeEdit,
  MdDeleteForever,
  MdLocationOn,
  MdToday,
} from 'react-icons/md';

import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container, Meetup, Button } from './styles';

import history from '~/services/history';

export default function Details({ match }) {
  const [meetupID] = useState(match.params.id);
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${meetupID}/details`);

      const data = {
        ...response.data,
        url: response.data.banner.url,
        formattedDate: format(
          parseISO(response.data.date),
          "d 'de' MMMM', às' HH 'horas'",
          { locale: pt }
        ),
      };
      setMeetup(data);
    }
    loadMeetup();
  }, [meetupID]);

  async function handleDeleteMeetup() {
    try {
      await api.delete(`meetups/${meetupID}`);
      toast.success('Meetup cancelada com sucesso');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao cancelar meetup. Tente novamente');
    }
  }

  return (
    <Container>
      <Meetup>
        <header>
          <h1>{meetup.title}</h1>
          {!meetup.past ? (
            <aside>
              <Button
                color="#4DBAF9"
                type="button"
                onClick={() => history.push(`/addedit/${meetup.id}`)}
              >
                <MdModeEdit size={20} color="#fff" /> Editar
              </Button>
              <Button
                color="#D44059"
                type="button"
                onClick={handleDeleteMeetup}
              >
                <MdDeleteForever size={20} color="#fff" /> Cancelar
              </Button>
            </aside>
          ) : (
            <span>
              <strong>Este evento já terminou</strong>
            </span>
          )}
        </header>
        <img src={meetup.url} alt={meetup.title} />
        <span>{meetup.description}</span>
        <footer>
          <span>
            <MdToday size={20} color="#fff" /> {meetup.formattedDate}
          </span>
          <span>
            <MdLocationOn size={20} color="#fff" />
            {meetup.location}
          </span>
        </footer>
      </Meetup>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

Details.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
