import React from 'react'

import useStyles from './styles'

const Header = () => {
  const classes = useStyles();

  return (
    
    <div className={classes.header}>
    <div className={classes.picture}>
      <div className={classes.contact}>
      <div className={classes.container}>
        <p className={classes.quote}>"All progress takes place outside the comfort zone."</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Header