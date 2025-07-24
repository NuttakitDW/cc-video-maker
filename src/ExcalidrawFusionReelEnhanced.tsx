import {AbsoluteFill, Audio, Img, interpolate, spring, Sequence, Series, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';

// Instagram Reel dimensions
const REEL_WIDTH = 1080;
const REEL_HEIGHT = 1920;

// Excalidraw color palette
const EXCALIDRAW_COLORS = {
	black: '#1e1e1e',
	blue: '#1971c2',
	red: '#e03131',
	green: '#2f9e44',
	purple: '#9775fa',
	orange: '#f08c00',
	yellow: '#f59f00',
	gray: '#868e96',
};

// Excalidraw style colors
const EXCALIDRAW_BG = '#FFFFFF';
const EXCALIDRAW_STROKE = '#1e1e1e';
const EXCALIDRAW_PURPLE = '#a78bfa';
const EXCALIDRAW_BLUE = '#60a5fa';
const EXCALIDRAW_GREEN = '#34d399';
const EXCALIDRAW_RED = '#f87171';
const EXCALIDRAW_YELLOW = '#fbbf24';

// Hand-drawn font style
const HAND_DRAWN_FONT = 'Virgil, Segoe UI Emoji, "Comic Sans MS", cursive';

export const ExcalidrawFusionReelEnhanced: React.FC = () => {
	const frame = useCurrentFrame();
	
	return (
		<AbsoluteFill>
			{/* Excalidraw paper background */}
			<div
				style={{
					width: '100%',
					height: '100%',
					backgroundColor: '#ffffff',
					backgroundImage: `
						linear-gradient(90deg, #f0f0f0 1px, transparent 1px),
						linear-gradient(180deg, #f0f0f0 1px, transparent 1px)
					`,
					backgroundSize: '20px 20px',
					position: 'absolute',
				}}
			/>
			
			{/* Floating sketch elements */}
			<FloatingDoodles />
			
			{/* Background Audio */}
			<Audio src={staticFile('fusion_voice.mp3')} volume={1} />
			
			<Series>
				{/* Scene 1: The Problem (0:00-0:12 = 360 frames) */}
				<Series.Sequence durationInFrames={360}>
					<Scene1Problem />
				</Series.Sequence>
				
				{/* Scene 2: What is 1inch Fusion+? (0:12-0:25 = 390 frames) */}
				<Series.Sequence durationInFrames={390}>
					<Scene2WhatIsFusion />
				</Series.Sequence>
				
				{/* Scene 3: Intent-Based Trading (0:25-0:36 = 330 frames) */}
				<Series.Sequence durationInFrames={330}>
					<Scene3IntentBased />
				</Series.Sequence>
				
				{/* Scene 4: Dutch Auction (0:36-0:50 = 420 frames) */}
				<Series.Sequence durationInFrames={420}>
					<Scene4DutchAuction />
				</Series.Sequence>
				
				{/* Scene 5: Atomic Swap Magic (0:50-1:02 = 360 frames) */}
				<Series.Sequence durationInFrames={360}>
					<Scene5AtomicSwap />
				</Series.Sequence>
				
				{/* Scene 6: Security Features (1:02-1:15 = 390 frames) */}
				<Series.Sequence durationInFrames={390}>
					<Scene6Security />
				</Series.Sequence>
				
				{/* Scene 7: Benefits & Future (1:15-1:27 = 360 frames) */}
				<Series.Sequence durationInFrames={360}>
					<Scene7Benefits />
				</Series.Sequence>
			</Series>
		</AbsoluteFill>
	);
};

// Floating background doodles
const FloatingDoodles: React.FC = () => {
	const frame = useCurrentFrame();
	
	return (
		<>
			{/* Floating shapes */}
			<div
				style={{
					position: 'absolute',
					top: '10%',
					left: '5%',
					transform: `rotate(${Math.sin(frame * 0.02) * 10}deg)`,
					opacity: 0.3,
				}}
			>
				<svg width="100" height="100" viewBox="0 0 100 100">
					<path
						d="M 20 50 Q 50 20 80 50 T 20 50"
						stroke={EXCALIDRAW_COLORS.blue}
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
					/>
				</svg>
			</div>
			
			<div
				style={{
					position: 'absolute',
					bottom: '15%',
					right: '10%',
					transform: `rotate(${Math.cos(frame * 0.015) * 15}deg)`,
					opacity: 0.3,
				}}
			>
				<svg width="80" height="80" viewBox="0 0 80 80">
					<rect
						x="10"
						y="10"
						width="60"
						height="60"
						rx="5"
						stroke={EXCALIDRAW_COLORS.purple}
						strokeWidth="3"
						fill="none"
						transform="rotate(45 40 40)"
						strokeLinecap="round"
					/>
				</svg>
			</div>
			
			<div
				style={{
					position: 'absolute',
					top: '50%',
					right: '5%',
					transform: `translateY(${Math.sin(frame * 0.01) * 20}px)`,
					opacity: 0.2,
				}}
			>
				<svg width="120" height="120" viewBox="0 0 120 120">
					<circle
						cx="60"
						cy="60"
						r="40"
						stroke={EXCALIDRAW_COLORS.orange}
						strokeWidth="3"
						fill="none"
						strokeDasharray="10 5"
					/>
				</svg>
			</div>
		</>
	);
};

// Scene 1: The Problem (0:00-0:12)
const Scene1Problem: React.FC = () => {
	const frame = useCurrentFrame();
	const titleProgress = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const problemDrawing = interpolate(frame, [60, 120], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const riskTextProgress = interpolate(frame, [180, 240], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	// Wiggle effect for emphasis
	const wiggle = Math.sin(frame * 0.3) * 2;
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Pencil sound for title drawing */}
			{frame >= 0 && frame <= 30 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={30}
				/>
			)}
			
			{/* Pencil sound for problem drawing */}
			{frame >= 60 && frame <= 120 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={60}
				/>
			)}
			
			{/* Hand-drawn title with underline */}
			<div
				style={{
					position: 'absolute',
					top: '15%',
					textAlign: 'center',
				}}
			>
				<svg width="800" height="200" viewBox="0 0 800 200">
					<text
						x="400"
						y="100"
						fontSize="80"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.black}
						textAnchor="middle"
						strokeWidth="2"
						stroke={EXCALIDRAW_COLORS.black}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray={`${titleProgress * 1000} 1000`}
					>
						The Problem
					</text>
					{/* Wavy underline */}
					<path
						d="M 200 130 Q 300 120 400 130 T 600 130"
						stroke={EXCALIDRAW_COLORS.red}
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
						strokeDasharray={`${titleProgress * 400} 400`}
					/>
				</svg>
			</div>
			
			{/* Blockchain diagram */}
			<svg width="800" height="400" viewBox="0 0 800 400">
				{/* BTC chain with wiggle */}
				<g transform={`translate(150, 150) rotate(${wiggle})`}>
					<circle
						cx="0"
						cy="0"
						r="80"
						stroke={EXCALIDRAW_COLORS.orange}
						strokeWidth="4"
						fill="none"
						strokeDasharray={`${problemDrawing * 502} 502`}
					/>
					<text
						x="0"
						y="10"
						fontSize="40"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.orange}
						textAnchor="middle"
						opacity={problemDrawing}
					>
						BTC
					</text>
					{/* Small bitcoin symbol */}
					<text
						x="60"
						y="-60"
						fontSize="30"
						opacity={problemDrawing}
					>
						₿
					</text>
				</g>
				
				{/* ETH chain with wiggle */}
				<g transform={`translate(650, 150) rotate(${-wiggle})`}>
					<circle
						cx="0"
						cy="0"
						r="80"
						stroke={EXCALIDRAW_COLORS.blue}
						strokeWidth="4"
						fill="none"
						strokeDasharray={`${problemDrawing * 502} 502`}
					/>
					<text
						x="0"
						y="10"
						fontSize="40"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.blue}
						textAnchor="middle"
						opacity={problemDrawing}
					>
						ETH
					</text>
					{/* Small ethereum symbol */}
					<text
						x="60"
						y="-60"
						fontSize="30"
						opacity={problemDrawing}
					>
						Ξ
					</text>
				</g>
				
				{/* Animated X mark with shake effect */}
				<g transform={`translate(400, 150) scale(${1 + Math.sin(frame * 0.5) * 0.1})`}>
					<line
						x1="-40"
						y1="-40"
						x2="40"
						y2="40"
						stroke={EXCALIDRAW_COLORS.red}
						strokeWidth="8"
						strokeLinecap="round"
						strokeDasharray={`${problemDrawing * 113} 113`}
					/>
					<line
						x1="40"
						y1="-40"
						x2="-40"
						y2="40"
						stroke={EXCALIDRAW_COLORS.red}
						strokeWidth="8"
						strokeLinecap="round"
						strokeDasharray={`${problemDrawing * 113} 113`}
					/>
				</g>
			</svg>
			
			{/* Risk text */}
			<div
				style={{
					position: 'absolute',
					bottom: '20%',
					textAlign: 'center',
				}}
			>
				<svg width="800" height="200" viewBox="0 0 800 200">
					<text
						x="400"
						y="100"
						fontSize="60"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.red}
						textAnchor="middle"
						strokeWidth="4"
						stroke={EXCALIDRAW_COLORS.red}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray={`${riskTextProgress * 2000} 2000`}
						transform={`rotate(${Math.sin(frame * 0.2) * 3} 400 100)`}
					>
						🚨 RISKY BRIDGES! 🚨
					</text>
				</svg>
			</div>
		</AbsoluteFill>
	);
};

