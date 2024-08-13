import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { RootLayout } from 'layouts';
import {
  ErrorPage,
  ExpensesPage,
  InvoiceDetailPage,
  InvoicesPage,
  NotFoundPage,
} from 'pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<InvoicesPage />} />

      <Route path='invoices' element={<InvoicesPage />}>
        <Route path=':id' element={<InvoiceDetailPage />} />
      </Route>
      <Route path='expenses' element={<ExpensesPage />} />

      <Route path='404' element={<NotFoundPage />} />
      <Route path='*' element={<Navigate to='404' replace />} />
    </Route>,
  ),
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
