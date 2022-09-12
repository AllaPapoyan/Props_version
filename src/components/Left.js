import React from 'react'

function Left({title,desc,click_one,click_two,click_three,range}) {
    return (
        <section className='left_section'>
            <label className='label'>
                Title
                <input type="text" placeholder='Title' onChange={(e)=>title(e.target.value)} />

                Description
                <input type="text" placeholder='Description' onChange={(e)=>desc(e.target.value)} />
                Change Background Radius
                <input type="range"  max="50" min="0"  onChange={(e)=>range(e.target.value)}  /> 
            </label>
            <label className='buttons'>

                Change Title Color
                <input type="color"  onChange={(e)=>click_one(e.target.value)}/>

                Change Description Color
                <input type="color"  onChange={(e)=>click_two(e.target.value)} />

                Change Background
                <input type="color" onChange={(e)=>click_three(e.target.value)}/>

            </label>

        </section>
    )
}

export default Left

