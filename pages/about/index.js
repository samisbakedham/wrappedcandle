import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

AboutPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function AboutPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
