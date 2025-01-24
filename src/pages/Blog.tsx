import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/layouts/PageLayout';
import { formatDate } from '../utils/dateUtils';
import { ArrowRight, Loader2, Clock, User } from 'lucide-react';
import { useBlogs } from '../hooks/useBlogs';

// Define the BlogPost interface here if it's not defined elsewhere
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export function Blog() {
  const { posts, loading, error } = useBlogs();
  const navigate = useNavigate();

  if (loading) {
    return (
      <PageLayout title="Beauty Blog">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Beauty Blog">
        <div className="text-center text-red-400 py-8">{error}</div>
      </PageLayout>
    );
  }

  const handleClick = (post: BlogPost) => { // Explicitly typed as BlogPost
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  return (
    <PageLayout title="Beauty Blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {posts.length > 0 && (
          <div className="mb-12">
            <Link
              to={`/blog/${posts[0].id}`}
              state={{ post: posts[0] }} // Passing data as state
              className="block"
            >
              <article className="relative group overflow-hidden rounded-2xl">
                <div className="relative aspect-[21/9] overflow-hidden">
                  <img
                    src={posts[0].imageUrl}
                    alt={posts[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-amber-400/90 text-black text-sm font-medium rounded-full">
                      {posts[0].category}
                    </span>
                    <span className="text-gray-300 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatDate(posts[0].date)}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-2 sm:line-clamp-3">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center text-gray-300 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    <span>By {posts[0].author}</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              state={{ post }} // Passing data as state
            >
              <article className="group bg-purple-900/30 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-amber-400/90 text-black text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      By {post.author}
                    </span>
                    <span className="text-amber-400 flex items-center text-sm">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
