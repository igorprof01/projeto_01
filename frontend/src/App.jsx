import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import Table from './components/Table';
import { Container } from './styles/Container';



const App = () => {

  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    try{
      const response = await axios.get("http://localhost:3333");
      setUsers(response.data.sort((a, b)=>(a.titulo > b.titulo ? 1 : -1)))
    }catch(error){
      console.log(error)
    }
  }

  React.useEffect(() => {
    getUsers();
  }, [setUsers])

  return (
    <Container>
      <Form/>
      <Table users={users}/>
    </Container>
  )
}

export default App;