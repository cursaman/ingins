import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/site-data";
export const metadata: Metadata = { title: "블로그", description: "홈페이지와 업무 개선에 필요한 실무 이야기" };
export default function BlogPage() { return <main id="main-content"><PageHero eyebrow="Insights" title="홈페이지와 업무 개선에 필요한 실무 이야기" description="제작 전 준비부터 모바일, 속도, 관리자 시스템까지 실제 결정에 도움이 되는 기준을 정리합니다." /><section className="section"><div className="container blog-grid">{blogPosts.map((post) => <Link href={`/blog/${post.slug}`} key={post.slug}><span>{post.category}</span><h2>{post.title}</h2><p>{post.summary}</p><strong>글 읽기 →</strong></Link>)}</div></section></main>; }
