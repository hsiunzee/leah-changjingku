import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Starfield from './components/Starfield';
import StepCard from './components/StepCard';
import SideNav from './components/SideNav';
import { SCENARIOS } from './data/scenarios';
import { sfxClick } from './lib/audio';
import { cn } from './lib/utils';
import { Copy, Check } from 'lucide-react';

export default function App() {
  // 当前选中的场景 ID (默认为第一个场景)
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIOS[0].id);
  // 复制成功状态
  const [copied, setCopied] = useState(false);

  // 根据 ID 查找当前场景对象
  const activeScenario = SCENARIOS.find(s => s.id === activeScenarioId) || SCENARIOS[0];
  const steps = activeScenario.steps;

  // 复制微信号功能
  const copyWeChat = () => {
    navigator.clipboard.writeText('idrinkmoscato0');
    setCopied(true);
    sfxClick();
    setTimeout(() => setCopied(false), 2000);
  };

  // 切换场景标签
  const handleTabChange = (id: string) => {
    sfxClick();
    setActiveScenarioId(id);
  };

  return (
    <div className="relative z-10 max-w-[640px] mx-auto px-4 pb-24 font-sans">
      <Starfield />
      
      {/* 侧边导航 (蓝图索引) */}
      <SideNav steps={steps} activeScenarioId={activeScenarioId} />

      {/* 头部标题区域 */}
      <div className="text-center pt-9 pb-7">
        <div className="inline-block px-3.5 py-1 rounded-full border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.06)] text-[10px] text-[#00ff88] tracking-widest font-mono mb-3.5">
          IELTS LISTENING UNIVERSE
        </div>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-2.5">
          <span className="bg-linear-to-r from-[#00ff88] via-[#00d4ff] to-[#a78bfa] bg-clip-text text-transparent">
            雅思P1
          </span>
          <br />
          场景剧本库
        </h1>
        <p className="text-[#94a3b8] text-sm leading-relaxed">
          {activeScenario.description}
          <br />
          <span className="text-[11px] text-[#4b5563]">
            配合 Leah 老师视频讲解食用更佳
          </span>
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-2 mt-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[#1e293b] text-[11px] text-[#64748b]">
            <span>👑 Leah's IELTS Lab</span>
            <span className="text-[#334155]">|</span>
            <button 
              onClick={copyWeChat}
              className="flex items-center gap-1.5 hover:text-[#00ff88] transition-colors group"
            >
              <span>微信: idrinkmoscato0</span>
              {copied ? <Check size={12} className="text-[#00ff88]" /> : <Copy size={12} className="opacity-50 group-hover:opacity-100" />}
            </button>
            <span className="text-[#334155]">|</span>
            <div className="flex items-center gap-1.5 text-[#64748b]">
              <div className="w-3.5 h-3.5 bg-[#ff2442] rounded-[3px] flex items-center justify-center text-[8px] text-white font-bold scale-90">书</div>
              <span>小红书: 卡列鱼木</span>
            </div>
          </div>
        </div>
      </div>

      {/* 场景切换标签栏 */}
      <div className="flex justify-center gap-2 mb-8">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => handleTabChange(s.id)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 border",
              activeScenarioId === s.id 
                ? "bg-[rgba(0,255,136,0.1)] border-[#00ff88] text-[#00ff88] shadow-[0_0_12px_rgba(0,255,136,0.2)]" 
                : "bg-[rgba(15,23,42,0.6)] border-[#1e293b] text-[#64748b] hover:border-[#334155]"
            )}
          >
            <span>{s.icon}</span>
            {s.name}
          </button>
        ))}
      </div>

      {/* 路线图树状结构 - 全部展开模式 */}
      <div className="flex flex-col items-center">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={`${activeScenarioId}-${step.id}`}>
              <div 
                id={`step-${step.id}`}
                className="flex items-center gap-3.5 w-full max-w-[360px] scroll-mt-24"
              >
                {/* 节点图标 */}
                <div
                  className="relative w-15 h-15 rounded-xl flex items-center justify-center text-2xl shrink-0 outline-2 outline-offset-0"
                  style={{
                    outlineColor: step.c,
                    background: `${step.c}0d`,
                    boxShadow: `0 0 16px ${step.c}28`
                  }}
                >
                  {step.em}
                  <span
                    className="absolute -top-1.75 -right-1.75 w-5 h-5 rounded-full text-[9px] font-extrabold font-mono flex items-center justify-center text-black"
                    style={{ background: step.c }}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* 节点简要信息 */}
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-bold truncate" style={{ color: step.c }}>
                    {step.s}
                  </div>
                  <div className="text-[10px] font-mono mt-0.5 text-[#64748b]">
                    📖 详情已展开
                  </div>
                </div>
              </div>

              {/* 步骤详情卡片 - 始终可见 */}
              <div className="w-full">
                <StepCard step={step} onClose={() => {}} isStatic={true} />
              </div>

              {/* 节点间的连接光束 */}
              {!isLast && (
                <div className="w-0.5 h-11 my-0.75 rounded-full bg-linear-to-b from-[#00ff88] via-[rgba(0,255,136,0.05)] via-[#a78bfa] via-[rgba(167,139,250,0.05)] to-[#00ff88] animate-beam" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* 底部奖励/总结区域 */}
      <div className="mt-10 mx-auto max-w-[460px]">
        <div className="p-7.5 rounded-[20px] border border-[rgba(255,215,0,0.22)] bg-linear-to-br from-[rgba(120,80,0,0.08)] to-[rgba(160,80,0,0.05)] text-center shadow-[0_0_25px_rgba(255,215,0,0.1)]">
          <div className="text-[44px] mb-2.5">🏆</div>
          <h3 className="text-lg font-bold text-[#fbbf24] font-mono mb-2">
            UNIVERSE EXPLORED
          </h3>
          <p className="text-[#94a3b8] text-[13px]">
            已为您展示「{activeScenario.name}」全部步骤！
          </p>
          <p className="text-[11px] text-[#475569] mt-1.5">
            配合视频讲解，雅思听力 P1 稳拿满分 ↑
          </p>
        </div>
      </div>

      <div className="text-center mt-12 opacity-20 text-[10px] text-[#475569] tracking-widest font-mono">
        LEAH'S IELTS LAB · RENTAL UNIVERSE v3.0
      </div>
    </div>
  );
}
