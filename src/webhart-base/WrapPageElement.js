import React from 'react'
import posed, { PoseGroup } from 'react-pose'

import Layout from 'components/Layout'
import { DefaultPose } from './utils/poses'

export const WrapPageElement = ({ element, props }) => {
  const { key } = props.location
  const { pose, transitionComponent } = element.props

  const Pose = pose ? posed.div(pose) : DefaultPose

  const UsedTransition = transitionComponent || Pose

  return (
    <Layout location={props.location}>
      <PoseGroup>
        <UsedTransition key={key} {...props}>
          {element}
        </UsedTransition>
      </PoseGroup>
    </Layout>
  )
}
