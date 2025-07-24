import {AbsoluteFill, Audio, Img, interpolate, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Series} from 'remotion';

// Instagram Reel dimensions
const REEL_WIDTH = 1080;
const REEL_HEIGHT = 1920;

// Brand colors
const BRAND_DARK = '#1C1E26';
const BRAND_PURPLE = '#8B5CF6';
const BRAND_WHITE = '#FFFFFF';

export const FusionReel: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	// Background gradient animation
	const bgGradientAngle = interpolate(frame, [0, 3600], [0, 360], {
		extrapolateRight: 'wrap',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: BRAND_DARK,
				background: `linear-gradient(${bgGradientAngle}deg, ${BRAND_DARK} 0%, ${BRAND_PURPLE}33 100%)`,
			}}
		>
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
					<Scene7BenefitsAndConclusion />
				</Series.Sequence>
			</Series>
		</AbsoluteFill>
	);
};

// Scene 1: The Problem
const Scene1Problem: React.FC = () => {
	const frame = useCurrentFrame();
	
	const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
	const splitScreenScale = interpolate(frame, [60, 90], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<div
				style={{
					fontSize: 80,
					fontWeight: 'bold',
					color: BRAND_WHITE,
					textAlign: 'center',
					opacity: titleOpacity,
					padding: 40,
					textShadow: '0 0 20px rgba(0,0,0,0.5)',
				}}
			>
				The Problem with Cross-Chain Swaps
			</div>
			
			{/* Visual representation of isolated blockchains */}
			<div
				style={{
					position: 'absolute',
					top: '40%',
					display: 'flex',
					gap: 100,
					transform: `scale(${splitScreenScale})`,
				}}
			>
				<BlockchainIcon name="ETH" />
				<div style={{fontSize: 60, color: BRAND_WHITE}}>❌</div>
				<BlockchainIcon name="BNB" />
			</div>
		</AbsoluteFill>
	);
};

// Scene 2: What is 1inch Fusion+?
const Scene2WhatIsFusion: React.FC = () => {
	const frame = useCurrentFrame();
	
	const logoScale = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const textOpacity = interpolate(frame, [60, 90], [0, 1]);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<Img
				src={staticFile('fusion+.png')}
				style={{
					width: 600,
					height: 'auto',
					transform: `scale(${logoScale})`,
				}}
			/>
			<div
				style={{
					fontSize: 50,
					color: BRAND_WHITE,
					textAlign: 'center',
					marginTop: 50,
					opacity: textOpacity,
					padding: '0 40px',
				}}
			>
				Cross-chain swaps without bridges or middlemen
			</div>
		</AbsoluteFill>
	);
};

// Scene 3: Intent-Based Trading
const Scene3IntentBased: React.FC = () => {
	const frame = useCurrentFrame();
	
	const inputOpacity = interpolate(frame, [0, 30], [0, 1]);
	const routingOpacity = interpolate(frame, [60, 90], [0, 1]);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<div
				style={{
					backgroundColor: 'rgba(255,255,255,0.1)',
					padding: 40,
					borderRadius: 20,
					opacity: inputOpacity,
				}}
			>
				<div style={{fontSize: 60, color: BRAND_WHITE, marginBottom: 30}}>
					Express Your Intent:
				</div>
				<div
					style={{
						backgroundColor: BRAND_WHITE,
						color: BRAND_DARK,
						padding: 30,
						borderRadius: 10,
						fontSize: 40,
						fontFamily: 'monospace',
					}}
				>
					"Swap ETH for BNB"
				</div>
			</div>
			
			<div
				style={{
					position: 'absolute',
					bottom: 200,
					fontSize: 40,
					color: BRAND_PURPLE,
					opacity: routingOpacity,
				}}
			>
				✨ System finds the best route automatically
			</div>
		</AbsoluteFill>
	);
};

// Scene 4: Dutch Auction
const Scene4DutchAuction: React.FC = () => {
	const frame = useCurrentFrame();
	
	const imageScale = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const priceDecrease = interpolate(frame, [60, 300], [100, 85], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<Img
				src={staticFile('ducthauction.png')}
				style={{
					width: 800,
					height: 'auto',
					transform: `scale(${imageScale})`,
					marginBottom: 50,
				}}
			/>
			
			<div
				style={{
					position: 'absolute',
					bottom: 300,
					backgroundColor: BRAND_PURPLE,
					padding: '20px 40px',
					borderRadius: 50,
					fontSize: 60,
					color: BRAND_WHITE,
					fontWeight: 'bold',
				}}
			>
				Price: ${priceDecrease.toFixed(2)}
			</div>
			
			<div
				style={{
					position: 'absolute',
					bottom: 200,
					fontSize: 30,
					color: BRAND_WHITE,
				}}
			>
				Resolvers compete for best rates
			</div>
		</AbsoluteFill>
	);
};

// Scene 5: Atomic Swap Magic
const Scene5AtomicSwap: React.FC = () => {
	const frame = useCurrentFrame();
	
	const escrowScale = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const lockAnimation = interpolate(frame, [120, 150], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<div style={{fontSize: 60, color: BRAND_WHITE, marginBottom: 50}}>
				Atomic Swap Magic
			</div>
			
			{/* Two escrow boxes */}
			<div
				style={{
					display: 'flex',
					gap: 100,
					transform: `scale(${escrowScale})`,
				}}
			>
				<EscrowBox chain="Chain A" locked={lockAnimation > 0.5} />
				<div style={{fontSize: 80, color: BRAND_PURPLE}}>⇄</div>
				<EscrowBox chain="Chain B" locked={lockAnimation > 0.5} />
			</div>
			
			<div
				style={{
					position: 'absolute',
					bottom: 200,
					fontSize: 40,
					color: BRAND_WHITE,
					textAlign: 'center',
					padding: '0 40px',
				}}
			>
				Both complete or neither - Your funds are always safe
			</div>
		</AbsoluteFill>
	);
};

