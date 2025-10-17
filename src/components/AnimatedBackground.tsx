export function AnimatedBackground() {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 80 + 20, // 20-100px
    duration: Math.random() * 15 + 10, // 10-25s
    delay: Math.random() * -20, // Começa em momentos diferentes
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: bubble.left,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderRadius: '50%',
            backgroundColor: 'var(--primary)',
            opacity: 0.03,
            animation: `float ${bubble.duration}s infinite ease-in-out`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.03;
          }
          50% {
            transform: translateY(-50vh) translateX(20px) scale(1.1);
            opacity: 0.03;
          }
          90% {
            opacity: 0.03;
          }
          100% {
            transform: translateY(-100vh) translateX(-20px) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
