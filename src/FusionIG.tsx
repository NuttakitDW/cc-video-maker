import {AbsoluteFill, Audio, Img, interpolate, spring, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {TransitionSeries, linearTiming, springTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';

// Instagram Reel dimensions
const REEL_WIDTH = 1080;
const REEL_HEIGHT = 1920;

// Modern color palette
const COLORS = {
	background: '#0A0A0A',
	primary: '#8B5CF6',
	secondary: '#3B82F6',
	accent: '#F59E0B',
	success: '#10B981',
	text: '#FFFFFF',
	textSecondary: '#E5E7EB',
	gradient1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	gradient2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
	gradient3: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
};

export const FusionIG: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	// Dynamic background gradient
	const bgRotation = interpolate(frame, [0, 2610], [0, 360]);
	
	return (
		<AbsoluteFill
			style={{
				background: COLORS.background,
				overflow: 'hidden',
			}}
		>
			{/* Animated background */}
			<div
				style={{
					position: 'absolute',
					width: '200%',
					height: '200%',
					top: '-50%',
					left: '-50%',
					background: `conic-gradient(from ${bgRotation}deg at 50% 50%, ${COLORS.primary}22, ${COLORS.secondary}22, ${COLORS.accent}22, ${COLORS.primary}22)`,
					opacity: 0.5,
				}}
			/>
			
			{/* Background Audio */}
			<Audio src={staticFile('fusion_voice.mp3')} volume={1} />
			
			<TransitionSeries>
				{/* Scene 1: The Problem (0:00-0:12) */}
				<TransitionSeries.Sequence durationInFrames={360}>
					<Scene1Problem />
				</TransitionSeries.Sequence>
				
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 30})}
					presentation={slide({direction: 'from-bottom'})}
				/>
				
				{/* Scene 2: What is 1inch Fusion+? (0:12-0:25) */}
				<TransitionSeries.Sequence durationInFrames={390}>
					<Scene2WhatIsFusion />
				</TransitionSeries.Sequence>
				
				<TransitionSeries.Transition
					timing={linearTiming({durationInFrames: 20})}
					presentation={fade()}
				/>
				
				{/* Scene 3: Intent-Based Trading (0:25-0:36) */}
				<TransitionSeries.Sequence durationInFrames={330}>
					<Scene3IntentBased />
				</TransitionSeries.Sequence>
				
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 30})}
					presentation={slide({direction: 'from-right'})}
				/>
				
				{/* Scene 4: Dutch Auction (0:36-0:50) */}
				<TransitionSeries.Sequence durationInFrames={420}>
					<Scene4DutchAuction />
				</TransitionSeries.Sequence>
				
				<TransitionSeries.Transition
					timing={linearTiming({durationInFrames: 20})}
					presentation={fade()}
				/>
				
				{/* Scene 5: Atomic Swap Magic (0:50-1:02) */}
				<TransitionSeries.Sequence durationInFrames={360}>
					<Scene5AtomicSwap />
				</TransitionSeries.Sequence>
				
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 30})}
					presentation={slide({direction: 'from-left'})}
				/>
				
				{/* Scene 6: Security Features (1:02-1:15) */}
				<TransitionSeries.Sequence durationInFrames={390}>
					<Scene6Security />
				</TransitionSeries.Sequence>
				
				<TransitionSeries.Transition
					timing={linearTiming({durationInFrames: 20})}
					presentation={fade()}
				/>
				
				{/* Scene 7: Benefits & Future (1:15-1:27) */}
				<TransitionSeries.Sequence durationInFrames={360}>
					<Scene7Benefits />
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</AbsoluteFill>
	);
};

