export function sfxUnlock() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const a = new AudioContext();
    const notes: [number, number, number, number][] = [
      [880, 0, 0.1, 0.3],
      [1320, 0.07, 0.08, 0.38],
      [2200, 0.12, 0.04, 0.45],
    ];
    for (const n of notes) {
      const o = a.createOscillator();
      const g = a.createGain();
      o.connect(g);
      g.connect(a.destination);
      o.frequency.setValueAtTime(n[0], a.currentTime + n[1]);
      o.type = n[0] < 2000 ? 'sine' : 'triangle';
      g.gain.setValueAtTime(n[2], a.currentTime + n[1]);
      g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + n[3]);
      o.start(a.currentTime + n[1]);
      o.stop(a.currentTime + n[3]);
    }
  } catch (e) {
    console.warn('Audio context failed', e);
  }
}

export function sfxClick() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const a = new AudioContext();
    const o = a.createOscillator();
    const g = a.createGain();
    o.connect(g);
    g.connect(a.destination);
    o.frequency.setValueAtTime(660, a.currentTime);
    g.gain.setValueAtTime(0.05, a.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + 0.1);
    o.start();
    o.stop(a.currentTime + 0.1);
  } catch (e) {
    console.warn('Audio context failed', e);
  }
}

let synth: SpeechSynthesis | null = null;
if (typeof window !== 'undefined') {
  synth = window.speechSynthesis;
}

export function speak(text: string) {
  if (!synth) return;

  // 取消当前正在进行的语音
  synth.cancel();

  // 清洗文本以获得更好的发音效果
  let textToSpeak = text;
  
  // 1. 移除可能干扰引擎的表情符号和特殊符号
  textToSpeak = textToSpeak.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');

  // 2. 将斜杠替换为 " or "，使列表阅读更自然
  textToSpeak = textToSpeak.replace(/\//g, ' or ');

  // 3. 将全角冒号等符号替换为标准符号
  textToSpeak = textToSpeak.replace(/：/g, ': ');
  textToSpeak = textToSpeak.replace(/——/g, ', ');

  // 4. 如果是中英混排，我们通常希望清晰地听到英文部分
  if (/[\u4e00-\u9fa5]/.test(textToSpeak)) {
    // 如果是 "单词 翻译" 模式，只取单词
    // 例如: "dentist 牙医" -> "dentist"
    const simplePattern = textToSpeak.match(/^([a-zA-Z0-9\s,.'?!:;()\-]+)\s+[\u4e00-\u9fa5]+/);
    if (simplePattern) {
      textToSpeak = simplePattern[1].trim();
    } else {
      // 否则，直接剥离中文字符，让英文流畅阅读
      textToSpeak = textToSpeak.replace(/[\u4e00-\u9fa5]+/g, ' ');
    }
  }

  // 5. 最终清理空格和多个点
  textToSpeak = textToSpeak.replace(/\.{2,}/g, '... '); // 确保省略号后有空格以产生停顿
  textToSpeak = textToSpeak.replace(/\s+/g, ' ').trim();

  if (!textToSpeak) return;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  
  // 尝试寻找自然好听的英文语音
  const voices = synth.getVoices();
  
  // 优先级: Google US English > Microsoft Zira > 任何 EN-US > 任何 EN
  const preferredVoice = 
    voices.find(v => v.name.includes('Google US English')) ||
    voices.find(v => v.name.includes('Microsoft Zira')) ||
    voices.find(v => v.lang === 'en-US') ||
    voices.find(v => v.lang.startsWith('en'));

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.rate = 0.9; // 稍微放慢语速以提高清晰度
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  synth.speak(utterance);
}
