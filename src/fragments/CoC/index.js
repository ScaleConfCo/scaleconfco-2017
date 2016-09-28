import React from 'react'

import styles from './index.css'

const CoC = () => {
  return (
    <div className={ styles.container }>
      <p className={ styles.description }>
       { 'We believe everyone should have a pleasant conference experience. To learn more read:' }
      </p>
      <a href="https://github.com/ScaleConfCo/code-of-conduct" className={ styles.link }>
         { "ScaleConf’s Code of Conduct" }
      </a>
    </div>
  )
}

export default CoC
