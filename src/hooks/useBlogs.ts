import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { BlogPost } from '../types/blog';

export function useBlogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogsQuery = query(
          collection(db, 'Blog'), // Using the correct collection name 'Blog'
          orderBy('date', 'desc')
        );
        
        const querySnapshot = await getDocs(blogsQuery);
        const blogPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as BlogPost[];

        setPosts(blogPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return { posts, loading, error };
}

export async function getBlogPost(id: string) {
  try {
    const docRef = doc(db, 'Blog', id); // Using the correct collection name 'Blog'
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as BlogPost;
    }
    return null;
  } catch (err) {
    console.error('Error fetching blog post:', err);
    throw new Error('Failed to load blog post');
  }
}