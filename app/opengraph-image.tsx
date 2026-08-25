import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Kumar Magnacity Hadapsar Township Pune - 2 & 3 BHK Flats, Plots';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0D0B08',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(201, 162, 39, 0.25) 0%, transparent 60%)',
          border: '12px solid #1E1A14',
        }}
      >
        {/* Top Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#C9A227',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0D0B08',
                fontWeight: 'bold',
                fontSize: '22px',
              }}
            >
              K
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 'bold', letterSpacing: '2px' }}>
                KUMAR PROPERTIES
              </span>
              <span style={{ color: '#C9A227', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>
                Legacy Since 1966
              </span>
            </div>
          </div>

          {/* Rating Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1E1A14',
              padding: '10px 20px',
              borderRadius: '999px',
              border: '1px solid rgba(201, 162, 39, 0.4)',
            }}
          >
            <span style={{ color: '#F59E0B', fontSize: '20px' }}>★</span>
            <span style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 'bold' }}>4.9</span>
            <span style={{ color: '#9CA3AF', fontSize: '13px' }}>(386+ Google Reviews)</span>
          </div>
        </div>

        {/* Main Center Title Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '950px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#C9A227',
              fontSize: '14px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            <span>150-ACRE MEGA TOWNSHIP • HADAPSAR ANNEXE, MANJARI</span>
          </div>

          <h1
            style={{
              fontSize: '56px',
              fontWeight: '900',
              color: '#FFFFFF',
              lineHeight: '1.15',
              margin: '0',
              letterSpacing: '-1px',
            }}
          >
            Kumar Magnacity Hadapsar
          </h1>

          <p style={{ fontSize: '24px', color: '#D1D5DB', margin: '0', lineHeight: '1.4' }}>
            2 & 3 BHK Luxury Apartments from <span style={{ color: '#FDE68A', fontWeight: 'bold' }}>₹72.99L*</span> • NA Plots from <span style={{ color: '#FDE68A', fontWeight: 'bold' }}>₹1.49Cr*</span>
          </p>
        </div>

        {/* Bottom Highlights Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ display: 'flex', gap: '28px', color: '#9CA3AF', fontSize: '15px' }}>
            <span>🏫 Podar Int. School On Campus</span>
            <span>🏊 ~1 Lakh Sq.Ft Clubhouse</span>
            <span>📍 10 Mins from Magarpatta</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: '#C9A227', fontSize: '16px', fontWeight: 'bold' }}>
              📞 +91 77440 09295
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
