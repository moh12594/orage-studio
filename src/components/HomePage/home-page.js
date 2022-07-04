/* eslint-disable react/prop-types */
import { useMachine } from '@xstate/react'
import Head from 'next/head'
import React from 'react'
import { sliderMachine } from '../../machines/slider'
import Heading from '../Heading/heading'
import Navigation from '../Navigation/navigation'
import Typography from '../Typography/typography'
import VideoPlayer from '../VideoPlayer/video-player'
import Styled from './home-page.styled'

export default function HomePage({ projects, error }) {
  const [state, send] = useMachine(sliderMachine)
  const [progessValue, setProgressValue] = React.useState(0)

  React.useEffect(() => {
    if (projects) {
      send({ type: 'SET_PROJECTS', projects: projects.projectCollection.items })
    }
  }, [projects])

  React.useEffect(() => {
    setProgressValue(0)
    const interval = setInterval(() => {
      if (state.context.actualProject) {
        setProgressValue((previous) => previous + 3.33)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [state.context.actualProject])

  const handleProgressClick = (index) => (event) => {
    event.stopPropagation()
    send({ type: 'SET_ACTUAL_PROJECT', index })
  }

  return (
    <Styled>
      <Head>
          <title>Orage studio - home page</title>
          <meta name="description" content="Orage studio" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {state.context.projects ? (
        <div>
          {state.context.actualProject ? (
          <div key={state.context.actualProject.sys.id}>
            <VideoPlayer
              id={state.context.actualProject.sys.id}
              src={state.context.actualProject.video.url}
            />
            <Styled.detailsContainer>
              <Heading>{state.context.actualProject.video.title}</Heading>
              <Typography>{state.context.actualProject.video.description}</Typography>
              <Styled.details>
                {state.context.actualProject.details.split('\n').map((line, index) => (
                  <span key={index}>{line}<br /></span>
                ))}
              </Styled.details>
            </Styled.detailsContainer>
          </div>
          ) : null}
          {state.context.projects.length > 0 ? (
            <Styled.progressBars>
              {state.context.projects.map((project, index) => (
                <Styled.progressBar
                  key={project.sys.id}
                  onClick={handleProgressClick(index)}
                  role="button"
                  $isSelected={index === state.context.selectedIndex}
                  $progressValue={progessValue}
                />
              ))}
            </Styled.progressBars>
          ) : null }
        </div>
      ) : <div>{error}</div>}
    </Styled>
  )
}
