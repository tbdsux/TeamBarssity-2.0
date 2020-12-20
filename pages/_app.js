import React from 'react'
import App from 'next/app'
import '../css/tailwind.css' // tailwindcss

//fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // import the css
config.autoAddCss = false // skip adding the css automatically

class TeamBarssity extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default TeamBarssity
