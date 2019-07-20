import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdAddCircleOutline } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha Atual" />
        <Input type="password" name="password" placeholder="Nova Senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a nova senha"
        />
        <span>
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            Salvar Perfil
          </button>
        </span>
      </Form>
    </Container>
  );
}
