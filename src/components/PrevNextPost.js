import React from 'react';
import { data } from '../data/data';

function PrevNextPost({ postName, getPostname }) {

    const indexPost = data.map(el => el.name).indexOf(postName);
    const postPrev = data[indexPost - 1];
    const postNext = data[indexPost + 1];
    const lastPost = data.length - 1;

    return (

        <nav role="navigation"
            id="nav-below"
            className="site-navigation paging-navigation prev-next meta-nav"
            style={{ paddingTop: 0 }}
        >
            {(!postName || indexPost === 0) ? null :
                <div
                    className="nav-previous"
                    onClick={() => getPostname(postPrev.name)}
                    style={{ cursor: 'pointer', color: "#CD7B0F" }}
                >
                    <span className="meta-nav">&laquo;</span> {postPrev.name}
                </div>}
            {(!postName || indexPost === lastPost) ? null :
                <div
                    className="nav-next"
                    onClick={() => getPostname(postNext.name)}
                    style={{ cursor: 'pointer', color: "#CD7B0F" }}
                >
                    {postNext.name} <span className="meta-nav">&raquo;</span>
                </div>}
        </nav>
    );
}

export default PrevNextPost;