export function FloatingShapesBackground() {
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 100 + i * 30,
    x: (i * 15) % 90,
    y: (i * 20) % 80,
    duration: 20 + i * 3,
    delay: -i * 4,
    isCircle: i % 2 === 0,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            position: 'absolute',
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            borderRadius: shape.isCircle ? '50%' : '20%',
            background: `radial-gradient(circle at 30% 30%, rgba(255, 72, 6, 0.04), rgba(255, 72, 6, 0.01))`,
            border: '1px solid rgba(255, 72, 6, 0.05)',
            animation: `floatShape ${shape.duration}s ease-in-out infinite ${shape.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatShape {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  );
}
