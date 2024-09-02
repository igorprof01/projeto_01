import React from 'react'
import { TableContainer, Th, Thead, Tr, Tbody } from '../styles/Table'

const Table = () => {
  return (
    <TableContainer>
        <Thead>
            <Tr>
                <Th>Título</Th>
                <Th>Autor(a)</Th>
                <Th>Editora</Th>
            </Tr>
        </Thead>
        <Tbody>

        </Tbody>
    </TableContainer>
  )
}

export default Table