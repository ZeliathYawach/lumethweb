import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/layouts/PageLayout';
import { formatDate } from '../utils/dateUtils';
import { ArrowRight, Loader2, Clock, User } from 'lucide-react';
import { useBlogs } from '../hooks/useBlogs';
import { SeoHead } from '../utils/seo/SeoHead';
import { generateFAQSchema, generateBreadcrumbSchema } from '../utils/seo/SchemaGenerator';
import { SEO } from '../constants/seo';

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

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Generate FAQ schema
  const faqSchema = generateFAQSchema();
  
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://lumeth.com' },
    { name: 'Blog', item: 'https://lumeth.com/blog' }
  ]);

  if (loading) {
    return (
      <>
        <SeoHead 
          title={SEO.PAGES.BLOG.title}
          description={SEO.PAGES.BLOG.description}
          keywords={SEO.PAGES.BLOG.keywords}
          path="/blog"
          schema={[faqSchema, breadcrumbSchema]}
        />
        <PageLayout title="Beauty Blog">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
          </div>
        </PageLayout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SeoHead 
          title={SEO.PAGES.BLOG.title}
          description={SEO.PAGES.BLOG.description}
          keywords={SEO.PAGES.BLOG.keywords}
          path="/blog"
          schema={[faqSchema, breadcrumbSchema]}
        />
        <PageLayout title="Beauty Blog">
          <div className="text-center text-red-400 py-8">{error}</div>
        </PageLayout>
      </>
    );
  }

  const handleClick = (post: BlogPost) => { // Explicitly typed as BlogPost
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  return (
    <>
      <SeoHead 
        title={SEO.PAGES.BLOG.title}
        description={SEO.PAGES.BLOG.description}
        keywords={SEO.PAGES.BLOG.keywords}
        path="/blog"
        schema={[faqSchema, breadcrumbSchema]}
      />
      <PageLayout title="Beauty Blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Introduction */}
          <div className="mb-12 text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the latest insights on beauty trends, AI technology in the beauty industry, 
              and expert tips from beauty professionals. Stay informed with Lumeth's beauty blog.
            </p>
          </div>

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
                      loading="eager"
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

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3">
            <span className="text-white font-medium">Filter by:</span>
            <button className="px-3 py-1 bg-amber-400/90 text-black text-sm font-medium rounded-full">
              All
            </button>
            <button className="px-3 py-1 bg-purple-900/30 text-gray-300 text-sm font-medium rounded-full hover:bg-purple-900/50 transition-colors">
              Trends
            </button>
            <button className="px-3 py-1 bg-purple-900/30 text-gray-300 text-sm font-medium rounded-full hover:bg-purple-900/50 transition-colors">
              Technology
            </button>
            <button className="px-3 py-1 bg-purple-900/30 text-gray-300 text-sm font-medium rounded-full hover:bg-purple-900/50 transition-colors">
              Tips
            </button>
            <button className="px-3 py-1 bg-purple-900/30 text-gray-300 text-sm font-medium rounded-full hover:bg-purple-900/50 transition-colors">
              Business
            </button>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                state={{ post }} // Passing data as state
              >
                <article className="group bg-purple-900/30 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
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
                    <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
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

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-amber-400/10 to-purple-600/10 rounded-2xl p-8 border border-amber-400/20">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-300 mb-6">
                Stay updated with the latest beauty trends, AI technology insights, and exclusive content.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-amber-400 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}