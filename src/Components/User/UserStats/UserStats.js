import React from 'react';
import Head from '../../Helper/Head/Head';
import useFetch from '../../../Hooks/useFetch';
import { STAST_GET } from '../../../Service/api';
import Loading from '../../Helper/Loading/Loading';
import Error from '../../Helper/Error/Error';
const UserStatsGraph = React.lazy(() =>
  import('./UserStatsGraph/UserStatsGraph'),
);
const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token');
      const { url, options } = STAST_GET(token);
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </React.Suspense>
    );
};

export default UserStats;
