import React from "react";
import { data } from '../../data/data';
// import { Link } from "react-router-dom";

function Entries({ getPostname, setLess }) {
    let entries = []
    for (let i = 0; i < 10; i++) {
        entries.push(data[i]);
    }

    // const posts = data;
    // const allPosts = data.length;

    // const entries = Array.from(new Set(posts.map(post => post.rubric)));

    return (
        <aside id="categories-5" className="widget widget_categories">
            <h2 className="widget-title">Свіжі записи</h2>
            <ul>

                {
                    entries.map((el, i) => (

                        <li
                            key={i}
                            style={{ cursor: 'pointer' }}
                        >
                            <div
                                onClick={() => { getPostname(el.name); setLess(true) }}
                                className="nav-link">{el.name}
                            </div>
                        </li>

                    ))}


            </ul >

        </aside >


    );
}

export default Entries;