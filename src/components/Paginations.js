import React from 'react';

function Paginations({ postPerPage, totalPosts, paginate, currentPage }) {

    console.log('currentPage', currentPage);

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

                            number === currentPage ?
                                <li
                                    className='page-item page-link'
                                    key={number}
                                    style={{ cursor: 'pointer', fontWeight: 'bolder', textDecoration: 'underline' }}
                                    onClick={() => paginate(number)}
                                >
                                    {number}
                                </li> :
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