// Scene 1: The Problem
const Scene1Problem: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const titleScale = spring({
		frame,
		fps,
		config: {damping: 200},
	});
	
	const problemScale = spring({
		frame: frame - 30,
		fps,
		config: {damping: 200},
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Title */}
			<div
				style={{
					position: 'absolute',
					top: '15%',
					textAlign: 'center',
					transform: `scale(${titleScale})`,
				}}
			>
				<h1
					style={{
						fontSize: 90,
						fontWeight: 900,
						color: COLORS.text,
						margin: 0,
						textShadow: '0 10px 40px rgba(0,0,0,0.8)',
					}}
				>
					THE PROBLEM
				</h1>
				<div
					style={{
						width: 150,
						height: 6,
						background: COLORS.accent,
						margin: '20px auto',
						borderRadius: 3,
					}}
				/>
			</div>
			
			{/* Blockchain visualization */}
			<div
				style={{
					display: 'flex',
					gap: 100,
					alignItems: 'center',
					transform: `scale(${problemScale})`,
				}}
			>
				<BlockchainNode name="BTC" color={COLORS.accent} />
				<div style={{fontSize: 80, color: '#EF4444'}}>❌</div>
				<BlockchainNode name="ETH" color={COLORS.secondary} />
			</div>
			
			{/* Risk text */}
			<div
				style={{
					position: 'absolute',
					bottom: '20%',
					textAlign: 'center',
					opacity: interpolate(frame, [90, 120], [0, 1]),
				}}
			>
				<p
					style={{
						fontSize: 45,
						color: '#EF4444',
						fontWeight: 700,
						margin: 0,
					}}
				>
					🚨 RISKY BRIDGES 🚨
				</p>
			</div>
		</AbsoluteFill>
	);
};

// Scene 2: What is 1inch Fusion+?
const Scene2WhatIsFusion: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const logoScale = spring({
		frame,
		fps,
		config: {damping: 200},
	});
	
	const textFade = interpolate(frame, [60, 90], [0, 1]);
	const networkScale = spring({
		frame: frame - 90,
		fps,
		config: {damping: 200},
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Logo */}
			<div
				style={{
					position: 'absolute',
					top: '10%',
					transform: `scale(${logoScale})`,
				}}
			>
				<Img
					src={staticFile('start-screen_2.webp')}
					style={{
						width: 800,
						height: 'auto',
					}}
				/>
			</div>
			
			{/* Description */}
			<div
				style={{
					position: 'absolute',
					top: '45%',
					padding: '0 50px',
					textAlign: 'center',
					opacity: textFade,
				}}
			>
				<h2
					style={{
						fontSize: 55,
						color: COLORS.text,
						fontWeight: 700,
						lineHeight: 1.3,
						margin: 0,
					}}
				>
					Cross-chain swaps
					<br />
					without bridges
				</h2>
			</div>
			
			{/* Network visualization */}
			<div
				style={{
					position: 'absolute',
					bottom: '15%',
					transform: `scale(${networkScale})`,
				}}
			>
				<NetworkVisualization />
			</div>
		</AbsoluteFill>
	);
};

// Scene 3: Intent-Based Trading
const Scene3IntentBased: React.FC = () => {
	const frame = useCurrentFrame();
	
	const boxScale = spring({
		frame,
		fps: 30,
		config: {damping: 200},
	});
	
	const typingProgress = interpolate(frame, [60, 150], [0, 1]);
	const magicFade = interpolate(frame, [180, 210], [0, 1]);
	
	const text = "Swap BTC for ETH";
	const visibleChars = Math.floor(typingProgress * text.length);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Title */}
			<div
				style={{
					position: 'absolute',
					top: '20%',
					textAlign: 'center',
				}}
			>
				<h2
					style={{
						fontSize: 70,
						color: COLORS.text,
						fontWeight: 800,
						margin: 0,
					}}
				>
					Express Your Intent
				</h2>
			</div>
			
			{/* Input box */}
			<div
				style={{
					background: 'rgba(255,255,255,0.1)',
					border: '3px solid rgba(255,255,255,0.2)',
					borderRadius: 20,
					padding: '40px 60px',
					transform: `scale(${boxScale})`,
				}}
			>
				<p
					style={{
						fontSize: 60,
						color: COLORS.text,
						fontFamily: 'monospace',
						margin: 0,
						minHeight: 80,
					}}
				>
					{text.slice(0, visibleChars)}
					<span style={{opacity: visibleChars < text.length ? 1 : 0}}>|</span>
				</p>
			</div>
			
			{/* Magic effect */}
			<div
				style={{
					position: 'absolute',
					bottom: '25%',
					textAlign: 'center',
					opacity: magicFade,
				}}
			>
				<p
					style={{
						fontSize: 45,
						color: COLORS.primary,
						fontWeight: 700,
					}}
				>
					✨ System finds the best route ✨
				</p>
			</div>
		</AbsoluteFill>
	);
};

