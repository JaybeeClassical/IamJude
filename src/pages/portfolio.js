import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import Subscribe from '../components/mailChimpEmail';


function Portfolio() {
  return (
    <div className="container">
      <Link
        className="btn btn-outline-light rounded-pill mx-5 my-3"
        to="/">
        Back to Home
      </Link>
      <h4 className="text-center text-white">Hello, here are few of my projects </h4>
      <p className="text-center" > The rest of the projects can be found in my github
        <a href="https://github.com/jaybeeClasical"> repo</a>, have some in private repo too
      </p>
      <div className="row" style={{ marginTop: '3rem', justifyContent: 'space-evenly' }}>
        <Card style={{ width: '18rem', marginBottom: '1rem' }} className="text-center">
          <Card.Body>
            <Card.Title>Hr Work</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">React and React hooks, Contentful CMS, CSS (SASS), </Card.Subtitle>
            <Card.Text className="text-dark">
              HR Work is an advisory firm with strong
                competence and experience in providing Human
                Resources Retainership
              Services to small or medium sized organisations.
              </Card.Text>
            <Card.Link href="https://hrwork.ng" className="btn btn-outline fa fa-github"> Github</Card.Link>
            <Card.Link href="https://hrwork.ng" className="btn btn-outline fa fa-globe"> Link</Card.Link>
          </Card.Body>
        </Card>

        {/* Another Card 2 */}
        <Card style={{ width: '18rem', marginBottom: '1rem' }} className="text-center">
          <Card.Body>
            <Card.Title>AECM</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Svelte, CSS</Card.Subtitle>
            <Card.Text className="text-dark">
              AECM is a platform created to organise and channel
              the potentials of the African continent
              specifically in the entertainment sector
              for global accessibility
              </Card.Text>
            <Card.Link href="http://www.aecm.network/" className="btn btn-outline fa fa-github"> Github</Card.Link>
            <Card.Link href="http://www.aecm.network/" className="btn btn-outline fa fa-globe"> Link</Card.Link>
          </Card.Body>
        </Card>

        {/* Another Card 3 */}
        <Card style={{ width: '18rem', marginBottom: '1rem' }} className="text-center">
          <Card.Body>
            <Card.Title>Dynamic Quiz App</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">JS, CSS, HTML</Card.Subtitle>
            <Card.Text className="text-dark">
              This is quiz application built with vanilla JavaScript, the scores are stored on the LocalStorage
            </Card.Text>
            <Card.Link href="https://github.com/JaybeeClassical/Advanced-Quiz-Test" className="btn btn-outline fa fa-github"> Github</Card.Link>
            <Card.Link href="https://advance-quiz.netlify.com/" className="btn btn-outline fa fa-globe"> Link</Card.Link>
          </Card.Body>
        </Card>

        {/* Another Card 4 */}
        <Card style={{ width: '18rem', marginBottom: '1rem' }} className="text-center">
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">JS, CSS, HTML, Dark sky api</Card.Subtitle>
            <Card.Text className="text-dark">
              A random Weather application to say the Weather condition of the user at that point. still updating to make it
              a big better one
            </Card.Text>
            <Card.Link href="https://github.com/JaybeeClassical/Weather" className="btn btn-outline fa fa-github"> Github</Card.Link>
            <Card.Link href="https://lagosweather.netlify.com/" className="btn btn-outline fa fa-globe"> Link</Card.Link>
          </Card.Body>
        </Card>

        {/* Another Card 5*/}
        <Card style={{ width: '18rem', marginBottom: '1rem' }} className="text-center">
          <Card.Body>
            <Card.Title>React Portfolio</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">React, Material Design Lite (MDL), CSS</Card.Subtitle>
            <Card.Text className="text-dark">
              A Quick simple React Portfolio Layout with less Content
            </Card.Text>
            <Card.Link href="https://github.com/JaybeeClassical/Portfolio" className="btn btn-outline fa fa-github"> Github</Card.Link>
            <Card.Link href="https://react-portfo.netlify.com/" className="btn btn-outline fa fa-globe"> Link</Card.Link>
          </Card.Body>
        </Card>

        {/* Another Card 6 */}
        {/* <Card style={{ width: '18rem', marginBottom: '1rem' }} className="text-center">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text className="text-dark">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://google.com" className="btn btn-outline fa fa-github"> Github</Card.Link>
              <Card.Link href="https://google.com" className="btn btn-outline fa fa-globe"> Link</Card.Link>
            </Card.Body>
          </Card> */}

        {/* Another Card 7 */}
        {/* <Card style={{ width: '18rem', marginBottom: '1rem' }} className="text-center">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text className="text-dark">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="https://google.com" className="btn btn-outline fa fa-github"> Github</Card.Link>
            <Card.Link href="https://google.com" className="btn btn-outline fa fa-globe"> Link</Card.Link>
          </Card.Body>
        </Card> */}
        <Subscribe />
      </div>
    </div >
  )
}

export default Portfolio;