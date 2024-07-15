import { ClipLoader } from 'react-spinners';

const Spinner: React.FC = () => (
  <div className='spinner'>
    <ClipLoader color="#2688eb" loading size={50} />
  </div>
);

export default Spinner;