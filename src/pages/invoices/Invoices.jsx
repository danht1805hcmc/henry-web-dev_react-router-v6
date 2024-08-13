import { Navbar } from 'components';
import { invoices } from 'data/invoices';
import { Outlet } from 'react-router-dom';

export default function Invoices() {
  const menuData = invoices.map(({ id, name }) => ({
    to: `/invoices/${id}`,
    name,
  }));

  return (
    <div className='invoices'>
      <h2 className='text__heading'>Invoices</h2>

      <div className='invoices__layout'>
        <Navbar menuData={menuData} />
        <Outlet />
      </div>
    </div>
  );
}
