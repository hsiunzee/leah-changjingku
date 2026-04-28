import { StepData, Scenario } from '../../types';

export const JOB_STEPS: StepData[] = [
  {
    id: 1,
    em: "👤",
    t: "Step 1: 基础画像与信息来源",
    s: "Profile & Info Source",
    c: "#00ff88",
    nr: "👔 招聘代表 HR",
    np: "Where did you hear about this position?",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "简历抬头：核对个人基础信息与联系方式"],
      [1, "信息获取渠道 (Where did you hear about it)：常规的 website (网站) 和 tv commercial (电视广告)"],
      [1, "常考渠道：saw an advertisement at the library (图书馆) 或听 cousin (亲戚) 说的"],
      [1, "易拼错渠道：brochure (小册子 - 极易拼错) 和 booklet (小册子)"]
    ],
    vt: "高频岗位词库",
    vw: [
      "receptionist 前台接待人员", "cashier 收银员", "hairdresser 发型师", "waiter/waitress 男女服务生", 
      "security guard 保安", "agent 中介/代理", "assistant 助理", "lifeguard 救生员",
      "chef 厨师", "plumber 水管工(注意b不发音!)", "pilot 飞行员",
      "engineer 工程师", "programmer 程序员", "accountant 会计", "journalist 记者", 
      "reporter 记者", "librarian 图书管理员", "chemist 药剂师"
    ]
  },
  {
    id: 2,
    em: "🎓",
    t: "Step 2: 学历背景与硬性门槛",
    s: "Qualifications & Requirements",
    c: "#a78bfa",
    nr: "👔 招聘经理 Manager",
    np: "What qualifications and skills do you possess?",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "学历文凭 (Qualifications)：a diploma in tourism (旅游专业) / qualification in English (英语) / basic requirement: Maths (基本要求: 数学)"],
      [1, "相关证书：does/doesn't have a licence for trucks (卡车驾照，注意复数)"],
      [1, "过期限制：certificate expires in October (证书10月过期) / \"My certificate is valid until October\" (有效期到十月)"],
      [1, "硬性经验与技能：experience (essential) (必须有相关经验) / good IT skills (良好的电脑技术)"],
      [1, "语言加分：at least one other language is desirable (掌握另一门语言是加分项) / a certificate in Italian (意大利语 - 语言类首字母必须大写！)"],
      [1, "身体/生理硬指标：must be over age 19 (19岁以上) / at least 168 cm tall (至少168) / Good vision (视力好 - 救生员/司机必备)"],
      [1, "生存/物理技能：must be able to swim (必须会游泳) / Qualification for water safety: diving (潜水资格)"]
    ],
    trap: "注意听录音里 mandatory/must (必须的) 和 desirable/advantage (理想的/加分项) 的区别。考官经常在这里设陷阱。",
    trapLabel: "姥姥提醒"
  },
  {
    id: 3,
    em: "⏰",
    t: "Step 3: 档期、偏好与薪酬期望",
    s: "Schedule & Salary",
    c: "#38bdf8",
    nr: "💰 财务/人事 HR",
    np: "Let's discuss your preferred working hours.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "约定工时 (work hours)：具体说几点到几点 from 8.30 am to 2pm，或周几 Monday to Friday"],
      [1, "工时描述：flexible (灵活的) / No work on a Sunday (周日不工作)"],
      [1, "排班与班次：fixed schedule (固定排班), shift work (轮班), flexible hours (弹性工作), day shift (白班), night shift (晚班), do/work overtime (加班)"],
      [1, "休假换算：once a month (每月一次) 往往在录音中被替换为 every 4 weeks；休息日叫 a day-off"],
      [1, "可用 (available) 档期：精确到月份，如 August (八月)，或者精确到周几 Preferred working time: Saturday mornings"],
      [1, "医疗与保障 (Protection)：从事体力劳动，必须确认 Has medical insurance (有医疗保险)"],
      [1, "试用期：Probation period: 6 months (试用期6个月)"]
    ],
    trap: "兼职与全职算账方式不同。务必分清 permanent job (永久职位) 和 temporary job/contract (临时工/合同)，区分 full-time (全职) 和 part-time (兼职)。农场等HR还会问 preferred to be paid by hour (按小时结账) 还是 by day (按天结账)。",
    trapLabel: "姥姥提醒",
    vt: "薪酬表达词库",
    vw: ["salary 通常指月薪/年薪", "pay 泛指薪水", "income 收入"]
  },
  {
    id: 4,
    em: "🤝",
    t: "Step 4: 过往经验与个人特质",
    s: "Experience & Traits",
    c: "#fb923c",
    nr: "👔 面试官 Interviewer",
    np: "Could you tell me about your previous experience?",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "处理客诉：dealing with questions from supermarket customers (处理超市顾客的问题)"],
      [1, "基层服务岗：has a part-time job as a waiter (服务员) / worked at the beach as a lifeguard (救生员)"],
      [1, "协作能力：working in a team (团队合作)"],
      [1, "志愿者履历：赛事服务 a volunteer coach/guide (教练)"],
      [1, "社区服务：working in a community centre with elderly people (在社区中心与老人一起工作)"]
    ]
  },
  {
    id: 5,
    em: "📋",
    t: "Step 5: 岗位职责与入职培训",
    s: "Duties & Training",
    c: "#a78bfa",
    nr: "👔 部门主管 Manager",
    np: "Here are your main responsibilities and training.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "日常职责 (Duties)：giving safety demonstration (安全演示) / serving food (提供食物) / responsibility for cash/money from sales (保管销售现金)"],
      [1, "培训内容：应急处理 what to do in case of illness (突发疾病) during a flight / 跨文化交际 awareness of different cultures (了解不同文化)"],
      [1, "预约管理：making appointments (安排预约)"],
      [1, "数据维护：maintaining the internal database (内部数据库)"],
      [1, "库存物流：maintaining stock and organising deliveries (组织进送货/外卖)"],
      [1, "配饰禁忌 (Accessory)：出于安全或卫生原因，禁止佩戴 necklace (项链), bracelet (手镯), scarf (围巾)"]
    ],
    vt: "服装鞋帽词库",
    vw: ["uniform 制服", "sneaker/trainer 运动鞋", "slipper 拖鞋", "hat 帽子", "helmet 头盔", "gloves 手套"]
  },
  {
    id: 6,
    em: "🎁",
    t: "Step 6: 员工福利与行政后勤",
    s: "Benefits & Admin",
    c: "#f87171",
    nr: "👔 招聘经理 HR",
    np: "Let's talk about the perks of working here.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "着装要求 (Dress code)：You don't have to buy a uniform (你不必自己买制服)"],
      [1, "员工福利 (Benefits/Perks)：技能提升 training provided for all staff (全员提供培训)"],
      [1, "交通补贴：taxi provided after midnight (半夜下班报销打车费)"],
      [1, "免费停车：parking is available onsite (园区内可停车)"],
      [1, "背景调查：需提供 reference (推荐人/推荐信)"],
      [1, "身份证明：ID card (身份证), passport (护照), driving license (驾照)"],
      [1, "职业发展路径 (Career Path)：从 internship (实习) 开始。公司提供 training course (培训课程)。看重 promotion prospect (晋升前景)，努力 get promoted (升职)。"]
    ],
    trap: "关于工作装备，雅思最爱考的是“谁来提供”。录音里拉扯：“你需要穿黑皮鞋，这个自己带；但是制服 (uniform) 公司会免费提供。”一定要听清主语和动作！",
    trapLabel: "姥姥提醒"
  }
];

export const jobScenario: Scenario = {
  id: 'job',
  name: '求职与志愿者篇',
  icon: '💼',
  steps: JOB_STEPS,
  description: "在雅思听力中找工作，本质上是一场标准化的面试流程。看透这 6 个模块，你就掌握了剑桥出题人的“用人标准”与“考察词库”。"
};
