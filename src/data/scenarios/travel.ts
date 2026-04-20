import { StepData, Scenario } from '../../types';

export const TRAVEL_STEPS: StepData[] = [
  {
    id: 1,
    em: "✈️",
    t: "Step 1: 出行规划与预算敲定",
    s: "Trip Planning & Budgeting",
    c: "#00ff88",
    nr: "🗺️ 旅游顾问 Consultant",
    np: "How can I help you with your holiday plans?",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "出行目的：holiday (度假) / business (出差) / wedding (婚礼) / honeymoon (蜜月)"],
      [1, "档期：具体日子 (27th June) 或回访时间 (Thursday morning 周四上午)"],
      [1, "行程时长：lasted a week (持续一周) / number of nights (入住晚数)"],
      [1, "参团门槛：minimum number of people 35 (最少35人)"],
      [1, "最佳季节：autumn (秋季)；时间限制：night (不开放)"],
      [1, "出行准备：sunscreen (防晒霜), shampoo (洗发水), toothpaste (牙膏), towel (毛巾), medication (药物), passport (护照), visa (签证)"]
    ],
    trap: "只要考数字，必定一波三折！比如问一晚多少钱，录音会说“平时是150，但下个月特价 110”。订单通常保留 a week (一周)。预订渠道：can only be booked online (只能线上预订)。",
    trapLabel: "姥姥提醒",
    vt: "预算与标准词库",
    vw: ["budget 经济型", "standard 标准型", "luxury 豪华型", "peak season 旺季", "off-season 淡季", "cheapest tour 最便宜", "online booking 线上预订"],
    sq: [
      {
        t: "📍 支线：出发日子与保留期",
        tr: "确认出发时间与订单状态",
        it: [
          "🔸 start their trips on Sunday / 每月特定日期",
          "🔸 Bookings held for a week (订单保留一周)"
        ]
      }
    ]
  },
  {
    id: 2,
    em: "🏨",
    t: "Step 2: 敲定住宿与交通",
    s: "Accommodation & Transport",
    c: "#a78bfa",
    nr: "🏨 酒店前台 Reception",
    np: "We have several options for your stay.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "住宿：resort (度假村) / campsite (露营地) / cabin (小木屋) / hostel (青旅)"],
      [1, "交通：bicycle trips (骑行) / coach transfer (大巴接送) / shuttle service (班车服务)"],
      [1, "选址：city centre (市中心) / business area (商业区)"],
      [1, "房型设施：5th floor (5楼), good view (视野好), garden, pool, gym (健身房), laundry (洗衣房)"],
      [1, "窗外风景：view of mountains (山景) / beach (海滩)"],
      [1, "信息来源：从 cousin (表亲) 那里听说的"]
    ],
    trap: "只要考到距离，极大概率会有“步行”和“开车”的时间差陷阱。比如“走路要一个多小时，但开车只要 40 分钟”。",
    trapLabel: "姥姥提醒",
    vt: "设施与服务词库",
    vw: ["fully-catered 全包餐", "accommodation 住宿", "flights 航班", "heated pool 恒温泳池", "microwave 微波炉", "cinema 电影院", "museum 博物馆"],
    sq: [
      {
        t: "📍 支线：细节控专区",
        tr: "眺望风景与自助厨房",
        it: [
          "🔸 overlook / view of mountains 眺望山景",
          "🔸 heated swimming pool 恒温泳池",
          "🔸 Self-catering 自助煮饭的：fridge（冰箱）, oven（烤箱）, microwave（微波炉）"
        ]
      }
    ]
  },
  {
    id: 3,
    em: "🏄",
    t: "Step 3: 具体活动、景色",
    s: "Activities & Scenery",
    c: "#00ff88",
    nr: "🛶 活动领队 Guide",
    np: "There are many exciting activities to choose from!",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "水上：diving (潜水) / surfing (冲浪) / sailing (帆船)"],
      [1, "陆地：bowling (保龄球), cycling (骑行), hiking (徒步), rock climbing (攀岩), camping (露营), skiing (滑雪), tennis courts (网球场)"],
      [1, "室内：drama (戏剧) / cookery (烹饪课) / opera (歌剧) / talk (讲座)"],
      [1, "装备：helmet (头盔), boots (靴子), jacket (夹克), bicycle hire (单车租赁), camping gear (露营装备)"],
      [1, "看动物：birds (鸟类) / insects (昆虫) / camel (骆驼) / donkey (驴) / horses (马)"]
    ],
    vt: "地形与景观词库",
    vw: ["jungle 丛林", "trails 小径", "nature reserve 自然保护区", "coast 海岸", "bay 海湾", "plain 平原", "desert 沙漠", "waterfall 瀑布", "castle 城堡", "cave 洞穴", "statue 雕塑", "fountain 喷泉"],
    sq: [
      {
        t: "📍 支线：出行交通大全",
        tr: "各种海陆空交通工具",
        it: [
          "🔸 airplane （飞机） / helicopter（直升机） / ferry (轮渡)",
          "🔸 shuttle bus（接驳车） / taxi （出租车）/ cable car (缆车)",
          "🔸 drone (无人机) / bicycle（单车）"
        ]
      }
    ]
  },
  {
    id: 4,
    em: "🎭",
    t: "Step 4: 演出剧目与黄金逻辑",
    s: "Performances & Logic",
    c: "#a78bfa",
    nr: "🎟️ 票务中心 Tickets",
    np: "Would you like to attend a live performance?",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "现场表演：live piano (钢琴现场伴奏)"],
      [1, "音乐流派：jazz (爵士), pop (流行), blues (蓝调), folk (民谣), rock (摇滚)"],
      [1, "表演实体：band (乐队), choir (合唱团), guitar (吉他), piano (钢琴)"],
      [1, "常规剧目：concert (音乐会), ballet (芭蕾舞), jazz band (爵士乐队)"],
      [1, "伴奏乐器：flute (长笛), guitar, piano, violin (小提琴), cello (大提琴)"],
      [1, "文化体验：cultural centre (文化中心), traditional costume museum (传统服饰博物馆), glass (玻璃) / pottery (陶器)"]
    ],
    trap: "黄金时序逻辑：A is followed by B (A结束之后紧接着是B)。看到 followed by，就是在考你 After the event 发生了什么！通常是 talk（演讲） 或 dinner/lunch。",
    trapLabel: "姥姥提醒",
    vt: "评价与消费词库",
    vw: ["fireworks 烟火", "review 评论/评价", "electronics factory 电子厂", "fish market 鱼市", "fruit market 果市", "traditional market 传统集市"]
  },
  {
    id: 5,
    em: "🍽️",
    t: "Step 5: 食物与特殊要求",
    s: "Food & Special Requirements",
    c: "#fb923c",
    nr: "👨‍🍳 餐厅经理 Manager",
    np: "Do you have any dietary requirements?",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "地点：rooftop terrace (屋顶露台)"],
      [1, "菜品：fish (鱼) / seafood (海鲜) / meat (肉) / chicken dishes (鸡肉菜肴)"],
      [1, "餐厅风味（都可以作为形容词修饰餐厅）：Spanish, Italian (意式), local (当地), traditional (传统), international (国际)+restaurant"],
      [1, "健康：organic (有机的), fresh (新鲜), healthy (健康), sugar-free (无糖), vegetarian (素食), vegan (纯素)"],
      [1, "特殊要求（can't eat/ be allergic to）：cheese (对芝士过敏), meat (吃素), nuts (坚果过敏), eggs (鸡蛋过敏)"]
    ],
    vt: "用餐场景词库",
    vw: ["be followed by dinner 随后是晚餐", "barbecue 烧烤", "grilled lamb 烤羊肉", "cookery course 烹饪课", "be allergic to 对...过敏"]
  },
  {
    id: 6,
    em: "💳",
    t: "Step 6: 结账与持卡人核对",
    s: "Payment & Verification",
    c: "#f87171",
    nr: "💰 财务结算 Finance",
    np: "How would you like to pay for the booking?",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=300&q=80",
    tips: [
      [1, "付款方式：cash (现金) / cheque (支票) / credit card (信用卡)"],
      [1, "核对信息：Credit card holder (持卡人姓名)"]
    ]
  }
];

export const travelScenario: Scenario = {
  id: 'travel',
  name: '旅游报团篇',
  icon: '✈️',
  steps: TRAVEL_STEPS,
  description: "无论什么旅游报团题，绝对逃不出这些步骤"
};
