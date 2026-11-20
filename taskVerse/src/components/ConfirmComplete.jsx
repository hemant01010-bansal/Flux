import React from 'react'
import './ConfirmComplete.css'

function ConfirmComplete({ onConfirm, onCancel }) {
  return (
    <div className='confirmParent'>

      <div className='confirmBox'>
        <p>Do you want to mark this task completed?</p>

        <div className='confirmButtons'>
          <button className='btnYes' onClick={onConfirm}>Yes</button>
          <button className='btnNo' onClick={onCancel}>No</button>
        </div>

      </div>

    </div>
  )
}

export default ConfirmComplete