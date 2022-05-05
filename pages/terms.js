import DefaultLayout from '../components/layouts/DefaultLayout';
import ComingSoonAlert from '../components/placeholders/ComingSoonAlert';

TermsPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function TermsPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
