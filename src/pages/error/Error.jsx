import { Link, useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();

  return (
    <div className='error-page'>
      <h1 className='text__heading'>Oops!</h1>

      <div className='container'>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

        <p>
          Back to <Link to='/'>Homepage</Link>
        </p>
      </div>
    </div>
  );
}
