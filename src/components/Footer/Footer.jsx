import React from 'react'

import useStyles from './styles'

const Footer = () => {
  const classes = useStyles();

  return (
    
    <div className={classes.footer}>
    <div className={classes.picture}>
      <div className={classes.contact}>
      <div className={classes.container}>
        <p className={classes.quote}><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Filip Ruszala, eCommerce app</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
