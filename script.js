// ===== AudioMaster Pro Studio =====

// ===== Configuration =====
const GENRES = [
  { name: 'Pop', emoji: '🎵' },
  { name: 'Rock', emoji: '🎸' },
  { name: 'Metal', emoji: '🔥' },
  { name: 'EDM', emoji: '⚡' },
  { name: 'Hip-Hop', emoji: '🎤' },
  { name: 'R&B', emoji: '💜' },
  { name: 'Jazz', emoji: '🎷' },
  { name: 'Classical', emoji: '🎻' },
  { name: 'Lo-Fi', emoji: '☕' },
  { name: 'Ambient', emoji: '🌊' },
  { name: 'Reggae', emoji: '🌴' },
  { name: 'Country', emoji: '🤠' },
  { name: 'Blues', emoji: '🎺' },
  { name: 'Folk', emoji: '🏕️' },
  { name: 'Punk', emoji: '🏴' },
  { name: 'Indie', emoji: '🎨' },
  { name: 'Techno', emoji: '🏭' },
  { name: 'House', emoji: '🏠' },
  { name: 'D&B', emoji: '🥁' },
  { name: 'Trap', emoji: '💰' },
  { name: 'K-Pop', emoji: '✨' },
  { name: 'Latin', emoji: '💃' },
  { name: 'Soul', emoji: '❤️' },
  { name: 'Funk', emoji: '🕺' },
  { name: 'Gospel', emoji: '🙏' },
  { name: 'Acoustic', emoji: '🎶' },
  { name: 'Podcast', emoji: '🎙️' },
  { name: 'Cinematic', emoji: '🎬' },
  { name: 'Synthwave', emoji: '🌆' },
  { name: 'Vaporwave', emoji: '🌸' },
  { name: 'Reggaeton', emoji: '🏝️' },
  { name: 'Afrobeats', emoji: '🌍' },
  { name: 'Boom Bap', emoji: '📻' },
  { name: 'Shoegaze', emoji: '🌫️' },
  { name: 'Grunge', emoji: '🖤' },
];



const CONTROL_SECTIONS = [
  {
    id: 'input',
    label: 'Input / Output',
    icon: 'log-in',
    collapsed: false,
    controls: [
      { id: 'inputGain', label: 'Input Gain', min: -24, max: 24, default: 0, unit: 'dB', step: 0.1 },
      { id: 'outputGain', label: 'Output Gain', min: -24, max: 24, default: 0, unit: 'dB', step: 0.1 },
    ]
  },
  {
    id: 'eq',
    label: 'Equalizer — 7 Band',
    icon: 'sliders-horizontal',
    collapsed: false,
    controls: [
      { id: 'subBass', label: 'Sub 60', min: -12, max: 12, default: 0, unit: 'dB', step: 0.1, freq: 60, type: 'lowshelf' },
      { id: 'bass', label: 'Bass 150', min: -12, max: 12, default: 0, unit: 'dB', step: 0.1, freq: 150, type: 'lowshelf' },
      { id: 'lowMid', label: 'Lo Mid 400', min: -12, max: 12, default: 0, unit: 'dB', step: 0.1, freq: 400, type: 'peaking', q: 1.0 },
      { id: 'mid', label: 'Mid 1k', min: -12, max: 12, default: 0, unit: 'dB', step: 0.1, freq: 1000, type: 'peaking', q: 0.7 },
      { id: 'highMid', label: 'Hi Mid 3k', min: -12, max: 12, default: 0, unit: 'dB', step: 0.1, freq: 3000, type: 'peaking', q: 1.0 },
      { id: 'treble', label: 'Treble 6k', min: -12, max: 12, default: 0, unit: 'dB', step: 0.1, freq: 6000, type: 'highshelf' },
      { id: 'air', label: 'Air 12k', min: -6, max: 6, default: 0, unit: 'dB', step: 0.1, freq: 12000, type: 'peaking', q: 0.8 },
    ]
  },
  {
    id: 'compressor',
    label: 'Compressor',
    icon: 'gauge',
    collapsed: true,
    controls: [
      { id: 'compThreshold', label: 'Threshold', min: -60, max: 0, default: -24, unit: 'dB', step: 0.5 },
      { id: 'compRatio', label: 'Ratio', min: 1, max: 20, default: 4, unit: ':1', step: 0.1 },
      { id: 'compAttack', label: 'Attack', min: 0.1, max: 100, default: 10, unit: 'ms', step: 0.1 },
      { id: 'compRelease', label: 'Release', min: 10, max: 1000, default: 100, unit: 'ms', step: 1 },
      { id: 'compKnee', label: 'Knee', min: 0, max: 30, default: 10, unit: 'dB', step: 0.5 },
      { id: 'compMakeup', label: 'Make-Up', min: 0, max: 24, default: 0, unit: 'dB', step: 0.1 },
      { id: 'compSCFilter', label: 'SC HPF', min: 0, max: 500, default: 0, unit: 'Hz', step: 1 },
    ]
  },
  {
    id: 'saturation',
    label: 'Saturation',
    icon: 'flame',
    collapsed: true,
    controls: [
      { id: 'satDrive', label: 'Drive', min: 0, max: 100, default: 0, unit: '%', step: 0.5 },
      { id: 'satMix', label: 'Mix', min: 0, max: 100, default: 100, unit: '%', step: 0.5 },
    ]
  },
  {
    id: 'stereo',
    label: 'Stereo',
    icon: 'move-horizontal',
    collapsed: true,
    controls: [
      { id: 'stereoWidth', label: 'Width', min: 0, max: 200, default: 100, unit: '%', step: 0.5 },
    ]
  },
  {
    id: 'limiter',
    label: 'Brickwall Limiter',
    icon: 'shield',
    collapsed: true,
    controls: [
      { id: 'limCeiling', label: 'Ceiling', min: -6, max: 0, default: -0.3, unit: 'dB', step: 0.1 },
      { id: 'limThreshold', label: 'Threshold', min: -24, max: 0, default: -6, unit: 'dB', step: 0.1 },
      { id: 'limRelease', label: 'Release', min: 10, max: 500, default: 50, unit: 'ms', step: 1 },
    ]
  },
  {
    id: 'gate',
    label: 'Noise Gate',
    icon: 'scan-line',
    collapsed: true,
    controls: [
      { id: 'gateThreshold', label: 'Threshold', min: -80, max: 0, default: -60, unit: 'dB', step: 0.5 },
      { id: 'gateAttack', label: 'Attack', min: 0.1, max: 100, default: 1, unit: 'ms', step: 0.1 },
      { id: 'gateRelease', label: 'Release', min: 10, max: 1000, default: 100, unit: 'ms', step: 1 },
      { id: 'gateHold', label: 'Hold', min: 0, max: 500, default: 0, unit: 'ms', step: 1 },
    ]
  },
  {
    id: 'deesser',
    label: 'De-Esser',
    icon: 'mic',
    collapsed: true,
    controls: [
      { id: 'deEssThreshold', label: 'Threshold', min: -60, max: 0, default: -30, unit: 'dB', step: 0.5 },
      { id: 'deEssFreq', label: 'Frequency', min: 2000, max: 10000, default: 6000, unit: 'Hz', step: 10 },
      { id: 'deEssAmount', label: 'Amount', min: 0, max: 100, default: 0, unit: '%', step: 0.5 },
    ]
  },
];

// ===== Helpers =====
function getAllControls() {
  const controls = [];
  CONTROL_SECTIONS.forEach(section => section.controls.forEach(ctrl => controls.push(ctrl)));
  return controls;
}

function findControl(id) {
  for (const section of CONTROL_SECTIONS) {
    for (const ctrl of section.controls) {
      if (ctrl.id === id) return ctrl;
    }
  }
  return null;
}

// ===== Default Values =====
const DEFAULT_VALUES = {};
CONTROL_SECTIONS.forEach(section => section.controls.forEach(ctrl => { DEFAULT_VALUES[ctrl.id] = ctrl.default; }));

// ===== Genre Presets (Direct Format) =====
const BASE_PRESET = {
  inputGain: 0, outputGain: 0,
  subBass: 0, bass: 0, lowMid: 0, mid: 0, highMid: 0, treble: 0, air: 0,
  compThreshold: -24, compRatio: 4, compAttack: 10, compRelease: 100, compKnee: 10, compMakeup: 0, compSCFilter: 0,
  satDrive: 0, satMix: 100,
  stereoWidth: 100,
  limCeiling: -0.3, limThreshold: -6, limRelease: 50,
  gateThreshold: -60, gateAttack: 1, gateRelease: 100, gateHold: 0,
  deEssThreshold: -30, deEssFreq: 6000, deEssAmount: 0,
};

