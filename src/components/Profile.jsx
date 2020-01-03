import React from 'react'
import './Profile.scss'
import { fadeInLeft, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

// const styles = {
//   fadeInLeft: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
//   },
//   fadeInDown: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
//   }
// }

export default () => {
  return (
    <StyleRoot>
    <div className="profile">
      <img src={require('../blob-profile.svg')} alt="blob-profile"></img>
      <div className="container"></div>
    </div>
    </StyleRoot>
  )
}