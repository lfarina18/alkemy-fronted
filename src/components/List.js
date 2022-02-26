import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { ListItems } from './ListItems';
import clientAxios from '../config/axios';

export const List = ({ listUpdate }) => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [items, setitems] = useState([]);

  useEffect(() => {
    const listitems = async () => {
      setLoading(true);
      const response = await clientAxios.get(`/budgetform/${user.id}`);
      setitems(response.data);
      setLoading(false);
    };
    listitems();
  }, [user.id, listUpdate]);

  return (
    <div className="d-flex">
      <section className='container'>
        <h3 className='text-primary text-center mb-3'>Egresos</h3>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Concepto</th>
                <th scope='col'>Monto $</th>
                <th scope='col'>Tipo</th>
                <th scope='col'>(Año-Mes-Día)</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>Cargando...</td>
                </tr>
              ) : (
                items.map((item, i) => (
                  <ListItems
                    key={item.id}
                    id={++i}
                    concept={item.concept}
                    amount={item.amount}
                    type={item.type}
                    date={item.updatedAt}
                    idItem={item.id}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className='container'>
        <h3 className='text-primary text-center mb-3'>Ingresos</h3>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Concepto</th>
                <th scope='col'>Monto $</th>
                <th scope='col'>Tipo</th>
                <th scope='col'>(Año-Mes-Día)</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>Cargando...</td>
                </tr>
              ) : (
                items.map((item, i) => (
                  <ListItems
                    key={item.id}
                    id={++i}
                    concept={item.concept}
                    amount={item.amount}
                    type={item.type}
                    date={item.updatedAt}
                    idItem={item.id}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
