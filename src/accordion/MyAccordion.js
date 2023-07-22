import React, { useState } from 'react'

const MyAccordion = (props) => {
    const [show, setShow] = useState(false);

  return (
    <>
        <div className="main-heading">
            <p hidden={show} onClick={() => setShow(!show)}>➕</p>
            <p hidden={!show} onClick={() => setShow(!show)}>➖</p>
            {/* for the icons or emojis press (windows+v) */}
            <h3>{props.question}</h3>
        </div>

        {show && <p className='answers'>{props.answer}</p>}
    </>
  )
}

export default MyAccordion