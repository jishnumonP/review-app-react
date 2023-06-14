import React from 'react'
import Review from '../Review/Review'

function Home() {
  return (
    <main>
    <section className='container'>
      <div className='title'>
        <h2>Review Blog App</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </section>
  </main>
  )
}

export default Home