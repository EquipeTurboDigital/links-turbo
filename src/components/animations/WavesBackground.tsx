export function WavesBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '200%',
          height: '300px',
          background: `linear-gradient(to top, rgba(255, 72, 6, 0.03), transparent)`,
          animation: 'wave 15s ease-in-out infinite',
          transformOrigin: 'bottom left',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '200%',
          height: '250px',
          background: `linear-gradient(to top, rgba(10, 20, 47, 0.02), transparent)`,
          animation: 'wave 20s ease-in-out infinite reverse',
          transformOrigin: 'bottom right',
        }}
      />
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(0) translateY(0) skewY(0deg);
          }
          25% {
            transform: translateX(-10%) translateY(-5px) skewY(1deg);
          }
          50% {
            transform: translateX(-20%) translateY(0) skewY(0deg);
          }
          75% {
            transform: translateX(-10%) translateY(-5px) skewY(-1deg);
          }
        }
      `}</style>
    </div>
  );
}
