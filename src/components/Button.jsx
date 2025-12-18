export default function Button({ variant = 'primary', children, ...props }) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-600/90',
    secondary: 'bg-red-400 text-white hover:bg-red-400/90',
    outline: 'border-2 border-blue-950 text-blue-950 bg-white hover:bg-blue-950 hover:text-white',
  };

  return (
    <button
      className={`px-6 py-3 rounded font-medium transition-all ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}