const GENRE_OVERRIDES = {
  'Pop':       { inputGain: 0.5, subBass: 0.5, bass: 2, lowMid: 0.5, mid: 1.5, highMid: 2, treble: 2.5, air: 2.5, compThreshold: -18, compRatio: 3, compAttack: 10, compRelease: 80, compKnee: 10, compMakeup: 3, satDrive: 5, stereoWidth: 110, limThreshold: -4, gateThreshold: -52, deEssThreshold: -28, deEssFreq: 6000, deEssAmount: 15 },
  'Rock':      { inputGain: 2, subBass: 1, bass: 3, lowMid: 2, mid: 2, highMid: 2.5, treble: 2, air: 1, compThreshold: -20, compRatio: 4, compAttack: 6, compRelease: 90, compKnee: 8, compMakeup: 4, satDrive: 18, stereoWidth: 105, limThreshold: -5, gateThreshold: -48, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 10 },
  'Metal':     { inputGain: 2, subBass: 1, bass: 3.5, lowMid: -2, mid: -0.5, highMid: 3, treble: 3, air: 1.5, compThreshold: -16, compRatio: 5, compAttack: 3, compRelease: 70, compKnee: 6, compMakeup: 4, satDrive: 22, stereoWidth: 100, limThreshold: -4, gateThreshold: -42, deEssThreshold: -24, deEssFreq: 5000, deEssAmount: 8 },
  'EDM':       { inputGain: 1.5, subBass: 3, bass: 3.5, lowMid: -1, mid: 0, highMid: 1.5, treble: 2.5, air: 3, compThreshold: -14, compRatio: 4, compAttack: 5, compRelease: 60, compKnee: 10, compMakeup: 4.5, satDrive: 8, stereoWidth: 130, limThreshold: -3, gateThreshold: -45, deEssThreshold: -26, deEssFreq: 6000, deEssAmount: 10 },
  'Hip-Hop':   { inputGain: 1.5, subBass: 2.5, bass: 3.5, lowMid: 1, mid: 1.5, highMid: 0.5, treble: 1.5, air: 0.5, compThreshold: -20, compRatio: 3.5, compAttack: 8, compRelease: 100, compKnee: 12, compMakeup: 3.5, satDrive: 8, stereoWidth: 100, limThreshold: -5, gateThreshold: -50, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 20 },
  'R&B':       { inputGain: 0.5, subBass: 1.5, bass: 2.5, lowMid: 1, mid: 2, highMid: 1.5, treble: 2, air: 2.5, compThreshold: -18, compRatio: 3, compAttack: 12, compRelease: 120, compKnee: 12, compMakeup: 2.5, satDrive: 5, stereoWidth: 115, limThreshold: -4, gateThreshold: -55, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 22 },
  'Jazz':      { inputGain: 0, subBass: 0.5, bass: 1, lowMid: 1, mid: 1.5, highMid: 1, treble: 1.5, air: 2, compThreshold: -12, compRatio: 2, compAttack: 25, compRelease: 200, compKnee: 15, compMakeup: 1.5, satDrive: 2, stereoWidth: 105, limThreshold: -3, gateThreshold: -60, deEssThreshold: -30, deEssFreq: 6500, deEssAmount: 5 },
  'Classical': { inputGain: 0, subBass: 0, bass: 0.5, lowMid: 0.5, mid: 1, highMid: 0.5, treble: 1, air: 2.5, compThreshold: -8, compRatio: 1.5, compAttack: 30, compRelease: 300, compKnee: 20, compMakeup: 1, satDrive: 0, stereoWidth: 110, limThreshold: -2, gateThreshold: -65, deEssThreshold: -32, deEssFreq: 7000, deEssAmount: 3 },
  'Lo-Fi':     { inputGain: -1, subBass: 1.5, bass: 3, lowMid: -0.5, mid: 0.5, highMid: -2, treble: -3, air: -2, compThreshold: -15, compRatio: 3.5, compAttack: 15, compRelease: 150, compKnee: 12, compMakeup: 2.5, satDrive: 22, stereoWidth: 80, limThreshold: -4, gateThreshold: -55, deEssThreshold: -28, deEssFreq: 5500, deEssAmount: 8 },
  'Ambient':   { inputGain: -1, subBass: 1.5, bass: 2, lowMid: 0.5, mid: 0.5, highMid: 1, treble: 1.5, air: 3, compThreshold: -10, compRatio: 2, compAttack: 30, compRelease: 250, compKnee: 15, compMakeup: 1.5, satDrive: 5, stereoWidth: 150, limThreshold: -3, gateThreshold: -65, deEssThreshold: -30, deEssFreq: 6500, deEssAmount: 3 },
  'Reggae':    { inputGain: 1, subBass: 1.5, bass: 3, lowMid: 1, mid: 1, highMid: 0.5, treble: 1, air: 0.5, compThreshold: -18, compRatio: 3, compAttack: 15, compRelease: 120, compKnee: 12, compMakeup: 2.5, satDrive: 5, stereoWidth: 105, limThreshold: -4, gateThreshold: -52, deEssThreshold: -28, deEssFreq: 6000, deEssAmount: 10 },
  'Country':   { inputGain: 0.5, subBass: 0.5, bass: 1, lowMid: 1.5, mid: 2, highMid: 2.5, treble: 2.5, air: 2, compThreshold: -18, compRatio: 3, compAttack: 12, compRelease: 90, compKnee: 10, compMakeup: 2.5, satDrive: 5, stereoWidth: 100, limThreshold: -4, gateThreshold: -48, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 15 },
  'Blues':     { inputGain: 1, subBass: 1, bass: 2.5, lowMid: 1.5, mid: 2, highMid: 1.5, treble: 1.5, air: 1, compThreshold: -16, compRatio: 3, compAttack: 12, compRelease: 120, compKnee: 12, compMakeup: 3, satDrive: 12, stereoWidth: 100, limThreshold: -4, gateThreshold: -52, deEssThreshold: -28, deEssFreq: 6000, deEssAmount: 10 },
  'Folk':      { inputGain: 0, subBass: 0, bass: 0.5, lowMid: 1, mid: 1.5, highMid: 1.5, treble: 2.5, air: 3, compThreshold: -14, compRatio: 2.5, compAttack: 20, compRelease: 150, compKnee: 12, compMakeup: 2, satDrive: 3, stereoWidth: 95, limThreshold: -3, gateThreshold: -55, deEssThreshold: -28, deEssFreq: 6000, deEssAmount: 10 },
  'Punk':      { inputGain: 3, subBass: 1, bass: 3, lowMid: 2, mid: 2, highMid: 3, treble: 3.5, air: 0.5, compThreshold: -14, compRatio: 5, compAttack: 3, compRelease: 60, compKnee: 5, compMakeup: 5, satDrive: 30, stereoWidth: 105, limThreshold: -6, gateThreshold: -38, deEssThreshold: -22, deEssFreq: 5000, deEssAmount: 5 },
  'Indie':     { inputGain: 0.5, subBass: 0.5, bass: 1.5, lowMid: 1, mid: 2, highMid: 1.5, treble: 2, air: 2.5, compThreshold: -16, compRatio: 2.5, compAttack: 15, compRelease: 120, compKnee: 10, compMakeup: 2.5, satDrive: 8, stereoWidth: 108, limThreshold: -4, gateThreshold: -52, deEssThreshold: -28, deEssFreq: 6000, deEssAmount: 12 },
  'Techno':    { inputGain: 2, subBass: 2.5, bass: 3.5, lowMid: -1, mid: 0, highMid: 1.5, treble: 2, air: 2.5, compThreshold: -14, compRatio: 4.5, compAttack: 2, compRelease: 60, compKnee: 8, compMakeup: 5, satDrive: 12, stereoWidth: 130, limThreshold: -4, gateThreshold: -42, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 8 },
  'House':     { inputGain: 1.5, subBass: 2.5, bass: 3.5, lowMid: 0, mid: 1, highMid: 1.5, treble: 2.5, air: 3, compThreshold: -16, compRatio: 4, compAttack: 5, compRelease: 80, compKnee: 10, compMakeup: 4, satDrive: 8, stereoWidth: 125, limThreshold: -4, gateThreshold: -45, deEssThreshold: -26, deEssFreq: 6000, deEssAmount: 10 },
  'D&B':       { inputGain: 2, subBass: 3, bass: 3.5, lowMid: -1, mid: 0.5, highMid: 1.5, treble: 2.5, air: 2, compThreshold: -15, compRatio: 4, compAttack: 2, compRelease: 50, compKnee: 8, compMakeup: 4.5, satDrive: 10, stereoWidth: 120, limThreshold: -4, gateThreshold: -42, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 8 },
  'Trap':      { inputGain: 2, subBass: 3, bass: 3.5, lowMid: -0.5, mid: 0.5, highMid: 1, treble: 2.5, air: 1.5, compThreshold: -16, compRatio: 4, compAttack: 5, compRelease: 70, compKnee: 10, compMakeup: 4, satDrive: 8, stereoWidth: 110, limThreshold: -5, gateThreshold: -40, deEssThreshold: -24, deEssFreq: 5500, deEssAmount: 22 },
  'K-Pop':     { inputGain: 1, subBass: 1, bass: 2, lowMid: 1, mid: 2, highMid: 2.5, treble: 3, air: 3, compThreshold: -18, compRatio: 3.5, compAttack: 8, compRelease: 80, compKnee: 10, compMakeup: 3.5, satDrive: 6, stereoWidth: 115, limThreshold: -4, gateThreshold: -48, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 25 },
  'Latin':     { inputGain: 1.5, subBass: 1.5, bass: 3, lowMid: 1, mid: 2, highMid: 1.5, treble: 2, air: 1.5, compThreshold: -18, compRatio: 3.5, compAttack: 8, compRelease: 80, compKnee: 10, compMakeup: 3.5, satDrive: 5, stereoWidth: 110, limThreshold: -4, gateThreshold: -48, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 18 },
  'Soul':      { inputGain: 0.5, subBass: 1, bass: 2.5, lowMid: 1.5, mid: 2, highMid: 1.5, treble: 1.5, air: 2.5, compThreshold: -16, compRatio: 3, compAttack: 15, compRelease: 150, compKnee: 12, compMakeup: 2.5, satDrive: 5, stereoWidth: 108, limThreshold: -4, gateThreshold: -55, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 20 },
  'Funk':      { inputGain: 1.5, subBass: 1.5, bass: 3, lowMid: 2, mid: 2.5, highMid: 2, treble: 2, air: 1, compThreshold: -18, compRatio: 3.5, compAttack: 6, compRelease: 80, compKnee: 10, compMakeup: 3.5, satDrive: 10, stereoWidth: 108, limThreshold: -4, gateThreshold: -48, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 15 },
  'Gospel':    { inputGain: 1, subBass: 1, bass: 2, lowMid: 1.5, mid: 2.5, highMid: 2, treble: 2.5, air: 3, compThreshold: -16, compRatio: 3, compAttack: 12, compRelease: 120, compKnee: 12, compMakeup: 3, satDrive: 3, stereoWidth: 112, limThreshold: -4, gateThreshold: -55, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 20 },
  'Acoustic':  { inputGain: 0, subBass: 0, bass: 0.5, lowMid: 0.5, mid: 1.5, highMid: 1.5, treble: 2.5, air: 3, compThreshold: -12, compRatio: 2.5, compAttack: 20, compRelease: 150, compKnee: 15, compMakeup: 2, satDrive: 2, stereoWidth: 95, limThreshold: -3, gateThreshold: -55, deEssThreshold: -28, deEssFreq: 6000, deEssAmount: 8 },
  'Podcast':   { inputGain: 3, subBass: -2, bass: -1, lowMid: 1.5, mid: 3, highMid: 2, treble: 2.5, air: 1.5, compThreshold: -22, compRatio: 4, compAttack: 5, compRelease: 80, compKnee: 10, compMakeup: 6, satDrive: 0, stereoWidth: 0, limThreshold: -3, gateThreshold: -48, deEssThreshold: -28, deEssFreq: 5500, deEssAmount: 35 },
  'Cinematic': { inputGain: 0, subBass: 2, bass: 3, lowMid: 1, mid: 1, highMid: 1.5, treble: 2.5, air: 3.5, compThreshold: -15, compRatio: 3, compAttack: 20, compRelease: 200, compKnee: 15, compMakeup: 3, satDrive: 5, stereoWidth: 145, limThreshold: -4, gateThreshold: -60, deEssThreshold: -30, deEssFreq: 6500, deEssAmount: 3 },
  'Synthwave': { inputGain: 1.5, subBass: 2, bass: 3.5, lowMid: 0, mid: 1, highMid: 2, treble: 2.5, air: 3, compThreshold: -16, compRatio: 4, compAttack: 8, compRelease: 80, compKnee: 10, compMakeup: 4, satDrive: 18, stereoWidth: 125, limThreshold: -4, gateThreshold: -48, deEssThreshold: -28, deEssFreq: 6000, deEssAmount: 8 },
  'Vaporwave': { inputGain: -1, subBass: 1.5, bass: 2.5, lowMid: -1, mid: 0, highMid: -1.5, treble: -1.5, air: -1, compThreshold: -12, compRatio: 2.5, compAttack: 20, compRelease: 180, compKnee: 15, compMakeup: 2, satDrive: 18, stereoWidth: 85, limThreshold: -4, gateThreshold: -58, deEssThreshold: -30, deEssFreq: 6500, deEssAmount: 5 },
  'Reggaeton': { inputGain: 1.5, subBass: 2.5, bass: 4, lowMid: 0.5, mid: 1, highMid: 1.5, treble: 2, air: 1.5, compThreshold: -16, compRatio: 4, compAttack: 5, compRelease: 70, compKnee: 10, compMakeup: 4.5, satDrive: 8, stereoWidth: 112, limThreshold: -4, gateThreshold: -45, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 20 },
  'Afrobeats': { inputGain: 1.5, subBass: 1.5, bass: 3, lowMid: 1, mid: 2, highMid: 1, treble: 2, air: 1.5, compThreshold: -18, compRatio: 3.5, compAttack: 10, compRelease: 100, compKnee: 12, compMakeup: 3, satDrive: 5, stereoWidth: 108, limThreshold: -4, gateThreshold: -50, deEssThreshold: -28, deEssFreq: 6000, deEssAmount: 15 },
  'Boom Bap':  { inputGain: 1, subBass: 2, bass: 3, lowMid: 1.5, mid: 1.5, highMid: 0.5, treble: 0.5, air: -0.5, compThreshold: -20, compRatio: 3.5, compAttack: 12, compRelease: 120, compKnee: 10, compMakeup: 3, satDrive: 15, stereoWidth: 95, limThreshold: -5, gateThreshold: -50, deEssThreshold: -26, deEssFreq: 5500, deEssAmount: 15 },
  'Shoegaze':  { inputGain: 1, subBass: 1.5, bass: 2.5, lowMid: -0.5, mid: 1, highMid: 2.5, treble: 3, air: 3.5, compThreshold: -14, compRatio: 3, compAttack: 20, compRelease: 150, compKnee: 12, compMakeup: 3, satDrive: 25, stereoWidth: 140, limThreshold: -4, gateThreshold: -55, deEssThreshold: -30, deEssFreq: 6500, deEssAmount: 5 },
  'Grunge':    { inputGain: 2.5, subBass: 1, bass: 3.5, lowMid: 2.5, mid: 2, highMid: 2.5, treble: 2, air: 0.5, compThreshold: -16, compRatio: 4, compAttack: 5, compRelease: 80, compKnee: 8, compMakeup: 4.5, satDrive: 28, stereoWidth: 102, limThreshold: -5, gateThreshold: -42, deEssThreshold: -24, deEssFreq: 5000, deEssAmount: 8 },
};

