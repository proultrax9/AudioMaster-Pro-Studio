<div class="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

[](index.html)

<div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00ffaa] flex items-center justify-center">

**

</div>

<div>

<span class="font-bold text-white text-sm group-hover:text-[#00d4ff] transition-colors">AudioMaster</span>
<span class="text-[10px] tracking-[0.15em] uppercase text-[#00d4ff]/60 ml-1">Pro</span>

</div>

<div class="flex items-center gap-2">

[** <span class="hidden sm:inline">Help</span>](help.html) [**
<span class="hidden sm:inline">Studio</span>](index.html)

</div>

</div>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 relative">

<div class="hero-glow" style="background: rgba(0,212,255,0.08); top: -100px; left: -100px;">

</div>

<div class="hero-glow" style="background: rgba(0,255,170,0.06); top: -50px; right: -150px; animation-delay: 3s;">

</div>

<div class="text-center mb-16 animate-in relative">

<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold mb-5">

** Project Documentation

</div>

# Audio<span class="text-[#00d4ff]">Master</span> <span class="text-[#00ffaa]">Pro</span> Studio

เครื่องมือ Audio Mastering ออนไลน์ที่ทำงานบนเบราว์เซอร์โดยตรง  
ใช้ Web Audio API ประมวลผลเสียงแบบ Real-time ไม่ต้องติดตั้งอะไรเพิ่ม

<div class="flex flex-wrap items-center justify-center gap-2">

<span class="tag text-[#00d4ff] border-[#00d4ff]/25 bg-[#00d4ff]/5"> **
Web Audio API </span>
<span class="tag text-[#00ffaa] border-[#00ffaa]/25 bg-[#00ffaa]/5"> **
TailwindCSS </span>
<span class="tag text-white/50 border-white/15 bg-white/5"> **
Browser-based </span>
<span class="tag text-white/50 border-white/15 bg-white/5"> ** Real-time
</span>

</div>

</div>

<div class="section mb-12 animate-in delay-1">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">**</span> สารบัญ

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">

