import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

BlogPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function BlogPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
