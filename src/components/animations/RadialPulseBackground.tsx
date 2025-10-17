export function RadialPulseBackground() {
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
      {/* Centro superior */}
      <div
        className="radial-pulse pulse-1"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          opacity: 0.15,
          filter: 'blur(40px)',
          animation: 'radial-pulse-1 4s ease-in-out infinite'
        }}
      />
      
      {/* Canto inferior esquerdo */}
      <div
        className="radial-pulse pulse-2"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          bottom: '-100px',
          left: '-100px',
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          opacity: 0.12,
          filter: 'blur(50px)',
          animation: 'radial-pulse-2 5s ease-in-out infinite 1s'
        }}
      />
      
      {/* Canto inferior direito */}
      <div
        className="radial-pulse pulse-3"
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          bottom: '-80px',
          right: '-80px',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          opacity: 0.1,
          filter: 'blur(45px)',
          animation: 'radial-pulse-3 6s ease-in-out infinite 2s'
        }}
      />
      
      {/* Centro da página */}
      <div
        className="radial-pulse pulse-4"
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          opacity: 0.08,
          filter: 'blur(60px)',
          animation: 'radial-pulse-4 7s ease-in-out infinite 0.5s'
        }}
      />

      <style>{`
        @keyframes radial-pulse-1 {
          0%, 100% { 
            transform: translateX(-50%) scale(1);
            opacity: 0.15;
          }
          50% { 
            transform: translateX(-50%) scale(1.2);
            opacity: 0.08;
          }
        }
        @keyframes radial-pulse-2 {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.12;
          }
          50% { 
            transform: scale(1.15);
            opacity: 0.06;
          }
        }
        @keyframes radial-pulse-3 {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: scale(1.25);
            opacity: 0.05;
          }
        }
        @keyframes radial-pulse-4 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.08;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.04;
          }
        }
      `}</style>
    </div>
  );
}
