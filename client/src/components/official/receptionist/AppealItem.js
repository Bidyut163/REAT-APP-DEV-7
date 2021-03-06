import React from 'react';
import { Link } from 'react-router-dom';

const AppealItem = ({
    appeal: { id, first_name, last_name, res_first_name, res_last_name },
}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${first_name} ${last_name}`}</td>
            <td>{`${res_first_name} ${res_last_name}`}</td>
            <td>
                <Link
                    to={`/official/receptionist/appeals/${id}`}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-hurricane"></i> view
                </Link>
            </td>
            <td>
                <Link
                    to={`/official/receptionist/appeals/${id}/upload`}
                    className="btn btn-sm btn-info"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-upload"></i> upload
                </Link>
            </td>
            <td>
                <Link
                    to={`/official/receptionist/appeals/${id}/forward`}
                    className="btn btn-sm btn-success"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-angles-right"></i> Forward
                </Link>
            </td>
        </tr>
    );
};

export default AppealItem;
