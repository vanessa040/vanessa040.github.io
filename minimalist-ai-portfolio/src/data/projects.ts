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

const localProjectImage = (slug: string, fileName: string) => `/images/projects/${slug}/${fileName}`;

const numberedGallery = (slug: string, count: number, extension = 'webp') =>
  Array.from({ length: count }, (_, index) => ({
    src: localProjectImage(slug, `${String(index + 1).padStart(2, '0')}.${extension}`),
    fullWidth: true,
  }));

export const projects: Project[] = [
  {
    slug: "ant-fortune-ai",
    title: "蚂小财内容表达范式升级",
    tagline: "优化对话内AI输出内容，降低用户理解成本，并建立多模态内容范式工作流。",
    category: "AI Design",
    tags: ["AI设计", "内容改版", "C端"],
    time: "2025.10-2025.12",
    cover: localProjectImage("ant-fortune-ai", "cover.webp"),
    meta: {
      timeline: "Oct 2025 - Dec 2025",
      keywords: ["AI设计", "内容改版", "C端"],
    },
    sections: [],
    gallery: numberedGallery("ant-fortune-ai", 14),
  },
  {
    slug: "ant-fortune-agi",
    title: "蚂小财AGI设计范式",
    tagline: "体系化构建面向 AI 产品的意图交互范式，形成基于意图引导、推理响应、内容生成、行为反馈的完整链路，并沉淀财保设计意图交互范式库。",
    category: "AI Design",
    tags: ["AI设计", "规范沉淀", "C端"],
    time: "2025.6-2025.7",
    cover: localProjectImage("ant-fortune-agi", "cover.webp"),
    meta: {
      timeline: "Jun 2025 - Jul 2025",
      keywords: ["AI设计", "规范沉淀", "C端"],
    },
    sections: [],
    gallery: numberedGallery("ant-fortune-agi", 13),
  },
  {
    slug: "ant-fortune-services",
    title: "蚂小财精品服务",
    tagline: "为建立蚂小财心智、提升互动MAU，设计四大精品服务：理财月报、周报、晨报、晚报，帮用户定期分析收益。",
    category: "AI Design",
    tags: ["AI设计", "H5改版", "C端"],
    time: "2024.9-2024.11",
    cover: localProjectImage("ant-fortune-services", "cover.webp"),
    meta: {
      timeline: "Sep 2024 - Nov 2024",
      keywords: ["AI设计", "H5改版", "C端"],
    },
    sections: [],
    gallery: numberedGallery("ant-fortune-services", 26),
  },
  {
    slug: "meituan-digital-currency-v4",
    title: "美团数币专区V4改版",
    tagline: "当前美团数币专区存在对用户的吸引力不足，流量承接能力不足等问题，设计上通过多手段建立数币钱包心智，提升专区吸引力。",
    category: "UX Design",
    tags: ["频道页改版", "C端"],
    time: "2023.5-2023.8",
    cover: localProjectImage("meituan-digital-currency-v4", "cover.webp"),
    meta: {
      timeline: "May 2023 - Aug 2023",
      keywords: ["频道页改版", "C端"],
    },
    sections: [],
    gallery: numberedGallery("meituan-digital-currency-v4", 18),
  },
  {
    slug: "financial-material-review-system",
    title: "金服对客材料评审系统",
    tagline: "由于用户体验和合规侧的双重要求，当前对客材料需经评审后才可投放，本需求搭建了一个评审系统，将评审流程线上化。",
    category: "B-End Design",
    tags: ["办公类", "0-1设计", "B端"],
    time: "2022.10-2022.11",
    cover: localProjectImage("financial-material-review-system", "cover.webp"),
    meta: {
      timeline: "Oct 2022 - Nov 2022",
      keywords: ["办公类", "0-1设计", "B端"],
    },
    sections: [],
    gallery: numberedGallery("financial-material-review-system", 20),
  },
];
