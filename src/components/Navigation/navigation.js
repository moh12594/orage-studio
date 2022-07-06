import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import Styled from './navigation.styled'
import { useMachine } from '@xstate/react'
import { useRouter } from 'next/router'
import { navigationMachine } from '../../machines/navigation'
import { dropdownVariants } from '../../utils/animations/navigations'

export default function Navigation({ categories, onFilterProjects, projectTitle }) {
  const router = useRouter()
  const [state, send] = useMachine(navigationMachine)

  React.useEffect(() => {
    send({ type: 'UPDATE_ROUTE', newRoute: router.asPath })
  }, [router.asPath])

  React.useEffect(() => {
    if (categories && categories?.length) {
      send({ type: 'SET_CATEGORIES', categories })
    }
  }, [categories])

  const handleExtendNavigation = (event) => {
    event.stopPropagation()
    return state.matches('extended')
      ? send({ type: 'CLOSE_NAVIGATION' })
      : send({ type: 'EXTEND_NAVIGATION' })
  }

  const handleLinkClick = (route) => (event) => {
    event.stopPropagation()
    send({ type: 'CLOSE_NAVIGATION' })
    return router.push(route.route)
  }

  const handleFilterClick = (filter) => (event) => {
    event.stopPropagation()
    onFilterProjects(filter.label)
    send({ type: 'CLOSE_CATEGORIES' })
    return send({ type: 'UPDATE_CATEGORY', filter })
  }

  const handleExtendCategories = (event) => {
    event.stopPropagation()
    return state.matches('extendedCategories')
      ? send({ type: 'CLOSE_CATEGORIES' })
      : send({ type: 'EXTEND_CATEGORIES' })
  }

  const currentItem = state.context.items.find((item) => {
    return state.context.currentRoute?.includes('projects') && state.context.currentRoute !== '/projects' ? 
    item.route === '/projects' : state.context.currentRoute === item.route
  })

  return (
    <Styled>
      <Link href="/">
        <Styled.logoWrapper>
          <Styled.logo
            width="200"
            height="200"
            src="/logo.png"
            alt="ORAGE studio — creative postproduction &amp; art direction"
            sizes="(max-width: 200px) 100vw, 200px"
          />
        </Styled.logoWrapper>
      </Link>
      <Styled.navigations>
        <Styled.prefix as="span">C/ORAGE/2022/</Styled.prefix>
        <Styled.links>
          {currentItem ? (
            <Styled.item
              onClick={handleExtendNavigation}
              $isSelected
            >
              <span>{currentItem.label}</span>
              <Styled.arrowDropdown fill="white" width={15} height={15} />
            </Styled.item>
          ) : null}
          <Styled.dropdown
            animate={state.matches('extended') ? 'open' : 'closed'}
            variants={dropdownVariants}
          >
            {state.matches('extended') ? (
              state.context.items.filter((route) => route.id != currentItem.id).map((route) => (
                <Styled.item
                  key={route.id} 
                  onClick={handleLinkClick(route)}
                  $isSelected={state.context.currentRoute === route.route}
                  $isExtended={state.matches('extended')}
                >
                  {route.label}
                </Styled.item>
              ))
            ) : null}
          </Styled.dropdown>
        </Styled.links>
        {state.context.filters?.length > 1 && !projectTitle ? (
          <>
            <Styled.prefix as="span">/</Styled.prefix>
            <Styled.links>
              {state.context.currentFilter ? (
                <Styled.item
                  onClick={handleExtendCategories}
                  $isSelected
                >
                  <span>{state.context.currentFilter.label}</span>
                  <Styled.arrowDropdown fill="white" width={15} height={15} />
                </Styled.item>
              ) : null}
              <Styled.dropdown
                animate={state.matches('extendedCategories') ? 'open' : 'closed'}
                variants={dropdownVariants}
              >
                {state.matches('extendedCategories') ? (
                  state.context.filters.filter((filter) => state.context.currentFilter.label !== filter.label).map((filter) => (
                    <Styled.item
                      key={filter.label} 
                      onClick={handleFilterClick(filter)}
                      $isExtended
                    >
                      {filter.label}
                    </Styled.item>
                  ))
                ) : null}
              </Styled.dropdown>
            </Styled.links>
          </>
        ) : null}
        {projectTitle ? (
          <>
            <Styled.prefix as="span">/</Styled.prefix>
            <Styled.links>
              <Styled.item $isSelected>{projectTitle}</Styled.item>
            </Styled.links>
          </>
        ) : null}
      </Styled.navigations>

    </Styled>
  )
}

Navigation.propTypes = {
  categories: PropTypes.array,
  projectTitle: PropTypes.string,
  onFilterProjects: PropTypes.func,
}

Navigation.defaultProps = {
  categories: null,
  projectTitle: null,
  onFilterProjects: () => {},
}
