import React from "react";
import { data } from '../../data/data';
import { Link } from "react-router-dom";

function Rubrics({ rubricate }) {

    const posts = data;
    const allPosts = data.length;
    const rubrics = Array.from(new Set(posts.map(post => post.rubric)));

    return (
        <aside id="categories-5" className="widget widget_categories">
            <h2 className="widget-title">Рубрики</h2>
            <ul>
                <li
                    onClick={() => rubricate('Усі рубрики')}
                    style={{ cursor: 'pointer' }}
                >
                    <Link className="nav-link" to="/" aria-current="page">
                        Усі рубрики <span>({allPosts})</span></Link>
                </li>
                {
                    rubrics.map((rubric, i) => {
                        let counter = 0
                        for (let i = 0; i < posts.length; i++) {
                            if (posts[i].rubric === rubric) {
                                counter++;
                            }
                        }
                        return (
                            <li
                                key={i}
                                onClick={() => rubricate(rubric)}
                                style={{ cursor: 'pointer' }}
                            >
                                <Link className="nav-link" to="/" aria-current="page">{rubric} <span> ({counter})</span></Link>
                            </li>
                        )
                    })
                }


            </ul >

        </aside >


    );
}

export default Rubrics;