// Scene 2: What is 1inch Fusion+? (0:12-0:25)
const Scene2WhatIsFusion: React.FC = () => {
	const frame = useCurrentFrame();
	const logoScale = spring({
		frame,
		fps: 30,
		config: {
			damping: 200,
		},
	});
	
	const textProgress = interpolate(frame, [90, 150], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const networkProgress = interpolate(frame, [180, 270], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	// Bounce effect for logo
	const bounce = spring({
		frame: frame - 30,
		fps: 30,
		config: {
			damping: 10,
			stiffness: 200,
			mass: 0.5,
		},
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* 1inch Fusion+ Logo with bounce */}
			<div
				style={{
					position: 'absolute',
					top: '10%',
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
					transform: `scale(${logoScale}) translateY(${(1 - bounce) * 50}px)`,
				}}
			>
				<Img
					src={staticFile('start-screen_2.webp')}
					style={{
						width: 800,
						height: 'auto',
						filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
					}}
				/>
			</div>
			
			{/* Description text */}
			<div
				style={{
					position: 'absolute',
					top: '45%',
					textAlign: 'center',
				}}
			>
				<svg width="800" height="100" viewBox="0 0 800 100">
					<text
						x="400"
						y="50"
						fontSize="45"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.black}
						textAnchor="middle"
						strokeWidth="2"
						stroke={EXCALIDRAW_COLORS.black}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray={`${textProgress * 1500} 1500`}
					>
						Cross-chain swaps without bridges!
					</text>
					{/* Decorative arrows */}
					<path
						d="M 100 50 L 120 50 L 115 45 M 120 50 L 115 55"
						stroke={EXCALIDRAW_COLORS.green}
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
						opacity={textProgress}
					/>
					<path
						d="M 700 50 L 680 50 L 685 45 M 680 50 L 685 55"
						stroke={EXCALIDRAW_COLORS.green}
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
						opacity={textProgress}
					/>
				</svg>
			</div>
			
			{/* Network visualization */}
			<div
				style={{
					position: 'absolute',
					bottom: '10%',
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<svg width="1000" height="600" viewBox="0 0 1000 600">
					{['BTC', 'ETH', 'SOL', 'AVAX', 'ARB'].map((chain, i) => {
						const angle = (i * 72) - 90;
						const x = 500 + 180 * Math.cos(angle * Math.PI / 180);
						const y = 300 + 180 * Math.sin(angle * Math.PI / 180);
						const colors = [EXCALIDRAW_COLORS.orange, EXCALIDRAW_COLORS.blue, EXCALIDRAW_COLORS.purple, EXCALIDRAW_COLORS.red, EXCALIDRAW_COLORS.green];
						const rotation = Math.sin((frame + i * 20) * 0.05) * 5;
						
						return (
							<g key={chain} transform={`translate(${x}, ${y}) rotate(${rotation})`}>
								<circle
									cx="0"
									cy="0"
									r="90"
									stroke={colors[i]}
									strokeWidth="4"
									fill="none"
									strokeDasharray={`${networkProgress * 565} 565`}
								/>
								<text
									x="0"
									y="10"
									fontSize="45"
									fontFamily="Comic Sans MS, cursive"
									fill={colors[i]}
									textAnchor="middle"
									opacity={networkProgress}
								>
									{chain}
								</text>
							</g>
						);
					})}
					
					{/* Central connecting lines with animation */}
					{[0, 1, 2, 3, 4].map((i) => {
						const angle1 = (i * 72) - 90;
						const angle2 = ((i + 1) % 5 * 72) - 90;
						const x1 = 500 + 100 * Math.cos(angle1 * Math.PI / 180);
						const y1 = 300 + 100 * Math.sin(angle1 * Math.PI / 180);
						const x2 = 500 + 100 * Math.cos(angle2 * Math.PI / 180);
						const y2 = 300 + 100 * Math.sin(angle2 * Math.PI / 180);
						
						// Animated dash offset for flowing effect
						const dashOffset = (frame * 2 + i * 10) % 10;
						
						return (
							<line
								key={`line-${i}`}
								x1={x1}
								y1={y1}
								x2={x2}
								y2={y2}
								stroke={EXCALIDRAW_COLORS.gray}
								strokeWidth="2"
								strokeLinecap="round"
								opacity={networkProgress * 0.5}
								strokeDasharray="5 5"
								strokeDashoffset={dashOffset}
							/>
						);
					})}
				</svg>
			</div>
		</AbsoluteFill>
	);
};

// Scene 3: How it Works - Intent-Based Trading (0:25-0:36)
const Scene3IntentBased: React.FC = () => {
	const frame = useCurrentFrame();
	
	const titleProgress = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const boxProgress = interpolate(frame, [60, 90], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const typingProgress = interpolate(frame, [120, 210], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const magicProgress = interpolate(frame, [240, 270], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const text = "Swap my BTC for ETH";
	const visibleChars = Math.floor(typingProgress * text.length);
	
	// Cursor blink effect
	const cursorBlink = Math.floor(frame / 15) % 2;
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Pencil sound for input box drawing */}
			{frame >= 60 && frame <= 90 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={30}
				/>
			)}
			
			{/* Pencil sound for typing */}
			{frame >= 120 && frame <= 210 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.2}
					startFrom={0}
					endAt={90}
				/>
			)}
			
			{/* Title */}
			<div
				style={{
					position: 'absolute',
					top: '20%',
					textAlign: 'center',
				}}
			>
				<svg width="800" height="200" viewBox="0 0 800 200">
					<text
						x="400"
						y="100"
						fontSize="65"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.black}
						textAnchor="middle"
						strokeWidth="2"
						stroke={EXCALIDRAW_COLORS.black}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray={`${titleProgress * 1200} 1200`}
					>
						Just tell us what you want!
					</text>
					{/* Speech bubble style decoration */}
					<path
						d="M 350 120 Q 320 140 340 160 L 380 140 Q 380 120 350 120"
						stroke={EXCALIDRAW_COLORS.blue}
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
						opacity={titleProgress}
					/>
				</svg>
			</div>
			
			{/* Input box */}
			<svg width="800" height="300" viewBox="0 0 800 300">
				{/* Hand-drawn input box */}
				<path
					d="M 70 50 Q 50 50 50 70 L 50 180 Q 50 200 70 200 L 730 200 Q 750 200 750 180 L 750 70 Q 750 50 730 50 Z"
					stroke={EXCALIDRAW_COLORS.black}
					strokeWidth="3"
					fill="white"
					strokeDasharray={`${boxProgress * 2000} 2000`}
					strokeLinecap="round"
				/>
				
				{/* Typing text */}
				<text
					x="400"
					y="130"
					fontSize="60"
					fill={EXCALIDRAW_COLORS.black}
					fontFamily="monospace"
					textAnchor="middle"
				>
					{text.slice(0, visibleChars)}
					<tspan fill={EXCALIDRAW_COLORS.gray} opacity={visibleChars < text.length ? cursorBlink : 0}>|</tspan>
				</text>
			</svg>
			
			{/* Magic effect */}
			<div
				style={{
					position: 'absolute',
					bottom: '25%',
					textAlign: 'center',
				}}
			>
				<svg width="800" height="150" viewBox="0 0 800 150">
					<text
						x="400"
						y="75"
						fontSize="45"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.purple}
						textAnchor="middle"
						strokeWidth="3"
						stroke={EXCALIDRAW_COLORS.purple}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray={`${magicProgress * 1500} 1500`}
					>
						✨ Magic happens behind the scenes! ✨
					</text>
					{/* Sparkle animations */}
					<g opacity={magicProgress}>
						<text x="100" y="120" fontSize="30" opacity={Math.sin(frame * 0.2) * 0.5 + 0.5}>✨</text>
						<text x="700" y="30" fontSize="25" opacity={Math.cos(frame * 0.3) * 0.5 + 0.5}>⭐</text>
						<text x="600" y="130" fontSize="35" opacity={Math.sin(frame * 0.25) * 0.5 + 0.5}>✨</text>
					</g>
				</svg>
			</div>
		</AbsoluteFill>
	);
};

