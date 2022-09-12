import React from 'react'

function Right(props) {
    
  return (
    <section className='right_section'>
            <div className='note'  
            style={{'backgroundColor':props.three,
                        'borderRadius':props.on_range + "%",
            }}>
                    <h2>My NoTes</h2>
                    <h3 style={{
                        'color':props.one
                    }}>{props.onTitle} </h3>
                    <p style={{
                        'color':props.two
                    }}>{props.onDesc}</p>
            </div>
    </section>
  )
}

export default Right