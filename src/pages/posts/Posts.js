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
    paginate }) {

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
                        currentRubric === 'Усі рубрики' ? null :
                            <h1 className="page-title">Рубрика:
                                <span> {currentRubric}</span>
                            </h1>
                    }
                    {
                        posts.map((post, i) => (
                            <article className="post" key={i}>
                                <div className="entry-wrapper">
                                    <div className="entry-wrapper-inner">
                                        <header className="entry-header">
                                            <h1 className="entry-title">{post.name}</h1>
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
                                            <span className="cat-links"> Рубрика: {post.rubric} </span>
                                        </footer>
                                    </div>
                                </div>
                            </article>
                        ))
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