function getPresetForGenre(genreName) {
  const overrides = GENRE_OVERRIDES[genreName];
  if (!overrides) return { ...BASE_PRESET };
  return { ...BASE_PRESET, ...overrides };
}

// ===== App State =====
const state = {
  audioContext: null,
  audioBuffer: null,
  sourceNode: null,
  // Input/Output
  inputGainNode: null,
  outputGainNode: null,
  // EQ filters
  eqFilters: {},
  // Compressor
  compSCFilterNode: null,
  compressorNode: null,
  compMakeupNode: null,
  // Saturation
  saturationNode: null,
  satDryNode: null,
  satWetNode: null,
  satSplitter: null,
  satMerger: null,
  // Stereo
  stereoSplitter: null,
  stereoMerger: null,
  stereoLL: null,
  stereoRR: null,
  stereoRL: null,
  stereoLR: null,
  // Limiter
  limiterNode: null,
  limiterMakeupNode: null,
  // Gate
  gateGainNode: null,
  gateAnalyser: null,
  gateCurrentGain: 1,
  gateHoldCounter: 0,
  // De-Esser
  deEssDetectFilter: null,
  deEssAnalyser: null,
  deEssFilter: null,
  // Analyser
  analyserNode: null,
  // Playback
  isPlaying: false,
  startTime: 0,
  pauseOffset: 0,
  activeGenre: null,
  controlValues: {},
  animationId: null,
  particles: [],
  volume: 0.8,
  eqDragBand: null,
  eqDragHover: null,
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  initControls();
  initGenres();
  initParticleCanvas();
  initEventListeners();
  initControlValues();
  updateAllSliderFills();
  startAnimation();
  lucide.createIcons();
});

// ===== Control Sliders =====
function initControls() {
  const container = document.getElementById('controlsGrid');
  container.innerHTML = '';

  CONTROL_SECTIONS.forEach(section => {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'control-section';
    sectionEl.id = `section-${section.id}`;

    const headerBtn = document.createElement('button');
    headerBtn.className = 'section-header w-full flex items-center justify-between py-2.5 px-1 mb-1 group rounded-lg hover:bg-white/[0.02] transition-colors';
    headerBtn.id = `header-${section.id}`;
    headerBtn.innerHTML = `
      <div class="flex items-center gap-2">
        <i data-lucide="${section.icon}" class="w-3.5 h-3.5 text-neon-blue"></i>
        <span class="text-[11px] font-semibold uppercase tracking-wider text-white/50">${section.label}</span>
        <span class="text-[9px] text-white/20 bg-white/5 px-1.5 py-0.5 rounded-full">${section.controls.length}</span>
      </div>
      <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-white/25 transition-transform duration-200 section-chevron ${section.collapsed ? '-rotate-90' : ''}"></i>
    `;
    headerBtn.addEventListener('click', () => toggleSection(section.id));

    const contentEl = document.createElement('div');
    contentEl.className = `section-content ${section.collapsed ? 'hidden' : ''}`;
    contentEl.id = `content-${section.id}`;

    const grid = document.createElement('div');
    const cols = section.id === 'eq' ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7' :
                 section.id === 'compressor' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7' :
                 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
    grid.className = `grid ${cols} gap-x-4 gap-y-3`;

    section.controls.forEach(ctrl => {
      const wrapper = document.createElement('div');
      wrapper.className = 'pro-slider-wrapper';
      wrapper.id = `wrapper-${ctrl.id}`;

      const range = ctrl.max - ctrl.min;
      const defaultNorm = ((ctrl.default - ctrl.min) / range) * 100;

      wrapper.innerHTML = `
        <div class="pro-slider-header">
          <span class="pro-slider-label">${ctrl.label}</span>
          <span class="pro-slider-value" id="val-${ctrl.id}">${formatControlValue(ctrl, ctrl.default)}</span>
        </div>
        <div class="pro-slider-track">
          <div class="pro-slider-fill" id="fill-${ctrl.id}" style="width: ${defaultNorm}%"></div>
          <input type="range" class="pro-slider" id="slider-${ctrl.id}"
            min="${ctrl.min}" max="${ctrl.max}" step="${ctrl.step}" value="${ctrl.default}"
            data-id="${ctrl.id}">
        </div>
      `;
      grid.appendChild(wrapper);
    });

    contentEl.appendChild(grid);
    sectionEl.appendChild(headerBtn);
    sectionEl.appendChild(contentEl);
    container.appendChild(sectionEl);
  });

  // Re-create icons for section headers
  lucide.createIcons();

  // Bind slider events
  document.querySelectorAll('.pro-slider').forEach(slider => {
    slider.addEventListener('input', handleSliderInput);
    slider.addEventListener('mousedown', () => slider.closest('.pro-slider-wrapper').classList.add('active'));
    slider.addEventListener('mouseup', () => slider.closest('.pro-slider-wrapper').classList.remove('active'));
    slider.addEventListener('touchstart', () => slider.closest('.pro-slider-wrapper').classList.add('active'), { passive: true });
    slider.addEventListener('touchend', () => slider.closest('.pro-slider-wrapper').classList.remove('active'));
  });
}