// Scene 6: Security Features
const Scene6Security: React.FC = () => {
	const frame = useCurrentFrame();
	
	const damonScale = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	const featuresOpacity = interpolate(frame, [60, 90], [0, 1]);
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<Img
				src={staticFile('damon.png')}
				style={{
					width: 400,
					height: 'auto',
					transform: `scale(${damonScale})`,
					marginBottom: 50,
				}}
			/>
			
			<div
				style={{
					opacity: featuresOpacity,
					textAlign: 'center',
				}}
			>
				<SecurityFeature icon="🛡️" text="MEV Protection" />
				<SecurityFeature icon="⏰" text="Timelock Safety" />
				<SecurityFeature icon="🔐" text="Self-Custody Always" />
			</div>
		</AbsoluteFill>
	);
};

// Scene 7: Benefits
const Scene7Benefits: React.FC = () => {
	const frame = useCurrentFrame();
	
	const benefitScale = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<div style={{fontSize: 70, color: BRAND_WHITE, marginBottom: 80}}>
				Why Choose Fusion+?
			</div>
			
			<div
				style={{
					transform: `scale(${benefitScale})`,
				}}
			>
				<Benefit icon="⛽" text="Gasless Swaps" />
				<Benefit icon="⚡" text="Sub-Second Speed" />
				<Benefit icon="💰" text="Professional Liquidity" />
				<Benefit icon="🌐" text="True Decentralization" />
			</div>
		</AbsoluteFill>
	);
};

// Scene 7 & Conclusion Combined (for 1:27 timing)
const Scene7BenefitsAndConclusion: React.FC = () => {
	const frame = useCurrentFrame();
	
	// Benefits show for first 240 frames (8 seconds)
	const benefitsOpacity = interpolate(frame, [0, 30, 210, 240], [0, 1, 1, 0]);
	
	// Conclusion fades in for last 120 frames (4 seconds)
	const conclusionOpacity = interpolate(frame, [240, 270], [0, 1]);
	
	const benefitScale = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	
	return (
		<>
			{/* Benefits Section */}
			<AbsoluteFill 
				style={{
					justifyContent: 'center', 
					alignItems: 'center',
					opacity: benefitsOpacity,
				}}
			>
				<div style={{fontSize: 60, color: BRAND_WHITE, marginBottom: 60}}>
					Why Choose Fusion+?
				</div>
				
				<div
					style={{
						transform: `scale(${benefitScale})`,
					}}
				>
					<Benefit icon="⛽" text="Gasless Swaps" />
					<Benefit icon="⚡" text="Sub-Second Speed" />
					<Benefit icon="💰" text="Professional Liquidity" />
				</div>
			</AbsoluteFill>
			
			{/* Conclusion Section */}
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					opacity: conclusionOpacity,
				}}
			>
				<Img
					src={staticFile('fusion+.png')}
					style={{
						width: 600,
						height: 'auto',
						marginBottom: 50,
					}}
				/>
				<div
					style={{
						fontSize: 50,
						color: BRAND_WHITE,
						fontWeight: 'bold',
					}}
				>
					Cross-chain swaps done right
				</div>
			</AbsoluteFill>
		</>
	);
};

// Scene 8: Conclusion (kept for backwards compatibility but not used in 1:27 version)
const Scene8Conclusion: React.FC = () => {
	const frame = useCurrentFrame();
	
	const fadeIn = interpolate(frame, [0, 30], [0, 1]);
	
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				opacity: fadeIn,
			}}
		>
			<Img
				src={staticFile('fusion+.png')}
				style={{
					width: 600,
					height: 'auto',
					marginBottom: 50,
				}}
			/>
			<div
				style={{
					fontSize: 60,
					color: BRAND_WHITE,
					fontWeight: 'bold',
				}}
			>
				Cross-chain swaps done right
			</div>
		</AbsoluteFill>
	);
};

// Helper Components
const BlockchainIcon: React.FC<{name: string}> = ({name}) => (
	<div
		style={{
			width: 200,
			height: 200,
			borderRadius: '50%',
			backgroundColor: BRAND_PURPLE,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: 60,
			color: BRAND_WHITE,
			fontWeight: 'bold',
		}}
	>
		{name}
	</div>
);

const EscrowBox: React.FC<{chain: string; locked: boolean}> = ({chain, locked}) => (
	<div
		style={{
			width: 300,
			height: 300,
			border: `4px solid ${BRAND_PURPLE}`,
			borderRadius: 20,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: locked ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
		}}
	>
		<div style={{fontSize: 40, color: BRAND_WHITE, marginBottom: 20}}>
			{chain}
		</div>
		<div style={{fontSize: 80}}>
			{locked ? '🔒' : '🔓'}
		</div>
	</div>
);

const SecurityFeature: React.FC<{icon: string; text: string}> = ({icon, text}) => (
	<div
		style={{
			fontSize: 50,
			color: BRAND_WHITE,
			margin: '20px 0',
		}}
	>
		{icon} {text}
	</div>
);

const Benefit: React.FC<{icon: string; text: string}> = ({icon, text}) => (
	<div
		style={{
			fontSize: 50,
			color: BRAND_WHITE,
			margin: '30px 0',
			backgroundColor: 'rgba(139, 92, 246, 0.3)',
			padding: '20px 40px',
			borderRadius: 50,
		}}
	>
		{icon} {text}
	</div>
);