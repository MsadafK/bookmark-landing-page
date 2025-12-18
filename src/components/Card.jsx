export default function Card({ icon, title, description, buttonText }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-sm">
      <div className="mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-preset-3 text-blue-950 mb-4">{title}</h3>
      <p className="text-preset-5 text-grey-600 mb-6">{description}</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-600/90 w-full">
        {buttonText}
      </button>
    </div>
  );
}