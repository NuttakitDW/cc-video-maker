import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {FusionReel} from './FusionReel';
import {ExcalidrawAnimation} from './ExcalidrawAnimation';
import {ExcalidrawFusionReel} from './ExcalidrawFusionReel';
import {ExcalidrawFusionReelEnhanced} from './ExcalidrawFusionReelEnhanced';
import {FusionIG} from './FusionIG';

export const Root: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				width={1920}
				height={1080}
				fps={30}
				defaultProps={{}}
			/>
			<Composition
				id="FusionReel"
				component={FusionReel}
				durationInFrames={2310} // 77 seconds (1:17) at 30fps
				width={1080} // Instagram Reel width
				height={1920} // Instagram Reel height
				fps={30}
				defaultProps={{}}
			/>
			<Composition
				id="ExcalidrawDemo"
				component={ExcalidrawAnimation}
				durationInFrames={450} // 15 seconds demo
				width={1920}
				height={1080}
				fps={30}
				defaultProps={{}}
			/>
			<Composition
				id="ExcalidrawFusionReel"
				component={ExcalidrawFusionReel}
				durationInFrames={2610} // 87 seconds (1:27) at 30fps
				width={1080} // Instagram Reel width
				height={1920} // Instagram Reel height
				fps={30}
				defaultProps={{}}
			/>
			<Composition
				id="FusionIG"
				component={FusionIG}
				durationInFrames={2610} // 87 seconds (1:27) at 30fps
				width={1080} // Instagram Reel width
				height={1920} // Instagram Reel height
				fps={30}
				defaultProps={{}}
			/>
			<Composition
				id="ExcalidrawFusionReelEnhanced"
				component={ExcalidrawFusionReelEnhanced}
				durationInFrames={2610} // 87 seconds (1:27) at 30fps
				width={1080} // Instagram Reel width
				height={1920} // Instagram Reel height
				fps={30}
				defaultProps={{}}
			/>
		</>
	);
};