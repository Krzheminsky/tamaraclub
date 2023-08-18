import './App.css';
import React, { useState, useEffect } from 'react';
import { data } from './data/data';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './pages/header/Header';
import Posts from './pages/posts/Posts';
import Rubrics from './pages/rubrics/Rubrics';
import Entries from './pages/entries/Entries';
import Footer from './pages/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import PublicEvents from './pages/public-events/PublicEvents';
import About from './pages/about/About';
import Collections from './pages/collections/Collections';


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [currentRubric, setCurrentRubric] = useState('Усі рубрики');
  const [postName, setPostName] = useState('');

  useEffect(() => {
    let rubricPosts = [];
    let onePost = [];
    if (!postName) {

      if (currentRubric === 'Усі рубрики') {
        setPosts(data);
        setCurrentPage(1);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].rubric === currentRubric) {
            rubricPosts.push(data[i]);
          }
        }
        setPosts(rubricPosts);
        setCurrentPage(1);
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === postName) {
          onePost.push(data[i])

        }
      }
      setPosts(onePost);
      setCurrentPage(1);
    }


    // setPostName('');
    setLoading(false);
  }, [currentRubric, postName])

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);
  const rubricate = rubric => { setCurrentRubric(rubric); setPostName(''); }
  const lastPage = Math.ceil(posts.length / postPerPage);
  const getPostname = post => setPostName(post)

  return (
    <Container fluid>
      <div id="containerForLeftBk">
        <div id="containerForRightBk">

          <div id="page" className="hfeed site">
            <div id="container">
              <Row>
                <Col>
                  <Header rubricate={rubricate} />
                </Col>
              </Row>
              <Row>
                <Col lg={9}>
                  <Routes >

                    <Route exact path="/" element={<Posts
                      posts={currentPost}
                      loading={loading}
                      currentRubric={currentRubric}
                      currentPage={currentPage}
                      lastPage={lastPage}
                      prevPage={prevPage}
                      nextPage={nextPage}
                      postPerPage={postPerPage}
                      totalPosts={posts.length}
                      paginate={paginate}
                      rubricate={rubricate}
                      getPostname={getPostname}
                      postName={postName}
                    />}
                    />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/collections" element={<Collections />} />
                    <Route exact path="/public" element={<PublicEvents />} />
                  </Routes >
                </Col>
                <Col lg={3}>
                  <Rubrics
                    rubricate={rubricate}
                  />
                  <Entries
                    getPostname={getPostname}
                    rubricate={rubricate}
                  />
                </Col>
              </Row>

            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container >
  );
}

export default App;
