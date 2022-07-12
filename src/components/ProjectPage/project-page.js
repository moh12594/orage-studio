import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'
import { motion } from 'framer-motion'
import Typography from '../Typography/typography'
import Navigation from '../Navigation/navigation'
import Heading from '../Heading/heading'
import Styled from './project-page.styled'
import Image from 'next/image'

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
            {project.video?.url ? (
              <Styled.video
                src={project.video.url}
                poster={project.cover.url}
                autoPlay
                muted
                loop
              />
            ) : (
              <Styled.video
                src={project.cover.url}
                alt={project.title}
                as="img"
                width={500}
                height={500}
              />
            )}
            <Heading>{project.title}</Heading>
            <Typography>{project.categories?.label}</Typography>
          </Styled.videoContainer>
          <Styled.credits>
            {project.credits.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </Styled.credits>
          {project.imagesCollection?.items?.length > 0 ? <Styled.showMore>Making Of</Styled.showMore> : null}
        </Styled.details>
        {project.imagesCollection.items?.length > 0 ? (
          <Styled.makingOf>
            {project.imagesCollection.items.map((media) => (
              <motion.div
                key={media.url}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {media.contentType.indexOf('video') !== -1 ? (
                  <video
                    src={media.url}
                    height={300}
                    width={600}
                    alt={media.title}
                    controls
                    muted
                  />
                ) : (
                  <Image
                    src={media.url}
                    height={300}
                    width={600}
                    alt={media.title}
                    objectFit="fill"
                  />
                )}
              </motion.div>
            ))}
          </Styled.makingOf>
        ) : null}
      </Styled>
    </>
  ) : null
}

ProjectPage.propTypes = {
  project: PropTypes.object,
}