function initControlValues() {
  Object.keys(DEFAULT_VALUES).forEach(id => {
    state.controlValues[id] = DEFAULT_VALUES[id];
  });
}

function formatControlValue(ctrl, value) {
  const v = parseFloat(value);
  switch (ctrl.unit) {
    case 'dB':
      return `${v > 0 ? '+' : ''}${v.toFixed(1)} dB`;
    case ':1':
      return `${v.toFixed(1)}:1`;
    case 'ms':
      return v >= 10 ? `${v.toFixed(0)} ms` : `${v.toFixed(1)} ms`;
    case 'Hz':
      if (v >= 10000) return `${(v / 1000).toFixed(0)}k Hz`;
      if (v >= 1000) return `${(v / 1000).toFixed(1)}k Hz`;
      return `${v.toFixed(0)} Hz`;
    case '%':
      return `${v.toFixed(1)}%`;
    default:
      return `${v.toFixed(1)} ${ctrl.unit}`;
  }
}

function handleSliderInput(e) {
  const id = e.target.dataset.id;
  const value = parseFloat(e.target.value);
  const ctrl = findControl(id);
  state.controlValues[id] = value;
  document.getElementById(`val-${id}`).textContent = formatControlValue(ctrl, value);
  updateSliderFill(id);
  applyControlToAudio(id, value);
}

function updateSliderFill(id) {
  const slider = document.getElementById(`slider-${id}`);
  const fill = document.getElementById(`fill-${id}`);
  const ctrl = findControl(id);
  if (!ctrl) return;
  const range = ctrl.max - ctrl.min;
  const norm = ((parseFloat(slider.value) - ctrl.min) / range) * 100;
  fill.style.width = `${norm}%`;
}

function updateAllSliderFills() {
  getAllControls().forEach(ctrl => updateSliderFill(ctrl.id));
}

function setSliderValue(id, value) {
  const slider = document.getElementById(`slider-${id}`);
  const valEl = document.getElementById(`val-${id}`);
  const ctrl = findControl(id);
  if (!slider || !ctrl) return;
  slider.value = value;
  state.controlValues[id] = value;
  valEl.textContent = formatControlValue(ctrl, value);
  updateSliderFill(id);
  applyControlToAudio(id, value);
}

function toggleSection(sectionId) {
  const content = document.getElementById(`content-${sectionId}`);
  const chevron = document.querySelector(`#header-${sectionId} .section-chevron`);
  content.classList.toggle('hidden');
  chevron.classList.toggle('-rotate-90');
}

// ===== Apply Controls to Audio =====
function applyControlToAudio(id, value) {
  if (!state.audioContext) return;
  const v = parseFloat(value);

  switch (id) {
    case 'inputGain':
      if (state.inputGainNode) state.inputGainNode.gain.value = Math.pow(10, v / 20);
      break;
    case 'outputGain':
      if (state.outputGainNode) state.outputGainNode.gain.value = Math.pow(10, v / 20) * (state.volume ?? 0.8);
      break;
    // EQ
    case 'subBass': case 'bass': case 'lowMid': case 'mid': case 'highMid': case 'treble': case 'air':
      if (state.eqFilters[id]) state.eqFilters[id].gain.value = v;
      break;
    // Compressor
    case 'compThreshold':
      if (state.compressorNode) state.compressorNode.threshold.value = v;
      break;
    case 'compRatio':
      if (state.compressorNode) state.compressorNode.ratio.value = v;
      break;
    case 'compAttack':
      if (state.compressorNode) state.compressorNode.attack.value = v / 1000;
      break;
    case 'compRelease':
      if (state.compressorNode) state.compressorNode.release.value = v / 1000;
      break;
    case 'compKnee':
      if (state.compressorNode) state.compressorNode.knee.value = v;
      break;
    case 'compMakeup':
      if (state.compMakeupNode) state.compMakeupNode.gain.value = Math.pow(10, v / 20);
      break;
    case 'compSCFilter':
      if (state.compSCFilterNode) {
        state.compSCFilterNode.frequency.value = v > 0 ? v : 1;
        state.compSCFilterNode.type = v > 0 ? 'highpass' : 'lowpass';
      }
      break;
    // Saturation
    case 'satDrive':
      if (state.saturationNode) {
        state.saturationNode.curve = makeSaturationCurve(v / 100, (state.controlValues.satMix || 100) / 100);
        state.saturationNode.oversample = '4x';
      }
      break;
    case 'satMix':
      if (state.satDryNode) state.satDryNode.gain.value = 1 - (v / 100);
      if (state.satWetNode) state.satWetNode.gain.value = v / 100;
      break;
    // Stereo Width
    case 'stereoWidth':
      updateStereoWidth(v);
      break;
    // Limiter
    case 'limCeiling':
    case 'limThreshold':
      if (state.limiterMakeupNode) {
        const ceiling = state.controlValues.limCeiling || -0.3;
        const threshold = state.controlValues.limThreshold || -6;
        state.limiterMakeupNode.gain.value = Math.pow(10, (ceiling - threshold) / 20);
      }
      if (state.limiterNode && id === 'limThreshold') {
        state.limiterNode.threshold.value = v;
      }
      break;
    case 'limRelease':
      if (state.limiterNode) state.limiterNode.release.value = v / 1000;
      break;
    // Gate & De-Esser are handled in animation loop
    case 'deEssFreq':
      if (state.deEssFilter) state.deEssFilter.frequency.value = v;
      if (state.deEssDetectFilter) state.deEssDetectFilter.frequency.value = v;
      break;
  }
}

function updateStereoWidth(width) {
  if (!state.stereoLL) return;
  const w = width / 100;
  // Mid/Side approach: width < 1 reduces side, width > 1 boosts side
  if (w <= 1) {
    // Reduce side signal (converge to mono)
    state.stereoLL.gain.value = 1;
    state.stereoRR.gain.value = 1;
    state.stereoRL.gain.value = 1 - w; // crossfeed for mono
    state.stereoLR.gain.value = 1 - w;
  } else {
    // Boost side signal (enhance stereo)
    state.stereoLL.gain.value = w;
    state.stereoRR.gain.value = w;
    state.stereoRL.gain.value = 0;
    state.stereoLR.gain.value = 0;
  }
}

function makeSaturationCurve(drive, mix) {
  const samples = 44100;
  const curve = new Float32Array(samples);
  const k = Math.max(0, drive);
  for (let i = 0; i < samples; i++) {
    const x = (i * 2) / samples - 1;
    const dry = x;
    const wet = ((3 + k) * x * 20 * (Math.PI / 180)) / (Math.PI + k * Math.abs(x));
    curve[i] = dry * (1 - mix) + wet * mix;
  }
  return curve;
}

// ===== Genre Presets =====
function initGenres() {
  const desktopGrid = document.getElementById('genreGrid');
  const mobileGrid = document.getElementById('mobileGenreGrid');

  GENRES.forEach(genre => {
    desktopGrid.appendChild(createGenreButton(genre));
    mobileGrid.appendChild(createGenreButton(genre));
  });
}

function createGenreButton(genre) {
  const btn = document.createElement('button');
  btn.className = 'genre-btn';
  btn.dataset.genre = genre.name;
  btn.innerHTML = `<span class="emoji">${genre.emoji}</span><span class="name">${genre.name}</span>`;
  btn.addEventListener('click', () => selectGenre(genre.name));
  return btn;
}

function selectGenre(name) {
  state.activeGenre = name;
  document.querySelectorAll('.genre-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.genre === name);
  });
  const preset = getPresetForGenre(name);
  Object.keys(preset).forEach(key => {
    setSliderValue(key, preset[key]);
  });
  showToast(`Preset "${name}" applied`, 'success');
}

// ===== Particle Background =====
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  state.particles = [];
  for (let i = 0; i < 60; i++) {
    state.particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.15 + 0.03,
      color: Math.random() > 0.5 ? '0, 212, 255' : '0, 255, 170',
    });
  }
  window._particleCtx = ctx;
  window._particleCanvas = canvas;
}

