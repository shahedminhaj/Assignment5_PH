import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import TechCard from './components/card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState([]);
  const [stack, setStack] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoad(false);
      });
  }, []);

  const addItem = (item) => {
    const exists = stack.find(s => s.id === item.id);
    if (exists) {
      toast.warning('Already in stack!');
      return;
    }
    setStack([...stack, item]);
    toast.success(`${item.name} added!`);
  };

  const rmItem = (id) => {
    const filtered = stack.filter(s => s.id !== id);
    setStack(filtered);
    toast.info('Removed from stack');
  };

  const rmAll = () => {
    setStack([]);
    toast.info('Stack cleared');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2">
          Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">Technologies</span>
        </h2>
        <p className="text-gray-500 mb-8">Pick one technology per category to build your ideal stack.</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {load ? (
              <div className="col-span-full text-center py-10 text-gray-500">Loading...</div>
            ) : (
              data.map((item, i) => (
                <TechCard key={i} item={item} stack={stack} addItem={addItem} />
              ))
            )}
          </div>

          <div className="w-full lg:w-80">
            <div className="bg-white rounded-xl border p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-1">Your Stack</h3>
              <p className="text-sm text-gray-400 mb-4">
                {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
              </p>
              
              {stack.length === 0 ? (
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
                      <button onClick={() => rmItem(item.id)} className="text-gray-400 hover:text-red-500 font-bold">✕</button>
                    </div>
                  ))}
                </div>
              )}

              {stack.length > 0 && (
                <button onClick={rmAll} className="w-full py-2 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 text-sm font-medium">
                  Remove All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;