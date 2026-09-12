import { toast } from 'react-toastify';

function Stack({ stack, rmItem, rmAll }) {
  const cnt = stack.length;

  return (
    <div className="bg-white rounded-xl border p-6 sticky top-24">
      <h3 className="text-xl font-bold mb-1">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">
        {cnt === 0 ? 'No technologies selected yet.' : `${cnt} Technology Selected`}
      </p>

      {cnt === 0 ? (
        <div className="border-2 border-dashed rounded-lg p-8 text-center text-gray-400 text-sm">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3 mb-4">
          {stack.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt="" className="w-6 h-6" />
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => rmItem(item.id)}
                className="text-gray-400 hover:text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {cnt > 0 && (
        <button
          onClick={rmAll}
          className="w-full py-2 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 text-sm font-medium"
        >
          Remove All
        </button>
      )}
    </div>
  );
}

export default Stack;