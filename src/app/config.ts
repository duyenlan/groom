export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "TL | Thiệp cưới Trường & Loan | 040126";

export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "Thiệp mời cưới Trường & Loan | 04.01.2026";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Trân trọng kính mời bạn đến chung vui trong ngày cưới của Trường và Loan, vào Chủ nhật ngày 04 tháng 01 năm 2026 (tức ngày 16 tháng 11 năm Ất Tỵ).";

// Last baseURL
const defaultBaseURL = "https://khoatruong-kieuloan-040126.vercel.app";

// Vercel baseURL, make sure it's a valid URL
const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

// meta base url
export const baseURL =
  process.env.NEXT_PUBLIC_URL ||
  VERCEL_URL ||
  (globalThis.location && globalThis.location.origin) ||
  defaultBaseURL;
