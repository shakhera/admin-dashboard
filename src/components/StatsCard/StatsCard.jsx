const StatsCard = ({
  title,
  value,
  icon,
  bgColor,
  onClick,
  buttonLabel,
  buttonColor,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center space-x-2">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-3xl font-extrabold">{value}</p>
        {onClick && (
          <button
            onClick={onClick}
            className={`text-sm ${buttonColor} hover:underline`}
          >
            {buttonLabel}
          </button>
        )}
      </div>
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full ${bgColor} border`}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatsCard;