// Scene 4: Dutch Auction
const Scene4DutchAuction: React.FC = () => {
	const frame = useCurrentFrame();
	
	const titleFade = interpolate(frame, [0, 30], [0, 1]);
	const auctionScale = spring({
		frame: frame - 30,
		fps: 30,
		config: {damping: 200},
	});
	
	const currentPrice = interpolate(frame, [60, 300], [100, 85]);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Title */}
			<div
				style={{
					position: 'absolute',
					top: '15%',
					textAlign: 'center',
					opacity: titleFade,
				}}
			>
				<h2
					style={{
						fontSize: 80,
						color: COLORS.text,
						fontWeight: 800,
						margin: 0,
					}}
				>
					Dutch Auction
				</h2>
			</div>
			
			{/* Price display */}
			<div
				style={{
					transform: `scale(${auctionScale})`,
				}}
			>
				<div
					style={{
						background: COLORS.gradient1,
						padding: '50px 100px',
						borderRadius: 30,
						boxShadow: '0 20px 60px rgba(139, 92, 246, 0.5)',
					}}
				>
					<p
						style={{
							fontSize: 100,
							color: COLORS.text,
							fontWeight: 900,
							margin: 0,
						}}
					>
						${currentPrice.toFixed(2)}
					</p>
				</div>
				
				{/* Price direction indicator */}
				<div
					style={{
						textAlign: 'center',
						marginTop: 30,
						fontSize: 50,
					}}
				>
					📉
				</div>
			</div>
			
			{/* Resolvers */}
			<div
				style={{
					position: 'absolute',
					bottom: '20%',
					display: 'flex',
					gap: 40,
					opacity: interpolate(frame, [120, 150], [0, 1]),
				}}
			>
				<ResolverBadge name="Resolver 1" />
				<ResolverBadge name="Resolver 2" />
				<ResolverBadge name="Resolver 3" />
			</div>
		</AbsoluteFill>
	);
};

// Scene 5: Atomic Swap Magic
const Scene5AtomicSwap: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const escrowScale = spring({
		frame,
		fps,
		config: {damping: 200},
	});
	
	const lockAnimation = interpolate(frame, [120, 150], [0, 1]);
	const connectionFade = interpolate(frame, [180, 210], [0, 1]);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Title */}
			<div
				style={{
					position: 'absolute',
					top: '15%',
					textAlign: 'center',
				}}
			>
				<h2
					style={{
						fontSize: 80,
						color: COLORS.text,
						fontWeight: 800,
						margin: 0,
					}}
				>
					Atomic Swap Magic
				</h2>
			</div>
			
			{/* Escrow visualization */}
			<div
				style={{
					display: 'flex',
					gap: 150,
					alignItems: 'center',
					transform: `scale(${escrowScale})`,
				}}
			>
				<EscrowBox chain="Chain A" isLocked={lockAnimation > 0.5} />
				<div
					style={{
						fontSize: 80,
						color: COLORS.primary,
						opacity: connectionFade,
					}}
				>
					⇄
				</div>
				<EscrowBox chain="Chain B" isLocked={lockAnimation > 0.5} />
			</div>
			
			{/* Atomic guarantee */}
			<div
				style={{
					position: 'absolute',
					bottom: '20%',
					textAlign: 'center',
					opacity: connectionFade,
				}}
			>
				<p
					style={{
						fontSize: 50,
						color: COLORS.success,
						fontWeight: 700,
					}}
				>
					Both complete or neither! ✅
				</p>
			</div>
		</AbsoluteFill>
	);
};

// Scene 6: Security Features
const Scene6Security: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const feature1 = spring({
		frame,
		fps,
		config: {damping: 200},
	});
	const feature2 = spring({
		frame: frame - 30,
		fps,
		config: {damping: 200},
	});
	const feature3 = spring({
		frame: frame - 60,
		fps,
		config: {damping: 200},
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			{/* Shield icon */}
			<div
				style={{
					position: 'absolute',
					top: '15%',
				}}
			>
				<div
					style={{
						fontSize: 150,
						filter: 'drop-shadow(0 10px 30px rgba(16, 185, 129, 0.5))',
					}}
				>
					🛡️
				</div>
			</div>
			
			{/* Security features */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 40,
					marginTop: 100,
				}}
			>
				<SecurityFeature
					icon="🚫"
					text="MEV Protection"
					scale={feature1}
				/>
				<SecurityFeature
					icon="⏰"
					text="Automatic Timelock"
					scale={feature2}
				/>
				<SecurityFeature
					icon="🔐"
					text="Self-Custody Always"
					scale={feature3}
				/>
			</div>
		</AbsoluteFill>
	);
};

