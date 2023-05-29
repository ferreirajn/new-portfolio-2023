import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/home/About'
import styled from 'styled-components'
import { colors } from '../components/ui/tokens'
import FirstSection from '../components/home/FirstSection/FirstSection'

const Home: NextPage = () => {
  return (
    <Page>
      {/* <Header />
    <Nav /> */}
      <FirstSection />
      <About />
      {/* <Experience />
    <Portfolio /> 
    <Testimonials />
    <Contact />
    <Footer /> */}
    </Page>
  )
}

export default Home

const Page = styled.div`
  font-family: "Poppins", sans-serif;
  background: ${colors.darkGrayBg}};
  color: ${colors.white};
  line-height: 1.7;
  background-image: url('public/Images/bg-texture.png');
  padding-inline: 8em;
`
