import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-data";
export const metadata: Metadata = { title: "서비스", description: "기업 홈페이지, 관리자, 맞춤형 업무 시스템 제작 서비스" };
export default function ServicesPage() { return <main id="main-content"><PageHero eyebrow="Services" title="화면부터 업무 흐름까지 필요한 범위로 구축합니다" description="작게 시작하고 실제 사용을 확인하며 다음 기능으로 확장합니다." /><section className="section"><div className="container card-grid">{services.map((item, index) => <Link className="service-card service-card--large" href={`/services/${item.slug}`} key={item.slug}><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.summary}</p><strong>서비스 상세 →</strong></Link>)}</div></section></main>; }