// Scene 7: Benefits & Conclusion
const Scene7Benefits: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	const benefitsFade = interpolate(frame, [0, 30], [0, 1]);
	const logoScale = spring({
		frame: frame - 180,
		fps,
		config: {damping: 200},
	});
	
	return (
		<AbsoluteFill>
			{/* Benefits */}
			<div
				style={{
					position: 'absolute',
					top: '20%',
					left: 0,
					right: 0,
					textAlign: 'center',
					opacity: benefitsFade,
				}}
			>
				<h2
					style={{
						fontSize: 80,
						color: COLORS.text,
						fontWeight: 800,
						marginBottom: 60,
					}}
				>
					Why Fusion+?
				</h2>
				
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 30,
						alignItems: 'center',
					}}
				>
					<BenefitChip icon="⛽" text="Gasless" />
					<BenefitChip icon="⚡" text="Lightning Fast" />
					<BenefitChip icon="🌐" text="Decentralized" />
				</div>
			</div>
			
			{/* Logo and tagline */}
			<div
				style={{
					position: 'absolute',
					bottom: '15%',
					left: 0,
					right: 0,
					textAlign: 'center',
					transform: `scale(${logoScale})`,
				}}
			>
				<Img
					src={staticFile('start-screen_2.webp')}
					style={{
						width: 600,
						height: 'auto',
						marginBottom: 40,
					}}
				/>
				<p
					style={{
						fontSize: 55,
						color: COLORS.primary,
						fontWeight: 800,
						margin: 0,
					}}
				>
					Cross-chain swaps done right!
				</p>
			</div>
		</AbsoluteFill>
	);
};

// Helper Components
const BlockchainNode: React.FC<{name: string; color: string}> = ({name, color}) => (
	<div
		style={{
			width: 250,
			height: 250,
			borderRadius: '50%',
			background: `linear-gradient(135deg, ${color}44, ${color}88)`,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: 70,
			fontWeight: 900,
			color: COLORS.text,
			boxShadow: `0 20px 60px ${color}66`,
		}}
	>
		{name}
	</div>
);

const NetworkVisualization: React.FC = () => (
	<div style={{display: 'flex', gap: 30, alignItems: 'center'}}>
		{['BTC', 'ETH', 'SOL', 'AVAX', 'ARB'].map((chain, i) => (
			<div
				key={chain}
				style={{
					width: 120,
					height: 120,
					borderRadius: '50%',
					background: `linear-gradient(135deg, ${COLORS.primary}44, ${COLORS.secondary}44)`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: 30,
					fontWeight: 700,
					color: COLORS.text,
					transform: `scale(${1 - i * 0.1})`,
				}}
			>
				{chain}
			</div>
		))}
	</div>
);

const ResolverBadge: React.FC<{name: string}> = ({name}) => (
	<div
		style={{
			background: 'rgba(255,255,255,0.1)',
			border: '2px solid rgba(255,255,255,0.2)',
			borderRadius: 50,
			padding: '15px 30px',
			fontSize: 25,
			color: COLORS.textSecondary,
			fontWeight: 600,
		}}
	>
		{name}
	</div>
);

const EscrowBox: React.FC<{chain: string; isLocked: boolean}> = ({chain, isLocked}) => (
	<div
		style={{
			width: 300,
			height: 300,
			border: `4px solid ${COLORS.primary}`,
			borderRadius: 30,
			background: isLocked ? `${COLORS.primary}22` : 'transparent',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 30,
			transition: 'all 0.3s',
		}}
	>
		<p style={{fontSize: 40, color: COLORS.text, fontWeight: 700, margin: 0}}>
			{chain}
		</p>
		<div style={{fontSize: 80}}>
			{isLocked ? '🔒' : '🔓'}
		</div>
	</div>
);

const SecurityFeature: React.FC<{icon: string; text: string; scale: number}> = ({
	icon,
	text,
	scale,
}) => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			gap: 30,
			transform: `scale(${scale})`,
			background: 'rgba(255,255,255,0.05)',
			padding: '25px 50px',
			borderRadius: 20,
		}}
	>
		<span style={{fontSize: 60}}>{icon}</span>
		<span style={{fontSize: 45, color: COLORS.text, fontWeight: 600}}>
			{text}
		</span>
	</div>
);

const BenefitChip: React.FC<{icon: string; text: string}> = ({icon, text}) => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			gap: 20,
			background: COLORS.gradient2,
			padding: '20px 60px',
			borderRadius: 50,
			fontSize: 50,
			color: COLORS.text,
			fontWeight: 700,
			boxShadow: '0 10px 40px rgba(245, 87, 108, 0.4)',
		}}
	>
		<span>{icon}</span>
		<span>{text}</span>
	</div>
);