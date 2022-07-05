
import { assign, createMachine } from 'xstate'

export const navigationMachine = createMachine({
  id: 'navigation-machine',
  initial: 'idle',
  context: {
    items: [
      { id: 1, label: 'home', route: '/' },
      { id: 2, label: 'Projects', route: '/projects' },
      { id: 3, label: 'About', route: '/about' },
    ],
    currentRoute: null,
    currentFilter: { label: 'all' },
    filters: [{ label: 'all' }],
  },
  states: {
    idle: {
      on: {
        UPDATE_ROUTE: {
          actions: assign({
            currentRoute: (context, event) => event.newRoute,
          })
        },
        UPDATE_CATEGORY: {
          actions: assign({
            currentFilter: (context, event) => event.filter,
          })
        },
        SET_CATEGORIES: {
          actions: assign({
            filters: (context, event) => [context.currentFilter, ...event.categories],
          })
        },
        EXTEND_NAVIGATION: {
          target: 'extended',
        },
        EXTEND_CATEGORIES: {
          target: 'extendedCategories',
        }
      }
    },
    extended: {
      on: {
        CLOSE_NAVIGATION: {
          target: 'idle',
        }
      }
    },
    extendedCategories: {
      on: {
        CLOSE_CATEGORIES: {
          target: 'idle',
        }
      }
    }
  }
})
