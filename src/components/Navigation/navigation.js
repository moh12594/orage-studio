import React from 'react'
import Link from 'next/link'
import Styled from './navigation.styled'
import Image from 'next/image'

export default function Navigation() {
  return (
    <Styled>
      <Link href="/">
        <Styled.logoWrapper>
          <Styled.logo
            width="200"
            height="200"
            src="https://i0.wp.com/www.orage.studio/wp-content/uploads/2021/12/ORAGE_LOGO_WHITE_TRANSPARENT_2021-200px.png"
            alt="ORAGE studio — creative postproduction &amp; art direction"
            sizes="(max-width: 200px) 100vw, 200px"
          />
        </Styled.logoWrapper>
      </Link>
      <Styled.navigations>
        <Link href="/"><Styled.item>HOME</Styled.item></Link>
        <Link href="/about"><Styled.item>Projects</Styled.item></Link>
        <Link href="/projects"><Styled.item>About</Styled.item></Link>
      </Styled.navigations>

    </Styled>
  )
}
