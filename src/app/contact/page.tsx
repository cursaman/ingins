import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SubmissionForm } from "@/components/submission-form";
export const metadata: Metadata = { title: "문의하기", description: "홈페이지, 관리자, 업무 시스템과 유지보수 프로젝트 문의" };
export default function ContactPage() { return <main id="main-content"><PageHero eyebrow="Contact" title="현재 고민과 필요한 범위를 편하게 알려주세요" description="제작 범위가 정리되지 않았어도 괜찮습니다. 현재 상황과 목표부터 확인하겠습니다." /><section className="section"><div className="container form-layout"><aside><p className="eyebrow">Project Inquiry</p><h2>프로젝트 문의</h2><p>확인 후 안내드리겠습니다.</p><div className="contact-list"><p><b>회사명</b>(주)인지아이앤에스</p><p><b>대표이사</b>박태억</p><p><b>주소</b>48231 부산광역시 수영구 망미번영로 52길 26, 202호 (수영동, 지현숙빌딩)</p><p><b>Mobile</b><a href="tel:+821041031567">010-4103-1567</a></p><p><b>E-mail</b><a href="mailto:taeyok@naver.com">taeyok@naver.com</a></p></div></aside><SubmissionForm kind="inquiry" /></div></section></main>; }