// ===== Animation Loop =====
function startAnimation() {
  function loop() {
    drawParticles();
    if (state.isPlaying) {
      drawSpectrum();
      drawWaveformAnimation();
      updatePlaybackTime();
      updateGateAndDeEsser();
      
    } else {
      drawSpectrumIdle();
      if (state.needsWaveformRedraw && state.audioBuffer) {
        drawWaveform();
        state.needsWaveformRedraw = false;
      }
    }
    drawEQCurve();
    state.animationId = requestAnimationFrame(loop);
  }
  loop();
}

function drawParticles() {
  const canvas = window._particleCanvas;
  const ctx = window._particleCtx;
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  state.particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
    ctx.fill();
  });
}

// ===== Spectrum Analyzer =====
function drawSpectrum() {
  const canvas = document.getElementById('spectrumCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * 2;
  canvas.height = canvas.offsetHeight * 2;
  ctx.scale(2, 2);
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  ctx.clearRect(0, 0, w, h);
  if (!state.analyserNode) return;
  const bufferLength = state.analyserNode.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  state.analyserNode.getByteFrequencyData(dataArray);
  const barCount = 64;
  const barWidth = (w / barCount) - 1.5;
  const step = Math.floor(bufferLength / barCount);
  for (let i = 0; i < barCount; i++) {
    const value = dataArray[i * step];
    const norm = value / 255;
    const barHeight = norm * h * 0.9;
    const x = i * (barWidth + 1.5) + 0.75;
    const y = h - barHeight;
    const gradient = ctx.createLinearGradient(0, y, 0, h);
    if (norm > 0.7) {
      gradient.addColorStop(0, 'rgba(0, 255, 170, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 212, 255, 0.4)');
    } else {
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 212, 255, 0.2)');
    }
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barHeight, 2);
    ctx.fill();
    if (norm > 0.1) {
      ctx.fillStyle = norm > 0.7 ? 'rgba(0, 255, 170, 0.9)' : 'rgba(0, 212, 255, 0.7)';
      ctx.fillRect(x, y - 3, barWidth, 2);
    }
  }
}

function drawSpectrumIdle() {
  const canvas = document.getElementById('spectrumCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * 2;
  canvas.height = canvas.offsetHeight * 2;
  ctx.scale(2, 2);
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  ctx.clearRect(0, 0, w, h);
  const barCount = 64;
  const barWidth = (w / barCount) - 1.5;
  const time = Date.now() / 1000;
  for (let i = 0; i < barCount; i++) {
    const idle = (Math.sin(time * 1.5 + i * 0.15) * 0.3 + 0.35) * 0.08;
    const barHeight = idle * h;
    const x = i * (barWidth + 1.5) + 0.75;
    const y = h - barHeight;
    ctx.fillStyle = `rgba(0, 212, 255, ${idle + 0.08})`;
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barHeight, 1.5);
    ctx.fill();
  }
}

// ===== EQ Response Curve =====
function drawEQCurve() {
  const canvas = document.getElementById('eqCurveCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * 2;
  canvas.height = canvas.offsetHeight * 2;
  ctx.scale(2, 2);
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  ctx.clearRect(0, 0, w, h);

  // Grid
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (h / 5) * i + 0.5);
    ctx.lineTo(w, (h / 5) * i + 0.5);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.beginPath();
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  ctx.stroke();

  // Build 7-band EQ response
  const eqBands = [
    { freq: 60, gain: state.controlValues.subBass || 0, type: 'lowshelf' },
    { freq: 150, gain: state.controlValues.bass || 0, type: 'lowshelf' },
    { freq: 400, gain: state.controlValues.lowMid || 0, type: 'peaking', q: 1.0 },
    { freq: 1000, gain: state.controlValues.mid || 0, type: 'peaking', q: 0.7 },
    { freq: 3000, gain: state.controlValues.highMid || 0, type: 'peaking', q: 1.0 },
    { freq: 6000, gain: state.controlValues.treble || 0, type: 'highshelf' },
    { freq: 12000, gain: state.controlValues.air || 0, type: 'peaking', q: 0.8 },
  ];

  const points = [];
  const numPoints = 200;
  for (let i = 0; i < numPoints; i++) {
    const f = 20 * Math.pow(1000, i / numPoints);
    let response = 0;

    eqBands.forEach(band => {
      if (band.type === 'lowshelf') {
        response += band.gain / (1 + Math.pow(f / band.freq, 2));
      } else if (band.type === 'highshelf') {
        response += band.gain / (1 + Math.pow(band.freq / f, 2));
      } else if (band.type === 'peaking') {
        const bw = 1 / (band.q || 0.7);
        const logRatio = Math.log2(f / band.freq);
        response += band.gain * Math.exp(-logRatio * logRatio / (2 * bw * bw));
      }
    });

    points.push(response);
  }

  // Draw curve
  const gradient = ctx.createLinearGradient(0, 0, w, 0);
  gradient.addColorStop(0, 'rgba(0, 212, 255, 0.8)');
  gradient.addColorStop(0.5, 'rgba(0, 255, 170, 0.8)');
  gradient.addColorStop(1, 'rgba(0, 212, 255, 0.8)');
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const maxDb = 18;
  for (let i = 0; i < points.length; i++) {
    const x = (i / (points.length - 1)) * w;
    const y = h / 2 - (points[i] / maxDb) * (h / 2);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Fill under
  ctx.lineTo(w, h / 2);
  ctx.lineTo(0, h / 2);
  ctx.closePath();
  const fillGrad = ctx.createLinearGradient(0, 0, w, 0);
  fillGrad.addColorStop(0, 'rgba(0, 212, 255, 0.06)');
  fillGrad.addColorStop(0.5, 'rgba(0, 255, 170, 0.06)');
  fillGrad.addColorStop(1, 'rgba(0, 212, 255, 0.06)');
  ctx.fillStyle = fillGrad;
  ctx.fill();

  // Frequency labels
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.font = '9px Inter';
  ctx.textAlign = 'center';
  [50, 100, 200, 500, '1k', '2k', '5k', '10k', '20k'].forEach((label, i) => {
    ctx.fillText(label.toString(), (i / 8) * w, h - 4);
  });

  // ===== Interactive EQ Handles =====
  const eqHandleBands = [
    { id: 'subBass', freq: 60, label: 'Sub' },
    { id: 'bass', freq: 150, label: 'Bass' },
    { id: 'lowMid', freq: 400, label: 'Lo Mid' },
    { id: 'mid', freq: 1000, label: 'Mid' },
    { id: 'highMid', freq: 3000, label: 'Hi Mid' },
    { id: 'treble', freq: 6000, label: 'Treble' },
    { id: 'air', freq: 12000, label: 'Air' },
  ];

  const freqToX = (f) => (Math.log(f / 20) / Math.log(1000)) * w;
  const dbToY = (db) => h / 2 - (db / maxDb) * (h / 2);

  eqHandleBands.forEach(band => {
    const x = freqToX(band.freq);
    const gain = state.controlValues[band.id] || 0;
    const y = dbToY(gain);
    const isHovered = state.eqDragHover === band.id;
    const isDragging = state.eqDragBand && state.eqDragBand.id === band.id;

    // Vertical dashed line from handle to center
    ctx.save();
    ctx.strokeStyle = isHovered || isDragging ? 'rgba(0, 212, 255, 0.25)' : 'rgba(255, 255, 255, 0.05)';
    ctx.setLineDash([3, 4]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, h / 2);
    ctx.stroke();
    ctx.restore();

    // Handle glow (outer ring)
    if (isHovered || isDragging) {
      ctx.beginPath();
      ctx.arc(x, y, isDragging ? 18 : 14, 0, Math.PI * 2);
      ctx.fillStyle = isDragging ? 'rgba(0, 255, 170, 0.08)' : 'rgba(0, 212, 255, 0.06)';
      ctx.fill();
    }

    // Handle circle
    const radius = isDragging ? 7 : isHovered ? 6.5 : 5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);

    if (isDragging) {
      ctx.fillStyle = 'rgba(0, 255, 170, 0.95)';
      ctx.shadowColor = 'rgba(0, 255, 170, 0.7)';
      ctx.shadowBlur = 16;
    } else if (isHovered) {
      ctx.fillStyle = 'rgba(0, 212, 255, 0.95)';
      ctx.shadowColor = 'rgba(0, 212, 255, 0.5)';
      ctx.shadowBlur = 12;
    } else {
      ctx.fillStyle = 'rgba(0, 212, 255, 0.55)';
      ctx.shadowBlur = 0;
    }

    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = isDragging ? 'rgba(0, 255, 170, 0.9)' : isHovered ? 'rgba(0, 212, 255, 0.9)' : 'rgba(0, 212, 255, 0.35)';
    ctx.lineWidth = isDragging || isHovered ? 2 : 1;
    ctx.stroke();

    // Inner dot
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = isDragging ? 'rgba(255, 255, 255, 0.9)' : isHovered ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)';
    ctx.fill();

    // Label tooltip on hover/drag
    if (isHovered || isDragging) {
      const label = `${band.label}  ${gain > 0 ? '+' : ''}${gain.toFixed(1)} dB`;
      ctx.font = 'bold 10px Inter';
      ctx.textAlign = 'center';

      // Background pill
      const textWidth = ctx.measureText(label).width + 12;
      const pillX = x - textWidth / 2;
      const pillY = y - radius - 20;
      const pillH = 16;
      ctx.fillStyle = isDragging ? 'rgba(0, 255, 170, 0.15)' : 'rgba(0, 212, 255, 0.15)';
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, textWidth, pillH, 4);
      ctx.fill();
      ctx.strokeStyle = isDragging ? 'rgba(0, 255, 170, 0.3)' : 'rgba(0, 212, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = isDragging ? 'rgba(0, 255, 170, 0.95)' : 'rgba(255, 255, 255, 0.85)';
      ctx.fillText(label, x, pillY + 11.5);
    }
  });
}

