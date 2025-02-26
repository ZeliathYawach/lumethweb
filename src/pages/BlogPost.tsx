import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/layouts/PageLayout';
import { Clock, User, Tag, Share2, ArrowLeft, Loader2 } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';
import { SeoHead } from '../utils/seo/SeoHead';
import { generateArticleSchema, generateBreadcrumbSchema } from '../utils/seo/SchemaGenerator';
import { useEffect } from 'react';

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const post = location.state?.post;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    // Handle error when post is not passed through state
    return (
      <PageLayout title="Error">
        <div className="text-center text-red-400 py-8">
          Blog post not found or invalid URL
        </div>
      </PageLayout>
    );
  }

  // Generate schema for this blog post
  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author,
    publisher: 'Lumeth',
    url: `https://lumeth.com/blog/${id}`
  });

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://lumeth.com' },
    { name: 'Blog', item: 'https://lumeth.com/blog' },
    { name: post.title, item: `https://lumeth.com/blog/${id}` }
  ]);

  // Keywords based on post category and title
  const keywords = `${post.category.toLowerCase()}, ${post.title.toLowerCase()}, beauty ${post.category.toLowerCase()}, AI beauty ${post.category.toLowerCase()}, salon ${post.category.toLowerCase()}, beauty industry ${post.category.toLowerCase()}`;

  return (
    <>
      <SeoHead 
        title={`${post.title} | Lumeth Beauty Blog`}
        description={post.excerpt}
        keywords={keywords}
        image={post.imageUrl}
        type="article"
        path={`/blog/${id}`}
        schema={[articleSchema, breadcrumbSchema]}
      />
      <PageLayout title={post.title}>
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </button>

          {/* Hero Section */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-amber-400/90 text-black text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-300 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDate(post.date)}
                </span>
                <span className="text-gray-300 text-sm flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  By {post.author}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none px-4 sm:px-0">
            {post.content ? (
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-300 leading-relaxed"
              />
            ) : (
              <p className="text-gray-300">{post.excerpt}</p>
            )}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-purple-500/20 px-4 sm:px-0">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Tag className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">Tags:</span>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-purple-900/30 text-gray-300 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 bg-purple-900/30 text-gray-300 text-sm rounded-full">
                    Beauty
                  </span>
                  <span className="px-3 py-1 bg-purple-900/30 text-gray-300 text-sm rounded-full">
                    AI
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  navigator.share?.({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  }).catch(console.error);
                }}
                className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors"
                aria-label="Share this article"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-900/30 rounded-xl overflow-hidden border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-amber-400 transition-colors">
                    Latest Beauty Trends for 2024
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    Discover the hottest beauty trends that are shaping the industry this year.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">May 15, 2024</span>
                    <span className="text-amber-400 text-sm">Read more</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-900/30 rounded-xl overflow-hidden border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-amber-400 transition-colors">
                    How AI is Transforming Beauty Services
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    Explore the revolutionary impact of artificial intelligence on the beauty industry.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">May 10, 2024</span>
                    <span className="text-amber-400 text-sm">Read more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </PageLayout>
    </>
  );
}