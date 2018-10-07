import React from 'react'

import Layout from 'components/Layout'

export const WrapPageElement = ({ element, props }) => {
  return <Layout location={props.location}>{element}</Layout>
}
