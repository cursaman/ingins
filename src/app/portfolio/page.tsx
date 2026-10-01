import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { portfolioItems } from "@/lib/site-data";
export const metadata: Metadata = { title: "포트폴리오", description: "문제, 목표와 해결과정 중심의 커사맨웍스 프로젝트" };
export default function PortfolioPage() { return <main id="main-content"><PageHero eyebrow="Portfolio" title="문제와 해결과정을 프로젝트로 보여드립니다" description="실제 프로젝트와 비공식 제안을 명확히 구분하고 확인 가능한 내용만 소개합니다." /><section className="section"><div className="container content-grid">{portfolioItems.map((item) => <Link className="content-card" href={`/portfolio/${item.slug}`} key={item.slug}><div className={`visual visual--${item.tone}`}><span>{item.label}</span></div><div><h2>{item.title}</h2><p>{item.summary}</p><strong>프로젝트 상세 →</strong></div></Link>)}</div></section></main>; }
