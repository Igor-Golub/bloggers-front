import { usePageTitle } from "../shared/hooks";
import { userApi } from "../features/user";

const DashboardPage = () => {
  usePageTitle("Dashboard");

  const { data, isLoading } = userApi.useAccountQuery("");

  return <div>{isLoading ? <>Loading</> : <>{data.login}</>}</div>;
};

export default DashboardPage;
