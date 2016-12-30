import React from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow.js'

const isSearched = (query) => (item) =>
    !query || item.title.toLowerCase().includes(query.toLowerCase());


const ContentTable = ({list, pattern}) =>

    <div>
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>Tittle</th>
                    <th>Author</th>
                    <th>Number of Comments</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.filter(isSearched(pattern)).map((item) =>
                        <TableRow item={item} key={item.objectID} />)
                }
            </tbody>
        </Table>
    </div>

export default ContentTable;