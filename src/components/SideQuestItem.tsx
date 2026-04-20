import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SideQuest } from '../types';
import VocabList from './VocabList';
import { sfxClick, speak } from '../lib/audio';

interface SideQuestItemProps {
  quest: SideQuest;
}

const SideQuestItem: React.FC<SideQuestItemProps> = ({ quest }) => {
  // 支线任务组件：可展开/收起，包含额外的听力细节和词汇
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    sfxClick();
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <button
        onClick={toggle}
        className="w-full text-left p-2.75 rounded-xl border border-[rgba(56,189,248,0.18)] bg-[rgba(56,189,248,0.04)] cursor-pointer transition-colors hover:bg-[rgba(56,189,248,0.08)]"
      >
        <div className="flex justify-between items-center">
          <span className="text-[13px] font-bold text-[#38bdf8]">{quest.t}</span>
          <span
            className={`text-[#38bdf8] text-[11px] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            ▼
          </span>
        </div>
        <div className="text-[11px] text-[#64748b] mt-0.75">
          🗣️ {quest.tr}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="p-3.5 mt-0.5 mb-2 rounded-xl border border-[rgba(56,189,248,0.1)] bg-[rgba(0,0,0,0.3)]"
          >
            {quest.nt && (
              <div className="text-xs text-[#fb923c] bg-[rgba(255,136,0,0.07)] rounded-md px-2.75 py-1.75 border border-[rgba(255,136,0,0.12)] mb-2.25">
                ⚡ {quest.nt}
              </div>
            )}
            {quest.it.map((item, i) => (
              <button 
                key={i} 
                onClick={() => speak(item)}
                className="group w-full text-left text-[13px] text-[#cbd5e1] mb-1.25 cursor-pointer hover:text-[#38bdf8] transition-all flex items-center justify-between"
              >
                <span>{item}</span>
                <span className="opacity-0 group-hover:opacity-40 transition-opacity text-[10px] ml-2">🔊</span>
              </button>
            ))}
            {quest.vw && quest.vt && (
              <VocabList title={quest.vt} words={quest.vw} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideQuestItem;
