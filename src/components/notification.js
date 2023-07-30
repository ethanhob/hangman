import React from 'react'

const notification = ({showNotification}) => {
  return (
    <div>
       <div className={`notification-container ${showNotification ? 'show' : ''}`}>
        {/* so two options, you can either conditionally render it like the errors or use template literals like this to add to the className */}
      <p>You have already entered this letter</p>
    </div>
    </div>
  )
}

export default notification