[** ฟีเจอร์หลัก](#features) [** เริ่มต้นใช้งาน](#quickstart) [**
โครงสร้างไฟล์](#project-structure) [** รายละเอียด
Controls](#controls) [** Signal Chain](#signal-chain) [** Genre
Presets](#genres) [** Export Formats](#export) [** Keyboard
Shortcuts](#shortcuts) [** ปุ่ม Reset](#reset-buttons) [**
มือถือ](#mobile) [** Tech Stack](#tech-stack) [** Developer
Guide](#developer)

</div>

</div>

</div>

<div id="features" class="section mb-12 animate-in delay-2">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center">**</span> ฟีเจอร์หลัก

<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Drag & Drop Upload

</div>

ลากไฟล์เสียงวางที่ช่อง Waveform หรือคลิกปุ่ม Upload รองรับ WAV, MP3,
FLAC, OGG

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Waveform Player

</div>

แสดงรูปคลื่นเสียงแบบละเอียด มี Seek Bar กระโดดไปยังจุดต่างๆ ของเพลงได้

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Spectrum Analyzer

</div>

กราฟความถี่เสียง Real-time 64 แท่ง พร้อม Peak Indicator สี Mint
เมื่อเกิน 70%

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### EQ Response Curve

</div>

เส้นโค้ง EQ 7 Band แบบ Real-time มี Drag Handles 7
จุดให้ลากปรับค่าได้โดยตรง

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### 35 Genre Presets

</div>

เลือกแนวเพลงได้ 35 แนว ตั้งแต่ Pop, Rock, EDM ถึง Afrobeats, Shoegaze
และ Grunge

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Multi-format Export

</div>

ส่งออกเป็น WAV 16/24/32-bit หรือ MP3 192/256/320kbps พร้อมดาวน์โหลดทันที

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Dynamic Compressor

</div>

Compressor 7 พารามิเตอร์: Threshold, Ratio, Attack, Release, Knee,
Make-Up, SC HPF

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Noise Gate & De-Esser

</div>

Noise Gate ตัดเสียงรบกวน + De-Esser ลด Sibilance ทำงานแบบ Real-time

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Saturation / Harmonics

</div>

WaveShaper จำลองเสียง Saturation พร้อม Dry/Wet Mix ให้ความอบอุ่นแก่เสียง

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Stereo Width Control

</div>

ปรับความกว้าง Stereo 0% (Mono) ถึง 200% (Extra Wide) ด้วย Mid/Side
Matrix

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Brickwall Limiter

</div>

Limiter ป้องกัน Clipping ด้วย Ratio 20:1 ปรับ Ceiling, Threshold,
Release ได้

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Responsive & Mobile

</div>

รองรับทุกขนาดหน้าจอ มี Mobile Bottom Nav และ Genre Drawer สำหรับมือถือ

</div>

</div>

</div>

</div>

<div id="quickstart" class="section mb-12 animate-in delay-2">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">**</span> เริ่มต้นใช้งาน

<div class="grid gap-3">

<div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">

1

</div>

<div>

### เปิดหน้า Studio

เปิดไฟล์ `index.html` บนเบราว์เซอร์ — ไม่ต้องติดตั้งอะไรเพิ่ม
ทำงานได้ทันทีบนเบราว์เซอร์สมัยใหม่

</div>

</div>

<div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">

2

</div>

<div>

### อัพโหลดไฟล์เสียง

คลิกปุ่ม <span class="text-[#00d4ff] font-medium">Upload Audio</span>
หรือลากไฟล์เสียงวางที่ช่อง Waveform รองรับ WAV, MP3, FLAC, OGG

</div>

</div>

<div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">

3

</div>

<div>

### เลือก Genre Preset

เลือกแนวเพลงจาก Sidebar (Desktop) หรือแท็บ Genres (มือถือ) ระบบจะปรับ EQ
+ Compressor อัตโนมัติ

</div>

</div>

<div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">

4

</div>

<div>

### ปรับแต่งเสียง

ใช้ Slider ในส่วน Mastering Controls หรือลาก Handle บน EQ Curve
เพื่อปรับแบบ Real-time

</div>

</div>

<div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">

5

</div>

<div>

### ฟังผลลัพธ์ & Export

กด <span class="text-[#00ffaa] font-medium">Play</span>
ฟังเสียงที่ปรับแล้ว → พอใจแล้วกด
<span class="text-[#00ffaa] font-medium">Export</span>
เลือกฟอร์แมตและดาวน์โหลด

</div>

</div>

</div>

</div>

</div>

<div id="project-structure" class="section mb-12 animate-in delay-3">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center">**</span> โครงสร้างไฟล์

<div class="space-y-2">

<div class="file-row">

<div class="w-9 h-9 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">

**

</div>

<div class="flex-1 min-w-0">

### index.html

หน้า Studio หลัก — UI ทั้งหมดของแอปพลิเคชัน

</div>

</div>

<div class="file-row">

<div class="w-9 h-9 rounded-lg bg-[#00ffaa]/10 border border-[#00ffaa]/20 flex items-center justify-center flex-shrink-0">

**

</div>

<div class="flex-1 min-w-0">

### help.html

คู่มือการใช้งานสำหรับผู้ใช้ทั่วไป

</div>

</div>

<div class="file-row">

<div class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">

**

</div>

<div class="flex-1 min-w-0">

### README.html

เอกสารประกอบโปรเจกต์ (หน้านี้)

</div>

</div>

<div class="file-row">

<div class="w-9 h-9 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">

**

</div>

<div class="flex-1 min-w-0">

### style.css

CSS ทั้งหมด — Custom Properties, Glass Cards, Sliders, Genre Buttons,
Responsive

</div>

</div>

<div class="file-row">

<div class="w-9 h-9 rounded-lg bg-[#00ffaa]/10 border border-[#00ffaa]/20 flex items-center justify-center flex-shrink-0">

**

</div>

<div class="flex-1 min-w-0">

### script.js

JavaScript Logic — Audio Engine, UI Controls, Genre Presets, Export,
Animation Loop

</div>

</div>

</div>

</div>

</div>

<div id="controls" class="section mb-12 animate-in delay-3">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">**</span> รายละเอียด Controls ทั้งหมด

Slider ทั้ง 28 ตัว แบ่งเป็น 8 กลุ่ม

<div class="mb-6">

### ** Input / Output

<div class="overflow-x-auto">

| Control     | Web Audio Node | Range         | Default | Step |
| ----------- | -------------- | ------------- | ------- | ---- |
| Input Gain  | `GainNode`     | \-24 → +24 dB | 0 dB    | 0.1  |
| Output Gain | `GainNode`     | \-24 → +24 dB | 0 dB    | 0.1  |

</div>

</div>

<div class="mb-6">

### ** Equalizer — 7 Band

<div class="overflow-x-auto">

| Band       | Filter Type | Freq   | Q   | Range  | Default |
| ---------- | ----------- | ------ | --- | ------ | ------- |
| Sub 60     | Low Shelf   | 60 Hz  | —   | ±12 dB | 0       |
| Bass 150   | Low Shelf   | 150 Hz | —   | ±12 dB | 0       |
| Lo Mid 400 | Peaking     | 400 Hz | 1.0 | ±12 dB | 0       |
| Mid 1k     | Peaking     | 1 kHz  | 0.7 | ±12 dB | 0       |
| Hi Mid 3k  | Peaking     | 3 kHz  | 1.0 | ±12 dB | 0       |
| Treble 6k  | High Shelf  | 6 kHz  | —   | ±12 dB | 0       |
| Air 12k    | Peaking     | 12 kHz | 0.8 | ±6 dB  | 0       |

</div>

</div>

<div class="mb-6">

### ** Compressor

<div class="overflow-x-auto">

| Control      | Range        | Default | Step |
| ------------ | ------------ | ------- | ---- |
| Threshold    | \-60 → 0 dB  | \-24 dB | 0.5  |
| Ratio        | 1 → 20 :1    | 4:1     | 0.1  |
| Attack       | 0.1 → 100 ms | 10 ms   | 0.1  |
| Release      | 10 → 1000 ms | 100 ms  | 1    |
| Knee         | 0 → 30 dB    | 10 dB   | 0.5  |
| Make-Up Gain | 0 → +24 dB   | 0 dB    | 0.1  |
| SC HPF       | 0 → 500 Hz   | 0 Hz    | 1    |

</div>

</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div>

### ** Saturation

<div class="space-y-2 text-xs text-white/50">

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Drive</span><span>0 →
100%</span>

</div>

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Mix</span><span>0 →
100%</span>

</div>

</div>

</div>

<div>

### ** Stereo

<div class="space-y-2 text-xs text-white/50">

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Width</span><span>0 →
200%</span>

</div>

</div>

</div>

<div>

### ** Brickwall Limiter

<div class="space-y-2 text-xs text-white/50">

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Ceiling</span><span>-6 → 0
dB</span>

</div>

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Threshold</span><span>-24 → 0
dB</span>

</div>

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Release</span><span>10 → 500
ms</span>

</div>

</div>

</div>

<div>

### ** Noise Gate

<div class="space-y-2 text-xs text-white/50">

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Threshold</span><span>-80 → 0
dB</span>

</div>

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Attack</span><span>0.1 → 100
ms</span>

</div>

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Release</span><span>10 → 1000
ms</span>

</div>

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Hold</span><span>0 → 500
ms</span>

</div>

</div>

</div>

<div class="sm:col-span-2">

### ** De-Esser

<div class="grid grid-cols-3 gap-2 text-xs text-white/50">

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Threshold</span><span>-60 → 0
dB</span>

</div>

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Frequency</span><span>2k → 10k
Hz</span>

</div>

<div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/70 font-semibold">Amount</span><span>0 →
100%</span>

</div>

</div>

</div>

</div>

</div>

</div>

<div id="signal-chain" class="section mb-12 animate-in delay-3">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center">**</span> Audio Signal Chain

ลำดับการไหลของเสียงผ่าน Web Audio Node ต่างๆ:

<div class="flex flex-wrap items-center gap-2 justify-center">

<span class="signal-node bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff]">Source</span>
**
<span class="signal-node bg-white/5 border border-white/10 text-white/50">Input
Gain</span> **
<span class="signal-node bg-[#00ffaa]/10 border border-[#00ffaa]/20 text-[#00ffaa]">7-Band
EQ</span> **
<span class="signal-node bg-white/5 border border-white/10 text-white/50">Compressor</span>
**
<span class="signal-node bg-white/5 border border-white/10 text-white/50">Make-Up
Gain</span> **
<span class="signal-node bg-white/5 border border-white/10 text-white/50">Saturation</span>
**
<span class="signal-node bg-white/5 border border-white/10 text-white/50">Stereo
Width</span> **
<span class="signal-node bg-white/5 border border-white/10 text-white/50">Limiter</span>
**
<span class="signal-node bg-white/5 border border-white/10 text-white/50">Noise
Gate</span> **
<span class="signal-node bg-white/5 border border-white/10 text-white/50">De-Esser</span>
**
<span class="signal-node bg-white/5 border border-white/10 text-white/50">Output
Gain</span> **
<span class="signal-node bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff]">Analyser</span>
**
<span class="signal-node bg-[#00ffaa]/10 border border-[#00ffaa]/20 text-[#00ffaa]">Destination</span>

</div>

</div>

</div>

<div id="genres" class="section mb-12 animate-in delay-4">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">**</span> 35 Genre Presets

แต่ละ Preset ปรับค่า EQ 7 Band + Compressor 7 พารามิเตอร์ + Saturation,
Stereo, Limiter, Gate, De-Esser อัตโนมัติ

<div class="flex flex-wrap gap-2">

<span class="genre-chip">🎵 Pop</span> <span class="genre-chip">🎸
Rock</span> <span class="genre-chip">🔥 Metal</span>
<span class="genre-chip">⚡ EDM</span> <span class="genre-chip">🎤
Hip-Hop</span> <span class="genre-chip">💜 R\&B</span>
<span class="genre-chip">🎷 Jazz</span> <span class="genre-chip">🎻
Classical</span> <span class="genre-chip">☕ Lo-Fi</span>
<span class="genre-chip">🌊 Ambient</span> <span class="genre-chip">🌴
Reggae</span> <span class="genre-chip">🤠 Country</span>
<span class="genre-chip">🎺 Blues</span> <span class="genre-chip">🏕️
Folk</span> <span class="genre-chip">🏴 Punk</span>
<span class="genre-chip">🎨 Indie</span> <span class="genre-chip">🏭
Techno</span> <span class="genre-chip">🏠 House</span>
<span class="genre-chip">🥁 D\&B</span> <span class="genre-chip">💰
Trap</span> <span class="genre-chip">✨ K-Pop</span>
<span class="genre-chip">💃 Latin</span> <span class="genre-chip">❤️
Soul</span> <span class="genre-chip">🕺 Funk</span>
<span class="genre-chip">🙏 Gospel</span> <span class="genre-chip">🎶
Acoustic</span> <span class="genre-chip">🎙️ Podcast</span>
<span class="genre-chip">🎬 Cinematic</span> <span class="genre-chip">🌆
Synthwave</span> <span class="genre-chip">🌸 Vaporwave</span>
<span class="genre-chip">🏝️ Reggaeton</span> <span class="genre-chip">🌍
Afrobeats</span> <span class="genre-chip">📻 Boom Bap</span>
<span class="genre-chip">🌫️ Shoegaze</span> <span class="genre-chip">🖤
Grunge</span>

</div>

</div>

</div>

<div id="export" class="section mb-12 animate-in delay-4">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center">**</span> Export Formats

<div class="overflow-x-auto">

| Format                                                                                                                                  | คุณภาพ         | ขนาดโดยประมาณ (ต่อนาที) | หมายเหตุ                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------- | ---------------------------- |
| <span class="px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff] font-semibold border border-[#00d4ff]/20 text-[10px]">WAV 16-bit</span> | CD Quality     | \~10 MB/min             | ไฟล์เล็กสุดในบรรดา WAV       |
| <span class="px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff] font-semibold border border-[#00d4ff]/20 text-[10px]">WAV 24-bit</span> | Studio Quality | \~15 MB/min             | คุณภาพระดับสตูดิโอ           |
| <span class="px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff] font-semibold border border-[#00d4ff]/20 text-[10px]">WAV 32f</span>    | Max Precision  | \~20 MB/min             | IEEE Float สำหรับประมวลผลต่อ |
| <span class="px-2 py-0.5 rounded bg-[#00ffaa]/10 text-[#00ffaa] font-semibold border border-[#00ffaa]/20 text-[10px]">MP3 320</span>    | Best MP3       | \~2.4 MB/min            | คุณภาพสูงสุดของ MP3          |
| <span class="px-2 py-0.5 rounded bg-[#00ffaa]/10 text-[#00ffaa] font-semibold border border-[#00ffaa]/20 text-[10px]">MP3 256</span>    | Good Quality   | \~1.9 MB/min            | สมดุลระหว่างคุณภาพและขนาด    |
| <span class="px-2 py-0.5 rounded bg-[#00ffaa]/10 text-[#00ffaa] font-semibold border border-[#00ffaa]/20 text-[10px]">MP3 192</span>    | Smaller Size   | \~1.4 MB/min            | เหมาะส่งต่อ/แชร์             |

</div>

<div class="mt-4 p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/10">

** <span>MP3 Encoding ใช้ไลบรารี `lamejs` — หากไลบรารีไม่พร้อมใช้งาน
ปุ่ม MP3 จะถูก Disable อัตโนมัติ แนะนำใช้ WAV แทน</span>

</div>

</div>

</div>

<div id="shortcuts" class="section mb-12 animate-in delay-4">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center">**</span> Keyboard Shortcuts

<div class="space-y-3">

<div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/60 text-sm">Play / Pause</span>
<span class="shortcut-key">Space</span>

</div>

<div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/60 text-sm">อัพโหลดไฟล์</span>

<div class="flex items-center gap-1.5">

<span class="shortcut-key">Ctrl</span><span class="text-white/20 text-xs">+</span><span class="shortcut-key">O</span>

</div>

</div>

<div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/60 text-sm">Reset ค่าทั้งหมด</span>

<div class="flex items-center gap-1.5">

<span class="shortcut-key">Ctrl</span><span class="text-white/20 text-xs">+</span><span class="shortcut-key">R</span>

</div>

</div>

<div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/60 text-sm">Export</span>

<div class="flex items-center gap-1.5">

<span class="shortcut-key">Ctrl</span><span class="text-white/20 text-xs">+</span><span class="shortcut-key">E</span>

</div>

</div>

<div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">

<span class="text-white/60 text-sm">ปรับ Volume</span>

<div class="flex items-center gap-1.5">

<span class="shortcut-key">↑</span><span class="text-white/20 text-xs">/</span><span class="shortcut-key">↓</span>

</div>

</div>

</div>

</div>

</div>

<div id="reset-buttons" class="section mb-12 animate-in delay-4">

<div class="glass-card rounded-xl p-5 sm:p-6" style="border-color: rgba(0,212,255,0.12)">

## <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">**</span> ปุ่ม Reset ทั้ง 3 แบบ

<div class="grid gap-4 mb-5">

<div class="p-4 rounded-xl bg-gradient-to-r from-[#00d4ff]/5 to-transparent border border-[#00d4ff]/10">

### 🔄 Reset Preset

คืนค่าทุก Slider กลับไปที่ค่า Preset ของ Genre ที่เลือก —
ถ้ายังไม่ได้เลือก Genre จะคืนเป็น Default

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

### 📊 Reset EQ

คืนเฉพาะ 7 Band EQ เป็น 0 dB โดยไม่กระทบ Compressor หรือเอฟเฟกต์อื่น

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

### 🗑️ Reset All

คืนทุก Slider กลับเป็น Default (ศูนย์ทั้งหมด) และยกเลิกการเลือก Genre

</div>

</div>

<div class="overflow-x-auto">

| ปุ่ม         | EQ       | Compressor | เอฟเฟกต์อื่น | Genre ที่เลือก |
| ------------ | -------- | ---------- | ------------ | -------------- |
| Reset Preset | → Preset | → Preset   | → Preset     | ✅ คงไว้        |
| Reset EQ     | → 0 dB   | ไม่แตะ     | ไม่แตะ       | ✅ คงไว้        |
| Reset All    | → 0 dB   | → Default  | → Default    | ❌ ลบ           |

</div>

</div>

</div>

<div id="mobile" class="section mb-12 animate-in delay-5">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">**</span> การใช้งานบนมือถือ

<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Bottom Nav

</div>

แถบนำทาง 4 แท็บ: Player, Genres, Controls, Analyze

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Genre Drawer

</div>

แท็บ Genres เปิด Drawer จากด้านล่าง แสดง 3 คอลัมน์

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Touch Sliders

</div>

สไลด์นิ้วปรับค่าได้ทุก Slider + EQ Handle

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

<div class="flex items-center gap-2 mb-2">

**

### Responsive Layout

</div>

จัดเรียงใหม่อัตโนมัติให้พอดีกับหน้าจอเล็ก

</div>

</div>

</div>

</div>

<div id="tech-stack" class="section mb-12 animate-in delay-5">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center">**</span> Tech Stack

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

### Web Audio API

Audio Processing Engine — GainNode, BiquadFilter, DynamicsCompressor,
WaveShaper, AnalyserNode

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

### TailwindCSS

Utility-first CSS Framework สำหรับ Responsive Layout

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

### Lucide Icons

Icon Library สำหรับ UI Elements ทั้งหมด

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

### Canvas API

Waveform, Spectrum Analyzer, EQ Curve และ Particle Background

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

### lamejs

MP3 Encoder สำหรับ Export เป็น MP3 (192/256/320kbps)

</div>

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">

### Inter Font

Google Fonts — ฟอนต์หลักที่ใช้ทั้งโปรเจกต์

</div>

</div>

</div>

</div>

<div id="developer" class="section mb-12 animate-in delay-5">

<div class="glass-card rounded-xl p-5 sm:p-6">

## <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">**</span> Developer Guide

<div class="mb-6">

### ** เพิ่ม Genre Preset ใหม่

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 space-y-2">

1\. เพิ่ม Object ในอาร์เรย์ `GENRES` ในไฟล์ `script.js`

2\. เพิ่ม Overrides ใน `GENRE_OVERRIDES` — ระบุเฉพาะค่าที่ต่างจาก
BASE\_PRESET

<div class="mt-3 p-3 rounded-lg bg-[#060a14] border border-white/5 overflow-x-auto">

``` text-[11px] leading-relaxed
// ตัวอย่าง: เพิ่ม Genre "Drill"
GENRES.push({ name: 'Drill', emoji: '🔫' });

GENRE_OVERRIDES['Drill'] = {
  bass: 4, mid: 1, treble: 2.5, air: 1,
  compThreshold: -16, compRatio: 4.5, compMakeup: 4,
  satDrive: 15, stereoWidth: 110,
  // ... ระบุเฉพาะค่าที่ต่างจาก BASE_PRESET
};
```

</div>

</div>

</div>

<div class="mb-6">

### ** เพิ่ม Export Format

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 space-y-2">

1\. เพิ่ม Object ในอาร์เรย์ `EXPORT_FORMATS`

2\. เพิ่ม Case ในฟังก์ชัน `exportAudio()` สำหรับ Encoding logic

3\. เพิ่ม Case ในฟังก์ชัน `estimateFileSize()` สำหรับคำนวณขนาดไฟล์

</div>

</div>

<div>

### ** เพิ่ม Audio Node ใหม่ใน Signal Chain

<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 space-y-2">

1\. เพิ่ม Section ใน `CONTROL_SECTIONS` — กำหนด id, label, icon,
controls

2\. สร้าง Node ใน `initAudioNodes()` — สร้าง Web Audio Node และเก็บใน
state

3\. ต่อ Node เข้า `connectProcessingChain()` — แทรกเข้าในลำดับที่ต้องการ

4\. เพิ่ม Case ใน `applyControlToAudio()` — เชื่อม Slider เข้า Node

5\. เพิ่ม Node ใน `renderOffline()` — สำหรับ Export

</div>

</div>

</div>

</div>

<div class="text-center py-8 border-t border-white/5">

AudioMaster Pro v2.0 — Built with Web Audio API, TailwindCSS & ❤️

<div class="flex items-center justify-center gap-4">

[** Studio](index.html) [** Help](help.html)

</div>

</div>

</div>
