import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt></FaGithubAlt>
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Add repositório"></input>

        <SubmitButton disabled>
          <FaPlus color="#FFF" size={14}></FaPlus>
        </SubmitButton>
      </Form>
    </Container>
  );
}
