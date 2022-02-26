import React, { useContext, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../auth/authContext';
import './styles/home.css';
import Swal from 'sweetalert2';
import { fetchWithoutToken } from '../helpers/fetch';
import { List } from './List';

export const Home = () => {
  const { user } = useContext(AuthContext);

  const [listUpdate, setlistUpdate] = useState(true);

  const initialState = {
    concept: '',
    amount: '',
    type: '',
    userId: user.id,
  };

  const [formValues, handleInputChange, reset] = useForm(initialState);

  const { concept, amount, type, userId } = formValues;

  const handleAdd = async (e) => {
    e.preventDefault();

    if (concept === '' || amount === '' || type === '') {
      return Swal.fire('Error', 'Todos los campos deben estar llenos', 'error');
    } else {
      try {
        const resp = await fetchWithoutToken(
          'budgetform',
          {
            concept,
            amount,
            type,
            userId,
          },
          'POST'
        );
        const body = await resp.json();

        if (resp.ok) {
          Swal.fire(
            'Agregado!',
            'Usted ha agregado el concepto correctamente',
            'success'
          );
          reset();
        } else {
          Swal.fire('Error', body.errors[0].msg, 'error');
        }
      } catch (error) {
        console.error(error);
      }
    }

    setlistUpdate(false);
  };

  return (
    <div className='container mt-4'>
      <header>
        <h1 className='text-center'>Gasto Semanal</h1>
      </header>
      <main className='contenido-principal'>
        <div className='row'>
          <div className='col'>
            <div className='contenido primario'>
              <h2 className='text-center'>Agregue ingresos o egresos aqui</h2>

              <form id='agregar-gasto' onSubmit={handleAdd}>
                <div className='form-group'>
                  <label htmlFor='concepto'>Concepto:</label>
                  <input
                    type='text'
                    value={concept}
                    name='concept'
                    className='form-control'
                    id='concepto'
                    placeholder='Concepto'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group mt-3'>
                  <label htmlFor='cantidad'>Monto:</label>
                  <input
                    type='number'
                    name='amount'
                    value={amount}
                    className='form-control'
                    id='cantidad'
                    placeholder='Monto en $'
                    onChange={handleInputChange}
                  />
                </div>

                <div className='form-group mt-3'>
                  <p>Seleccione el tipo:</p>

                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='type'
                      id='flexRadioDefault1'
                      onChange={handleInputChange}
                      value='Egreso'
                      checked={type === 'Egreso' ? true : false}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexRadioDefault1'>
                      Egreso
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='type'
                      id='flexRadioDefault2'
                      onChange={handleInputChange}
                      value='Ingreso'
                      checked={type === 'Ingreso' ? true : false}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexRadioDefault2'>
                      Ingreso
                    </label>
                  </div>
                </div>

                <button
                  type='submit'
                  className='btn btn-primary mt-3'
                  onClick={() => {
                    setlistUpdate(true);
                  }}>
                  Agregar
                </button>
              </form>
            </div>
          </div>

          <div className='col'>
            <div className='contenido secundario'>
              <h2 className='text-center'>Balance</h2>

              <div id='gastos'>
                <ul className='list-group'></ul>
              </div>
              <div id='presupuesto' className='presupuesto'>
                <div className='alert alert-primary'>
                  <p>
                    Balance: $ <span id='total'></span>
                  </p>
                </div>
                {/* <div className='restante alert alert-success'>
                  <p>
                    Restante: $ <span id='restante'></span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <section>
          <List listUpdate={listUpdate} />
        </section>
      </main>
    </div>
  );
};
