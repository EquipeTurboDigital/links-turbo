export function AuroraBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <div
        className="aurora-layer aurora-1"
        style={{
          position: 'absolute',
          width: '200%',
          height: '100%',
          top: 0,
          left: '-50%',
          background: `linear-gradient(90deg, 
            transparent 0%, 
            var(--primary) 25%, 
            var(--accent) 50%, 
            var(--primary) 75%, 
            transparent 100%)`,
          opacity: 0.08,
          filter: 'blur(60px)',
          animation: 'aurora-drift-1 30s ease-in-out infinite',
          transform: 'rotate(-15deg) translateY(-20%)'
        }}
      />
      <div
        className="aurora-layer aurora-2"
        style={{
          position: 'absolute',
          width: '200%',
          height: '100%',
          top: 0,
          left: '-50%',
          background: `linear-gradient(90deg, 
            transparent 0%, 
            var(--accent) 25%, 
            var(--primary) 50%, 
            var(--accent) 75%, 
            transparent 100%)`,
          opacity: 0.06,
          filter: 'blur(80px)',
          animation: 'aurora-drift-2 25s ease-in-out infinite reverse',
          transform: 'rotate(10deg) translateY(30%)'
        }}
      />
      <div
        className="aurora-layer aurora-3"
        style={{
          position: 'absolute',
          width: '200%',
          height: '100%',
          top: 0,
          left: '-50%',
          background: `linear-gradient(90deg, 
            transparent 0%, 
            var(--primary) 30%, 
            var(--accent) 60%, 
            transparent 100%)`,
          opacity: 0.05,
          filter: 'blur(100px)',
          animation: 'aurora-drift-3 35s ease-in-out infinite',
          transform: 'rotate(-5deg) translateY(50%)'
        }}
      />
      <style>{`
        @keyframes aurora-drift-1 {
          0%, 100% { transform: rotate(-15deg) translateY(-20%) translateX(0); }
          50% { transform: rotate(-15deg) translateY(-20%) translateX(30%); }
        }
        @keyframes aurora-drift-2 {
          0%, 100% { transform: rotate(10deg) translateY(30%) translateX(0); }
          50% { transform: rotate(10deg) translateY(30%) translateX(-25%); }
        }
        @keyframes aurora-drift-3 {
          0%, 100% { transform: rotate(-5deg) translateY(50%) translateX(0); }
          50% { transform: rotate(-5deg) translateY(50%) translateX(20%); }
        }
      `}</style>
    </div>
  );
}
