import DefaultLayout from '../components/layouts/DefaultLayout';
import ComingSoonAlert from '../components/placeholders/ComingSoonAlert';

JobsPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function JobsPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
