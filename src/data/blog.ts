export const blogPosts = {
  zh: [
    {
      slug: "20260413",
      title: "技术平权：个人网站的回归意味着什么？",
      description: "0代码基础，6个小时从零开始上线这个网站，让我们短暂回味一下千禧年的技术兴奋。",
      date: "2026-04-13",
      published: true,
      tags: ["AI", "Technology", "Blog"],
      image: "/images/blog/20260413.jpg",
      content: `
我至少四次尝试开始建立自己的个人网站，每次都出于几乎相同的原因：现有的平台已经不能满足我的某些表达需要。从最早的QQ空间人人网，到微信公众号平台，再到后来的各种碎片化媒体，我都留下了很多文字。
      `.trim(),
    },

  ],
  
  en: [
    {
      slug: "20260413",
      title: "My First Post",
      description: "This post is a simple test for the English blog list.",
      date: "2026-04-13",
      published: true,
      tags: ["AI", "Technology", "Blog"],
      image: "/images/blog/20260413.jpg",
      content: `
This is my first English post.

I am building a bilingual website with Astro, and this post is for testing a blog detail page.

So far I have finished:
- bilingual routes
- shared layout
- navigation
- language switching
      `.trim(),
    },

  ],
} as const;
