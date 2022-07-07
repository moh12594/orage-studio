/* eslint-disable react/prop-types */
import { useMachine } from '@xstate/react'
import Head from 'next/head'
import React from 'react'
import Styled from './about-page.styled'
import Heading from '../Heading/heading'
import Navigation from '../Navigation/navigation'
import Typography from '../Typography/typography'

export default function AboutPage() {
  return (
    <Styled>
      <Head>
          <title>Orage studio - About</title>
          <meta name="description" content="Out there, in the middle of nowhere, we are secretly producing CGI and 31 motion graphics, VIX, motion desion, as well as editino, directing and producing video clips and adverts." />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <Styled.wrapper>
        <Styled.about>
          <Styled.paragraph>Out there, in the <Styled.bold>middle of nowhere</Styled.bold>, we are secretly producing <Styled.bold>CGI and 31 motion graphics, VIX, motion desion,</Styled.bold> as well as <Styled.bold>editing</Styled.bold>, directing and producing video clips and adverts.</Styled.paragraph>

          <Styled.paragraph>If you wanted to find us there, you'd have to <Styled.bold>build a raft</Styled.bold>, walk across a burning forest, dive into a lunar crater and cross Greenland by dog sled for, altamatively. you could just find us at our other base, <Styled.bold>in the centre of Paris</Styled.bold>, and we can do all that for you in post-production.</Styled.paragraph>

          <Styled.separator />

          <Styled.paragraph>ORAGE team is composed of <Styled.bold>5 founder members</Styled.bold>.<br />Graduating from the same school in Nantes, we came out friends and above all, passionate about video. Driven bu a common desire to create our own universe, we naturally joined forces. <Styled.bold>Together, we form a creative team</Styled.bold>, in which each of us is specialized in his field</Styled.paragraph>

          <Styled.paragraph><Styled.bold>And that's not all.</Styled.bold> <br />Today, our ambition is to direct & produce projects through which we can express our creativity and technical knowledge.</Styled.paragraph>
        </Styled.about>

        <Styled.links>
          <Styled.contact>
            <Styled.heading>Adress.</Styled.heading>
            <Styled.info>16 rue Meslay. Paris. 75003</Styled.info>
          </Styled.contact>
          <Styled.contact>
            <Styled.heading>Phone.</Styled.heading>
            <Styled.info>06 34 75 71 42</Styled.info>
          </Styled.contact>
          <Styled.contact>
            <Styled.heading>Mail.</Styled.heading>
            <Styled.info>contact@orage.studio</Styled.info>
          </Styled.contact>

          <Styled.separator />
        </Styled.links>

      </Styled.wrapper>
    </Styled>
  )
}
