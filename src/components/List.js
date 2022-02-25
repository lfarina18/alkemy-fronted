import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { ListItems } from './ListItems';
import axios from 'axios';

export const List = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [items, setitems] = useState([]);

  useEffect(() => {
    const listitems = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/budgetform/${user.id}`
      );
      setitems(response.data);
      setLoading(false);
    };
    listitems();
  }, [user.id]);


  return (
    <section className='container'>
      <h1 className='text-danger'>¡Promociones de la semana!</h1>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Concepto</th>
              <th scope='col'>Monto $</th>
              <th scope='col'>Tipo</th>
              <th scope='col'>Fecha</th>
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
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
