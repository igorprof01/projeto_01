import React, { useRef } from "react";
import { toast } from "react-toastify";
import { FormContainer, Label, Input, Button } from "../styles/Form";
import axios from "axios";

const Form = () => {
  const ref = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    const book = ref.current;

    if (!book.titulo.value || !book.autor.value || !book.editora.value) {
      return toast.warn("Preencha todos os campos do formulário!");
    }

    if (onUpdate) {
      await axios
        .put(`http://localhost:3333/${id}`, {
          titulo: book.titulo.value,
          autor: book.autor.value,
          editora: book.editora.value,
        })
        .then(() => toast.success("Livro Atualizado com sucesso!"));
    } else {
      await axios
        .post("http://localhost:3333", {
          titulo: book.titulo.value,
          autor: book.autor.value,
          editora: book.editora.value,
        })
        .then(() => toast.success("Cadastrado com sucesso!"))
        .catch(() => toast.error("Não foi possível cadastrar!"));
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <Label>Titulo</Label>
      <Input name="titulo" />
      <Label>Autor(a)</Label>
      <Input name="autor" />
      <Label>Editora</Label>
      <Input name="editora" />
      <Button type="submit">ADICIONAR</Button>
    </FormContainer>
  );
};

export default Form;
