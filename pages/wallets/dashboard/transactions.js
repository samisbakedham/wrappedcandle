import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

TransactionsPage.getLayout = (page) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function TransactionsPage() {
    return <div></div>;
}
