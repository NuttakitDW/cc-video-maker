import {AbsoluteFill, Audio, Img, interpolate, spring, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Series} from 'remotion';

// Instagram Reel dimensions
const REEL_WIDTH = 1080;
const REEL_HEIGHT = 1920;

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

export const ExcalidrawFusionReel: React.FC = () => {
	const frame = useCurrentFrame();
	
	return (
		<AbsoluteFill style={{backgroundColor: EXCALIDRAW_BG}}>
			{/* Background Audio */}
			<Audio src={staticFile('fusion_voice.mp3')} volume={1} />
			
			<Series>
				{/* Scene 1: The Problem (0:00-0:12 = 360 frames) */}
				<Series.Sequence durationInFrames={360}>
					<ExcalidrawScene1Problem />
				</Series.Sequence>
				
				{/* Scene 2: What is 1inch Fusion+? (0:12-0:25 = 390 frames) */}
				<Series.Sequence durationInFrames={390}>
					<ExcalidrawScene2WhatIsFusion />
				</Series.Sequence>
				
				{/* Scene 3: Intent-Based Trading (0:25-0:36 = 330 frames) */}
				<Series.Sequence durationInFrames={330}>
					<ExcalidrawScene3IntentBased />
				</Series.Sequence>
				
				{/* Scene 4: Dutch Auction (0:36-0:50 = 420 frames) */}
				<Series.Sequence durationInFrames={420}>
					<ExcalidrawScene4DutchAuction />
				</Series.Sequence>
				
				{/* Scene 5: Atomic Swap Magic (0:50-1:02 = 360 frames) */}
				<Series.Sequence durationInFrames={360}>
					<ExcalidrawScene5AtomicSwap />
				</Series.Sequence>
				
				{/* Scene 6: Security Features (1:02-1:15 = 390 frames) */}
				<Series.Sequence durationInFrames={390}>
					<ExcalidrawScene6Security />
				</Series.Sequence>
				
				{/* Scene 7: Benefits & Future (1:15-1:27 = 360 frames) */}
				<Series.Sequence durationInFrames={360}>
					<ExcalidrawScene7Benefits />
				</Series.Sequence>
			</Series>
		</AbsoluteFill>
	);
};

// Scene 1: The Problem - Hand-drawn blockchain isolation
const ExcalidrawScene1Problem: React.FC = () => {
	const frame = useCurrentFrame();
	
	const titleDraw = interpolate(frame, [0, 30], [0, 1]);
	const chainsDraw = interpolate(frame, [30, 60], [0, 1]);
	const brokenBridgeDraw = interpolate(frame, [60, 90], [0, 1]);
	
	return (
		<AbsoluteFill>
			{/* Pencil sound for title drawing */}
			{frame >= 0 && frame <= 30 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={30}
				/>
			)}
			
			{/* Pencil sound for chains drawing */}
			{frame >= 30 && frame <= 60 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={30}
				/>
			)}
			
			{/* Title with hand-drawn underline */}
			<div style={{textAlign: 'center', marginTop: 200}}>
				<h1
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 100,
						color: EXCALIDRAW_STROKE,
						marginBottom: 30,
						opacity: titleDraw,
					}}
				>
					The Problem
				</h1>
				<svg width="500" height="40" style={{opacity: titleDraw, margin: '0 auto', display: 'block'}}>
					<path
						d="M 50 20 Q 250 10 450 20"
						stroke={EXCALIDRAW_RED}
						strokeWidth="5"
						fill="none"
						strokeLinecap="round"
					/>
				</svg>
			</div>
			
			{/* Isolated blockchains - properly centered */}
			<div
				style={{
					position: 'absolute',
					top: '30%',
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<svg
					viewBox="0 0 1080 600"
					style={{
						width: '100%',
						height: 'auto',
					}}
				>
					{/* BTC Chain */}
					<g opacity={chainsDraw}>
						<HandDrawnCircle cx={270} cy={200} r={120} fill={EXCALIDRAW_YELLOW} />
						<text
							x="270"
							y="215"
							textAnchor="middle"
							style={{
								fontFamily: HAND_DRAWN_FONT,
								fontSize: 55,
								fill: EXCALIDRAW_STROKE,
								fontWeight: 'bold',
							}}
						>
							BTC
						</text>
					</g>
					
					{/* ETH Chain */}
					<g opacity={chainsDraw}>
						<HandDrawnCircle cx={810} cy={200} r={120} fill={EXCALIDRAW_BLUE} />
						<text
							x="810"
							y="215"
							textAnchor="middle"
							style={{
								fontFamily: HAND_DRAWN_FONT,
								fontSize: 55,
								fill: EXCALIDRAW_STROKE,
								fontWeight: 'bold',
							}}
						>
							ETH
						</text>
					</g>
				
					
					{/* Broken Bridge */}
					<g opacity={brokenBridgeDraw}>
						<BrokenBridge />
						<text
							x="540"
							y="450"
							textAnchor="middle"
							style={{
								fontFamily: HAND_DRAWN_FONT,
								fontSize: 40,
								fill: EXCALIDRAW_RED,
							}}
						>
							Risky Bridges!
						</text>
					</g>
				</svg>
			</div>
		</AbsoluteFill>
	);
};

