import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

PartnersPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function PartnersPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