// Scene 4: Dutch Auction mechanism
const Scene4DutchAuction: React.FC = () => {
	const frame = useCurrentFrame();
	
	const titleProgress = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const auctionProgress = interpolate(frame, [60, 90], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const priceProgress = interpolate(frame, [90, 360], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const currentPrice = interpolate(priceProgress, [0, 1], [100, 85]);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Title */}
			<div
				style={{
					position: 'absolute',
					top: '10%',
					textAlign: 'center',
				}}
			>
				<svg width="800" height="150" viewBox="0 0 800 150">
					<text
						x="400"
						y="75"
						fontSize="70"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.black}
						textAnchor="middle"
						strokeWidth="2"
						stroke={EXCALIDRAW_COLORS.black}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray={`${titleProgress * 1000} 1000`}
					>
						Dutch Auction
					</text>
					{/* Clock icon */}
					<g transform="translate(600, 50)" opacity={titleProgress}>
						<circle cx="0" cy="0" r="25" stroke={EXCALIDRAW_COLORS.orange} strokeWidth="3" fill="none" />
						<line x1="0" y1="0" x2="0" y2="-15" stroke={EXCALIDRAW_COLORS.orange} strokeWidth="3" strokeLinecap="round" />
						<line x1="0" y1="0" x2="10" y2="5" stroke={EXCALIDRAW_COLORS.orange} strokeWidth="3" strokeLinecap="round" />
					</g>
				</svg>
			</div>
			
			{/* Auction visualization */}
			<svg width="1080" height="1200" viewBox="0 0 1080 1200">
				{/* Price graph */}
				<g opacity={auctionProgress}>
					{/* Graph axes */}
					<line x1="140" y1="700" x2="940" y2="700" stroke={EXCALIDRAW_COLORS.black} strokeWidth="4" />
					<line x1="140" y1="200" x2="140" y2="700" stroke={EXCALIDRAW_COLORS.black} strokeWidth="4" />
					
					{/* Price curve */}
					<path
						d={`M 140 250 Q 540 ${250 + priceProgress * 400} 940 ${250 + priceProgress * 400}`}
						stroke={EXCALIDRAW_COLORS.red}
						strokeWidth="6"
						fill="none"
						strokeDasharray={`${priceProgress * 800} 800`}
					/>
					
					{/* Current price indicator */}
					<g transform={`translate(${140 + priceProgress * 800}, ${250 + priceProgress * 400})`}>
						<circle cx="0" cy="0" r="12" fill={EXCALIDRAW_COLORS.red} />
						<rect x="30" y="-40" width="180" height="80" rx="10" fill={EXCALIDRAW_COLORS.yellow} stroke={EXCALIDRAW_COLORS.black} strokeWidth="3" />
						<text x="120" y="10" textAnchor="middle" fontSize="50" fontFamily="Comic Sans MS" fill={EXCALIDRAW_COLORS.black}>
							${currentPrice.toFixed(2)}
						</text>
					</g>
				</g>
				
				{/* Resolvers */}
				<g opacity={interpolate(frame, [180, 240], [0, 1])}>
					<g transform="translate(270, 900)">
						<circle cx="0" cy="0" r="60" fill={EXCALIDRAW_COLORS.blue} stroke={EXCALIDRAW_COLORS.black} strokeWidth="4" />
						<text x="0" y="12" textAnchor="middle" fontSize="50">🤖</text>
						<text x="0" y="100" textAnchor="middle" fontSize="35" fontFamily="Comic Sans MS" fill={EXCALIDRAW_COLORS.black}>Resolver 1</text>
					</g>
					<g transform="translate(540, 900)">
						<circle cx="0" cy="0" r="60" fill={EXCALIDRAW_COLORS.green} stroke={EXCALIDRAW_COLORS.black} strokeWidth="4" />
						<text x="0" y="12" textAnchor="middle" fontSize="50">🤖</text>
						<text x="0" y="100" textAnchor="middle" fontSize="35" fontFamily="Comic Sans MS" fill={EXCALIDRAW_COLORS.black}>Resolver 2</text>
					</g>
					<g transform="translate(810, 900)">
						<circle cx="0" cy="0" r="60" fill={EXCALIDRAW_COLORS.purple} stroke={EXCALIDRAW_COLORS.black} strokeWidth="4" />
						<text x="0" y="12" textAnchor="middle" fontSize="50">🤖</text>
						<text x="0" y="100" textAnchor="middle" fontSize="35" fontFamily="Comic Sans MS" fill={EXCALIDRAW_COLORS.black}>Resolver 3</text>
					</g>
				</g>
			</svg>
		</AbsoluteFill>
	);
};

