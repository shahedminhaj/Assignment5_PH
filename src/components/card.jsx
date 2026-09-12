function TechCard({ item, stack, addItem }) {
  const added = stack.some(s => s.id === item.id);

  return (
    <div className="bg-white rounded-xl border p-5 flex flex-col hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <img src={item.icon} alt={item.name} className="w-10 h-10" />
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
          {item.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold mb-1">{item.name}</h3>
      <p className="text-sm text-gray-500 mb-4 flex-1">{item.description}</p>

      <div className="flex flex-wrap gap-2 mb-4 text-xs">
        <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">{item.category}</span>
        <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">{item.difficulty}</span>
        <span className="px-2 py-1 bg-yellow-50 rounded text-yellow-700">★ {item.rating}</span>
      </div>

      <button
        onClick={() => addItem(item)}
        disabled={added}
        className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
          added
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {added ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}

export default TechCard;