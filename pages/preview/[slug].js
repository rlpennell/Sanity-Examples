import { client } from '@/src/sanity.server';
import React from 'react';

const Preview = data => {
  console.log(data);
  return (
    <div>
      <h1>Preview</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.fetch(`*[defined(clug.current)].slug.current`);
  const paths = data.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ctx => {
  const data = await client.fetch(
    `*[defined(slug.current) && slug.current == $slug][0]`,
    {
      slug: ctx.params.slug,
    }
  );

  return {
    props: {
      data,
    },
  };
};

export default Preview;
