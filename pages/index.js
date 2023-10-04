import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleFormStart = () => {
    router.push("/form/step1");
  };

  return (
    <div className="container">
      <h1>Welcome to My Next.js App</h1>
      <button className="button" onClick={handleFormStart}>
        Start Filling the Form
      </button>
      {/* Other content */}
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }

        .button {
          background-color: #007bff;
          color: white;
          font-size: 16px;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Home;
