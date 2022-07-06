import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'
import { motion } from 'framer-motion'
import Typography from '../Typography/typography'
import Navigation from '../Navigation/navigation'
import Heading from '../Heading/heading'
import Image from 'next/image'
import Styled from './project-page.styled'

export default function ProjectPage({
  project,
}) {
  return project ? (
    <>
    <Head>
        <title>{project?.title ? `Orage studio - ${project.title}` : 'Orage studio - works'}</title>
        <meta name="description" content={project ? project.credits : ''} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <Navigation projectTitle={project.title} />
      <Styled>
        <Styled.details>
          <Styled.videoContainer>
            <Styled.video
              src={project.video.url}
              autoPlay
              muted
              loop
            />
            <Heading>{project.title}</Heading>
            <Typography>{project.categories?.label}</Typography>
          </Styled.videoContainer>
          <Styled.credits>
            {project.credits.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </Styled.credits>
          <Styled.showMore>Making Of</Styled.showMore>
        </Styled.details>
        <Styled.makingOf>
          {project.imagesCollection.items.map((image) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image.url}
                height={300}
                width={600}
                alt={image.title}
                objectFit="fill"
              />
            </motion.div>
          ))}
        </Styled.makingOf>
      </Styled>
    </>
  ) : null
}

ProjectPage.propTypes = {
  project: PropTypes.object,
}