// Scene 2: What is 1inch Fusion+?
const ExcalidrawScene2WhatIsFusion: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const logoDraw = spring({
		frame,
		fps,
		config: {damping: 200},
	});
	
	const networkDraw = interpolate(frame, [60, 120], [0, 1]);
	const textReveal = interpolate(frame, [120, 150], [0, 1]);
	
	return (
		<AbsoluteFill>
			{/* 1inch Fusion+ Logo (hand-drawn style) */}
			<div
				style={{
					textAlign: 'center',
					marginTop: 150,
					transform: `scale(${logoDraw})`,
				}}
			>
				<Img
					src={staticFile('start-screen_2.webp')}
					style={{
						width: 800,
						height: 'auto',
						filter: 'contrast(1.2)',
					}}
				/>
			</div>
			
			{/* Connected Networks - properly centered */}
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<svg
					viewBox="0 0 600 400"
					style={{
						width: '90%',
						height: 'auto',
					}}
				>
					<g opacity={networkDraw}>
						{/* Network nodes with blockchain labels */}
						<HandDrawnCircle cx={150} cy={100} r={60} fill={EXCALIDRAW_YELLOW} />
						<text x="150" y="110" textAnchor="middle" style={{fontFamily: HAND_DRAWN_FONT, fontSize: 30, fill: EXCALIDRAW_STROKE}}>BTC</text>
						
						<HandDrawnCircle cx={300} cy={50} r={60} fill={EXCALIDRAW_BLUE} />
						<text x="300" y="60" textAnchor="middle" style={{fontFamily: HAND_DRAWN_FONT, fontSize: 30, fill: EXCALIDRAW_STROKE}}>ETH</text>
						
						<HandDrawnCircle cx={450} cy={100} r={60} fill={EXCALIDRAW_GREEN} />
						<text x="450" y="110" textAnchor="middle" style={{fontFamily: HAND_DRAWN_FONT, fontSize: 30, fill: EXCALIDRAW_STROKE}}>ARB</text>
						
						<HandDrawnCircle cx={150} cy={250} r={60} fill={EXCALIDRAW_PURPLE} />
						<text x="150" y="260" textAnchor="middle" style={{fontFamily: HAND_DRAWN_FONT, fontSize: 30, fill: EXCALIDRAW_STROKE}}>SOL</text>
						
						<HandDrawnCircle cx={450} cy={250} r={60} fill={EXCALIDRAW_RED} />
						<text x="450" y="260" textAnchor="middle" style={{fontFamily: HAND_DRAWN_FONT, fontSize: 30, fill: EXCALIDRAW_STROKE}}>AVAX</text>
						
						{/* 1inch Fusion+ in center */}
						<HandDrawnRect x={225} y={140} width={150} height={60} fill="#e0e7ff" />
						<text x="300" y="175" textAnchor="middle" style={{fontFamily: HAND_DRAWN_FONT, fontSize: 25, fill: EXCALIDRAW_STROKE, fontWeight: 'bold'}}>Fusion+</text>
						
						{/* Connections to center */}
						<HandDrawnLine x1={210} y1={100} x2={225} y2={150} stroke={EXCALIDRAW_PURPLE} />
						<HandDrawnLine x1={300} y1={110} x2={300} y2={140} stroke={EXCALIDRAW_PURPLE} />
						<HandDrawnLine x1={390} y1={100} x2={375} y2={150} stroke={EXCALIDRAW_PURPLE} />
						<HandDrawnLine x1={210} y1={250} x2={225} y2={190} stroke={EXCALIDRAW_PURPLE} />
						<HandDrawnLine x1={390} y1={250} x2={375} y2={190} stroke={EXCALIDRAW_PURPLE} />
					</g>
				</svg>
			</div>
			
			{/* Description text */}
			<div
				style={{
					position: 'absolute',
					bottom: 200,
					left: 60,
					right: 60,
					textAlign: 'center',
					opacity: textReveal,
				}}
			>
				<p
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 40,
						color: EXCALIDRAW_STROKE,
					}}
				>
					Cross-chain swaps without bridges!
				</p>
			</div>
		</AbsoluteFill>
	);
};

