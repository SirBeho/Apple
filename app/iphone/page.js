import ProductContainer from '@/components/productContainer'
import ProductInfo from '@/components/productInfo'
import '@/components/productContainer/productContainer.css'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <ProductContainer
        clase={'ip-container-white'}>

        <ProductInfo
          state={'new'}
          product={'iPhone 14'}
          name={'Wonderfull.'}
          prce={'From $799 or $33.29/mo. for 24 mo. before trade‑in2'}
        />

      </ProductContainer>
      <ProductContainer
        clase={'ip-container-black'}>

        <ProductInfo
          state={' '}
          product={'iphone14Pro'}
          name={'Pro. Beyond.'}
          prce={'From $999 or $41.62/mo. for 24 mo. before trade‑in2'}
        />

      </ProductContainer>
    </React.Fragment>

  )
}