// Scene 5: Atomic Swap Magic (0:50-1:02)
const Scene5AtomicSwap: React.FC = () => {
	const frame = useCurrentFrame();
	
	const titleProgress = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const escrowProgress = interpolate(frame, [60, 120], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const lockProgress = interpolate(frame, [150, 180], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const swapProgress = interpolate(frame, [210, 270], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const successProgress = interpolate(frame, [300, 330], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	// Pulsing effect for emphasis
	const pulse = Math.sin(frame * 0.1) * 0.05 + 1;
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Pencil sound for drawing */}
			{frame >= 60 && frame <= 120 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={60}
				/>
			)}
			
			{/* Title */}
			<div
				style={{
					position: 'absolute',
					top: '10%',
					textAlign: 'center',
				}}
			>
				<svg width="800" height="150" viewBox="0 0 800 150">
					<text
						x="400"
						y="75"
						fontSize="70"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.black}
						textAnchor="middle"
						strokeWidth="2"
						stroke={EXCALIDRAW_COLORS.black}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray={`${titleProgress * 1200} 1200`}
					>
						Atomic Swap Magic ✨
					</text>
				</svg>
			</div>
			
			<svg width="500" height="400" viewBox="0 0 500 400">
				{/* Chain A escrow with pulse */}
				<g transform={`translate(100, 200) scale(${lockProgress > 0.5 ? pulse : 1})`}>
					<rect
						x="-80"
						y="-80"
						width="160"
						height="160"
						rx="20"
						stroke={EXCALIDRAW_COLORS.orange}
						strokeWidth="4"
						fill={lockProgress > 0.5 ? `${EXCALIDRAW_COLORS.orange}22` : 'white'}
						strokeDasharray={`${escrowProgress * 640} 640`}
					/>
					<text
						x="0"
						y="-20"
						fontSize="30"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.orange}
						textAnchor="middle"
						opacity={escrowProgress}
					>
						Chain A
					</text>
					<text
						x="0"
						y="40"
						fontSize="50"
						textAnchor="middle"
						opacity={lockProgress}
					>
						{lockProgress > 0.5 ? '🔒' : '🔓'}
					</text>
				</g>
				
				{/* Chain B escrow with pulse */}
				<g transform={`translate(400, 200) scale(${lockProgress > 0.5 ? pulse : 1})`}>
					<rect
						x="-80"
						y="-80"
						width="160"
						height="160"
						rx="20"
						stroke={EXCALIDRAW_COLORS.blue}
						strokeWidth="4"
						fill={lockProgress > 0.5 ? `${EXCALIDRAW_COLORS.blue}22` : 'white'}
						strokeDasharray={`${escrowProgress * 640} 640`}
					/>
					<text
						x="0"
						y="-20"
						fontSize="30"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.blue}
						textAnchor="middle"
						opacity={escrowProgress}
					>
						Chain B
					</text>
					<text
						x="0"
						y="40"
						fontSize="50"
						textAnchor="middle"
						opacity={lockProgress}
					>
						{lockProgress > 0.5 ? '🔒' : '🔓'}
					</text>
				</g>
				
				{/* Animated swap arrows */}
				<g opacity={swapProgress}>
					<path
						d="M 180 180 Q 250 100 320 180"
						stroke={EXCALIDRAW_COLORS.purple}
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
						markerEnd="url(#arrowhead-purple)"
						strokeDasharray="10 5"
						strokeDashoffset={-frame * 2}
					/>
					<path
						d="M 320 220 Q 250 300 180 220"
						stroke={EXCALIDRAW_COLORS.purple}
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
						markerEnd="url(#arrowhead-purple)"
						strokeDasharray="10 5"
						strokeDashoffset={frame * 2}
					/>
				</g>
				
				{/* Arrowhead markers */}
				<defs>
					<marker
						id="arrowhead-purple"
						markerWidth="10"
						markerHeight="7"
						refX="9"
						refY="3.5"
						orient="auto"
					>
						<polygon
							points="0 0, 10 3.5, 0 7"
							fill={EXCALIDRAW_COLORS.purple}
						/>
					</marker>
				</defs>
			</svg>
			
			{/* Success message */}
			<div
				style={{
					position: 'absolute',
					bottom: '20%',
					textAlign: 'center',
				}}
			>
				<svg width="800" height="100" viewBox="0 0 800 100">
					<text
						x="400"
						y="50"
						fontSize="50"
						fontFamily="Comic Sans MS, cursive"
						fill={EXCALIDRAW_COLORS.green}
						textAnchor="middle"
						strokeWidth="3"
						stroke={EXCALIDRAW_COLORS.green}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray={`${successProgress * 1500} 1500`}
						transform={`scale(${1 + successProgress * 0.1})`}
					>
						Both succeed or both fail! ✅
					</text>
				</svg>
			</div>
		</AbsoluteFill>
	);
};

