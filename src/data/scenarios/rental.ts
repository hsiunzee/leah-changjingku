import { StepData, Scenario } from '../../types';

export const RENTAL_STEPS: StepData[] = [
  {
    id: 1,
    em: "🔍",
    t: "Step 1：查户口",
    s: "登记个人信息",
    c: "#00ff88",
    nr: "🏢 中介 Agent",
    np: "Can I take your details first?",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "名字拼写 —— 逐字母听写！"],
      [0, "电话/邮编可能读错再改口：“My number is 077… oh sorry, that’s my work phone, my mobile is…”"],
      [1, "当前职业 Occupation：dentist / engineer / nurse"]
    ],
    trap: "考官最爱用过去式骗你！\"I used to be a teacher, but now I'm a…\" 听到 used to 别急着写！",
    trapLabel: "姥姥提醒",
    vt: "高频职业词库",
    vw: ["dentist 牙医", "engineer 工程师", "nurse 护士", "accountant 会计", "receptionist 前台接待员"]
  },
  {
    id: 2,
    em: "🏠",
    t: "Step 2：提条件",
    s: "挑房型 + 周边环境",
    c: "#a78bfa",
    nr: "🏢 中介 Agent",
    np: "What exactly are you looking for?",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "房型：studio (开间) / apartment (公寓) / flat (单元房)，必须带 en suite (独卫) & laundry (洗衣房)"],
      [1, "周边：be near a… 后面考 station (车站) / supermarket (超市) / park (公园)"],
      [1, "附加设施：balcony (阳台) / garden (花园) / garage (车库) / parking area (停车区) / pool (泳池)"]
    ],
    vt: "房型与设施词库",
    vw: ["balcony 阳台", "garden 花园", "garage 车库", "parking area 停车区", "pool 游泳池", "en suite 独卫", "laundry 洗衣房"],
    sq: [
      {
        t: "📍 支线：看房微观细节",
        tr: "聊完大方向，开始聊内部装修和电器",
        nt: "注意听卷面问的是 Furnished 装修过的（拎包入住）还是 Unfurnished 没装修的 （家徒四壁）！",
        it: [
          "🔸 地板 Flooring： out of wood （木质地板）极高频，偶尔铺了 carpet（地毯）",
          "🔸 布局 Layout：楼上 bedrooms，楼下 dining room / living room",
          "🔸 阳台只能用 electric cooker（电子炊具），不许 barbecue（烧烤），怕明火"
        ],
        vt: "室内设施完整词库",
        vw: ["stove 炉子🔥", "oven 烤箱🍞", "microwave 微波炉⚡", "fridge 冰箱❄️", "freezer 冷冻柜🧊", "shower 淋浴🚿", "bath 浴缸🛀", "washing machine 洗衣机🧺", "dishwasher 洗碗机🍽️", "lockers 储物柜🔐", "shelf 架子📚", "wallpaper 壁纸🌸", "curtain 窗帘🌃", "lamp 灯具💡", "furniture 家具🛋️"]
      }
    ]
  },
  {
    id: 3,
    em: "💰",
    t: "Step 3：报预算",
    s: "拉扯租金 + 押金",
    c: "#00ff88",
    nr: "🏢 中介 Agent",
    np: "What about the rent and other requirements?",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [0, "卷面写 Maximum rent £___ a month，录音说“租金600，加水电650” —— 看清纯房租还是含 bills！"],
      [1, "租金区间：Maximum（最高值） / Minimum（最低值） / Average（平均价格）"],
      [1, "入住门槛：deposit (押金) + reference (推荐信)"]
    ],
    trap: "deposit（押金）和 references（推荐信）是签约必现词！通常要求 two references。",
    trapLabel: "姥姥提醒",
    vt: "费用与支付词库",
    vw: ["deposit 押金", "reference 推荐信", "credit card 信用卡", "cheque 支票", "cash 现金", "per week/month 每周/每月 （缴费频率）"],
    sq: [
      {
        t: "📍 支线：隐藏账单",
        tr: "表格出现 Additional costs 或 inclusive",
        it: [
          "🔸 all-inclusive（全包）vs meals not included（不包饭的）",
          "🔸 自己交：gas（煤气） & electricity（电费）, heating（暖气）, Internet（网费）"
        ],
        vt: "隐藏费用概念",
        vw: ["all-inclusive 全包", "bills included 含账单", "exclusive 不含账单", "extra charge 额外收费"]
      },
      {
        t: "📍 支线：租期陷阱",
        tr: "讨论 Contract（合同） / Arrangements（安排）",
        it: [
          "🔸 学校宿舍放假必须搬走 → not available during holidays",
          "🔸 寄宿家庭租期不卡死 → arrangements are flexible（灵活的）"
        ]
      }
    ]
  },
  {
    id: 4,
    em: "📍",
    t: "Step 4：看周边",
    s: "租客提要求",
    c: "#a78bfa",
    nr: "🤵 租客 Tenant",
    np: "Is there anything specific you need nearby?",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "买菜：local supermarket (当地超市)"],
      [1, "溜娃/遛狗：Place for children → park (公园)"],
      [1, "教育资源：primary school (小学)"],
      [1, "看书自习：library (图书馆)"]
    ]
  },
  {
    id: 5,
    em: "🏗️",
    t: "Step 5：查物业",
    s: "整栋楼的设施",
    c: "#a78bfa",
    nr: "🏢 中介 Agent",
    np: "The building also has shared facilities…",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "启动洗衣机往往需要投币（coin或者刷卡card）"],
      [1, "有没有locker (储物柜) 来存放东西"],
      [1, "有没有bicycle racks (自行车架) 来放单车"],
      [1, "有没有大楼安保 (security)"]
    ]
  },
  {
    id: 6,
    em: "🧺",
    t: "Step 6：算细账",
    s: "隐藏账单大公开",
    c: "#fb923c",
    nr: "🏢 中介 Agent",
    np: "Now let’s talk about the additional costs…",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "除基础租金外，还有 bills"],
      [1, "Water, electricity, gas 等生活杂费"],
      [0, "看清是 all-inclusive 还是 bills not included！"]
    ],
    vt: "账单完整词库",
    vw: ["water bill 水费", "electricity bill 电费", "gas bill 燃气费", "heating 暖气", "Internet 网费", "insurance 保险"]
  },
  {
    id: 7,
    em: "🤝",
    t: "Step 7：定面谈",
    s: "终于成交！约看房",
    c: "#f87171",
    nr: "🏢 中介 Agent",
    np: "Great! Let’s arrange a viewing then.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [0, "听写极刁钻的街道名：如 Kerridge (K-E-R-R-I-D-G-E)"],
      [0, "时间陷阱：10:15 = quarter past ten"],
      [1, "核对看房/拿钥匙的具体时间"]
    ],
    trap: "终极Boss关：街道名拼写 + 时间数字双重陷阱！",
    trapLabel: "姥姥提醒",
    sq: [
      {
        t: "📍 支线：约见与指路",
        tr: "约时间地点面谈看房",
        it: [
          "🔸 时间写法：7:40 / 10:15",
          "🔸 街道名必定古怪且需要拼写",
          "🔸 遇人名地名"
        ]
      },
      {
        t: "📍 支线：入住日期陷阱",
        tr: "中介问 When would you like to move in?",
        it: [
          "🔸 租客想10号，中介说只能14号",
          "🔸 重点听最后敲定的数字！",
          "🔸 available = vacant（有空位的）",
          "🔸 租期通常 6 months 或 a year"
        ]
      }
    ]
  }
];

export const rentalScenario: Scenario = {
  id: 'rental',
  name: '中介租房篇',
  icon: '🏠',
  steps: RENTAL_STEPS,
  description: "无论什么中介租房题，绝对逃不出这些步骤"
};
