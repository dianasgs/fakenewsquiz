import styled from 'styled-components'
import db from "../db.json"
import Widget from "../src/components/Widgets"
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Helmet from 'react-helmet'


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    
    <QuizBackground backgroundImage={db.bg}>
      <Helmet htmlAttributes={{ lang: 'pt-BR' }}>
        <title>Quiz Fake News - Imersão React v2 Alura</title>
        <meta name="description" content="Quiz sobre Fake News criado por Diana de Sales durante a Imersão React e Next.js v2 da Alura"/>
        <meta property="og:image" content={db.bg} ></meta>
      </Helmet> 
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dianasgs/fakenewsquiz" />
    </QuizBackground>
  );
}
