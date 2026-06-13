import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FreeCuli Logo';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 144, fontWeight: 'bold', display: 'flex', letterSpacing: '-0.02em' }}>
          <span style={{ color: 'black' }}>Free</span>
          <span style={{ color: '#2563eb' }}>Culi</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
