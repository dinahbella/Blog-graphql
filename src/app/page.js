import Head from "next/head";
import { Categories, PostCard, PostWidget } from "./components";

const posts = [
  { title: "React Testing", excerpt: "Learn react testing" },
  { title: "React Hooks", excerpt: "Learn react hooks" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Dinah Blogs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Created by Dinah Blessing" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            {/* Sidebar content can go here */}
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
