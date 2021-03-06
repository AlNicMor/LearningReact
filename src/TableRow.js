import React from 'react';

const ContentTableRow = ({item}) =>

    <tr>
        <td>
            <a href={item.url}>{item.title}</a>
        </td>
        <td>{item.author}</td>
        <td>{item.num_comments}</td>
        <td>{item.points}</td>
    </tr>

export default ContentTableRow;