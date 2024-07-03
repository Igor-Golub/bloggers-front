import { userApi } from 'src/entities/user';
import { usePageTitle } from 'shared/hooks';

const DashboardPage = () => {
  usePageTitle('Dashboard');

  const { data, isLoading } = userApi.useAccountQuery('');

  return <div>{isLoading ? <>Loading</> : <>{data.login}</>}</div>;
};

export default DashboardPage;
