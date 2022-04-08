import { toFieldPath } from '@stackbit/annotations';
import { sourcebit } from '@watheia/molecular.api';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { DynamicComponent } from '../components/DynamicComponent';
import { Footer } from '../components/Footer';

export type FlexiblePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const FlexiblePage = ({ page, footer }: FlexiblePageProps) => {
  return (
    <div className="page-container">
      <Head>
        <title>{page.title}</title>
      </Head>

      <div data-sb-object-id={page.__metadata.id}>
        {page.sections?.length > 0 && (
          <div>
            {page.sections.map((section, index) => (
              <DynamicComponent
                key={index}
                {...section}
                {...toFieldPath(`sections.${index}`)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="page-footer">
        <Footer {...footer} />
      </div>
    </div>
  );
};

export default FlexiblePage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug =
    typeof params.slug === 'string' ? params['slug'] : '/' + (params['slug'] || []).join('/');
  const props = await sourcebit.getStaticPropsForPageAtPath(slug);
  return { props };
};

export const getStaticPaths = async () => {
  const paths = await sourcebit.getStaticPaths();
  return {
    paths,
    fallback: false
  };
};
