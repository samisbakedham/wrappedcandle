import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

GuidesPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function GuidesPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