// Scene 3: Intent-Based Trading
const ExcalidrawScene3IntentBased: React.FC = () => {
	const frame = useCurrentFrame();
	
	const inputBoxDraw = interpolate(frame, [0, 30], [0, 1]);
	const typingProgress = interpolate(frame, [30, 120], [0, 1]);
	const magicDraw = interpolate(frame, [120, 180], [0, 1]);
	
	const typedText = "Swap BTC for ETH";
	const visibleChars = Math.floor(typingProgress * typedText.length);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Pencil sound for input box drawing */}
			{frame >= 0 && frame <= 30 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={30}
				/>
			)}
			
			{/* Pencil sound for typing */}
			{frame >= 30 && frame <= 120 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.4}
					startFrom={0}
					endAt={90}
				/>
			)}
			
			{/* Input box */}
			<svg width="800" height="600">
				{/* Hand-drawn input box */}
				<g opacity={inputBoxDraw}>
					<HandDrawnRect x={100} y={200} width={600} height={120} fill="#f3f4f6" />
					<text
						x="400"
						y="180"
						textAnchor="middle"
						style={{
							fontFamily: HAND_DRAWN_FONT,
							fontSize: 35,
							fill: EXCALIDRAW_STROKE,
						}}
					>
						Express Your Intent:
					</text>
				</g>
				
				{/* Typing animation */}
				<text
					x="400"
					y="270"
					textAnchor="middle"
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 45,
						fill: EXCALIDRAW_STROKE,
					}}
				>
					{typedText.slice(0, visibleChars)}
					{visibleChars < typedText.length && '_'}
				</text>
				
				{/* Magic wand and sparkles */}
				<g opacity={magicDraw}>
					<MagicWand x={650} y={250} />
					<Sparkles cx={700} cy={200} />
					<Sparkles cx={720} cy={280} delay={10} />
					<Sparkles cx={680} cy={320} delay={20} />
				</g>
			</svg>
			
			{/* System handles complexity text */}
			<div
				style={{
					position: 'absolute',
					bottom: 300,
					textAlign: 'center',
					width: '100%',
					opacity: magicDraw,
				}}
			>
				<p
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 35,
						color: EXCALIDRAW_PURPLE,
					}}
				>
					✨ System finds the best route! ✨
				</p>
			</div>
		</AbsoluteFill>
	);
};

