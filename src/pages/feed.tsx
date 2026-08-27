import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import FeedCard from '@/components/FeedCard';
import { getAllPosts } from '@/lib/posts';
import { Post } from '@/types';

interface FeedPageProps {
  posts: Post[];
}

export default function FeedPage({ posts }: FeedPageProps) {
  return (
    <>
      <Head>
        <title>Feed - Portfolio</title>
        <meta name="description" content="Latest blog posts" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-12">Feed</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <FeedCard key={post.slug} post={post} />
            ))}
          </div>
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
