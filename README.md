# CC Video Maker - Educational Content Creator

A Remotion-based video creation tool designed to help explain complex topics in an easy-to-understand visual format.

## Overview

CC Video Maker uses React and Remotion to create educational videos that break down difficult concepts into digestible visual content. This tool is perfect for creating engaging educational materials that make learning more accessible.

## Features

- React-based video composition using Remotion
- Frame-by-frame animation control
- Support for various media types (video, audio, images, GIFs)
- Transition effects and timing controls
- Deterministic rendering for consistent output

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/cc-video-maker.git
cd cc-video-maker

# Install dependencies
npm install
```

### Development

```bash
# Start the Remotion preview
npm start

# Open http://localhost:3000 to view the preview
```

### Building Videos

```bash
# Render a video
npm run build

# Render with custom settings
npx remotion render src/index.tsx MyComp out/video.mp4
```

## Project Structure

```
cc-video-maker/
├── src/
│   ├── Root.tsx          # Main composition registry
│   ├── MyComp.tsx        # Example video component
│   └── index.tsx         # Entry point
├── public/               # Static assets
├── package.json
└── CLAUDE.md            # Project-specific instructions
```

## Creating Educational Content

This tool is specifically designed for creating educational videos that:
- Break down complex topics into simple visual explanations
- Use animations to illustrate concepts step-by-step
- Combine multiple media types for comprehensive learning
- Provide consistent, high-quality video output

## Technology Stack

- **Remotion**: React-based video creation framework
- **React**: Component-based UI development
- **TypeScript**: Type-safe development (optional)

## Contributing

Feel free to submit issues and enhancement requests!

## License

[Add your preferred license here]