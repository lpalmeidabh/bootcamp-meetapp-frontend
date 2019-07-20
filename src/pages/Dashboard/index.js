import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import history from '~/services/history';

import {
  MdAddCircleOutline,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('owner', {
        params: { page },
      });

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date),
            "d 'de' MMMM', às' HH 'horas'",
            {
              locale: pt,
            }
          ),
        };
      });

      setMeetups(data);
    }
    loadMeetups();
  }, [page]);

  // function handlePrevPage() {
  //   page > 1 ? setPage((page -= 1)) : page;
  // }

  // function handleNextPage() {
  //   setPage((page += 1));
  // }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="button" onClick={() => history.push('/AddEdit')}>
          <MdAddCircleOutline size={20} color="#fff" /> Novo Meetup
        </button>
      </header>
      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id} past={meetup.past}>
            <strong>{meetup.title}</strong>
            <aside>
              <span>{meetup.formattedDate}</span>
              <Link to={`/details/${meetup.id}`}>
                <MdChevronRight size={24} color="#FFF" />
              </Link>
            </aside>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
