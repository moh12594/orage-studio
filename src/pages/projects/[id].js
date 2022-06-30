import React from 'react'
import Navigation from '../../components/Navigation/navigation'

export async function getServerSideProps(context) {
  return {
    props: {
      projectId: context.params.id,
    },
  }
}

const MenuPage = (props) => (
  <>
    <Navigation />
    <div>Hello project with ID: {props.projectId}</div>
  </>
)

export default MenuPage