// ===== EQ Curve Drag Interaction =====
function initEQCurveInteraction() {
  const canvas = document.getElementById('eqCurveCanvas');
  if (!canvas) return;

  canvas.style.touchAction = 'none';

  const eqHandleBands = [
    { id: 'subBass', freq: 60, min: -12, max: 12 },
    { id: 'bass', freq: 150, min: -12, max: 12 },
    { id: 'lowMid', freq: 400, min: -12, max: 12 },
    { id: 'mid', freq: 1000, min: -12, max: 12 },
    { id: 'highMid', freq: 3000, min: -12, max: 12 },
    { id: 'treble', freq: 6000, min: -12, max: 12 },
    { id: 'air', freq: 12000, min: -6, max: 6 },
  ];

  const maxDb = 18;

  function freqToX(f) {
    return (Math.log(f / 20) / Math.log(1000)) * canvas.offsetWidth;
  }

  function yToDb(y) {
    const h = canvas.offsetHeight;
    return (h / 2 - y) / (h / 2) * maxDb;
  }

  function dbToY(db) {
    const h = canvas.offsetHeight;
    return h / 2 - (db / maxDb) * (h / 2);
  }

  function getNearestBand(mouseX, mouseY) {
    let nearest = null;
    let minDist = 18; // hit radius

    eqHandleBands.forEach(band => {
      const x = freqToX(band.freq);
      const gain = state.controlValues[band.id] || 0;
      const y = dbToY(gain);
      const dist = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
      if (dist < minDist) {
        minDist = dist;
        nearest = band;
      }
    });

    return nearest;
  }

  // Mouse events
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (state.eqDragBand) {
      const band = state.eqDragBand;
      let db = yToDb(mouseY);
      db = Math.max(band.min, Math.min(band.max, db));
      const snapped = Math.round(db * 10) / 10;
      setSliderValue(band.id, snapped);
    } else {
      const band = getNearestBand(mouseX, mouseY);
      state.eqDragHover = band ? band.id : null;
      canvas.style.cursor = band ? 'grab' : 'default';
    }
  });

  canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const band = getNearestBand(mouseX, mouseY);
    if (band) {
      state.eqDragBand = band;
      canvas.style.cursor = 'grabbing';
      e.preventDefault();

      // Jump handle to mouse Y on click
      let db = yToDb(mouseY);
      db = Math.max(band.min, Math.min(band.max, db));
      const snapped = Math.round(db * 10) / 10;
      setSliderValue(band.id, snapped);
    }
  });

  document.addEventListener('mouseup', () => {
    if (state.eqDragBand) {
      state.eqDragBand = null;
      const canvas = document.getElementById('eqCurveCanvas');
      if (canvas) canvas.style.cursor = 'default';
    }
  });

  canvas.addEventListener('mouseleave', () => {
    if (!state.eqDragBand) {
      state.eqDragHover = null;
      canvas.style.cursor = 'default';
    }
  });

  // Touch events
  canvas.addEventListener('touchstart', (e) => {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const mouseX = touch.clientX - rect.left;
    const mouseY = touch.clientY - rect.top;

    const band = getNearestBand(mouseX, mouseY);
    if (band) {
      state.eqDragBand = band;
      e.preventDefault();

      let db = yToDb(mouseY);
      db = Math.max(band.min, Math.min(band.max, db));
      const snapped = Math.round(db * 10) / 10;
      setSliderValue(band.id, snapped);
    }
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (!state.eqDragBand) return;
    e.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const mouseY = touch.clientY - rect.top;
    const band = state.eqDragBand;

    let db = yToDb(mouseY);
    db = Math.max(band.min, Math.min(band.max, db));
    const snapped = Math.round(db * 10) / 10;
    setSliderValue(band.id, snapped);
  }, { passive: false });

  canvas.addEventListener('touchend', () => {
    state.eqDragBand = null;
  });

  canvas.addEventListener('touchcancel', () => {
    state.eqDragBand = null;
  });
}

// ===== Waveform =====
function drawWaveform() {
  const canvas = document.getElementById('waveformCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * 2;
  canvas.height = canvas.offsetHeight * 2;
  ctx.scale(2, 2);
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  ctx.clearRect(0, 0, w, h);
  if (!state.audioBuffer) return;
  document.getElementById('dropOverlay').style.opacity = '0';
  document.getElementById('playbackBar').style.opacity = '1';
  document.getElementById('analyzerStatus').textContent = 'Ready';
  const data = state.audioBuffer.getChannelData(0);
  const step = Math.ceil(data.length / w);
  const amp = h / 2;
  const gradient = ctx.createLinearGradient(0, 0, w, 0);
  gradient.addColorStop(0, 'rgba(0, 212, 255, 0.6)');
  gradient.addColorStop(0.5, 'rgba(0, 255, 170, 0.6)');
  gradient.addColorStop(1, 'rgba(0, 212, 255, 0.6)');
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < w; i++) {
    let min = 1.0, max = -1.0;
    for (let j = 0; j < step; j++) {
      const datum = data[(i * step) + j] || 0;
      if (datum < min) min = datum;
      if (datum > max) max = datum;
    }
    ctx.moveTo(i, amp + min * amp * 0.85);
    ctx.lineTo(i, amp + max * amp * 0.85);
  }
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.beginPath();
  ctx.moveTo(0, amp);
  ctx.lineTo(w, amp);
  ctx.stroke();

  
}

function drawWaveformAnimation() {
  drawWaveform();
  if (state.sourceNode && state.audioBuffer) {
    const currentTime = state.audioContext.currentTime - state.startTime;
    const duration = state.audioBuffer.duration;
    const progress = Math.min(currentTime / duration, 1);
    document.getElementById('seekFill').style.width = `${progress * 100}%`;
    if (progress >= 1) stopPlayback();
  }
}

