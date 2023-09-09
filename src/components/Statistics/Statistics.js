import styled from "styled-components";

export const StatisticsSection = styled.section`
  background-color: #c696db;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 350px;
padding: 10px;
margin: 15px auto;
`;

export const StatisticsTitle = styled.h2`
color: white;
text-align: center;
`;

export const StatList = styled.ul`
display: flex;
justify-content: space-around;
padding: 0;
`;

export const StatItem = styled.li`
color: white;
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
`;

export const StatLabel = styled.span`

`;

export const StatPercentage = styled.span`

`;