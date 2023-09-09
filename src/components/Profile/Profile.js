import styled from "styled-components";

export const ProfileEl = styled.div`
  display: flex;
  margin: 15px auto;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #c696db;
  padding: 20px;
  width: 250px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ProfileDescr = styled.div`display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;

export const ProfileAvatar = styled.img`width: 100px;`;

export const ProfileName = styled.p`
  margin: 0;
`;

export const ProfileTag = styled.p`

  margin: 0;
`;

export const ProfileLocation = styled.p`

margin: 0;`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

export const ProfileStatsLi = styled.li`
display: flex;
flex-direction: column;`;