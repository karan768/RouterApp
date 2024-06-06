import React from 'react'

function History() {
  const date = new Date();
  console.log(date, 'date')
  return (
    <>
      <div className='history'>This is the History page..</div>
      <span>{date.toString()}</span>
    </>
  )
}

export default History