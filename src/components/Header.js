import React from 'react';

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-light bg-dark rounded">
               <div className="container-fluid">
                   <h3 className="navbar-brand text-light mx-2 my-2">Navbar</h3>
                   <form className="d-flex">
                      <h5 className='text-light mx-2 my-2'>Cart  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          99+
                        </span></h5>
                     
                         
                    </form>
                 </div>
             </nav>
            
        </div>
    );
};

export default Header;