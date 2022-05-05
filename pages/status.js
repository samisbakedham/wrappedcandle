import DefaultLayout from '../components/layouts/DefaultLayout';
import ComingSoonAlert from '../components/placeholders/ComingSoonAlert';

StatusPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function StatusPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
