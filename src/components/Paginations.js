import React from 'react';

function Paginations({ postPerPage, totalPosts, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }


    return (

        <div className="paginations">
            {totalPosts === 1 ? null :
                <ul className="pagination">
                    {
                        pageNumbers.map(number => (
                            <li
                                className='page-item page-link'
                                key={number}
                                style={{ cursor: 'pointer' }}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </li>
                        ))
                    }
                </ul>}
        </div>
    );
}

export default Paginations;