// ===== Audio Loading & Playback =====
async function loadAudioFile(file) {
  try {
    showToast('Loading audio...', 'info');
    if (!state.audioContext) {
      state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (state.isPlaying) stopPlayback();
    const arrayBuffer = await file.arrayBuffer();
    state.audioBuffer = await state.audioContext.decodeAudioData(arrayBuffer);
    initAudioNodes();
    drawWaveform();
    document.getElementById('totalTime').textContent = formatTime(state.audioBuffer.duration);
    document.getElementById('analyzerStatus').textContent = 'Ready';
    showToast(`"${file.name}" loaded successfully`, 'success');
  } catch (err) {
    console.error(err);
    showToast('Error loading audio file', 'error');
  }
}

function initAudioNodes() {
  const ctx = state.audioContext;

  // Input Gain
  state.inputGainNode = ctx.createGain();
  state.inputGainNode.gain.value = Math.pow(10, (state.controlValues.inputGain || 0) / 20);

  // EQ Filters (7 bands)
  const eqConfig = [
    { id: 'subBass', type: 'lowshelf', freq: 60 },
    { id: 'bass', type: 'lowshelf', freq: 150 },
    { id: 'lowMid', type: 'peaking', freq: 400, q: 1.0 },
    { id: 'mid', type: 'peaking', freq: 1000, q: 0.7 },
    { id: 'highMid', type: 'peaking', freq: 3000, q: 1.0 },
    { id: 'treble', type: 'highshelf', freq: 6000 },
    { id: 'air', type: 'peaking', freq: 12000, q: 0.8 },
  ];
  state.eqFilters = {};
  eqConfig.forEach(cfg => {
    const filter = ctx.createBiquadFilter();
    filter.type = cfg.type;
    filter.frequency.value = cfg.freq;
    if (cfg.q) filter.Q.value = cfg.q;
    filter.gain.value = state.controlValues[cfg.id] || 0;
    state.eqFilters[cfg.id] = filter;
  });

  // De-Esser detect filter (sidechain)
  state.deEssDetectFilter = ctx.createBiquadFilter();
  state.deEssDetectFilter.type = 'peaking';
  state.deEssDetectFilter.frequency.value = state.controlValues.deEssFreq || 6000;
  state.deEssDetectFilter.Q.value = 2;
  state.deEssDetectFilter.gain.value = 6; // boost for detection
  state.deEssAnalyser = ctx.createAnalyser();
  state.deEssAnalyser.fftSize = 256;

  // De-Esser reduction filter
  state.deEssFilter = ctx.createBiquadFilter();
  state.deEssFilter.type = 'peaking';
  state.deEssFilter.frequency.value = state.controlValues.deEssFreq ?? 6000;
  state.deEssFilter.Q.value = 2;
  state.deEssFilter.gain.value = 0;

  // Compressor sidechain HPF
  state.compSCFilterNode = ctx.createBiquadFilter();
  state.compSCFilterNode.type = 'lowpass';
  state.compSCFilterNode.frequency.value = 1;

  // Compressor
  state.compressorNode = ctx.createDynamicsCompressor();
  state.compressorNode.threshold.value = state.controlValues.compThreshold ?? -24;
  state.compressorNode.ratio.value = state.controlValues.compRatio ?? 4;
  state.compressorNode.attack.value = (state.controlValues.compAttack ?? 10) / 1000;
  state.compressorNode.release.value = (state.controlValues.compRelease ?? 100) / 1000;
  state.compressorNode.knee.value = state.controlValues.compKnee ?? 10;

  // Compressor makeup gain
  state.compMakeupNode = ctx.createGain();
  state.compMakeupNode.gain.value = Math.pow(10, (state.controlValues.compMakeup ?? 0) / 20);

  // Saturation WaveShaper
  state.saturationNode = ctx.createWaveShaper();
  state.saturationNode.curve = makeSaturationCurve(
    (state.controlValues.satDrive ?? 0) / 100,
    (state.controlValues.satMix ?? 100) / 100
  );
  state.saturationNode.oversample = '4x';

  // Saturation dry/wet
  state.satDryNode = ctx.createGain();
  state.satWetNode = ctx.createGain();
  state.satDryNode.gain.value = 1 - ((state.controlValues.satMix ?? 100) / 100);
  state.satWetNode.gain.value = (state.controlValues.satMix ?? 100) / 100;

  // Stereo Width
  state.stereoSplitter = ctx.createChannelSplitter(2);
  state.stereoMerger = ctx.createChannelMerger(2);
  state.stereoLL = ctx.createGain();
  state.stereoRR = ctx.createGain();
  state.stereoRL = ctx.createGain();
  state.stereoLR = ctx.createGain();
  updateStereoWidth(state.controlValues.stereoWidth ?? 100);

  // Limiter
  state.limiterNode = ctx.createDynamicsCompressor();
  state.limiterNode.threshold.value = state.controlValues.limThreshold ?? -6;
  state.limiterNode.ratio.value = 20;
  state.limiterNode.attack.value = 0.001;
  state.limiterNode.release.value = (state.controlValues.limRelease ?? 50) / 1000;
  state.limiterNode.knee.value = 0;

  state.limiterMakeupNode = ctx.createGain();
  const limCeil = state.controlValues.limCeiling ?? -0.3;
  const limThresh = state.controlValues.limThreshold ?? -6;
  state.limiterMakeupNode.gain.value = Math.pow(10, (limCeil - limThresh) / 20);

  // Gate
  state.gateGainNode = ctx.createGain();
  state.gateGainNode.gain.value = 1;
  state.gateAnalyser = ctx.createAnalyser();
  state.gateAnalyser.fftSize = 256;
  state.gateCurrentGain = 1;
  state.gateHoldCounter = 0;

  // Output Gain
  state.outputGainNode = ctx.createGain();
  state.outputGainNode.gain.value = Math.pow(10, (state.controlValues.outputGain ?? 0) / 20) * (state.volume ?? 0.8);

  // Analyser
  state.analyserNode = ctx.createAnalyser();
  state.analyserNode.fftSize = 256;
  state.analyserNode.smoothingTimeConstant = 0.8;

  // Connect processing chain
  connectProcessingChain();
}

function connectProcessingChain() {
  // Disconnect old chain from destination if exists
  if (state.analyserNode) {
    try { state.analyserNode.disconnect(); } catch(e) {}
  }

  const ctx = state.audioContext;

  // EQ chain: inputGain → subBass → bass → lowMid → mid → highMid → treble → air
  let last = state.inputGainNode;
  const eqOrder = ['subBass', 'bass', 'lowMid', 'mid', 'highMid', 'treble', 'air'];
  eqOrder.forEach(id => {
    last.connect(state.eqFilters[id]);
    last = state.eqFilters[id];
  });

  // Compressor
  last.connect(state.compressorNode);
  last = state.compressorNode;
  last.connect(state.compMakeupNode);
  last = state.compMakeupNode;

  // Saturation
  last.connect(state.saturationNode);
  last = state.saturationNode;

  // Stereo Width (splitter / merger)
  last.connect(state.stereoSplitter);
  state.stereoSplitter.connect(state.stereoLL, 0); // Left → LL → merger in 0
  state.stereoSplitter.connect(state.stereoLR, 1); // Right → LR → merger in 0 (crossfeed to left out)
  state.stereoSplitter.connect(state.stereoRL, 0); // Left → RL → merger in 1 (crossfeed to right out)
  state.stereoSplitter.connect(state.stereoRR, 1); // Right → RR → merger in 1
  state.stereoLL.connect(state.stereoMerger, 0, 0);
  state.stereoLR.connect(state.stereoMerger, 0, 0);
  state.stereoRL.connect(state.stereoMerger, 0, 1);
  state.stereoRR.connect(state.stereoMerger, 0, 1);

  // Limiter
  state.stereoMerger.connect(state.limiterNode);
  state.limiterNode.connect(state.limiterMakeupNode);

  // Gate: sidechain tap for detection
  state.limiterMakeupNode.connect(state.gateGainNode);
  state.limiterMakeupNode.connect(state.gateAnalyser);

  // De-Esser: sidechain tap for sibilance detection
  state.gateGainNode.connect(state.deEssFilter);
  state.gateGainNode.connect(state.deEssDetectFilter);
  state.deEssDetectFilter.connect(state.deEssAnalyser);

  // Output
  state.deEssFilter.connect(state.outputGainNode);
  state.outputGainNode.connect(state.analyserNode);
  state.analyserNode.connect(ctx.destination);
}

// ===== Playback Controls =====
function playPlayback() {
  if (!state.audioBuffer || !state.audioContext) return;
  if (state.isPlaying) return;

  if (state.audioContext.state === 'suspended') {
    state.audioContext.resume();
  }

  state.sourceNode = state.audioContext.createBufferSource();
  state.sourceNode.buffer = state.audioBuffer;
  state.sourceNode.onended = () => {
    if (state.isPlaying) stopPlayback();
  };

  // Connect source to start of processing chain
  state.sourceNode.connect(state.inputGainNode);

  state.startTime = state.audioContext.currentTime - state.pauseOffset;
  state.sourceNode.start(0, state.pauseOffset);
  state.isPlaying = true;

  setPlayIcon('pause');
  document.getElementById('analyzerStatus').textContent = 'Active';
}

function pausePlayback() {
  if (!state.isPlaying) return;
  state.pauseOffset = state.audioContext.currentTime - state.startTime;
  state.sourceNode.stop();
  state.sourceNode.disconnect();
  state.isPlaying = false;

  setPlayIcon('play');
}

function stopPlayback() {
  if (state.sourceNode && state.isPlaying) {
    try {
      state.sourceNode.stop();
      state.sourceNode.disconnect();
    } catch(e) {}
  }
  state.isPlaying = false;
  state.pauseOffset = 0;
  state.startTime = 0;

  setPlayIcon('play');
  document.getElementById('seekFill').style.width = '0%';
  document.getElementById('currentTime').textContent = '0:00';
  document.getElementById('analyzerStatus').textContent = 'Ready';
}

function togglePlayPause() {
  if (!state.audioBuffer) {
    showToast('Please upload an audio file first', 'error');
    return;
  }
  if (state.isPlaying) {
    pausePlayback();
  } else {
    playPlayback();
  }
}

function setPlayIcon(iconName) {
  const btn = document.getElementById('playPauseBtn');
  if (!btn) return;
  btn.innerHTML = `<i data-lucide="${iconName}" class="w-5 h-5 text-dark-900 ${iconName === 'play' ? 'ml-0.5' : ''}"></i>`;
  lucide.createIcons();
}

function updatePlaybackTime() {
  if (!state.audioBuffer || !state.isPlaying) return;
  const elapsed = state.audioContext.currentTime - state.startTime;
  const duration = state.audioBuffer.duration;
  const progress = Math.min(elapsed / duration, 1);
  document.getElementById('currentTime').textContent = formatTime(elapsed);
  document.getElementById('seekFill').style.width = `${progress * 100}%`;
}

// ===== Gate & De-Esser (real-time modulation) =====
function updateGateAndDeEsser() {
  if (!state.audioContext || !state.isPlaying) return;

  // Gate
  if (state.gateAnalyser && state.gateGainNode) {
    const dataArray = new Float32Array(state.gateAnalyser.fftSize);
    state.gateAnalyser.getFloatTimeDomainData(dataArray);
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i] * dataArray[i];
    }
    const rms = Math.sqrt(sum / dataArray.length);
    const db = 20 * Math.log10(Math.max(rms, 0.00001));
    const threshold = state.controlValues.gateThreshold ?? -60;

    let targetGain;
    if (db > threshold) {
      targetGain = 1;
      state.gateHoldCounter = Math.round((state.controlValues.gateHold ?? 0) * 48 / 1000);
    } else {
      if (state.gateHoldCounter > 0) {
        state.gateHoldCounter--;
        targetGain = 1;
      } else {
        targetGain = 0;
      }
    }

    const attack = (state.controlValues.gateAttack ?? 1) / 1000;
    const release = (state.controlValues.gateRelease ?? 100) / 1000;
    const rate = targetGain > state.gateCurrentGain ? 1 / (attack * 48000) : 1 / (release * 48000);
    state.gateCurrentGain += (targetGain - state.gateCurrentGain) * Math.min(rate * 100, 1);
    state.gateGainNode.gain.value = state.gateCurrentGain;
  }

  // De-Esser
  if (state.deEssAnalyser && state.deEssFilter) {
    const amount = (state.controlValues.deEssAmount ?? 0) / 100;
    if (amount > 0) {
      const dataArray = new Uint8Array(state.deEssAnalyser.frequencyBinCount);
      state.deEssAnalyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
      const avg = sum / dataArray.length / 255;
      state.deEssFilter.gain.value = -avg * amount * 12;
    } else {
      state.deEssFilter.gain.value = 0;
    }
  }
}

