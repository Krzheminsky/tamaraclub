import React from 'react';

function PrevNext({ currentPage, lastPage, prevPage, nextPage }) {



    return (
        <nav role="navigation" id="nav-below" className="site-navigation paging-navigation prev-next meta-nav">
            {currentPage === 1 ? null :
                <div
                    className="nav-previous"
                    onClick={prevPage}
                    style={{ cursor: 'pointer', color: "#CD7B0F" }}
                >
                    <span className="meta-nav">&laquo;</span> Попередні записи
                </div>}
            {currentPage === lastPage ? null :
                <div
                    className="nav-next"
                    onClick={nextPage}
                    style={{ cursor: 'pointer', color: "#CD7B0F" }}
                >
                    Наступні записи <span className="meta-nav">&raquo;</span>
                </div>}
        </nav>
    );
}

export default PrevNext;