import WorksCard from './WorkCards';
import { Works } from '@/src/lib/data';

const MainCards = () => {
  return (
    <div>
      {Works.map((work) => (
        <div key={work.number}>
          <WorksCard {...work} />
        </div>
      ))}
    </div>
  );
};
export default MainCards;
