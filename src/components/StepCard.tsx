import React from 'react';
import { motion } from 'motion/react';
import { StepData } from '../types';
import VocabList from './VocabList';
import SideQuestItem from './SideQuestItem';
import { sfxClick, speak } from '../lib/audio';

interface StepCardProps {
  step: StepData;
  onClose: () => void;
  isStatic?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, onClose, isStatic = false }) => {
  return (
    <motion.div
      initial={isStatic ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      className="w-full my-3 mb-5"
    >
      <div
        className="rounded-2xl p-4.5 sm:p-5 relative overflow-hidden"
        style={{
          border: `1px solid ${step.c}44`,
          background: `${step.c}0c`,
          boxShadow: `0 0 18px ${step.c}22`,
        }}
      >
        <div
          className="absolute top-0 right-0 w-20 h-20 rounded-bl-full pointer-events-none"
          style={{
            background: `linear-gradient(225deg, ${step.c}0a, transparent)`,
          }}
        />

        {/* 顶部标题栏 */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-[26px]">{step.em}</span>
            <div>
              <h3 className="text-base font-bold" style={{ color: step.c }}>
                {step.t}
              </h3>
              <div className="text-[11px] text-[#64748b] font-mono">
                {step.s}
              </div>
            </div>
          </div>
          {!isStatic && (
            <button
              onClick={() => {
                sfxClick();
                onClose();
              }}
              className="w-7 h-7 rounded-full border border-[#334155] bg-transparent text-[#64748b] cursor-pointer text-xs flex items-center justify-center hover:text-white hover:border-[#94a3b8]"
            >
              ✕
            </button>
          )}
        </div>

        {/* 步骤插图 */}
        {step.image && (
          <div className="mb-4 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)]">
            <img
              src={step.image}
              alt={step.t}
              className="w-full h-auto object-cover aspect-video"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* 模拟对话/原生表达 */}
        <div className="mb-3.5 animate-slideR">
          <div className="text-[11px] text-[#a78bfa] font-mono mb-1">
            {step.nr}
          </div>
          <button 
            onClick={() => speak(step.np)}
            className="text-left w-full group relative bg-linear-to-br from-[rgba(139,92,246,0.12)] to-[rgba(139,92,246,0.03)] border border-[rgba(139,92,246,0.28)] rounded-tr-xl rounded-br-xl rounded-bl-xl p-2.5 px-3.5 max-w-[380px] text-[13px] text-[#cbd5e1] italic font-mono cursor-pointer hover:bg-[rgba(139,92,246,0.08)] transition-colors active:scale-[0.99]"
          >
            “{step.np}”
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-opacity text-[10px]">🔊</span>
          </button>
        </div>

        {/* 核心要点/Tips */}
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-xs font-bold text-[#00ff88] tracking-widest font-mono">
              🎯 {step.trapLabel || 'LEAH 剧透'}
            </span>
            <div className="flex-1 h-px bg-linear-to-r from-[rgba(0,255,136,0.3)] to-transparent" />
          </div>
          {step.tips.map((tip, i) => {
            const isTrap = tip[0] === 0;
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                onClick={() => speak(tip[1])}
                className={`group w-full text-left flex items-start gap-2.5 p-2.25 px-3 rounded-lg mb-1.75 cursor-pointer transition-all hover:translate-x-1 active:scale-[0.99] relative ${
                  isTrap
                    ? 'border border-[rgba(255,68,68,0.18)] bg-[rgba(255,68,68,0.03)]'
                    : 'border border-[rgba(0,255,136,0.12)] bg-[rgba(0,255,136,0.03)]'
                }`}
              >
                <span
                  className={`text-sm shrink-0 leading-relaxed ${
                    isTrap ? 'animate-flash' : ''
                  }`}
                >
                  {isTrap ? '⚠️' : '🎯'}
                </span>
                <span
                  className={`text-[13px] leading-relaxed flex-1 ${
                    isTrap ? 'text-[#fb923c]' : 'text-[#cbd5e1]'
                  }`}
                >
                  {tip[1]}
                </span>
                <span className="opacity-0 group-hover:opacity-40 transition-opacity text-[10px] self-center ml-2">🔊</span>
              </motion.button>
            );
          })}
        </div>

        {/* 陷阱提醒区域 */}
        {step.trap && (
          <div className="mt-3.5 p-3.5 rounded-xl border border-[rgba(255,68,68,0.28)] bg-linear-to-br from-[rgba(255,68,68,0.06)] to-[rgba(255,136,0,0.04)] shadow-[0_0_12px_rgba(255,68,68,0.1)]">
            <div className="flex items-start gap-2.5">
              <span className="text-xl animate-flash">🚨</span>
              <div>
                <div className="text-[10px] text-[#ef4444] font-bold tracking-widest font-mono mb-0.75">
                  ⚡ {step.trapLabel || 'HIGH ENERGY WARNING'} ⚡
                </div>
                <div className="text-[13px] text-[#fb923c] leading-relaxed">
                  {step.trap}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 词汇表 */}
        {step.vw && step.vt && <VocabList title={step.vt} words={step.vw} />}

        {/* 隐藏支线任务 */}
        {step.sq && step.sq.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 my-4 mb-2.5">
              <span className="text-xs font-bold text-[#38bdf8] tracking-widest font-mono">
                🗺️ 隐藏支线
              </span>
              <div className="flex-1 h-px bg-linear-to-r from-[rgba(56,189,248,0.3)] to-transparent" />
            </div>
            {step.sq.map((q, i) => (
              <SideQuestItem key={i} quest={q} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StepCard;
