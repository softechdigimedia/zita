import React, { useState } from 'react';
import type{ SpeedTestState } from '../../types';
import { Play, RotateCcw, Zap, Wifi, ArrowDown, ArrowUp, Activity, CheckCircle } from 'lucide-react';

interface SpeedGaugeProps {
  compactMode?: boolean;
  onClose?: () => void;
}

export const SpeedGauge: React.FC<SpeedGaugeProps> = ({ compactMode = false }) => {
  const [testState, setTestState] = useState<SpeedTestState>({
    downloadMbps: 0,
    uploadMbps: 0,
    pingMs: 0,
    jitterMs: 0,
    status: 'idle',
    progressPercent: 0,
    diagnosticMsg: 'Ready to test network speed'
  });

  const [currentDisplaySpeed, setCurrentDisplaySpeed] = useState(0);

  // Animate speed test execution
  const runSpeedTest = () => {
    setTestState({
      downloadMbps: 0,
      uploadMbps: 0,
      pingMs: 0,
      jitterMs: 0,
      status: 'preparing',
      progressPercent: 5,
      diagnosticMsg: 'Connecting to nearest ZITA Fiber Speed Server...'
    });

    // Step 1: Ping & Jitter
    setTimeout(() => {
      const ping = Math.floor(2 + Math.random() * 4); // 2-5ms ultralow ping
      const jitter = Math.floor(1 + Math.random() * 2);
      setTestState((prev) => ({
        ...prev,
        pingMs: ping,
        jitterMs: jitter,
        status: 'testing_download',
        progressPercent: 25,
        diagnosticMsg: 'Testing Download Latency & Throughput...'
      }));
    }, 1200);

    // Step 2: Download Speed Sweep
    let dlInterval: ReturnType<typeof setInterval>;
    const targetDownload = 480 + Math.floor(Math.random() * 80); // ~500 Mbps fiber speed
    let currentDl = 10;

    setTimeout(() => {
      dlInterval = setInterval(() => {
        currentDl += Math.floor(15 + Math.random() * 30);
        if (currentDl >= targetDownload) {
          currentDl = targetDownload;
          clearInterval(dlInterval);

          setTestState((prev) => ({
            ...prev,
            downloadMbps: targetDownload,
            status: 'testing_upload',
            progressPercent: 65,
            diagnosticMsg: 'Testing Symmetric Upload Speed...'
          }));
        }
        setCurrentDisplaySpeed(currentDl);
      }, 80);
    }, 1300);

    // Step 3: Upload Speed Sweep
    let ulInterval: ReturnType<typeof setInterval>;
    const targetUpload = 470 + Math.floor(Math.random() * 70);
    let currentUl = 10;

    setTimeout(() => {
      ulInterval = setInterval(() => {
        currentUl += Math.floor(20 + Math.random() * 35);
        if (currentUl >= targetUpload) {
          currentUl = targetUpload;
          clearInterval(ulInterval);

          setTestState((prev) => ({
            ...prev,
            uploadMbps: targetUpload,
            status: 'completed',
            progressPercent: 100,
            diagnosticMsg: 'Speed test completed! Fiber link active at optimal speed.'
          }));
        }
        setCurrentDisplaySpeed(currentUl);
      }, 75);
    }, 4000);
  };

  // Max speed scale (1000 Mbps)
  const maxSpeedScale = 1000;
  // Angle range: -120 deg (0 Mbps) to +120 deg (1000 Mbps)
  const needleAngle = -120 + Math.min(currentDisplaySpeed / maxSpeedScale, 1) * 240;

  // Arc math: r = 38, circ = 238.76, 240-deg arc length = 159.17
  const arcLength = 159.17;
  const progressRatio = Math.min(currentDisplaySpeed / maxSpeedScale, 1);
  const strokeOffset = arcLength * (1 - progressRatio);

  if (compactMode) {
    return (
      <div className="flex items-center gap-3 bg-zinc-900 text-white p-3 rounded-2xl border border-zinc-700 shadow-lg">
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-zinc-950 border-2 border-yellow-400">
          <span className="text-xs font-black text-yellow-400 font-mono">
            {testState.status === 'idle' ? '0' : Math.round(currentDisplaySpeed)}
          </span>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Speed Test</div>
          <div className="text-xs font-bold text-white">
            {testState.status === 'completed' ? `${testState.downloadMbps} Mbps` : testState.status}
          </div>
        </div>
        <button
          onClick={runSpeedTest}
          disabled={testState.status.startsWith('testing')}
          className="ml-auto px-2.5 py-1 bg-yellow-400 text-zinc-950 font-black text-xs rounded-lg hover:bg-yellow-300 transition"
        >
          {testState.status === 'idle' ? 'Start' : 'Retest'}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-700 text-center relative overflow-hidden">
      {/* Subtle Yellow Glow Effects */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-black uppercase tracking-wider mb-2">
          <Zap className="w-3.5 h-3.5" />
          ZITA Giga-Fiber Diagnostics
        </div>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
          Real-Time Speed Test
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Measure download speed, upload bandwidth, and millisecond ping latency.
        </p>
      </div>

      {/* Main Precision SVG Gauge */}
      <div className="relative w-64 h-64 mx-auto my-4 flex items-center justify-center">
        {/* Outer Frame Circle */}
        <div className="absolute inset-0 rounded-full bg-zinc-950 border-4 border-zinc-800 shadow-inner" />

        {/* 100% SVG Gauge Canvas */}
        <svg className="w-full h-full relative z-10" viewBox="0 0 100 100">
          {/* Background Track Arc (240-degree sweep) */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="transparent"
            stroke="#27272a"
            strokeWidth="5"
            strokeDasharray={`${arcLength} 238.76`}
            transform="rotate(150, 50, 50)"
            strokeLinecap="round"
          />

          {/* Active Speed Yellow Arc */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="transparent"
            stroke="#ffd000"
            strokeWidth="5"
            strokeDasharray={`${arcLength} 238.76`}
            strokeDashoffset={strokeOffset}
            transform="rotate(150, 50, 50)"
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />

          {/* Tick Marks (0, 200, 400, 600, 800, 1000) */}
          {[0, 200, 400, 600, 800, 1000].map((val) => {
            const angle = -120 + (val / maxSpeedScale) * 240;
            return (
              <g key={val} transform={`rotate(${angle}, 50, 50)`}>
                <line x1="50" y1="10" x2="50" y2="13" stroke="#71717a" strokeWidth="1" />
              </g>
            );
          })}

          {/* Precision Center Needle (Rotates around exact 50, 50 center) */}
          <g transform={`rotate(${needleAngle}, 50, 50)`} className="transition-transform duration-100 ease-out">
            {/* Soft Glow Under Needle */}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="15"
              stroke="#ffd000"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
            {/* Solid Yellow Needle */}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="15"
              stroke="#ffd000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Needle Pivot Cap */}
            <circle cx="50" cy="50" r="4.5" fill="#ffd000" stroke="#18181b" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="2" fill="#18181b" />
          </g>
        </svg>

        {/* Center Digital Speed Counter */}
        <div className="absolute z-20 flex flex-col items-center justify-center text-center mt-6">
          <span className="text-4xl sm:text-5xl font-black font-mono tracking-tighter text-white drop-shadow-md">
            {Math.round(currentDisplaySpeed)}
          </span>
          <span className="text-xs font-black text-yellow-400 tracking-widest uppercase mt-0.5">
            MBPS
          </span>
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">
            {testState.status}
          </span>
        </div>
      </div>

      {/* Speed Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-bold uppercase mb-1">
            <ArrowDown className="w-3 h-3 text-emerald-400" /> Download
          </div>
          <div className="text-xl font-black text-white font-mono">
            {testState.downloadMbps ? `${testState.downloadMbps}` : '--'}
            <span className="text-[10px] text-slate-400 font-normal ml-0.5">Mbps</span>
          </div>
        </div>

        <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-bold uppercase mb-1">
            <ArrowUp className="w-3 h-3 text-yellow-400" /> Upload
          </div>
          <div className="text-xl font-black text-white font-mono">
            {testState.uploadMbps ? `${testState.uploadMbps}` : '--'}
            <span className="text-[10px] text-slate-400 font-normal ml-0.5">Mbps</span>
          </div>
        </div>

        <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-bold uppercase mb-1">
            <Activity className="w-3 h-3 text-yellow-400" /> Ping
          </div>
          <div className="text-xl font-black text-white font-mono">
            {testState.pingMs ? `${testState.pingMs}` : '--'}
            <span className="text-[10px] text-slate-400 font-normal ml-0.5">ms</span>
          </div>
        </div>

        <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-bold uppercase mb-1">
            <Wifi className="w-3 h-3 text-yellow-400" /> Jitter
          </div>
          <div className="text-xl font-black text-white font-mono">
            {testState.jitterMs ? `${testState.jitterMs}` : '--'}
            <span className="text-[10px] text-slate-400 font-normal ml-0.5">ms</span>
          </div>
        </div>
      </div>

      {/* Diagnostic Message */}
      <div className="text-xs text-slate-300 bg-zinc-950/80 py-2.5 px-4 rounded-xl border border-zinc-800 mb-6 flex items-center justify-center gap-2">
        {testState.status === 'completed' ? (
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
        ) : (
          <Zap className="w-4 h-4 text-yellow-400 shrink-0 animate-pulse" />
        )}
        <span>{testState.diagnosticMsg}</span>
      </div>

      {/* Action Button */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={runSpeedTest}
          disabled={testState.status.startsWith('testing')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-yellow-400/20 transition transform active:scale-95 disabled:opacity-50"
        >
          {testState.status === 'idle' ? (
            <>
              <Play className="w-5 h-5 fill-current" />
              START SPEED TEST
            </>
          ) : (
            <>
              <RotateCcw className="w-5 h-5" />
              RETEST NETWORK SPEED
            </>
          )}
        </button>
      </div>
    </div>
  );
};
