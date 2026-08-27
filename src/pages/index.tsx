import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Feed from '@/components/Feed';
import { getAllPosts } from '@/lib/posts';
import { Post } from '@/types';

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Portfolio - GeeGgoodgameowo</title>
        <meta name="description" content="Blog and portfolio for personal and professional projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Feed posts={posts.slice(0, 3)} />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