// Scene 6: Security Features
const Scene6Security: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const shieldScale = spring({
		frame,
		fps,
		config: {damping: 200},
	});
	
	const feature1 = spring({
		frame: frame - 30,
		fps,
		config: {damping: 200},
	});
	const feature2 = spring({
		frame: frame - 60,
		fps,
		config: {damping: 200},
	});
	const feature3 = spring({
		frame: frame - 90,
		fps,
		config: {damping: 200},
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Shield */}
			<div
				style={{
					position: 'absolute',
					top: '15%',
					transform: `scale(${shieldScale})`,
				}}
			>
				<svg width="200" height="200" viewBox="0 0 200 200">
					<path
						d="M 100 20 L 150 40 L 150 100 Q 150 160 100 180 Q 50 160 50 100 L 50 40 Z"
						fill={EXCALIDRAW_COLORS.green}
						stroke={EXCALIDRAW_COLORS.black}
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M 70 90 L 90 110 L 130 70"
						fill="none"
						stroke={EXCALIDRAW_COLORS.black}
						strokeWidth="6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			
			{/* Security features */}
			<div
				style={{
					position: 'absolute',
					top: '45%',
					left: 0,
					right: 0,
				}}
			>
				<div style={{textAlign: 'center', marginBottom: 60}}>
					<div
						style={{
							transform: `scale(${feature1})`,
							marginBottom: 40,
						}}
					>
						<span style={{fontSize: 50}}>🚫</span>
						<span
							style={{
								fontFamily: HAND_DRAWN_FONT,
								fontSize: 40,
								color: EXCALIDRAW_STROKE,
								marginLeft: 20,
							}}
						>
							MEV Protection
						</span>
					</div>
					
					<div
						style={{
							transform: `scale(${feature2})`,
							marginBottom: 40,
						}}
					>
						<span style={{fontSize: 50}}>⏰</span>
						<span
							style={{
								fontFamily: HAND_DRAWN_FONT,
								fontSize: 40,
								color: EXCALIDRAW_STROKE,
								marginLeft: 20,
							}}
						>
							Automatic Timelock
						</span>
					</div>
					
					<div
						style={{
							transform: `scale(${feature3})`,
						}}
					>
						<span style={{fontSize: 50}}>🔐</span>
						<span
							style={{
								fontFamily: HAND_DRAWN_FONT,
								fontSize: 40,
								color: EXCALIDRAW_STROKE,
								marginLeft: 20,
							}}
						>
							Self-Custody Always
						</span>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};

