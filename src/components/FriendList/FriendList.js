import styled from "styled-components";

export const FriendListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 15px;
`;

export const FriendItemLi = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  width: 300px;
  background-color: #c696db;
`;

export const FriendsOnline = styled.span(({ $isOnline }) => {
  return {
    backgroundColor: $isOnline ? '#55ac57' : '#ff5153',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  };
});


export const FriendsName = styled.p`
color: white;
`;