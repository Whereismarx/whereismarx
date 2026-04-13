export const blogPosts = {
  zh: [
    {
      slug: "my-first-post",
      title: "我的第一篇文章",
      description: "这篇文章是用来测试的。",
      date: "2026-04-13",
      published: true,
      tags: ["Astro", "i18n", "Blog"],
      image: "/images/blog/20260413.jpg",
      content: `
這是我的第一篇中文文章。

我正在用 Astro 建立一個雙語網站，這篇文章是用來測試文章內頁。

目前我已經完成：
- 中英文路由
- 共用版型
- 導覽列
- 語言切換
      `.trim(),
    },

  ],
  
  en: [
    {
      slug: "my-first-post",
      title: "My First Post",
      description: "This post is a simple test for the English blog list.",
      date: "2026-04-13",
      published: true,
      tags: ["Astro", "i18n", "Blog"],
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
