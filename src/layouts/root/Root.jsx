import { Navbar } from 'components';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className='root-layout'>
      <header className='header'>
        <h1 className='text__heading'>Bookkeeper</h1>

        <Navbar
          menuData={[
            { to: 'invoices', name: 'Invoices' },
            { to: 'expenses', name: 'Expenses' },
          ]}
        />
      </header>

      <main>
        <section className='container'>
          <Outlet />
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
