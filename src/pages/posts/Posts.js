import React, { useEffect } from "react";
import PrevNext from "../../components/PrevNext";
import Paginations from "../../components/Paginations";

function Posts({
    posts,
    loading,
    currentRubric,
    currentPage,
    lastPage,
    prevPage,
    nextPage,
    postPerPage,
    totalPosts,
    paginate,
    rubricate,
    getPostname,
    postName }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [posts])

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (

        <div id="main">
            <div id="primary" className="site-content">
                <div id="content" role="main">
                    {
                        (currentRubric === 'Усі рубрики' || postName) ? null :
                            <h1 className="page-title">Рубрика:
                                <span> {currentRubric}</span>
                            </h1>
                    }
                    {
                        posts.map((post, i) => {
                            return (
                                <article className="post" key={i}>
                                    <div className="entry-wrapper">
                                        <div className="entry-wrapper-inner">
                                            <header className="entry-header">
                                                <h1
                                                    onClick={() => getPostname(post.name)}
                                                    style={{ cursor: 'pointer' }}
                                                    className="entry-title">{post.name}</h1>
                                            </header>
                                            <div className="entry-content">
                                                <img
                                                    className="alignright size-full"
                                                    src={require('../../images/' + post.image)}
                                                    alt={post.rubric} width="35%"
                                                    sizes="(max-width: 555px) 100vw, 555px" />
                                                <div dangerouslySetInnerHTML={{ __html: post.post }} />

                                            </div>
                                            <footer className="entry-meta">
                                                <div className="cat-links"

                                                > Рубрика: <span
                                                    onClick={() => { rubricate(post.rubric); window.scrollTo(0, 0); }}
                                                    style={{ cursor: 'pointer', color: "#CD7B0F" }}
                                                >{post.rubric}</span> </div>
                                            </footer>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
            <div id="main">
                <div id="primary" className="site-content">
                    <div id="content" role="main">
                        <PrevNext
                            currentPage={currentPage}
                            lastPage={lastPage}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
                        <Paginations
                            postPerPage={postPerPage}
                            totalPosts={totalPosts}
                            paginate={paginate}

                        />
                    </div>
                </div>
            </div>




        </div>


    );
}

export default Posts;