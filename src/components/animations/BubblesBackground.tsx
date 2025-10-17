export function BubblesBackground() {
  const bubbles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {bubbles.map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: `${(i * 5.26) % 100}%`,
            width: `${60 + (i % 5) * 20}px`,
            height: `${60 + (i % 5) * 20}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, rgba(255, 72, 6, 0.08), rgba(255, 72, 6, 0.02))`,
            animation: `floatUp ${15 + (i % 10) * 2}s infinite ease-in-out ${-i * 2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-60vh) translateX(${Math.random() > 0.5 ? '' : '-'}30px) scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) translateX(${Math.random() > 0.5 ? '' : '-'}50px) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
