import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const isSearched = (query) => (item) =>
    !query || item.title.toLowerCase().includes(query.toLowerCase());


const ContentTable = ({list, pattern}) =>

    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Tittle</TableHeaderColumn>
                    <TableHeaderColumn>Author</TableHeaderColumn>
                    <TableHeaderColumn>Number of Comments</TableHeaderColumn>
                    <TableHeaderColumn>Points</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    list.filter(isSearched(pattern)).map((item) =>
                        <TableRow>
                            <TableRowColumn>
                                <a href={item.url}>{item.title}</a>
                            </TableRowColumn>
                            <TableRowColumn>{item.author}</TableRowColumn>
                            <TableRowColumn>{item.num_comments}</TableRowColumn>
                            <TableRowColumn>{item.points}</TableRowColumn>
                        </TableRow>)
                }
            </TableBody>
        </Table>
    </div>

export default ContentTable;