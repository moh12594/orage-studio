import { assign, createMachine } from 'xstate'

function computeNextProject(context, event) {
  if (event?.index) {
    return {
      selectedIndex: event.index,
      actualProject: context.projects[event.index],
    }
  }
  const actualIndex = context.projects.findIndex((project) => project.sys.id === context.actualProject.sys.id)
  if (actualIndex === context.projects.length - 1) {
    return {
      selectedIndex: 0,
      actualProject: context.projects[0],
    }
  }
  return {
    selectedIndex: actualIndex + 1,
    actualProject: context.projects[actualIndex + 1],
  }
}

export const sliderMachine = createMachine({
  id: 'slider',
  initial: 'idle',
  context: {
    projects: null,
    actualProject: null,
    selectedIndex: 0,
  },
  states: {
    idle: {
      on: {
        SET_PROJECTS: {
          target: 'loaded',
          actions: assign({
            projects: (_, event) => event.projects,
            actualProject: (_, event) => event.projects[0],
          }),
        }
      }
    },
    loaded: {
      after: {
        30000: {
          target: 'settingNextProject'
        }
      },
      on: {
        SET_ACTUAL_PROJECT: {
          target: 'settingNextProject',
        }
      }
    },
    settingNextProject: {
      always: {
        actions: assign(computeNextProject),
        target: 'loaded',
      }
    },
  }
})
