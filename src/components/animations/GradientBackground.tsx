export function GradientBackground() {
  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{ 
          zIndex: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 72, 6, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(10, 20, 47, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 72, 6, 0.03) 0%, transparent 50%)
          `,
          animation: 'gradientShift 20s ease infinite',
        }}
      />
      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  );
}
