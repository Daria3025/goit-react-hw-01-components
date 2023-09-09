import {
  StatisticsSection,
  StatisticsTitle,
  StatList,
  StatItem,
} from './Statistics';



export const Statistics = ({title, stats}) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};
