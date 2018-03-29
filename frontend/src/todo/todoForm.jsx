import React from 'react'

export default props => (
    <div role='form' className='todoForm'>
        <div className='col-xs-12 col-sm-9 col-md-10 '>
            <input type='text' name='Insert a task' id='description' className='form-control' placeholder='Insert a task...'/>            
        </div>
        <div className='col-sx-12 col-sm-3 col-md-2'>
            <button className='btn btn-primary'><i className='fa fa-plus'></i></button>
        </div>
    </div>
)