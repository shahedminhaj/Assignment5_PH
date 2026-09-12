import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import TechCard from './components/card';
import Stack from './components/Stack';
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
      })
      .catch(() => {
        toast.error('Failed to load data');
        setLoad(false);
      });
  }, []);

  const addItem = (item) => {
    const ex = stack.find(s => s.id === item.id);
    if (ex) {
      toast.warning(`${item.name} is already in your stack!`);
      return;
    }
    setStack([...stack, item]);
    toast.success(`${item.name} added to stack!`);
  };

  const rmItem = (id) => {
    const it = stack.find(s => s.id === id);
    setStack(stack.filter(s => s.id !== id));
    toast.info(`${it.name} removed from stack`);
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
          Explore the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 mb-8">Pick one technology per category to build your ideal stack.</p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {load ? (
              <div className="col-span-full text-center py-16">
                <div className="inline-block w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
                <p className="text-gray-500 mt-4">Loading technologies...</p>
              </div>
            ) : (
              data.map((item, i) => (
                <TechCard key={i} item={item} stack={stack} addItem={addItem} />
              ))
            )}
          </div>

          <div className="w-full lg:w-80">
            <Stack stack={stack} rmItem={rmItem} rmAll={rmAll} />
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;