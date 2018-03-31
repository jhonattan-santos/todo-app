import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input 
                type='text' 
                name='Insert a task' 
                id='description' 
                className='form-control' 
                placeholder='Insert a task...'
                onChange={props.handleChange}
                value={props.description}/>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton 
                style='primary' 
                icon='plus' 
                onClick={props.handleAdd}></IconButton>            
        </Grid>
    </div>
)