export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tags?: string[];
  time?: string;
  cover: string;
  meta: {
    role?: string;
    timeline: string;
    tools?: string[];
    keywords: string[];
  };
  sections: ProjectSection[];
  gallery: {
    src: string;
    caption?: string;
    fullWidth?: boolean;
  }[];
}

export const projects: Project[] = [
  {
    slug: "ant-fortune-ai",
    title: "蚂小财内容表达范式升级",
    tagline: "优化对话内AI输出内容，降低用户理解成本，并建立多模态内容范式工作流。",
    category: "AI Design",
    tags: ["AI设计", "内容改版", "C端"],
    time: "2025.10-2025.12",
    cover: "https://picui.ogmua.cn/s1/2026/03/01/69a40fd48e5c4.webp",
    meta: {
      timeline: "Oct 2025 - Dec 2025",
      keywords: ["AI设计", "内容改版", "C端"],
    },
    sections: [],
    gallery: [
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a40ce09d0ba.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4114cb18e7.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4114c17ebf.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4114ad98ac.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4114b2c7b7.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4114d6d50c.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4116cb76a3.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41163ee9e5.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41167d7525.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a411668ec55.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a411662888b.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41173cadd1.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4117557c8a.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4117570807.webp", fullWidth: true },
    ],
  },
  {
    slug: "ant-fortune-agi",
    title: "蚂小财AGI设计范式",
    tagline: "体系化构建面向 AI 产品的意图交互范式，形成基于意图引导、推理响应、内容生成、行为反馈的完整链路，并沉淀财保设计意图交互范式库。",
    category: "AI Design",
    tags: ["AI设计", "规范沉淀", "C端"],
    time: "2025.6-2025.7",
    cover: "https://picui.ogmua.cn/s1/2026/03/01/69a415ff5c577.webp",
    meta: {
      timeline: "Jun 2025 - Jul 2025",
      keywords: ["AI设计", "规范沉淀", "C端"],
    },
    sections: [],
    gallery: [
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41afcb00fc.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41afc77914.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41afbbf47a.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41afca9529.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41c80e3f3b.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41c811acaa.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41b0093875.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41b1740123.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41dd4e156a.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41dd233027.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41b12a3b06.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41b0de9a09.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a41b1372bd7.webp", fullWidth: true },
    ],
  },
  {
    slug: "ant-fortune-services",
    title: "蚂小财精品服务",
    tagline: "为建立蚂小财心智、提升互动MAU，设计四大精品服务：理财月报、周报、晨报、晚报，帮用户定期分析收益。",
    category: "AI Design",
    tags: ["AI设计", "H5改版", "C端"],
    time: "2024.9-2024.11",
    cover: "https://picui.ogmua.cn/s1/2026/03/01/69a41fb5b7788.webp",
    meta: {
      timeline: "Sep 2024 - Nov 2024",
      keywords: ["AI设计", "H5改版", "C端"],
    },
    sections: [],
    gallery: [
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a42195ac4ab.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421960e559.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a42195e1d6c.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421955ea4d.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421953baf5.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421a2439b1.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421a3a9ce3.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421a4db315.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421a510c2c.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421a51ca48.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421af4a438.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421b091261.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421b2aa8c1.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421b3ada9c.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421b413c3a.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421bc0ecf2.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421bdd68a2.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421bfef8ff.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421c0b2041.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421c21b95c.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421cb15c78.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421cd1a6d1.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421cd1a6d1.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421cf8ac9e.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421d0e2513.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a421dad974d.webp", fullWidth: true },
    ],
  },
  {
    slug: "meituan-digital-currency-v4",
    title: "美团数币专区V4改版",
    tagline: "当前美团数币专区存在对用户的吸引力不足，流量承接能力不足等问题，设计上通过多手段建立数币钱包心智，提升专区吸引力。",
    category: "UX Design",
    tags: ["频道页改版", "C端"],
    time: "2023.5-2023.8",
    cover: "https://picui.ogmua.cn/s1/2026/03/01/69a429ebbe0da.webp",
    meta: {
      timeline: "May 2023 - Aug 2023",
      keywords: ["频道页改版", "C端"],
    },
    sections: [],
    gallery: [
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a45228a9f46.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a452284111a.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4522810de4.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4522709c05.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4522754a18.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a45235b9aa0.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4523729459.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4523830e31.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a452379200a.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a452381cf4e.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4524098576.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a452495f95e.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4524a52cf1.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4524a3e617.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a452488208c.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4525145101.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a4525791bed.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a452559bdb1.webp", fullWidth: true },
    ],
  },
  {
    slug: "financial-material-review-system",
    title: "金服对客材料评审系统",
    tagline: "由于用户体验和合规侧的双重要求，当前对客材料需经评审后才可投放，本需求搭建了一个评审系统，将评审流程线上化。",
    category: "B-End Design",
    tags: ["办公类", "0-1设计", "B端"],
    time: "2022.10-2022.11",
    cover: "https://picui.ogmua.cn/s1/2026/03/01/69a42bec2d457.webp",
    meta: {
      timeline: "Oct 2022 - Nov 2022",
      keywords: ["办公类", "0-1设计", "B端"],
    },
    sections: [],
    gallery: [
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cca175c9.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44ccb156bb.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cc5806f0.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cca8ee61.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44ccae191c.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cd113e73.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cda2df1b.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cdad4768.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cdd8ab41.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cdd118e8.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44ce0adba3.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44ce5bc4a9.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44ce92886e.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cee97513.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44cf62f462.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44d0562cee.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44d0b39a18.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44d0c31efc.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44d153109c.webp", fullWidth: true },
      { src: "https://picui.ogmua.cn/s1/2026/03/01/69a44d102051f.webp", fullWidth: true },
    ],
  },
];