// Scene 4: Dutch Auction
const ExcalidrawScene4DutchAuction: React.FC = () => {
	const frame = useCurrentFrame();
	
	const auctionDraw = interpolate(frame, [0, 30], [0, 1]);
	const priceDrop = interpolate(frame, [60, 300], [100, 85]);
	const resolverAppear = interpolate(frame, [120, 150], [0, 1]);
	
	return (
		<AbsoluteFill>
			{/* Pencil sound for auction drawing */}
			{frame >= 0 && frame <= 30 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={30}
				/>
			)}
			
			{/* Pencil sound for resolvers appearing */}
			{frame >= 120 && frame <= 150 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={30}
				/>
			)}
			
			{/* Title */}
			<h2
				style={{
					fontFamily: HAND_DRAWN_FONT,
					fontSize: 50,
					color: EXCALIDRAW_STROKE,
					textAlign: 'center',
					marginTop: 100,
					opacity: auctionDraw,
				}}
			>
				Dutch Auction
			</h2>
			
			{/* Auction visualization */}
			<svg
				viewBox="0 0 1080 1400"
				style={{
					position: 'absolute',
					top: 250,
					left: 0,
					width: '100%',
					height: 'auto',
				}}
			>
				{/* Price ladder */}
				<g opacity={auctionDraw}>
					<PriceLadder currentPrice={priceDrop} />
				</g>
				
				{/* Resolvers */}
				<g opacity={resolverAppear}>
					<ResolverFigure x={200} y={600} color={EXCALIDRAW_BLUE} label="Resolver 1" />
					<ResolverFigure x={540} y={600} color={EXCALIDRAW_GREEN} label="Resolver 2" />
					<ResolverFigure x={880} y={600} color={EXCALIDRAW_PURPLE} label="Resolver 3" />
				</g>
				
				{/* Current price display */}
				<g>
					<HandDrawnRect x={340} y={800} width={400} height={100} fill={EXCALIDRAW_YELLOW} />
					<text
						x="540"
						y="860"
						textAnchor="middle"
						style={{
							fontFamily: HAND_DRAWN_FONT,
							fontSize: 50,
							fill: EXCALIDRAW_STROKE,
						}}
					>
						${priceDrop.toFixed(2)}
					</text>
				</g>
			</svg>
		</AbsoluteFill>
	);
};

// Scene 5: Atomic Swap Magic
const ExcalidrawScene5AtomicSwap: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const escrowDraw = interpolate(frame, [0, 30], [0, 1]);
	const lockAnimation = spring({
		frame: frame - 120,
		fps,
		config: {damping: 200},
	});
	const secretReveal = interpolate(frame, [180, 240], [0, 1]);
	
	return (
		<AbsoluteFill>
			{/* Pencil sound for escrow drawing */}
			{frame >= 0 && frame <= 30 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.3}
					startFrom={0}
					endAt={30}
				/>
			)}
			
			{/* Pencil sound for secret connection */}
			{frame >= 180 && frame <= 240 && (
				<Audio
					src={staticFile('pencil_writing.mp3')}
					volume={0.2}
					startFrom={0}
					endAt={60}
				/>
			)}
			
			<h2
				style={{
					fontFamily: HAND_DRAWN_FONT,
					fontSize: 50,
					color: EXCALIDRAW_STROKE,
					textAlign: 'center',
					marginTop: 100,
				}}
			>
				Atomic Swap Magic ✨
			</h2>
			
			<svg
				viewBox="0 0 1080 1200"
				style={{
					position: 'absolute',
					top: 300,
					left: 0,
					width: '100%',
					height: 'auto',
				}}
			>
				{/* Chain A Escrow */}
				<g opacity={escrowDraw}>
					<HandDrawnRect x={100} y={200} width={350} height={300} fill="#e0e7ff" />
					<text
						x="275"
						y="170"
						textAnchor="middle"
						style={{
							fontFamily: HAND_DRAWN_FONT,
							fontSize: 35,
							fill: EXCALIDRAW_STROKE,
						}}
					>
						Chain A
					</text>
					
					{/* Lock */}
					<g transform={`translate(275, 350) scale(${lockAnimation})`}>
						<Lock isLocked={lockAnimation > 0.5} />
					</g>
				</g>
				
				{/* Chain B Escrow */}
				<g opacity={escrowDraw}>
					<HandDrawnRect x={630} y={200} width={350} height={300} fill="#fef3c7" />
					<text
						x="805"
						y="170"
						textAnchor="middle"
						style={{
							fontFamily: HAND_DRAWN_FONT,
							fontSize: 35,
							fill: EXCALIDRAW_STROKE,
						}}
					>
						Chain B
					</text>
					
					{/* Lock */}
					<g transform={`translate(805, 350) scale(${lockAnimation})`}>
						<Lock isLocked={lockAnimation > 0.5} />
					</g>
				</g>
				
				{/* Secret connection */}
				<g opacity={secretReveal}>
					<HandDrawnLine
						x1={450}
						y1={350}
						x2={630}
						y2={350}
						strokeDasharray="10,5"
						stroke={EXCALIDRAW_PURPLE}
						strokeWidth={3}
					/>
					<text
						x="540"
						y="340"
						textAnchor="middle"
						style={{
							fontFamily: HAND_DRAWN_FONT,
							fontSize: 25,
							fill: EXCALIDRAW_PURPLE,
						}}
					>
						secret
					</text>
				</g>
				
				{/* All or nothing text */}
				<text
					x="540"
					y="600"
					textAnchor="middle"
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 40,
						fill: EXCALIDRAW_STROKE,
						opacity: secretReveal,
					}}
				>
					Both complete or neither! 🎯
				</text>
			</svg>
		</AbsoluteFill>
	);
};

