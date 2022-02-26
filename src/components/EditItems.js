import React from 'react';

export const EditItems = () => {
  return (
    <div className='container mt-4'>
      
      <main className='contenido-principal'>
        <div className='row'>
          <div className='col'>
            <div className='contenido primario'>
              <h2 className='text-center fs-3 fw-bolder'>Modificar campos</h2>

              <form id='agregar-gasto' >
                <div className='form-group'>
                  <label htmlFor='concepto'>Concepto:</label>
                  <input
                    type='text'
                    // value={concept}
                    name='concept'
                    className='form-control'
                    id='concepto'
                    placeholder='Concepto'
                    // onChange={handleInputChange}
                  />
                </div>
                <div className='form-group mt-3'>
                  <label htmlFor='cantidad'>Cantidad:</label>
                  <input
                    type='number'
                    name='amount'
                    // value={amount}
                    className='form-control'
                    id='cantidad'
                    placeholder='Cantidad en $'
                    // onChange={handleInputChange}
                  />
                </div>

                

                <button type='submit' className='btn btn-info mt-3'>
                  Modificar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
