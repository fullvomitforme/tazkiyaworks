import WorksCard, { WorksCardProps } from './WorkCards';
import { Works } from '@/src/lib/data';

const MainCards = () => {
  return (
    <div>
      {Works.map((work) => (
        <div
          key={work.number}
          className='transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20'
        >
          <WorksCard {...work} />
        </div>
      ))}
    </div>
  );
};
export default MainCards;
