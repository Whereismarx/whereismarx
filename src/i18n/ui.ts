export const ui = {
  zh: {
    siteTitle: "Whereismarx",
    home: "首页",
    about: "关于Marx",
    blog: "文章",
    homeTitle: "Marx在哪?",
    homeIntro: "这里是Marx的自留地。",
    aboutIntro: "Marx日常精力不足。",
    blogIntro: "这里是Marx的一些未经审查的想法。",
    switchLang: "English",
    backToBlog: "返回文章列表",
  },
  en: {
    siteTitle: "Whereismarx",
    home: "Home",
    about: "About Marx",
    blog: "Articles",
    homeTitle: "Where is marx?",
    homeIntro: "This is Marx's native land.",
    aboutIntro: "Marx is always tired.",
    blogIntro: "These are Marx's unaudited and uncensored thoughts.",
    switchLang: "中文",
    backToBlog: "Back to Articles",
  },
} as const;

export function useTranslations(lang: string) {
  return function t(key: keyof typeof ui.zh) {
    const dict = ui[lang as keyof typeof ui];

    if (!dict) {
      throw new Error(`Invalid language: ${lang}`);
    }

    return dict[key];
  };
}