// Scene 6: Security Features
const ExcalidrawScene6Security: React.FC = () => {
	const frame = useCurrentFrame();
	
	const shieldDraw = interpolate(frame, [0, 30], [0, 1]);
	const feature1 = interpolate(frame, [60, 90], [0, 1]);
	const feature2 = interpolate(frame, [120, 150], [0, 1]);
	const feature3 = interpolate(frame, [180, 210], [0, 1]);
	
	return (
		<AbsoluteFill>
			{/* Security shield */}
			<div
				style={{
					textAlign: 'center',
					marginTop: 150,
					opacity: shieldDraw,
				}}
			>
				<Shield size={200} />
			</div>
			
			{/* Security features */}
			<div style={{marginTop: 450}}>
				<SecurityFeatureDrawn
					icon="🛡️"
					text="MEV Protection"
					opacity={feature1}
					y={0}
				/>
				<SecurityFeatureDrawn
					icon="⏰"
					text="Automatic Timelock"
					opacity={feature2}
					y={150}
				/>
				<SecurityFeatureDrawn
					icon="🔐"
					text="Always Self-Custody"
					opacity={feature3}
					y={300}
				/>
			</div>
			
			{/* No trust required */}
			<div
				style={{
					position: 'absolute',
					bottom: 200,
					textAlign: 'center',
					width: '100%',
					opacity: feature3,
				}}
			>
				<p
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 35,
						color: EXCALIDRAW_GREEN,
					}}
				>
					No custodians, no trust required!
				</p>
			</div>
		</AbsoluteFill>
	);
};

// Scene 7: Benefits & Future (Full 12 seconds)
const ExcalidrawScene7Benefits: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	// Staggered animations for benefits
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
	
	// Logo and conclusion fade in later
	const conclusionFade = interpolate(frame, [180, 240], [0, 1]);
	
	return (
		<AbsoluteFill>
			{/* Benefits Section (first 6 seconds) */}
			<div
				style={{
					position: 'absolute',
					top: '20%',
					left: 0,
					right: 0,
					opacity: interpolate(frame, [0, 30, 150, 180], [0, 1, 1, 0]),
				}}
			>
				<h2
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 80,
						color: EXCALIDRAW_STROKE,
						textAlign: 'center',
						marginBottom: 100,
					}}
				>
					Why Fusion+?
				</h2>
				
				{/* Benefit cards with draw-on effect */}
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50}}>
					<BenefitCardDrawn
						icon="⛽"
						text="Gasless Swaps"
						scale={benefit1}
						color={EXCALIDRAW_GREEN}
					/>
					<BenefitCardDrawn
						icon="⚡"
						text="Lightning Fast"
						scale={benefit2}
						color={EXCALIDRAW_YELLOW}
					/>
					<BenefitCardDrawn
						icon="🌐"
						text="Truly Decentralized"
						scale={benefit3}
						color={EXCALIDRAW_PURPLE}
					/>
				</div>
			</div>
			
			{/* Conclusion Section (last 6 seconds) */}
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					textAlign: 'center',
					opacity: conclusionFade,
				}}
			>
				<Img
					src={staticFile('start-screen_2.webp')}
					style={{
						width: 700,
						height: 'auto',
						marginBottom: 60,
					}}
				/>
				<h2
					style={{
						fontFamily: HAND_DRAWN_FONT,
						fontSize: 70,
						color: EXCALIDRAW_PURPLE,
						fontWeight: 'bold',
					}}
				>
					Cross-chain swaps done right! 🚀
				</h2>
			</div>
		</AbsoluteFill>
	);
};

