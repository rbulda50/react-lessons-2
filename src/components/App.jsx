import Reader from './Reader/Reader';
import publications from '../publications.json';

export const App = () => {
  return (
    <div>
      <Reader items={publications} />
    </div>
  );
};
