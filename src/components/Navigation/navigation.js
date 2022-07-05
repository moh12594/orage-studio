import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import Styled from './navigation.styled'
import { useMachine } from '@xstate/react'
import { useRouter } from 'next/router'
import { navigationMachine } from '../../machines/navigation'

export default function Navigation({ categories }) {
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


  const handleLinkClick = (route) => (event) => {
    event.stopPropagation()
    if (state.context.currentRoute === route.route && state.matches('extended')) {
      send({ type: 'CLOSE_NAVIGATION' })
      return
    } else if (state.context.currentRoute === route.route) {
      send({ type: 'EXTEND_NAVIGATION' })
      return
    }
  
    send({ type: 'CLOSE_NAVIGATION' })
    return router.push(route.route)
  }

  const handleFilterClick = (filter) => (event) => {
    event.stopPropagation()
    if (state.context.currentFilter.label === filter.label && state.matches('extendedCategories')) {
      send({ type: 'CLOSE_CATEGORIES' })
      return
    } else if (state.context.currentFilter.label === filter.label ) {
      send({ type: 'EXTEND_CATEGORIES' })
      return
    }
  
    send({ type: 'CLOSE_CATEGORIES' })
    return send({ type: 'UPDATE_CATEGORY', filter })
  }

  const currentItem = state.context.items.find((item) => state.context.currentRoute === item.route)

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
              onClick={handleLinkClick(currentItem)}
              $isSelected
            >
              {currentItem.label}
            </Styled.item>
          ) : null}
          <Styled.dropdown>
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
        <Styled.prefix as="span">/</Styled.prefix>
        {state.context.filters ? (
          <Styled.links>
            {state.context.currentFilter ? (
              <Styled.item
                onClick={handleFilterClick(state.context.currentFilter)}
                $isSelected
              >
                {state.context.currentFilter.label}
              </Styled.item>
            ) : null}
            <Styled.dropdown>
              {state.matches('extendedCategories') ? (
                state.context.filters.filter((filter) => state.context.currentFilter.label !== filter.label).map((filter) => (
                  <Styled.item
                    key={filter.label} 
                    onClick={handleFilterClick(filter.label)}
                    $isExtended
                  >
                    {filter.label}
                  </Styled.item>
                ))
              ) : null}
            </Styled.dropdown>
          </Styled.links>
        ) : null}
      </Styled.navigations>

    </Styled>
  )
}

Navigation.propTypes = {
  categories: PropTypes.array,
}