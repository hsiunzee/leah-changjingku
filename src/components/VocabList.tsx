import React from 'react';
import { speak } from '../lib/audio';

interface VocabListProps {
  title: string;
  words: string[];
}

const VocabList: React.FC<VocabListProps> = ({ title, words }) => {
  // 词汇列表组件：点击单词可触发语音朗读
  return (
    <div className="mt-3.5 rounded-xl border border-[rgba(0,255,136,0.18)] bg-[rgba(0,255,136,0.03)] p-3.5">
      <div className="text-[11px] font-bold text-[rgba(0,255,136,0.6)] font-mono mb-2.5">
        📚 {title}
      </div>
      <div className="flex flex-wrap gap-1.75">
        {words.map((word, i) => (
          <button
            key={i}
            onClick={() => speak(word)}
            className="group relative bg-[rgba(0,0,0,0.35)] rounded-md px-2.75 py-1.25 text-xs text-[rgba(0,255,136,0.75)] border border-[rgba(0,255,136,0.1)] cursor-pointer hover:bg-[rgba(0,255,136,0.1)] transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>{word}</span>
            <span className="opacity-0 group-hover:opacity-60 transition-opacity text-[10px]">🔊</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VocabList;
