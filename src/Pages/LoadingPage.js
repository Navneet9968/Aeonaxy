import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/learning-path');
    }, 3000);

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, [navigate]);

  return (
    <>
      <div className="flex items-center mx-auto justify-center h-screen">
        <p className="text-2xl text-black font-bold">
          Finding learning path recommendations for you based on your responses
        </p>
      </div>
    </>
  );
}

export default LoadingPage;