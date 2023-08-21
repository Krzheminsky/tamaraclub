import React from "react";
import { data } from '../../data/data';
import { Link } from "react-router-dom";

function Entries({ getPostname, setLess }) {
    let entries = []
    for (let i = 0; i < 10; i++) {
        entries.push(data[i]);
    }



    return (
        <aside id="categories-5" className="widget widget_categories">
            <h2 className="widget-title">Свіжі записи</h2>
            <ul>

                {
                    entries.map((el, i) => (

                        <li
                            key={i}
                            style={{ cursor: 'pointer' }}
                            onClick={() => { getPostname(el.name); setLess(true) }}
                        >
                            <Link className="nav-link" to="/" aria-current="page">{el.name} </Link>
                        </li>

                    ))}


            </ul >

        </aside >


    );
}

export default Entries;