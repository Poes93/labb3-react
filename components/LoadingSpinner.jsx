export default function LoadingSpinner({ size = 36, color = "#09f" }) {
  return (
    <div className="spinner" aria-label="Loading">
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          border-left-color: ${color};
          animation: spin 1s ease infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