// Helper component for benefit cards
const BenefitCardDrawn: React.FC<{
	icon: string;
	text: string;
	scale: number;
	color: string;
}> = ({icon, text, scale, color}) => (
	<div
		style={{
			transform: `scale(${scale})`,
			width: 600,
		}}
	>
		<svg width="600" height="120">
			<HandDrawnRect x={10} y={10} width={580} height={100} fill={color} />
			<text
				x="80"
				y="70"
				style={{
					fontFamily: HAND_DRAWN_FONT,
					fontSize: 60,
				}}
			>
				{icon}
			</text>
			<text
				x="180"
				y="70"
				style={{
					fontFamily: HAND_DRAWN_FONT,
					fontSize: 45,
					fill: EXCALIDRAW_STROKE,
				}}
			>
				{text}
			</text>
		</svg>
	</div>
);

// Helper Components for hand-drawn SVG elements

const HandDrawnCircle: React.FC<{cx: number; cy: number; r: number; fill?: string}> = ({
	cx,
	cy,
	r,
	fill = 'none',
}) => {
	const path = `M ${cx - r} ${cy} C ${cx - r} ${cy - r * 0.8}, ${cx - r * 0.8} ${cy - r}, ${cx} ${cy - r} C ${cx + r * 0.8} ${cy - r}, ${cx + r} ${cy - r * 0.8}, ${cx + r} ${cy} C ${cx + r} ${cy + r * 0.8}, ${cx + r * 0.8} ${cy + r}, ${cx} ${cy + r} C ${cx - r * 0.8} ${cy + r}, ${cx - r} ${cy + r * 0.8}, ${cx - r} ${cy}`;
	
	return (
		<>
			<path
				d={path}
				fill={fill}
				stroke={EXCALIDRAW_STROKE}
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</>
	);
};

const HandDrawnRect: React.FC<{
	x: number;
	y: number;
	width: number;
	height: number;
	fill?: string;
}> = ({x, y, width, height, fill = 'none'}) => {
	const path = `M ${x + 2} ${y} L ${x + width - 2} ${y + 1} L ${x + width} ${y + height - 2} L ${x + 1} ${y + height} Z`;
	
	return (
		<path
			d={path}
			fill={fill}
			stroke={EXCALIDRAW_STROKE}
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	);
};

const HandDrawnLine: React.FC<{
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	stroke?: string;
	strokeWidth?: number;
	strokeDasharray?: string;
}> = ({x1, y1, x2, y2, stroke = EXCALIDRAW_STROKE, strokeWidth = 3, strokeDasharray}) => {
	const midX = (x1 + x2) / 2;
	const midY = (y1 + y2) / 2;
	const wobble = 2;
	
	const path = `M ${x1} ${y1} Q ${midX + wobble} ${midY - wobble} ${x2} ${y2}`;
	
	return (
		<path
			d={path}
			fill="none"
			stroke={stroke}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeDasharray={strokeDasharray}
		/>
	);
};

const BrokenBridge: React.FC = () => (
	<g>
		<HandDrawnLine x1={420} y1={200} x2={500} y2={250} />
		<HandDrawnLine x1={580} y1={250} x2={660} y2={200} />
		<text
			x="540"
			y="280"
			textAnchor="middle"
			style={{
				fontFamily: HAND_DRAWN_FONT,
				fontSize: 60,
				fill: EXCALIDRAW_RED,
			}}
		>
			❌
		</text>
	</g>
);

const MagicWand: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g transform={`translate(${x}, ${y})`}>
		<HandDrawnLine x1={0} y1={0} x2={30} y2={-30} stroke={EXCALIDRAW_PURPLE} strokeWidth={5} />
		<path
			d="M 25 -35 L 35 -25 M 30 -40 L 30 -20 M 20 -30 L 40 -30"
			stroke={EXCALIDRAW_YELLOW}
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</g>
);

