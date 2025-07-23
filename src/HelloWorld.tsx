import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const HelloWorld: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	// Fade in animation
	const opacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Scale animation with spring
	const scale = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	// Text slide in from left
	const translateX = interpolate(frame, [0, 30], [-100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// World text slide in from right with delay
	const worldTranslateX = interpolate(frame, [20, 50], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Background color change
	const bgProgress = interpolate(frame, [0, durationInFrames], [0, 1]);
	const bgColor = `hsl(${bgProgress * 360}, 70%, 50%)`;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: bgColor,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					opacity,
					transform: `scale(${scale})`,
					fontSize: 150,
					fontWeight: 'bold',
					fontFamily: 'Arial, sans-serif',
					color: 'white',
					textShadow: '0 0 30px rgba(0,0,0,0.5)',
				}}
			>
				<span
					style={{
						display: 'inline-block',
						transform: `translateX(${translateX}px)`,
					}}
				>
					Hello
				</span>{' '}
				<span
					style={{
						display: 'inline-block',
						transform: `translateX(${worldTranslateX}px)`,
					}}
				>
					World!
				</span>
			</div>
		</AbsoluteFill>
	);
};