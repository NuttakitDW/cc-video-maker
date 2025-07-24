import {AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig, staticFile, Sequence} from 'remotion';

// Example component showing different ways to animate Excalidraw content

export const ExcalidrawAnimation: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<AbsoluteFill style={{backgroundColor: '#ffffff'}}>
			{/* Method 1: Animate between exported SVG/PNG states */}
			<Method1SVGAnimation />
			
			{/* Method 2: Programmatic element animation */}
			<Sequence from={150}>
				<Method2ProgrammaticAnimation />
			</Sequence>
			
			{/* Method 3: Draw-on effect */}
			<Sequence from={300}>
				<Method3DrawOnEffect />
			</Sequence>
		</AbsoluteFill>
	);
};

// Method 1: Crossfade between different Excalidraw exports
const Method1SVGAnimation: React.FC = () => {
	const frame = useCurrentFrame();
	
	// Fade between two states
	const state1Opacity = interpolate(frame, [0, 30, 60, 90], [1, 1, 0, 0]);
	const state2Opacity = interpolate(frame, [30, 60], [0, 1]);
	
	return (
		<>
			{/* First state of drawing */}
			<AbsoluteFill style={{opacity: state1Opacity}}>
				<div style={{padding: 50}}>
					<h2>Method 1: State Transitions</h2>
					{/* You would use your exported Excalidraw images here */}
					{/* <Img src={staticFile('excalidraw-state1.svg')} /> */}
					<ExcalidrawPlaceholder text="State 1" />
				</div>
			</AbsoluteFill>
			
			{/* Second state of drawing */}
			<AbsoluteFill style={{opacity: state2Opacity}}>
				<div style={{padding: 50}}>
					<h2>Method 1: State Transitions</h2>
					{/* <Img src={staticFile('excalidraw-state2.svg')} /> */}
					<ExcalidrawPlaceholder text="State 2" />
				</div>
			</AbsoluteFill>
		</>
	);
};

// Method 2: Animate individual Excalidraw elements
const Method2ProgrammaticAnimation: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	// Spring animations for smooth movement
	const rectX = spring({
		frame,
		fps,
		from: -200,
		to: 200,
		config: {
			damping: 200,
		},
	});
	
	const circleScale = spring({
		frame: frame - 30,
		fps,
		from: 0,
		to: 1,
		config: {
			damping: 200,
		},
	});
	
	const arrowOpacity = interpolate(frame, [60, 90], [0, 1]);
	
	return (
		<AbsoluteFill>
			<div style={{padding: 50}}>
				<h2>Method 2: Element Animation</h2>
				
				{/* Simulated Excalidraw elements */}
				<svg width="800" height="400" style={{border: '1px solid #ccc'}}>
					{/* Animated rectangle */}
					<rect
						x={300 + rectX}
						y="150"
						width="100"
						height="100"
						fill="#FFE5B4"
						stroke="#000"
						strokeWidth="2"
						rx="5"
					/>
					
					{/* Animated circle */}
					<circle
						cx="400"
						cy="200"
						r={50 * circleScale}
						fill="#B4E5FF"
						stroke="#000"
						strokeWidth="2"
					/>
					
					{/* Animated arrow */}
					<g opacity={arrowOpacity}>
						<line
							x1="200"
							y1="200"
							x2="350"
							y2="200"
							stroke="#000"
							strokeWidth="2"
							markerEnd="url(#arrowhead)"
						/>
						<defs>
							<marker
								id="arrowhead"
								markerWidth="10"
								markerHeight="7"
								refX="9"
								refY="3.5"
								orient="auto"
							>
								<polygon
									points="0 0, 10 3.5, 0 7"
									fill="#000"
								/>
							</marker>
						</defs>
					</g>
					
					{/* Text */}
					<text
						x="400"
						y="300"
						textAnchor="middle"
						fontSize="20"
						fontFamily="Virgil, Segoe UI Emoji"
						opacity={arrowOpacity}
					>
						Excalidraw Animation!
					</text>
				</svg>
			</div>
		</AbsoluteFill>
	);
};

// Method 3: Draw-on effect (path animation)
const Method3DrawOnEffect: React.FC = () => {
	const frame = useCurrentFrame();
	
	// Animate stroke dash offset for draw-on effect
	const pathLength = 1000;
	const drawProgress = interpolate(frame, [0, 60], [pathLength, 0]);
	
	return (
		<AbsoluteFill>
			<div style={{padding: 50}}>
				<h2>Method 3: Draw-On Effect</h2>
				
				<svg width="800" height="400" style={{border: '1px solid #ccc'}}>
					{/* Animated path drawing */}
					<path
						d="M 100 200 Q 200 100 300 200 T 500 200 L 500 300 L 100 300 Z"
						fill="none"
						stroke="#000"
						strokeWidth="3"
						strokeDasharray={pathLength}
						strokeDashoffset={drawProgress}
					/>
					
					{/* Hand-drawn style circle */}
					<path
						d="M 650 200 C 650 150, 700 150, 700 200 C 700 250, 650 250, 650 200"
						fill="none"
						stroke="#FF6B6B"
						strokeWidth="3"
						strokeDasharray={pathLength}
						strokeDashoffset={drawProgress}
					/>
				</svg>
			</div>
		</AbsoluteFill>
	);
};

// Placeholder component for demonstration
const ExcalidrawPlaceholder: React.FC<{text: string}> = ({text}) => (
	<div
		style={{
			width: 600,
			height: 300,
			border: '2px dashed #ccc',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: 24,
			color: '#666',
			fontFamily: 'Virgil, Segoe UI Emoji',
		}}
	>
		{text}
	</div>
);

// Example: Parse and animate Excalidraw JSON data
export const ExcalidrawJSONAnimation: React.FC<{sceneData?: any}> = ({sceneData}) => {
	const frame = useCurrentFrame();
	
	// If you have Excalidraw JSON data, you can parse and animate it
	// Example structure:
	/*
	{
		elements: [
			{
				type: "rectangle",
				x: 100,
				y: 100,
				width: 200,
				height: 100,
				strokeColor: "#000000",
				backgroundColor: "#ffffff"
			}
		]
	}
	*/
	
	return (
		<AbsoluteFill>
			<div style={{padding: 20}}>
				<h3>Excalidraw JSON Animation</h3>
				<p>Parse Excalidraw JSON and animate elements programmatically</p>
			</div>
		</AbsoluteFill>
	);
};