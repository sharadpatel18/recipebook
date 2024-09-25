import React from 'react'
import { useNavigate } from 'react-router-dom'
const AdminUser = () => {
    const Navigate = useNavigate();
  return (
    <div className='admin-main'>
        <div className='admin-navbar'>
            <div></div>
            <div>
                <h2>Recipe</h2>
            </div>
            <div>
                <button onClick={()=>Navigate("/admin/addrecipe")}>Add recipe</button>
                <button>Recipe-List</button>
            </div>
        </div>
    </div>
  )
}

export default AdminUser