// ===== Event Listeners =====
function initEventListeners() {
  // EQ Curve drag interaction
  initEQCurveInteraction();

  // Upload button
  document.getElementById('uploadBtn').addEventListener('click', () => {
    document.getElementById('fileInput').click();
  });

  // File input change
  document.getElementById('fileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) loadAudioFile(file);
  });

  // Play/Pause
  document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);

  // Stop
  document.getElementById('stopBtn').addEventListener('click', stopPlayback);

  // Seek bar
  document.getElementById('seekBar').addEventListener('click', (e) => {
    if (!state.audioBuffer) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const seekTime = ratio * state.audioBuffer.duration;
    state.pauseOffset = seekTime;
    if (state.isPlaying) {
      state.sourceNode.stop();
      state.sourceNode.disconnect();
      state.isPlaying = false;
      playPlayback();
    }
    document.getElementById('seekFill').style.width = `${ratio * 100}%`;
    document.getElementById('currentTime').textContent = formatTime(seekTime);
  });

  // Volume slider
  document.getElementById('volumeSlider').addEventListener('input', (e) => {
    state.volume = parseInt(e.target.value) / 100;
    if (state.outputGainNode) {
      const baseGain = Math.pow(10, (state.controlValues.outputGain ?? 0) / 20);
      state.outputGainNode.gain.value = baseGain * state.volume;
    }
  });

  // Reset controls
  document.getElementById('resetControlsBtn').addEventListener('click', () => {
    state.activeGenre = null;
    document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
    Object.keys(DEFAULT_VALUES).forEach(id => setSliderValue(id, DEFAULT_VALUES[id]));
    showToast('All controls reset to default', 'success');
  });

  // Reset EQ only
  document.getElementById('resetEQBtn').addEventListener('click', () => {
    const eqBands = ['subBass', 'bass', 'lowMid', 'mid', 'highMid', 'treble', 'air'];
    eqBands.forEach(id => setSliderValue(id, DEFAULT_VALUES[id]));
    showToast('EQ reset to flat', 'success');
  });

  // Reset Preset
  document.getElementById('resetPresetBtn').addEventListener('click', () => {
    if (state.activeGenre) {
      const preset = getPresetForGenre(state.activeGenre);
      Object.keys(preset).forEach(key => setSliderValue(key, preset[key]));
      showToast(`Preset "${state.activeGenre}" re-applied`, 'success');
    } else {
      Object.keys(DEFAULT_VALUES).forEach(id => setSliderValue(id, DEFAULT_VALUES[id]));
      showToast('No preset selected — reset to default', 'info');
    }
  });

  // Export
  document.getElementById('exportBtn').addEventListener('click', exportAudio);

  // Drag & Drop
  const dropZone = document.getElementById('dropZone');
  ['dragenter', 'dragover'].forEach(evt => {
    dropZone.addEventListener(evt, (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
  });
  ['dragleave', 'drop'].forEach(evt => {
    dropZone.addEventListener(evt, (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
    });
  });
  dropZone.addEventListener('drop', (e) => {
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) loadAudioFile(file);
  });

  // Mobile genre drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const genreDrawer = document.getElementById('genreDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const genreDrawerContent = document.getElementById('genreDrawerContent');

  function openDrawer() {
    genreDrawer.classList.remove('hidden');
    requestAnimationFrame(() => {
      genreDrawerContent.style.transform = 'translateY(0)';
    });
  }
  function closeDrawer() {
    genreDrawerContent.style.transform = 'translateY(100%)';
    setTimeout(() => genreDrawer.classList.add('hidden'), 300);
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);

  // Mobile bottom nav
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const section = btn.dataset.section;
      if (section === 'genres') {
        openDrawer();
      } else {
        const targets = {
          waveform: 'dropZone',
          controls: 'controlsGrid',
          analyzer: 'spectrumCanvas',
        };
        const el = document.getElementById(targets[section]);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.target.matches('input, textarea, select, [contenteditable]')) {
      e.preventDefault();
      togglePlayPause();
    }
    if (e.ctrlKey && e.key === 'o') {
      e.preventDefault();
      document.getElementById('fileInput').click();
    }
    
  });
}

// ===== Export Audio =====
async function exportAudio() {
  if (!state.audioBuffer) {
    showToast('Please upload an audio file first', 'error');
    return;
  }

  showToast('Rendering mastered audio...', 'info');

  try {
    const offlineCtx = new OfflineAudioContext(
      state.audioBuffer.numberOfChannels,
      state.audioBuffer.length,
      state.audioBuffer.sampleRate
    );

    const source = offlineCtx.createBufferSource();
    source.buffer = state.audioBuffer;

    // Use current control values for export
    const cv = { ...state.controlValues };

    // Input gain
    const inputGain = offlineCtx.createGain();
    inputGain.gain.value = Math.pow(10, (cv.inputGain ?? 0) / 20);

    // EQ filters
    const eqConfig = [
      { id: 'subBass', type: 'lowshelf', freq: 60 },
      { id: 'bass', type: 'lowshelf', freq: 150 },
      { id: 'lowMid', type: 'peaking', freq: 400, q: 1.0 },
      { id: 'mid', type: 'peaking', freq: 1000, q: 0.7 },
      { id: 'highMid', type: 'peaking', freq: 3000, q: 1.0 },
      { id: 'treble', type: 'highshelf', freq: 6000 },
      { id: 'air', type: 'peaking', freq: 12000, q: 0.8 },
    ];
    const eqFilters = {};
    eqConfig.forEach(cfg => {
      const filter = offlineCtx.createBiquadFilter();
      filter.type = cfg.type;
      filter.frequency.value = cfg.freq;
      if (cfg.q) filter.Q.value = cfg.q;
      filter.gain.value = cv[cfg.id] ?? 0;
      eqFilters[cfg.id] = filter;
    });

    // Compressor
    const compressor = offlineCtx.createDynamicsCompressor();
    compressor.threshold.value = cv.compThreshold ?? -24;
    compressor.ratio.value = cv.compRatio ?? 4;
    compressor.attack.value = (cv.compAttack ?? 10) / 1000;
    compressor.release.value = (cv.compRelease ?? 100) / 1000;
    compressor.knee.value = cv.compKnee ?? 10;

    const compMakeup = offlineCtx.createGain();
    compMakeup.gain.value = Math.pow(10, (cv.compMakeup ?? 0) / 20);

    // Saturation
    const sat = offlineCtx.createWaveShaper();
    sat.curve = makeSaturationCurve(
      (cv.satDrive ?? 0) / 100,
      (cv.satMix ?? 100) / 100
    );
    sat.oversample = '4x';

    // Limiter
    const limiter = offlineCtx.createDynamicsCompressor();
    limiter.threshold.value = cv.limThreshold ?? -6;
    limiter.ratio.value = 20;
    limiter.attack.value = 0.001;
    limiter.release.value = (cv.limRelease ?? 50) / 1000;
    limiter.knee.value = 0;

    const limMakeup = offlineCtx.createGain();
    const lCeil = cv.limCeiling ?? -0.3;
    const lThresh = cv.limThreshold ?? -6;
    limMakeup.gain.value = Math.pow(10, (lCeil - lThresh) / 20);

    // Output gain
    const outputGain = offlineCtx.createGain();
    outputGain.gain.value = Math.pow(10, (cv.outputGain ?? 0) / 20);

    // Connect chain
    source.connect(inputGain);
    let last = inputGain;
    const eqOrder = ['subBass', 'bass', 'lowMid', 'mid', 'highMid', 'treble', 'air'];
    eqOrder.forEach(id => {
      last.connect(eqFilters[id]);
      last = eqFilters[id];
    });
    last.connect(compressor);
    last = compressor;
    last.connect(compMakeup);
    last = compMakeup;
    last.connect(sat);
    last = sat;
    last.connect(limiter);
    last = limiter;
    last.connect(limMakeup);
    last = limMakeup;
    last.connect(outputGain);
    outputGain.connect(offlineCtx.destination);

    source.start(0);
    const renderedBuffer = await offlineCtx.startRendering();

    // Convert to WAV and download
    const wav = audioBufferToWav(renderedBuffer);
    const blob = new Blob([wav], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mastered_audio.wav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Audio exported successfully!', 'success');
  } catch (err) {
    console.error('Export error:', err);
    showToast('Export failed: ' + err.message, 'error');
  }
}

function audioBufferToWav(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const bitDepth = 16;
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;
  const dataLength = buffer.length * blockAlign;
  const totalLength = 44 + dataLength;
  const arrayBuffer = new ArrayBuffer(totalLength);
  const view = new DataView(arrayBuffer);

  // WAV header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, totalLength - 8, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(view, 36, 'data');
  view.setUint32(40, dataLength, true);

  const channels = [];
  for (let i = 0; i < numChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }

  let offset = 44;
  for (let i = 0; i < buffer.length; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, channels[ch][i]));
      const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
      view.setInt16(offset, intSample, true);
      offset += 2;
    }
  }

  return arrayBuffer;
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

// ===== Toast =====
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== Format Time =====
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}