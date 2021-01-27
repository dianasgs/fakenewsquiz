import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
import Helmet from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'pt-BR' }}>
          <title>Quiz Fake News - Imersão React v2 Alura</title>
          <meta name="description" content="Quiz sobre Fake News criado por Diana de Sales durante a Imersão React e Next.js v2 da Alura"/>
          <meta property="og:image" content={db.bg}/>
      </Helmet> 
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
