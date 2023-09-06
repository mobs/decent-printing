import React from 'react'

import Card from '../Card/Card'

const Images = ({ data, selectedCategory }) => {
  let toShow;

  {
    selectedCategory === 'All' || selectedCategory === 'Choose Category' ? toShow = data : toShow = data.filter((cat) => cat.category === selectedCategory);
  }

  return (
    <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1'>
      {
        toShow.map((data,idx) => (
          <Card data={data} key={idx} />
        ))
      }
      
    </div>
  )
}

export default Images