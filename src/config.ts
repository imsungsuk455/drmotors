export const SITE = {
  website: "https://doctormotors.org/", // replace this with your deployed domain
  author: "닥터모터스(Dr. Motors)",
  profile: "/",
  desc: "자동차 최신 뉴스, 시승기, 관리 팁 등 자동차에 관한 모든 정보를 전문가의 시선으로 깔끔하게 정리해 드립니다. 당신의 카 라이프를 위한 완벽한 가이드.",
  title: "닥터모터스 | 자동차의 모든 정보를 전문가의 시선으로",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "페이지 수정",
    url: "https://github.com/imsungsuk455/weblog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
