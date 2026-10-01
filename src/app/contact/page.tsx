import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SubmissionForm } from "@/components/submission-form";
export const metadata: Metadata = { title: "문의하기", description: "홈페이지, 관리자, 업무 시스템과 유지보수 프로젝트 문의" };
export default function ContactPage() { return <main id="main-content"><PageHero eyebrow="Contact" title="현재 고민과 필요한 범위를 편하게 알려주세요" description="제작 범위가 정리되지 않았어도 괜찮습니다. 현재 상황과 목표부터 확인하겠습니다." /><section className="section"><div className="container form-layout"><aside><p className="eyebrow">Project Inquiry</p><h2>프로젝트 문의</h2><p>확인 후 문의 유형에 맞는 연락처로 안내드립니다.</p><div className="contact-list"><p><b>일반·교육</b>contact@cursamanworks.kr</p><p><b>견적·계약</b>estimate@cursamanworks.kr</p><p><b>유지보수</b>support@cursamanworks.kr</p></div></aside><SubmissionForm kind="inquiry" /></div></section></main>; }
