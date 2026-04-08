import Layout from '../components/Layout';
import { Mail, Phone } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const aboutImages = {
  profile: '/images/about/profile.jpg',
  qr: '/images/about/wechat-qr.jpg',
  ant: '/images/about/ant-group.png',
  meituan: '/images/about/meituan.png',
};

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-32 relative">
         {/* Apple Intelligence Ambient Aura - Profile Area */}
         <div className="absolute top-[-10%] right-[-20%] w-[700px] h-[700px] apple-intelligence-aura rounded-full pointer-events-none" />

        <header className="py-20 md:py-32 relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-white">
            About Me
          </h1>
          
          {/* E1) Profile Section */}
          <div className="mb-24 relative flex flex-col md:flex-row gap-8 items-start">
            <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-transparent hidden md:block"></div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-white mb-6">王晓婧 Vanessa</h2>
              <div className="space-y-2 text-white/70 font-light text-lg leading-relaxed">
                <p>生日：1998.04.26</p>
                <p>现居：浙江杭州</p>
                <p>手机：18260098529（微信同号）</p>
                <p>邮箱：wangxiaojing1998@163.com</p>
              </div>
            </div>
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
              <ImageWithFallback
                src={aboutImages.profile}
                alt="Profile"
                className="w-full h-full object-cover"
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/20 text-xs text-center">
                    Profile
                  </div>
                }
              />
            </div>
          </div>

          {/* E2) Capabilities Section (Moved from Home) */}
          <div className="mb-24">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
              能力综述
              <span className="h-[1px] flex-grow bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-transparent"></span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed font-light max-w-3xl">
              {[
                { title: "1. AI驱动设计与创新", content: "1年半AI产品设计经验，深度掌握 AGI 交互设计逻辑，具备 AI Native 产品设计思维；熟练运用 AIGC 工具（如Prompt工程、AI生图）及 AI Agent 辅助工作流，有效提升设计产出与研发效率。" },
                { title: "2. 全链路用研思维", content: "擅长构建 “调研驱动设计” 的闭环机制，创新性将AI能力嵌入用研SOP（如访谈/分析Agent），通过高频用户测试辅助产品策略决策。" },
                { title: "3. 逻辑性与结构化思考", content: "具备极强的逻辑归纳能力，能够精确解析用户需求并有效转化为具体的设计策略，在设计过程中思考严谨有条理。" },
                { title: "4. 沟通协作能力", content: "具备极强的沟通能力，能够精准传递设计思考，高效进行跨部门合作。" },
                { title: "5. 主人翁精神与领导能力", content: "对项目有强烈责任感，能在关键项目中担任领导角色，确保设计项目从概念到实施的成功转化。" }
              ].map((item, index) => (
                <div key={index} className="glass-panel-apple p-6 rounded-xl hover:bg-white/[0.05] transition-colors duration-300">
                  <strong className="text-white/90 font-medium block mb-2">{item.title}</strong>
                  {item.content}
                </div>
              ))}
            </div>
          </div>

          {/* E3) Education Section */}
          <div className="mb-24">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
              教育经历
              <span className="h-[1px] flex-grow bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-transparent"></span>
            </h2>
            <div className="space-y-6 max-w-3xl">
              <div className="group glass-panel-apple p-6 rounded-xl hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  <h3 className="text-xl font-medium text-white/90 group-hover:text-white transition-colors">硕士-UXE用户体验工程</h3>
                  <span className="text-sm text-white/40 font-mono">2020.7-2021.11</span>
                </div>
                <div className="text-white/60">Goldsmiths 伦敦大学金史密斯学院</div>
              </div>
              <div className="group glass-panel-apple p-6 rounded-xl hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  <h3 className="text-xl font-medium text-white/90 group-hover:text-white transition-colors">本科-工业设计</h3>
                  <span className="text-sm text-white/40 font-mono">2016.9-2020.6</span>
                </div>
                <div className="text-white/60">南京林业大学</div>
              </div>
            </div>
          </div>

          {/* E4) Work Experience Section */}
          <div className="mb-24">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
              工作经历&重点成果
              <span className="h-[1px] flex-grow bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-transparent"></span>
            </h2>
            <div className="space-y-12 max-w-3xl">
              
              {/* Job 1 */}
              <div className="group glass-panel-apple p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-500 border-l-4 border-l-blue-500/50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors flex items-center">
                    <ImageWithFallback
                      src={aboutImages.ant}
                      alt="Ant Group"
                      className="w-6 h-6 rounded-md mr-3 object-cover bg-white/10"
                      fallback={<span className="w-6 h-6 rounded-md mr-3 bg-white/10" />}
                    />
                    蚂蚁 体验设计师
                  </h3>
                  <span className="text-sm text-white/40 font-mono">2024.08至今</span>
                </div>
                <div className="text-lg text-white/60 mb-6">财保设计部-创新场景设计</div>
                
                <div className="space-y-6 text-white/70 leading-relaxed font-light">
                  <p>
                    <strong className="text-white/90 font-medium block mb-1">1. 重构内容范式与多模态工作流：</strong>
                    针对AI输出不可控痛点，搭建“Prompt定义-模型发散-设计收敛-评测标注”的标准化工作流。定义视觉Prompt输入标准，输出 100+ 多模态组件与 2260条 RLHF优质样本，探索面向 AI Native 场景的评测方法，建立“内容+视觉”双维评测标准。上线后用户体验显著变好，用户访问深度增强。
                  </p>
                  <p>
                    <strong className="text-white/90 font-medium block mb-1">2. 确立蚂小财AGI设计范式：</strong> 
                    体系化构建面向 AI 产品的意图交互范式，形成基于意图引导、推理响应、内容生成、行为反馈的完整链路，并沉淀财保设计意图交互范式库。
                  </p>
                  <p>
                    <strong className="text-white/90 font-medium block mb-1">3. 持续迭代蚂小财AI核心服务和对话外精品服务，助力业务MAU超额达成：</strong> 
                    在对话内，协同完成了蚂小财5月出街服务，打造诊基、诊股、行情、行动四大服务工具及端内宣传方案。在对话外，打造月报、周报、晨报、晚报四大精品服务。上线后MAU均显著增长，超额达成业务目标。
                  </p>
                  <p>
                    <strong className="text-white/90 font-medium block mb-1">4. AI 赋能用研与影响力构建：</strong> 
                    利用访谈/分析Agent提效，全年主导71人次访谈。通过高频洞察验证设计框架，辅助产品策略调优。协同主导IF国际设计奖申报，输出高质量 AI 交互演示，提升团队行业影响力。
                  </p>
                </div>
              </div>

              {/* Job 2 */}
              <div className="group glass-panel-apple p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-500 border-l-4 border-l-yellow-500/50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors flex items-center">
                    <ImageWithFallback
                      src={aboutImages.meituan}
                      alt="Meituan"
                      className="w-6 h-6 rounded-md mr-3 object-cover bg-white/10"
                      fallback={<span className="w-6 h-6 rounded-md mr-3 bg-white/10" />}
                    />
                    美团 交互设计师
                  </h3>
                  <span className="text-sm text-white/40 font-mono">2022.04 - 2024.08</span>
                </div>
                <div className="text-lg text-white/60 mb-6">金融服务设计中心</div>
                
                <div className="space-y-6 text-white/70 leading-relaxed font-light">
                  <p>
                    <strong className="text-white/90 font-medium block mb-1">1. 2年+C端交互设计从业经验：</strong>
                    主做C端创新支付、用户保险、互联网电商；B端办公协同类业务。
                  </p>
                  <p>
                    <strong className="text-white/90 font-medium block mb-1">2. 2023年，独立负责创新支付-数字人民币业务的交互设计；2024年，独立负责美团保险-药划算业务的交互设计。</strong> 
                    主导数币专区V4改版、约定返现活动改版等多项项目。
                  </p>
                  <p>
                    <strong className="text-white/90 font-medium block mb-1">3. 在业务初期面临较大的体验问题时，主导建立产运研联合走查机制，</strong> 
                    确保业务持续优化和用户满意度持续提升。
                  </p>
                </div>
              </div>

            </div>
          </div>
        </header>

        {/* E5) Merged Reach Me Section */}
        <section className="border-t border-white/[0.08] pt-20 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-12 flex items-center gap-4">
            Reach Me
            <span className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></span>
          </h2>
          <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
            <div className="space-y-8">
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Email</div>
                <a href="mailto:wangxiaojing1998@163.com" className="flex items-center gap-3 text-xl md:text-2xl font-medium text-white hover:text-blue-400 transition-colors relative group">
                  <Mail className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                  wangxiaojing1998@163.com
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </div>
              
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Phone / WeChat</div>
                <div className="flex items-center gap-3 text-xl md:text-2xl font-medium text-white/80">
                  <Phone className="w-6 h-6 opacity-70" />
                  18260098529
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-sm">
              <div className="w-32 h-32 bg-white rounded-lg p-2 shadow-lg">
                <ImageWithFallback
                  src={aboutImages.qr}
                  alt="WeChat QR Code"
                  className="w-full h-full object-contain"
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-black/20 text-xs text-center">
                      QR Code
                    </div>
                  }
                />
              </div>
              <span className="text-xs text-white/40 uppercase tracking-wider">Scan to Connect</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
