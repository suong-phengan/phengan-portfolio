import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>PhengAn | Portfolio</title>
        <meta name="description" content="I&#39;m a chatbot - backend developer who is familiar with backbone infrastructure design and chatbot development" />
        <link rel="icon" href="/penguin.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
