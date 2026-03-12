import { articles as articlesEn, getArticle as getArticleEn } from "./articles";
import { articlesZh, getArticleZh } from "./articles.zh";
import type { Article } from "./articles";
import type { Locale } from "./locales";

export function getArticles(locale: Locale): Article[] {
  return locale === "zh" ? articlesZh : articlesEn;
}

export function getArticle(locale: Locale, slug: string) {
  return locale === "zh" ? getArticleZh(slug) : getArticleEn(slug);
}
