# Excalidraw + Remotion Animation Workflow

## Overview
Excalidraw's hand-drawn style is perfect for educational content. Here's how to integrate Excalidraw drawings into Remotion animations.

## Method 1: Static Frame Animation

### Steps:
1. **Create keyframes in Excalidraw**
   - Draw your scene in different states
   - Export each state as SVG or PNG
   - Name files sequentially (frame1.svg, frame2.svg, etc.)

2. **Import into Remotion**
   ```tsx
   import {Img, interpolate} from 'remotion';
   
   // Crossfade between frames
   const opacity1 = interpolate(frame, [0, 30], [1, 0]);
   const opacity2 = interpolate(frame, [30, 60], [0, 1]);
   ```

### Best for:
- Simple state transitions
- Diagram explanations
- Before/after comparisons

## Method 2: SVG Element Animation

### Steps:
1. **Export as SVG from Excalidraw**
2. **Extract SVG paths and elements**
3. **Animate properties individually**

```tsx
// Animate SVG elements
<svg>
  <path
    d={excalidrawPath}
    strokeDasharray="1000"
    strokeDashoffset={interpolate(frame, [0, 60], [1000, 0])}
  />
</svg>
```

### Best for:
- Draw-on effects
- Path animations
- Element transformations

## Method 3: Excalidraw JSON Animation

### Steps:
1. **Export scene as JSON**
   - File → Export as JSON
   - Contains all element data

2. **Parse in Remotion**
   ```tsx
   const sceneData = require('./excalidraw-scene.json');
   
   // Animate each element
   sceneData.elements.forEach((element, i) => {
     const delay = i * 10;
     const scale = spring({
       frame: frame - delay,
       fps,
       from: 0,
       to: 1
     });
   });
   ```

### Best for:
- Complex scenes
- Programmatic control
- Dynamic animations

## Method 4: Excalidraw React Component

### Installation:
```bash
npm install @excalidraw/excalidraw
```

### Usage:
```tsx
import {Excalidraw} from '@excalidraw/excalidraw';

// Control scene programmatically
<Excalidraw
  initialData={{
    elements: animatedElements,
    appState: {viewBackgroundColor: '#ffffff'}
  }}
  renderStaticScene={true}
/>
```

### Best for:
- Live editing
- Dynamic content
- Interactive tutorials

## Tips for Excalidraw Animations

### 1. **Consistent Style**
- Use same stroke width across frames
- Maintain color palette
- Keep hand-drawn aesthetic

### 2. **Layer Management**
- Name layers clearly
- Group related elements
- Export layers separately for complex animations

### 3. **Performance**
- SVG is lighter than PNG
- Simplify paths when possible
- Pre-render complex scenes

### 4. **Animation Principles**
- Use easing for natural motion
- Stagger element appearances
- Add subtle movements (wiggle, bounce)

## Example Workflow: Explaining a Concept

1. **Storyboard in Excalidraw**
   - Sketch rough frames
   - Plan transitions
   - Note timing

2. **Create Clean Frames**
   - Draw final versions
   - Consistent positioning
   - Clear labels

3. **Export Assets**
   - SVG for vector graphics
   - JSON for complex animations
   - PNG for raster fallback

4. **Animate in Remotion**
   - Import assets
   - Add transitions
   - Sync with narration

## Common Patterns

### Draw-On Effect
```tsx
const drawProgress = interpolate(frame, [0, 60], [100, 0]);
<path
  strokeDasharray="100"
  strokeDashoffset={drawProgress}
/>
```

### Fade In Elements
```tsx
elements.map((el, i) => (
  <g opacity={interpolate(frame, [i * 10, i * 10 + 20], [0, 1])}>
    {renderElement(el)}
  </g>
))
```

### Morphing Shapes
```tsx
const morph = interpolate(frame, [0, 60], [0, 1]);
<path d={interpolatePath(path1, path2, morph)} />
```

## Resources

- **Excalidraw Libraries**: https://libraries.excalidraw.com/
- **SVG Path Editor**: For fine-tuning paths
- **Lottie**: Convert complex animations
- **Rough.js**: Programmatic hand-drawn graphics