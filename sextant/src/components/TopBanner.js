import React from 'react'
import Banner from 'react-banner'
import 'react-banner/dist/style.css'
import './banner.css'

export default function TopBanner() {
  return (
    <Banner
    logo="Sextant Network Manager"
    items={[
        { "content": "IP Address", "url": "/userip" }    
       
    ]} 
    />
   
  )
}
