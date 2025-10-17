export function GridBackground() {
  const dots = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    row: Math.floor(i / 10),
    col: i % 10,
  }));

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none flex items-center justify-center" 
      style={{ zIndex: 0 }}
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: '60px',
          padding: '40px',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {dots.map((dot) => (
          <div
            key={dot.id}
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              opacity: 0.1,
              animation: `dotPulse 3s ease-in-out infinite ${(dot.row + dot.col) * 0.1}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}
