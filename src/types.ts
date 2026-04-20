export interface SideQuest {
  t: string;
  tr: string;
  nt?: string;
  it: string[];
  vt?: string;
  vw?: string[];
}

export interface StepData {
  id: number;
  em: string;
  t: string;
  s: string;
  c: string;
  nr: string;
  np: string;
  tips: [number, string][];
  trap?: string;
  trapLabel?: string; // Custom label for the trap box (e.g., "姥姥提醒")
  vt?: string;
  vw?: string[];
  sq?: SideQuest[];
  image?: string; // Optional image URL or keyword
}

export interface Scenario {
  id: string;
  name: string;
  icon: string;
  steps: StepData[];
  description: string;
}
