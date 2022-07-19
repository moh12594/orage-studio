import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'
import { motion } from 'framer-motion'
import Typography from '../Typography/typography'
import Navigation from '../Navigation/navigation'
import Heading from '../Heading/heading'
import Styled from './project-page.styled'
import Image from 'next/image'
import Play from '../Icons/play'

export default function ProjectPage({
  project,
}) {
  const videoRef = React.useRef(null)
  const [videoHasBeenPlayed, setVideoHasBeenPlayed] = React.useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setVideoHasBeenPlayed(true)
  }

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
            <Styled.still>
              {project.video?.url ? (
                <>
                  {videoHasBeenPlayed ? null : (
                    <Play
                      width="100px"
                      height="100px"
                      onClick={handlePlay}
                      role="button"
                    />
                  )}
                  <Styled.video
                    ref={videoRef}
                    src={project.video.url}
                    poster={project.cover.url}
                    controls={videoHasBeenPlayed}
                  />
                </>
              ) : (
                <Styled.video
                  src={project.cover.url}
                  alt={project.title}
                  as="img"
                  width={500}
                  height={500}
                />
              )}
            </Styled.still>
            <Heading>{project.title}</Heading>
            <Typography>{project.categories?.label}</Typography>
          </Styled.videoContainer>
          <Styled.credits>
            {project.credits.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </Styled.credits>
          {project.imagesCollection?.items?.length > 0 ? (
            <Styled.showMore>
              Making Of
              <Styled.arrowMore fill="white" />
            </Styled.showMore>
          ) : null}
        </Styled.details>
        {project.imagesCollection.items?.length > 0 ? (
          <Styled.makingOf>
            {project.imagesCollection.items.map((media) => (
              <motion.div
                key={media.url}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ margin: '0 auto' }}
              >
                {media.contentType.indexOf('video') !== -1 ? (
                  <video
                    src={media.url}
                    height={300}
                    width={600}
                    alt={media.title}
                    autoPlay
                    muted
                  />
                ) : (
                  <Image
                    src={media.url}
                    height={300}
                    width={300}
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
