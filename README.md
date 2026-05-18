
<!DOCTYPE html>
<html lang="th">
<head><script>window.huggingface={variables:{"SPACE_CREATOR_USER_ID":"69d7cddd634f7262f81e26fc"}};</script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AudioMaster Pro Studio — README</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
    :root {
      --neon-blue: #00d4ff;
      --neon-blue-rgb: 0, 212, 255;
      --mint: #00ffaa;
      --mint-rgb: 0, 255, 170;
      --dark-900: #060a14;
      --dark-800: #0c1220;
      --dark-700: #111a2e;
      --dark-600: #1a2540;
    }
    body { background: var(--dark-900); color: #f0f0f0; }
    .bg-dark-900 { background-color: var(--dark-900); }
    .bg-dark-800 { background-color: var(--dark-800); }
    .bg-dark-700 { background-color: var(--dark-700); }
    .text-neon-blue { color: var(--neon-blue); }
    .text-mint { color: var(--mint); }
    .bg-neon-blue { background-color: var(--neon-blue); }
    .bg-mint { background-color: var(--mint); }
    .border-neon-blue { border-color: var(--neon-blue); }
    .border-mint { border-color: var(--mint); }

    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }

    .glass-card {
      background: rgba(12, 18, 32, 0.6);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    .glass-card:hover {
      border-color: rgba(var(--neon-blue-rgb), 0.15);
      box-shadow: 0 0 30px rgba(var(--neon-blue-rgb), 0.03);
    }

    .tag {
      display: inline-flex; align-items: center; gap: 5px;
      padding: 4px 10px; border-radius: 8px; font-size: 11px; font-weight: 600;
      border: 1px solid;
    }

    .shortcut-key {
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 28px; height: 26px; padding: 0 8px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 6px; font-size: 11px; font-weight: 600;
      font-family: 'Inter', monospace;
      color: rgba(255,255,255,0.7);
    }

    .toc-link {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 12px; border-radius: 8px;
      font-size: 13px; color: rgba(255,255,255,0.5);
      transition: all 0.2s; cursor: pointer;
      text-decoration: none;
    }
    .toc-link:hover {
      color: var(--neon-blue);
      background: rgba(var(--neon-blue-rgb), 0.06);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-in {
      animation: fadeInUp 0.5s ease-out forwards;
      opacity: 0;
    }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.5s; }

    @keyframes gradientPulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    .hero-glow {
      position: absolute;
      width: 400px; height: 400px;
      border-radius: 50%;
      filter: blur(120px);
      pointer-events: none;
      animation: gradientPulse 6s ease-in-out infinite;
    }

    .signal-node {
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .signal-node:hover {
      transform: translateY(-1px);
    }

    .genre-chip {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 5px 10px; border-radius: 8px;
      font-size: 11px; font-weight: 500;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      color: rgba(255,255,255,0.6);
      transition: all 0.2s;
    }
    .genre-chip:hover {
      border-color: rgba(var(--neon-blue-rgb), 0.3);
      color: rgba(255,255,255,0.9);
      background: rgba(var(--neon-blue-rgb), 0.06);
    }

    .file-row {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 16px; border-radius: 10px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05);
      transition: all 0.2s;
    }
    .file-row:hover {
      background: rgba(var(--neon-blue-rgb), 0.04);
      border-color: rgba(var(--neon-blue-rgb), 0.15);
    }

    ::selection { background: rgba(var(--neon-blue-rgb), 0.3); color: white; }

    @media (max-width: 640px) {
      .hero-glow { width: 200px; height: 200px; }
    }
  </style>
</head>
<body class="min-h-screen">
  <!-- Top Navigation -->
  <nav class="sticky top-0 z-50 bg-dark-800/80 backdrop-blur-xl border-b border-white/5">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00ffaa] flex items-center justify-center">
          <i data-lucide="audio-waveform" class="w-5 h-5 text-[#060a14]"></i>
        </div>
        <div>
          <span class="font-bold text-white text-sm group-hover:text-[#00d4ff] transition-colors">AudioMaster</span>
          <span class="text-[10px] tracking-[0.15em] uppercase text-[#00d4ff]/60 ml-1">Pro</span>
        </div>
      </a>
      <div class="flex items-center gap-2">
        <a href="help.html" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/10 transition-all text-sm font-medium">
          <i data-lucide="book-open" class="w-4 h-4"></i>
          <span class="hidden sm:inline">Help</span>
        </a>
        <a href="index.html" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all text-sm font-medium">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
          <span class="hidden sm:inline">Studio</span>
        </a>
      </div>
    </div>
  </nav>

  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 relative">
    <!-- Hero Background Glow -->
    <div class="hero-glow" style="background: rgba(0,212,255,0.08); top: -100px; left: -100px;"></div>
    <div class="hero-glow" style="background: rgba(0,255,170,0.06); top: -50px; right: -150px; animation-delay: 3s;"></div>

    <!-- Hero Header -->
    <div class="text-center mb-16 animate-in relative">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold mb-5">
        <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
        Project Documentation
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
        Audio<span class="text-[#00d4ff]">Master</span> <span class="text-[#00ffaa]">Pro</span> Studio
      </h1>
      <p class="text-white/40 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
        เครื่องมือ Audio Mastering ออนไลน์ที่ทำงานบนเบราว์เซอร์โดยตรง<br class="hidden sm:block">
        ใช้ Web Audio API ประมวลผลเสียงแบบ Real-time ไม่ต้องติดตั้งอะไรเพิ่ม
      </p>
      <div class="flex flex-wrap items-center justify-center gap-2">
        <span class="tag text-[#00d4ff] border-[#00d4ff]/25 bg-[#00d4ff]/5">
          <i data-lucide="code-2" class="w-3 h-3"></i> Web Audio API
        </span>
        <span class="tag text-[#00ffaa] border-[#00ffaa]/25 bg-[#00ffaa]/5">
          <i data-lucide="wind" class="w-3 h-3"></i> TailwindCSS
        </span>
        <span class="tag text-white/50 border-white/15 bg-white/5">
          <i data-lucide="monitor" class="w-3 h-3"></i> Browser-based
        </span>
        <span class="tag text-white/50 border-white/15 bg-white/5">
          <i data-lucide="zap" class="w-3 h-3"></i> Real-time
        </span>
      </div>
    </div>

    <!-- Table of Contents -->
    <section class="mb-12 animate-in delay-1">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center"><i data-lucide="list" class="w-4 h-4 text-[#00d4ff]"></i></span>
          สารบัญ
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          <a href="#features" class="toc-link"><i data-lucide="star" class="w-3.5 h-3.5 text-[#00d4ff]"></i> ฟีเจอร์หลัก</a>
          <a href="#quickstart" class="toc-link"><i data-lucide="zap" class="w-3.5 h-3.5 text-[#00ffaa]"></i> เริ่มต้นใช้งาน</a>
          <a href="#project-structure" class="toc-link"><i data-lucide="folder-tree" class="w-3.5 h-3.5 text-[#00d4ff]"></i> โครงสร้างไฟล์</a>
          <a href="#controls" class="toc-link"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5 text-[#00ffaa]"></i> รายละเอียด Controls</a>
          <a href="#signal-chain" class="toc-link"><i data-lucide="git-branch" class="w-3.5 h-3.5 text-[#00d4ff]"></i> Signal Chain</a>
          <a href="#genres" class="toc-link"><i data-lucide="grid-3x3" class="w-3.5 h-3.5 text-[#00ffaa]"></i> Genre Presets</a>
          <a href="#export" class="toc-link"><i data-lucide="download" class="w-3.5 h-3.5 text-[#00d4ff]"></i> Export Formats</a>
          <a href="#shortcuts" class="toc-link"><i data-lucide="keyboard" class="w-3.5 h-3.5 text-[#00ffaa]"></i> Keyboard Shortcuts</a>
          <a href="#reset-buttons" class="toc-link"><i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-[#00d4ff]"></i> ปุ่ม Reset</a>
          <a href="#mobile" class="toc-link"><i data-lucide="smartphone" class="w-3.5 h-3.5 text-[#00ffaa]"></i> มือถือ</a>
          <a href="#tech-stack" class="toc-link"><i data-lucide="layers" class="w-3.5 h-3.5 text-[#00d4ff]"></i> Tech Stack</a>
          <a href="#developer" class="toc-link"><i data-lucide="wrench" class="w-3.5 h-3.5 text-[#00ffaa]"></i> Developer Guide</a>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="mb-12 animate-in delay-2">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center"><i data-lucide="star" class="w-4 h-4 text-[#00ffaa]"></i></span>
          ฟีเจอร์หลัก
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="upload" class="w-4 h-4 text-[#00d4ff]"></i>
              <h3 class="font-semibold text-sm text-white">Drag & Drop Upload</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">ลากไฟล์เสียงวางที่ช่อง Waveform หรือคลิกปุ่ม Upload รองรับ WAV, MP3, FLAC, OGG</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="audio-waveform" class="w-4 h-4 text-[#00d4ff]"></i>
              <h3 class="font-semibold text-sm text-white">Waveform Player</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">แสดงรูปคลื่นเสียงแบบละเอียด มี Seek Bar กระโดดไปยังจุดต่างๆ ของเพลงได้</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="bar-chart-3" class="w-4 h-4 text-[#00ffaa]"></i>
              <h3 class="font-semibold text-sm text-white">Spectrum Analyzer</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">กราฟความถี่เสียง Real-time 64 แท่ง พร้อม Peak Indicator สี Mint เมื่อเกิน 70%</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="sliders-horizontal" class="w-4 h-4 text-[#00ffaa]"></i>
              <h3 class="font-semibold text-sm text-white">EQ Response Curve</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">เส้นโค้ง EQ 7 Band แบบ Real-time มี Drag Handles 7 จุดให้ลากปรับค่าได้โดยตรง</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="grid-3x3" class="w-4 h-4 text-[#00d4ff]"></i>
              <h3 class="font-semibold text-sm text-white">35 Genre Presets</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">เลือกแนวเพลงได้ 35 แนว ตั้งแต่ Pop, Rock, EDM ถึง Afrobeats, Shoegaze และ Grunge</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="download" class="w-4 h-4 text-[#00ffaa]"></i>
              <h3 class="font-semibold text-sm text-white">Multi-format Export</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">ส่งออกเป็น WAV 16/24/32-bit หรือ MP3 192/256/320kbps พร้อมดาวน์โหลดทันที</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="gauge" class="w-4 h-4 text-[#00d4ff]"></i>
              <h3 class="font-semibold text-sm text-white">Dynamic Compressor</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">Compressor 7 พารามิเตอร์: Threshold, Ratio, Attack, Release, Knee, Make-Up, SC HPF</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="Scan-line" class="w-4 h-4 text-[#00ffaa]"></i>
              <h3 class="font-semibold text-sm text-white">Noise Gate & De-Esser</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">Noise Gate ตัดเสียงรบกวน + De-Esser ลด Sibilance ทำงานแบบ Real-time</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="flame" class="w-4 h-4 text-[#00d4ff]"></i>
              <h3 class="font-semibold text-sm text-white">Saturation / Harmonics</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">WaveShaper จำลองเสียง Saturation พร้อม Dry/Wet Mix ให้ความอบอุ่นแก่เสียง</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="move-horizontal" class="w-4 h-4 text-[#00ffaa]"></i>
              <h3 class="font-semibold text-sm text-white">Stereo Width Control</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">ปรับความกว้าง Stereo 0% (Mono) ถึง 200% (Extra Wide) ด้วย Mid/Side Matrix</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="shield" class="w-4 h-4 text-[#00d4ff]"></i>
              <h3 class="font-semibold text-sm text-white">Brickwall Limiter</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">Limiter ป้องกัน Clipping ด้วย Ratio 20:1 ปรับ Ceiling, Threshold, Release ได้</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="smartphone" class="w-4 h-4 text-[#00ffaa]"></i>
              <h3 class="font-semibold text-sm text-white">Responsive & Mobile</h3>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">รองรับทุกขนาดหน้าจอ มี Mobile Bottom Nav และ Genre Drawer สำหรับมือถือ</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section id="quickstart" class="mb-12 animate-in delay-2">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center"><i data-lucide="zap" class="w-4 h-4 text-[#00d4ff]"></i></span>
          เริ่มต้นใช้งาน
        </h2>
        <div class="grid gap-3">
          <div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">1</div>
            <div>
              <h3 class="font-semibold text-white text-sm mb-1">เปิดหน้า Studio</h3>
              <p class="text-white/40 text-xs leading-relaxed">เปิดไฟล์ <code class="text-[#00d4ff] bg-[#00d4ff]/10 px-1.5 py-0.5 rounded text-[11px]">index.html</code> บนเบราว์เซอร์ — ไม่ต้องติดตั้งอะไรเพิ่ม ทำงานได้ทันทีบนเบราว์เซอร์สมัยใหม่</p>
            </div>
          </div>
          <div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">2</div>
            <div>
              <h3 class="font-semibold text-white text-sm mb-1">อัพโหลดไฟล์เสียง</h3>
              <p class="text-white/40 text-xs leading-relaxed">คลิกปุ่ม <span class="text-[#00d4ff] font-medium">Upload Audio</span> หรือลากไฟล์เสียงวางที่ช่อง Waveform รองรับ WAV, MP3, FLAC, OGG</p>
            </div>
          </div>
          <div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">3</div>
            <div>
              <h3 class="font-semibold text-white text-sm mb-1">เลือก Genre Preset</h3>
              <p class="text-white/40 text-xs leading-relaxed">เลือกแนวเพลงจาก Sidebar (Desktop) หรือแท็บ Genres (มือถือ) ระบบจะปรับ EQ + Compressor อัตโนมัติ</p>
            </div>
          </div>
          <div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">4</div>
            <div>
              <h3 class="font-semibold text-white text-sm mb-1">ปรับแต่งเสียง</h3>
              <p class="text-white/40 text-xs leading-relaxed">ใช้ Slider ในส่วน Mastering Controls หรือลาก Handle บน EQ Curve เพื่อปรับแบบ Real-time</p>
            </div>
          </div>
          <div class="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#00ffaa]/8 border border-[#00d4ff]/25 flex items-center justify-center font-extrabold text-sm text-[#00d4ff] flex-shrink-0">5</div>
            <div>
              <h3 class="font-semibold text-white text-sm mb-1">ฟังผลลัพธ์ & Export</h3>
              <p class="text-white/40 text-xs leading-relaxed">กด <span class="text-[#00ffaa] font-medium">Play</span> ฟังเสียงที่ปรับแล้ว → พอใจแล้วกด <span class="text-[#00ffaa] font-medium">Export</span> เลือกฟอร์แมตและดาวน์โหลด</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Structure -->
    <section id="project-structure" class="mb-12 animate-in delay-3">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center"><i data-lucide="folder-tree" class="w-4 h-4 text-[#00ffaa]"></i></span>
          โครงสร้างไฟล์
        </h2>
        <div class="space-y-2">
          <div class="file-row">
            <div class="w-9 h-9 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">
              <i data-lucide="file-code" class="w-4 h-4 text-[#00d4ff]"></i>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-sm text-white">index.html</h3>
              <p class="text-white/35 text-xs">หน้า Studio หลัก — UI ทั้งหมดของแอปพลิเคชัน</p>
            </div>
          </div>
          <div class="file-row">
            <div class="w-9 h-9 rounded-lg bg-[#00ffaa]/10 border border-[#00ffaa]/20 flex items-center justify-center flex-shrink-0">
              <i data-lucide="file-code" class="w-4 h-4 text-[#00ffaa]"></i>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-sm text-white">help.html</h3>
              <p class="text-white/35 text-xs">คู่มือการใช้งานสำหรับผู้ใช้ทั่วไป</p>
            </div>
          </div>
          <div class="file-row">
            <div class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <i data-lucide="file-code" class="w-4 h-4 text-white/40"></i>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-sm text-white">README.html</h3>
              <p class="text-white/35 text-xs">เอกสารประกอบโปรเจกต์ (หน้านี้)</p>
            </div>
          </div>
          <div class="file-row">
            <div class="w-9 h-9 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">
              <i data-lucide="file-code" class="w-4 h-4 text-[#00d4ff]"></i>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-sm text-white">style.css</h3>
              <p class="text-white/35 text-xs">CSS ทั้งหมด — Custom Properties, Glass Cards, Sliders, Genre Buttons, Responsive</p>
            </div>
          </div>
          <div class="file-row">
            <div class="w-9 h-9 rounded-lg bg-[#00ffaa]/10 border border-[#00ffaa]/20 flex items-center justify-center flex-shrink-0">
              <i data-lucide="file-code" class="w-4 h-4 text-[#00ffaa]"></i>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-sm text-white">script.js</h3>
              <p class="text-white/35 text-xs">JavaScript Logic — Audio Engine, UI Controls, Genre Presets, Export, Animation Loop</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Controls Reference -->
    <section id="controls" class="mb-12 animate-in delay-3">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center"><i data-lucide="sliders-horizontal" class="w-4 h-4 text-[#00d4ff]"></i></span>
          รายละเอียด Controls ทั้งหมด
        </h2>
        <p class="text-white/35 text-sm mb-5">Slider ทั้ง 28 ตัว แบ่งเป็น 8 กลุ่ม</p>

        <!-- Input/Output -->
        <div class="mb-6">
          <h3 class="text-xs font-semibold uppercase tracking-wider text-[#00d4ff]/60 mb-3 flex items-center gap-2">
            <i data-lucide="log-in" class="w-3.5 h-3.5"></i> Input / Output
          </h3>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-white/50">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="py-2 px-3 text-left text-white/30 font-semibold">Control</th>
                  <th class="py-2 px-3 text-left text-white/30 font-semibold">Web Audio Node</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Range</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Default</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Step</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/5">
                  <td class="py-2 px-3 text-white/70 font-semibold">Input Gain</td>
                  <td class="py-2 px-3"><code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">GainNode</code></td>
                  <td class="py-2 px-3 text-center">-24 → +24 dB</td>
                  <td class="py-2 px-3 text-center">0 dB</td>
                  <td class="py-2 px-3 text-center">0.1</td>
                </tr>
                <tr>
                  <td class="py-2 px-3 text-white/70 font-semibold">Output Gain</td>
                  <td class="py-2 px-3"><code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">GainNode</code></td>
                  <td class="py-2 px-3 text-center">-24 → +24 dB</td>
                  <td class="py-2 px-3 text-center">0 dB</td>
                  <td class="py-2 px-3 text-center">0.1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- EQ -->
        <div class="mb-6">
          <h3 class="text-xs font-semibold uppercase tracking-wider text-[#00ffaa]/60 mb-3 flex items-center gap-2">
            <i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i> Equalizer — 7 Band
          </h3>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-white/50">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="py-2 px-3 text-left text-white/30 font-semibold">Band</th>
                  <th class="py-2 px-3 text-left text-white/30 font-semibold">Filter Type</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Freq</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Q</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Range</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Sub 60</td><td class="py-2 px-3">Low Shelf</td><td class="py-2 px-3 text-center">60 Hz</td><td class="py-2 px-3 text-center">—</td><td class="py-2 px-3 text-center">±12 dB</td><td class="py-2 px-3 text-center">0</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Bass 150</td><td class="py-2 px-3">Low Shelf</td><td class="py-2 px-3 text-center">150 Hz</td><td class="py-2 px-3 text-center">—</td><td class="py-2 px-3 text-center">±12 dB</td><td class="py-2 px-3 text-center">0</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Lo Mid 400</td><td class="py-2 px-3">Peaking</td><td class="py-2 px-3 text-center">400 Hz</td><td class="py-2 px-3 text-center">1.0</td><td class="py-2 px-3 text-center">±12 dB</td><td class="py-2 px-3 text-center">0</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Mid 1k</td><td class="py-2 px-3">Peaking</td><td class="py-2 px-3 text-center">1 kHz</td><td class="py-2 px-3 text-center">0.7</td><td class="py-2 px-3 text-center">±12 dB</td><td class="py-2 px-3 text-center">0</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Hi Mid 3k</td><td class="py-2 px-3">Peaking</td><td class="py-2 px-3 text-center">3 kHz</td><td class="py-2 px-3 text-center">1.0</td><td class="py-2 px-3 text-center">±12 dB</td><td class="py-2 px-3 text-center">0</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Treble 6k</td><td class="py-2 px-3">High Shelf</td><td class="py-2 px-3 text-center">6 kHz</td><td class="py-2 px-3 text-center">—</td><td class="py-2 px-3 text-center">±12 dB</td><td class="py-2 px-3 text-center">0</td></tr>
                <tr><td class="py-2 px-3 text-white/70 font-semibold">Air 12k</td><td class="py-2 px-3">Peaking</td><td class="py-2 px-3 text-center">12 kHz</td><td class="py-2 px-3 text-center">0.8</td><td class="py-2 px-3 text-center">±6 dB</td><td class="py-2 px-3 text-center">0</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Compressor -->
        <div class="mb-6">
          <h3 class="text-xs font-semibold uppercase tracking-wider text-[#00d4ff]/60 mb-3 flex items-center gap-2">
            <i data-lucide="gauge" class="w-3.5 h-3.5"></i> Compressor
          </h3>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-white/50">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="py-2 px-3 text-left text-white/30 font-semibold">Control</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Range</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Default</th>
                  <th class="py-2 px-3 text-center text-white/30 font-semibold">Step</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Threshold</td><td class="py-2 px-3 text-center">-60 → 0 dB</td><td class="py-2 px-3 text-center">-24 dB</td><td class="py-2 px-3 text-center">0.5</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Ratio</td><td class="py-2 px-3 text-center">1 → 20 :1</td><td class="py-2 px-3 text-center">4:1</td><td class="py-2 px-3 text-center">0.1</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Attack</td><td class="py-2 px-3 text-center">0.1 → 100 ms</td><td class="py-2 px-3 text-center">10 ms</td><td class="py-2 px-3 text-center">0.1</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Release</td><td class="py-2 px-3 text-center">10 → 1000 ms</td><td class="py-2 px-3 text-center">100 ms</td><td class="py-2 px-3 text-center">1</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Knee</td><td class="py-2 px-3 text-center">0 → 30 dB</td><td class="py-2 px-3 text-center">10 dB</td><td class="py-2 px-3 text-center">0.5</td></tr>
                <tr class="border-b border-white/5"><td class="py-2 px-3 text-white/70 font-semibold">Make-Up Gain</td><td class="py-2 px-3 text-center">0 → +24 dB</td><td class="py-2 px-3 text-center">0 dB</td><td class="py-2 px-3 text-center">0.1</td></tr>
                <tr><td class="py-2 px-3 text-white/70 font-semibold">SC HPF</td><td class="py-2 px-3 text-center">0 → 500 Hz</td><td class="py-2 px-3 text-center">0 Hz</td><td class="py-2 px-3 text-center">1</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Other sections compact -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-[#00ffaa]/60 mb-3 flex items-center gap-2">
              <i data-lucide="flame" class="w-3.5 h-3.5"></i> Saturation
            </h3>
            <div class="space-y-2 text-xs text-white/50">
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Drive</span><span>0 → 100%</span></div>
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Mix</span><span>0 → 100%</span></div>
            </div>
          </div>
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-[#00d4ff]/60 mb-3 flex items-center gap-2">
              <i data-lucide="move-horizontal" class="w-3.5 h-3.5"></i> Stereo
            </h3>
            <div class="space-y-2 text-xs text-white/50">
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Width</span><span>0 → 200%</span></div>
            </div>
          </div>
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3 flex items-center gap-2">
              <i data-lucide="shield" class="w-3.5 h-3.5"></i> Brickwall Limiter
            </h3>
            <div class="space-y-2 text-xs text-white/50">
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Ceiling</span><span>-6 → 0 dB</span></div>
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Threshold</span><span>-24 → 0 dB</span></div>
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Release</span><span>10 → 500 ms</span></div>
            </div>
          </div>
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3 flex items-center gap-2">
              <i data-lucide="scan-line" class="w-3.5 h-3.5"></i> Noise Gate
            </h3>
            <div class="space-y-2 text-xs text-white/50">
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Threshold</span><span>-80 → 0 dB</span></div>
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Attack</span><span>0.1 → 100 ms</span></div>
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Release</span><span>10 → 1000 ms</span></div>
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Hold</span><span>0 → 500 ms</span></div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3 flex items-center gap-2">
              <i data-lucide="mic" class="w-3.5 h-3.5"></i> De-Esser
            </h3>
            <div class="grid grid-cols-3 gap-2 text-xs text-white/50">
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Threshold</span><span>-60 → 0 dB</span></div>
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Frequency</span><span>2k → 10k Hz</span></div>
              <div class="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5"><span class="text-white/70 font-semibold">Amount</span><span>0 → 100%</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Signal Chain -->
    <section id="signal-chain" class="mb-12 animate-in delay-3">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center"><i data-lucide="git-branch" class="w-4 h-4 text-[#00ffaa]"></i></span>
          Audio Signal Chain
        </h2>
        <p class="text-white/40 text-sm mb-5">ลำดับการไหลของเสียงผ่าน Web Audio Node ต่างๆ:</p>
        <div class="flex flex-wrap items-center gap-2 justify-center">
          <span class="signal-node bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff]">Source</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">Input Gain</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-[#00ffaa]/10 border border-[#00ffaa]/20 text-[#00ffaa]">7-Band EQ</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">Compressor</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">Make-Up Gain</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">Saturation</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">Stereo Width</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">Limiter</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">Noise Gate</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">De-Esser</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-white/5 border border-white/10 text-white/50">Output Gain</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff]">Analyser</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-white/15"></i>
          <span class="signal-node bg-[#00ffaa]/10 border border-[#00ffaa]/20 text-[#00ffaa]">Destination</span>
        </div>
      </div>
    </section>

    <!-- Genre Presets -->
    <section id="genres" class="mb-12 animate-in delay-4">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center"><i data-lucide="grid-3x3" class="w-4 h-4 text-[#00d4ff]"></i></span>
          35 Genre Presets
        </h2>
        <p class="text-white/40 text-sm mb-4">แต่ละ Preset ปรับค่า EQ 7 Band + Compressor 7 พารามิเตอร์ + Saturation, Stereo, Limiter, Gate, De-Esser อัตโนมัติ</p>
        <div class="flex flex-wrap gap-2">
          <span class="genre-chip">🎵 Pop</span>
          <span class="genre-chip">🎸 Rock</span>
          <span class="genre-chip">🔥 Metal</span>
          <span class="genre-chip">⚡ EDM</span>
          <span class="genre-chip">🎤 Hip-Hop</span>
          <span class="genre-chip">💜 R&B</span>
          <span class="genre-chip">🎷 Jazz</span>
          <span class="genre-chip">🎻 Classical</span>
          <span class="genre-chip">☕ Lo-Fi</span>
          <span class="genre-chip">🌊 Ambient</span>
          <span class="genre-chip">🌴 Reggae</span>
          <span class="genre-chip">🤠 Country</span>
          <span class="genre-chip">🎺 Blues</span>
          <span class="genre-chip">🏕️ Folk</span>
          <span class="genre-chip">🏴 Punk</span>
          <span class="genre-chip">🎨 Indie</span>
          <span class="genre-chip">🏭 Techno</span>
          <span class="genre-chip">🏠 House</span>
          <span class="genre-chip">🥁 D&B</span>
          <span class="genre-chip">💰 Trap</span>
          <span class="genre-chip">✨ K-Pop</span>
          <span class="genre-chip">💃 Latin</span>
          <span class="genre-chip">❤️ Soul</span>
          <span class="genre-chip">🕺 Funk</span>
          <span class="genre-chip">🙏 Gospel</span>
          <span class="genre-chip">🎶 Acoustic</span>
          <span class="genre-chip">🎙️ Podcast</span>
          <span class="genre-chip">🎬 Cinematic</span>
          <span class="genre-chip">🌆 Synthwave</span>
          <span class="genre-chip">🌸 Vaporwave</span>
          <span class="genre-chip">🏝️ Reggaeton</span>
          <span class="genre-chip">🌍 Afrobeats</span>
          <span class="genre-chip">📻 Boom Bap</span>
          <span class="genre-chip">🌫️ Shoegaze</span>
          <span class="genre-chip">🖤 Grunge</span>
        </div>
      </div>
    </section>

    <!-- Export Formats -->
    <section id="export" class="mb-12 animate-in delay-4">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center"><i data-lucide="download" class="w-4 h-4 text-[#00ffaa]"></i></span>
          Export Formats
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-white/50">
            <thead>
              <tr class="border-b border-white/10">
                <th class="py-2 px-3 text-left text-white/30 font-semibold">Format</th>
                <th class="py-2 px-3 text-left text-white/30 font-semibold">คุณภาพ</th>
                <th class="py-2 px-3 text-left text-white/30 font-semibold">ขนาดโดยประมาณ (ต่อนาที)</th>
                <th class="py-2 px-3 text-left text-white/30 font-semibold">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-white/5">
                <td class="py-2 px-3"><span class="px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff] font-semibold border border-[#00d4ff]/20 text-[10px]">WAV 16-bit</span></td>
                <td class="py-2 px-3">CD Quality</td>
                <td class="py-2 px-3">~10 MB/min</td>
                <td class="py-2 px-3 text-white/35">ไฟล์เล็กสุดในบรรดา WAV</td>
              </tr>
              <tr class="border-b border-white/5">
                <td class="py-2 px-3"><span class="px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff] font-semibold border border-[#00d4ff]/20 text-[10px]">WAV 24-bit</span></td>
                <td class="py-2 px-3">Studio Quality</td>
                <td class="py-2 px-3">~15 MB/min</td>
                <td class="py-2 px-3 text-white/35">คุณภาพระดับสตูดิโอ</td>
              </tr>
              <tr class="border-b border-white/5">
                <td class="py-2 px-3"><span class="px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff] font-semibold border border-[#00d4ff]/20 text-[10px]">WAV 32f</span></td>
                <td class="py-2 px-3">Max Precision</td>
                <td class="py-2 px-3">~20 MB/min</td>
                <td class="py-2 px-3 text-white/35">IEEE Float สำหรับประมวลผลต่อ</td>
              </tr>
              <tr class="border-b border-white/5">
                <td class="py-2 px-3"><span class="px-2 py-0.5 rounded bg-[#00ffaa]/10 text-[#00ffaa] font-semibold border border-[#00ffaa]/20 text-[10px]">MP3 320</span></td>
                <td class="py-2 px-3">Best MP3</td>
                <td class="py-2 px-3">~2.4 MB/min</td>
                <td class="py-2 px-3 text-white/35">คุณภาพสูงสุดของ MP3</td>
              </tr>
              <tr class="border-b border-white/5">
                <td class="py-2 px-3"><span class="px-2 py-0.5 rounded bg-[#00ffaa]/10 text-[#00ffaa] font-semibold border border-[#00ffaa]/20 text-[10px]">MP3 256</span></td>
                <td class="py-2 px-3">Good Quality</td>
                <td class="py-2 px-3">~1.9 MB/min</td>
                <td class="py-2 px-3 text-white/35">สมดุลระหว่างคุณภาพและขนาด</td>
              </tr>
              <tr>
                <td class="py-2 px-3"><span class="px-2 py-0.5 rounded bg-[#00ffaa]/10 text-[#00ffaa] font-semibold border border-[#00ffaa]/20 text-[10px]">MP3 192</span></td>
                <td class="py-2 px-3">Smaller Size</td>
                <td class="py-2 px-3">~1.4 MB/min</td>
                <td class="py-2 px-3 text-white/35">เหมาะส่งต่อ/แชร์</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/10">
          <p class="text-xs text-white/50 flex items-start gap-2">
            <i data-lucide="info" class="w-3.5 h-3.5 text-[#00d4ff] flex-shrink-0 mt-0.5"></i>
            <span>MP3 Encoding ใช้ไลบรารี <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1 py-0.5 rounded text-[10px]">lamejs</code> — หากไลบรารีไม่พร้อมใช้งาน ปุ่ม MP3 จะถูก Disable อัตโนมัติ แนะนำใช้ WAV แทน</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Keyboard Shortcuts -->
    <section id="shortcuts" class="mb-12 animate-in delay-4">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center"><i data-lucide="keyboard" class="w-4 h-4 text-[#00ffaa]"></i></span>
          Keyboard Shortcuts
        </h2>
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span class="text-white/60 text-sm">Play / Pause</span>
            <span class="shortcut-key">Space</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span class="text-white/60 text-sm">อัพโหลดไฟล์</span>
            <div class="flex items-center gap-1.5"><span class="shortcut-key">Ctrl</span><span class="text-white/20 text-xs">+</span><span class="shortcut-key">O</span></div>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span class="text-white/60 text-sm">Reset ค่าทั้งหมด</span>
            <div class="flex items-center gap-1.5"><span class="shortcut-key">Ctrl</span><span class="text-white/20 text-xs">+</span><span class="shortcut-key">R</span></div>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span class="text-white/60 text-sm">Export</span>
            <div class="flex items-center gap-1.5"><span class="shortcut-key">Ctrl</span><span class="text-white/20 text-xs">+</span><span class="shortcut-key">E</span></div>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span class="text-white/60 text-sm">ปรับ Volume</span>
            <div class="flex items-center gap-1.5"><span class="shortcut-key">↑</span><span class="text-white/20 text-xs">/</span><span class="shortcut-key">↓</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reset Buttons -->
    <section id="reset-buttons" class="mb-12 animate-in delay-4">
      <div class="glass-card rounded-xl p-5 sm:p-6" style="border-color: rgba(0,212,255,0.12)">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center"><i data-lucide="refresh-cw" class="w-4 h-4 text-[#00d4ff]"></i></span>
          ปุ่ม Reset ทั้ง 3 แบบ
        </h2>
        <div class="grid gap-4 mb-5">
          <div class="p-4 rounded-xl bg-gradient-to-r from-[#00d4ff]/5 to-transparent border border-[#00d4ff]/10">
            <h3 class="font-semibold text-white text-sm mb-1 flex items-center gap-2">🔄 Reset Preset</h3>
            <p class="text-white/40 text-xs leading-relaxed">คืนค่าทุก Slider กลับไปที่ค่า Preset ของ Genre ที่เลือก — ถ้ายังไม่ได้เลือก Genre จะคืนเป็น Default</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 class="font-semibold text-white text-sm mb-1 flex items-center gap-2">📊 Reset EQ</h3>
            <p class="text-white/40 text-xs leading-relaxed">คืนเฉพาะ 7 Band EQ เป็น 0 dB โดยไม่กระทบ Compressor หรือเอฟเฟกต์อื่น</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 class="font-semibold text-white text-sm mb-1 flex items-center gap-2">🗑️ Reset All</h3>
            <p class="text-white/40 text-xs leading-relaxed">คืนทุก Slider กลับเป็น Default (ศูนย์ทั้งหมด) และยกเลิกการเลือก Genre</p>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-white/50">
            <thead>
              <tr class="border-b border-white/10">
                <th class="py-2 px-3 text-left text-white/30 font-semibold">ปุ่ม</th>
                <th class="py-2 px-3 text-center text-white/30 font-semibold">EQ</th>
                <th class="py-2 px-3 text-center text-white/30 font-semibold">Compressor</th>
                <th class="py-2 px-3 text-center text-white/30 font-semibold">เอฟเฟกต์อื่น</th>
                <th class="py-2 px-3 text-center text-white/30 font-semibold">Genre ที่เลือก</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-white/5">
                <td class="py-2 px-3 text-[#00d4ff] font-semibold">Reset Preset</td>
                <td class="py-2 px-3 text-center">→ Preset</td>
                <td class="py-2 px-3 text-center">→ Preset</td>
                <td class="py-2 px-3 text-center">→ Preset</td>
                <td class="py-2 px-3 text-center">✅ คงไว้</td>
              </tr>
              <tr class="border-b border-white/5">
                <td class="py-2 px-3 font-semibold text-white/60">Reset EQ</td>
                <td class="py-2 px-3 text-center">→ 0 dB</td>
                <td class="py-2 px-3 text-center">ไม่แตะ</td>
                <td class="py-2 px-3 text-center">ไม่แตะ</td>
                <td class="py-2 px-3 text-center">✅ คงไว้</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-semibold text-white/40">Reset All</td>
                <td class="py-2 px-3 text-center">→ 0 dB</td>
                <td class="py-2 px-3 text-center">→ Default</td>
                <td class="py-2 px-3 text-center">→ Default</td>
                <td class="py-2 px-3 text-center">❌ ลบ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Mobile -->
    <section id="mobile" class="mb-12 animate-in delay-5">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center"><i data-lucide="smartphone" class="w-4 h-4 text-[#00d4ff]"></i></span>
          การใช้งานบนมือถือ
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2"><i data-lucide="layout-grid" class="w-4 h-4 text-[#00ffaa]"></i><h3 class="font-semibold text-sm text-white">Bottom Nav</h3></div>
            <p class="text-white/40 text-xs leading-relaxed">แถบนำทาง 4 แท็บ: Player, Genres, Controls, Analyze</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2"><i data-lucide="menu" class="w-4 h-4 text-[#00d4ff]"></i><h3 class="font-semibold text-sm text-white">Genre Drawer</h3></div>
            <p class="text-white/40 text-xs leading-relaxed">แท็บ Genres เปิด Drawer จากด้านล่าง แสดง 3 คอลัมน์</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2"><i data-lucide="hand" class="w-4 h-4 text-[#00d4ff]"></i><h3 class="font-semibold text-sm text-white">Touch Sliders</h3></div>
            <p class="text-white/40 text-xs leading-relaxed">สไลด์นิ้วปรับค่าได้ทุก Slider + EQ Handle</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="flex items-center gap-2 mb-2"><i data-lucide="maximize-2" class="w-4 h-4 text-[#00ffaa]"></i><h3 class="font-semibold text-sm text-white">Responsive Layout</h3></div>
            <p class="text-white/40 text-xs leading-relaxed">จัดเรียงใหม่อัตโนมัติให้พอดีกับหน้าจอเล็ก</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section id="tech-stack" class="mb-12 animate-in delay-5">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00ffaa]/10 flex items-center justify-center"><i data-lucide="layers" class="w-4 h-4 text-[#00ffaa]"></i></span>
          Tech Stack
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 class="font-semibold text-sm text-[#00d4ff] mb-1">Web Audio API</h3>
            <p class="text-white/35 text-xs">Audio Processing Engine — GainNode, BiquadFilter, DynamicsCompressor, WaveShaper, AnalyserNode</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 class="font-semibold text-sm text-[#00ffaa] mb-1">TailwindCSS</h3>
            <p class="text-white/35 text-xs">Utility-first CSS Framework สำหรับ Responsive Layout</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 class="font-semibold text-sm text-white/70 mb-1">Lucide Icons</h3>
            <p class="text-white/35 text-xs">Icon Library สำหรับ UI Elements ทั้งหมด</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 class="font-semibold text-sm text-[#00d4ff] mb-1">Canvas API</h3>
            <p class="text-white/35 text-xs">Waveform, Spectrum Analyzer, EQ Curve และ Particle Background</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 class="font-semibold text-sm text-[#00ffaa] mb-1">lamejs</h3>
            <p class="text-white/35 text-xs">MP3 Encoder สำหรับ Export เป็น MP3 (192/256/320kbps)</p>
          </div>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 class="font-semibold text-sm text-white/70 mb-1">Inter Font</h3>
            <p class="text-white/35 text-xs">Google Fonts — ฟอนต์หลักที่ใช้ทั้งโปรเจกต์</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Developer Guide -->
    <section id="developer" class="mb-12 animate-in delay-5">
      <div class="glass-card rounded-xl p-5 sm:p-6">
        <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center"><i data-lucide="wrench" class="w-4 h-4 text-[#00d4ff]"></i></span>
          Developer Guide
        </h2>

        <!-- Add Genre -->
        <div class="mb-6">
          <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <i data-lucide="plus-circle" class="w-4 h-4 text-[#00ffaa]"></i>
            เพิ่ม Genre Preset ใหม่
          </h3>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 space-y-2">
            <p>1. เพิ่ม Object ในอาร์เรย์ <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">GENRES</code> ในไฟล์ <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">script.js</code></p>
            <p>2. เพิ่ม Overrides ใน <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">GENRE_OVERRIDES</code> — ระบุเฉพาะค่าที่ต่างจาก BASE_PRESET</p>
            <div class="mt-3 p-3 rounded-lg bg-[#060a14] border border-white/5 overflow-x-auto">
              <pre class="text-[11px] leading-relaxed"><code class="text-white/60"><span class="text-white/30">// ตัวอย่าง: เพิ่ม Genre "Drill"</span>
<span class="text-[#00d4ff]">GENRES</span>.push({ <span class="text-[#00ffaa]">name</span>: <span class="text-yellow-300">'Drill'</span>, <span class="text-[#00ffaa]">emoji</span>: <span class="text-yellow-300">'🔫'</span> });

<span class="text-[#00d4ff]">GENRE_OVERRIDES</span>[<span class="text-yellow-300">'Drill'</span>] = {
  bass: 4, mid: 1, treble: 2.5, air: 1,
  compThreshold: -16, compRatio: 4.5, compMakeup: 4,
  satDrive: 15, stereoWidth: 110,
  <span class="text-white/30">// ... ระบุเฉพาะค่าที่ต่างจาก BASE_PRESET</span>
};</code></pre>
            </div>
          </div>
        </div>

        <!-- Add Export Format -->
        <div class="mb-6">
          <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <i data-lucide="file-plus" class="w-4 h-4 text-[#00d4ff]"></i>
            เพิ่ม Export Format
          </h3>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 space-y-2">
            <p>1. เพิ่ม Object ในอาร์เรย์ <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">EXPORT_FORMATS</code></p>
            <p>2. เพิ่ม Case ในฟังก์ชัน <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">exportAudio()</code> สำหรับ Encoding logic</p>
            <p>3. เพิ่ม Case ในฟังก์ชัน <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">estimateFileSize()</code> สำหรับคำนวณขนาดไฟล์</p>
          </div>
        </div>

        <!-- Add Audio Node -->
        <div>
          <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <i data-lucide="cpu" class="w-4 h-4 text-[#00ffaa]"></i>
            เพิ่ม Audio Node ใหม่ใน Signal Chain
          </h3>
          <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 space-y-2">
            <p>1. เพิ่ม Section ใน <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">CONTROL_SECTIONS</code> — กำหนด id, label, icon, controls</p>
            <p>2. สร้าง Node ใน <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">initAudioNodes()</code> — สร้าง Web Audio Node และเก็บใน state</p>
            <p>3. ต่อ Node เข้า <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">connectProcessingChain()</code> — แทรกเข้าในลำดับที่ต้องการ</p>
            <p>4. เพิ่ม Case ใน <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">applyControlToAudio()</code> — เชื่อม Slider เข้า Node</p>
            <p>5. เพิ่ม Node ใน <code class="text-[#00d4ff]/70 bg-[#00d4ff]/5 px-1.5 py-0.5 rounded text-[10px]">renderOffline()</code> — สำหรับ Export</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center py-8 border-t border-white/5">
      <p class="text-white/25 text-xs mb-3">AudioMaster Pro v2.0 — Built with Web Audio API, TailwindCSS & ❤️</p>
      <div class="flex items-center justify-center gap-4">
        <a href="index.html" class="inline-flex items-center gap-2 text-[#00d4ff]/60 hover:text-[#00d4ff] transition-colors text-sm">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Studio
        </a>
        <a href="help.html" class="inline-flex items-center gap-2 text-[#00ffaa]/60 hover:text-[#00ffaa] transition-colors text-sm">
          <i data-lucide="book-open" class="w-4 h-4"></i> Help
        </a>
      </div>
    </div>
  </div>

  <script>
    lucide.createIcons();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  </script>
</body>
</html>
