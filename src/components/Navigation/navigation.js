import React from 'react'
import Link from 'next/link'
import Styled from './navigation.styled'

export default function Navigation() {
  return (
    <Styled>
      <Link href="/"><Styled.item>Go to home page</Styled.item></Link>
      <Link href="/about"><Styled.item>Go to About page</Styled.item></Link>
      <Link href="/projects"><Styled.item>Go to Projects page</Styled.item></Link>
    </Styled>
  )
}