// Scene 7: Benefits & Future
const Scene7Benefits: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const benefit1 = spring({
		frame,
		fps,
		config: {damping: 200},
	});
	const benefit2 = spring({
		frame: frame - 30,
		fps,
		config: {damping: 200},
	});
	const benefit3 = spring({
		frame: frame - 60,
		fps,
		config: {damping: 200},
	});
	
	const logoFade = interpolate(frame, [240, 300], [0, 1]);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Title */}
			<div
				style={{
					position: 'absolute',
					top: '10%',
					textAlign: 'center',
				}}
			>
				<h2
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 80,
						color: EXCALIDRAW_STROKE,
						margin: 0,
					}}
				>
					Why Fusion+?
				</h2>
			</div>
			
			{/* Benefits */}
			<div
				style={{
					position: 'absolute',
					top: '30%',
					left: 0,
					right: 0,
				}}
			>
				<BenefitCard
					icon="⛽"
					text="Gasless"
					scale={benefit1}
					color={EXCALIDRAW_COLORS.green}
					y={0}
				/>
				<BenefitCard
					icon="⚡"
					text="Lightning Fast"
					scale={benefit2}
					color={EXCALIDRAW_COLORS.yellow}
					y={120}
				/>
				<BenefitCard
					icon="🌐"
					text="Decentralized"
					scale={benefit3}
					color={EXCALIDRAW_COLORS.purple}
					y={240}
				/>
			</div>
			
			{/* Logo and conclusion */}
			<div
				style={{
					position: 'absolute',
					bottom: '10%',
					textAlign: 'center',
					opacity: logoFade,
				}}
			>
				<Img
					src={staticFile('start-screen_2.webp')}
					style={{
						width: 500,
						height: 'auto',
						marginBottom: 30,
					}}
				/>
				<p
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 45,
						color: EXCALIDRAW_COLORS.purple,
						fontWeight: 'bold',
						margin: 0,
					}}
				>
					Cross-chain swaps done right! 🚀
				</p>
			</div>
		</AbsoluteFill>
	);
};

// Helper component for benefit cards
const BenefitCard: React.FC<{
	icon: string;
	text: string;
	scale: number;
	color: string;
	y: number;
}> = ({icon, text, scale, color, y}) => (
	<div
		style={{
			position: 'absolute',
			top: y,
			left: '50%',
			transform: `translateX(-50%) scale(${scale})`,
			width: 600,
		}}
	>
		<svg width="600" height="100" viewBox="0 0 600 100">
			<rect
				x="10"
				y="10"
				width="580"
				height="80"
				rx="15"
				fill={color}
				fillOpacity="0.3"
				stroke={EXCALIDRAW_COLORS.black}
				strokeWidth="3"
			/>
			<text
				x="60"
				y="60"
				fontSize="50"
			>
				{icon}
			</text>
			<text
				x="150"
				y="60"
				fontSize="40"
				fontFamily="Comic Sans MS, cursive"
				fill={EXCALIDRAW_COLORS.black}
			>
				{text}
			</text>
		</svg>
	</div>
);