import React from 'react'
import Link from 'next/link'
import Styled from './navigation.styled'

export default function Navigation() {
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
        <Styled.item as="span">C/ORAGE/2022/</Styled.item>
        <Link href="/"><Styled.item>HOME</Styled.item></Link>
        {/* <Link href="/about"><Styled.item>Projects</Styled.item></Link>
        <Link href="/projects"><Styled.item>About</Styled.item></Link> */}
      </Styled.navigations>

    </Styled>
  )
}