const Sparkles: React.FC<{cx: number; cy: number; delay?: number}> = ({cx, cy, delay = 0}) => {
	const frame = useCurrentFrame();
	const sparkle = interpolate((frame - delay) % 30, [0, 15, 30], [0, 1, 0]);
	
	return (
		<g opacity={sparkle}>
			<path
				d={`M ${cx - 5} ${cy} L ${cx + 5} ${cy} M ${cx} ${cy - 5} L ${cx} ${cy + 5}`}
				stroke={EXCALIDRAW_YELLOW}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</g>
	);
};

const PriceLadder: React.FC<{currentPrice: number}> = ({currentPrice}) => {
	const steps = [100, 95, 90, 85, 80];
	
	return (
		<g>
			{steps.map((price, i) => (
				<g key={i}>
					<HandDrawnRect
						x={390}
						y={100 + i * 80}
						width={300}
						height={60}
						fill={price >= currentPrice ? EXCALIDRAW_GREEN : '#f3f4f6'}
					/>
					<text
						x="540"
						y={140 + i * 80}
						textAnchor="middle"
						style={{
							fontFamily: HAND_DRAWN_FONT,
							fontSize: 35,
							fill: EXCALIDRAW_STROKE,
						}}
					>
						${price}
					</text>
				</g>
			))}
		</g>
	);
};

const ResolverFigure: React.FC<{x: number; y: number; color: string; label: string}> = ({
	x,
	y,
	color,
	label,
}) => (
	<g>
		<HandDrawnCircle cx={x} cy={y} r={60} fill={color} />
		<text
			x={x}
			y={y + 10}
			textAnchor="middle"
			style={{
				fontFamily: HAND_DRAWN_FONT,
				fontSize: 50,
				fill: EXCALIDRAW_STROKE,
			}}
		>
			🤖
		</text>
		<text
			x={x}
			y={y + 100}
			textAnchor="middle"
			style={{
				fontFamily: HAND_DRAWN_FONT,
				fontSize: 25,
				fill: EXCALIDRAW_STROKE,
			}}
		>
			{label}
		</text>
	</g>
);

const Lock: React.FC<{isLocked: boolean}> = ({isLocked}) => (
	<g transform="translate(-30, -40)">
		<HandDrawnRect x={0} y={20} width={60} height={40} fill={EXCALIDRAW_YELLOW} />
		<path
			d={
				isLocked
					? 'M 15 20 Q 15 5, 30 5 Q 45 5, 45 20'
					: 'M 15 20 Q 15 5, 30 5 Q 45 5, 45 -5'
			}
			fill="none"
			stroke={EXCALIDRAW_STROKE}
			strokeWidth="4"
			strokeLinecap="round"
		/>
		<circle cx="30" cy="35" r="5" fill={EXCALIDRAW_STROKE} />
	</g>
);

const Shield: React.FC<{size: number}> = ({size}) => (
	<svg width={size} height={size} viewBox="0 0 100 100">
		<path
			d="M 50 10 L 80 25 L 80 60 Q 80 85, 50 90 Q 20 85, 20 60 L 20 25 Z"
			fill={EXCALIDRAW_GREEN}
			stroke={EXCALIDRAW_STROKE}
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M 35 45 L 45 55 L 65 35"
			fill="none"
			stroke={EXCALIDRAW_STROKE}
			strokeWidth="4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const SecurityFeatureDrawn: React.FC<{
	icon: string;
	text: string;
	opacity: number;
	y: number;
}> = ({icon, text, opacity, y}) => (
	<div
		style={{
			position: 'absolute',
			top: y,
			left: 0,
			right: 0,
			textAlign: 'center',
			opacity,
		}}
	>
		<span style={{fontSize: 60}}>{icon}</span>
		<span
			style={{
				fontFamily: HAND_DRAWN_FONT,
				fontSize: 40,
				color: EXCALIDRAW_STROKE,
				marginLeft: 20,
			}}
		>
			{text}
		</span>
	</div>
);

