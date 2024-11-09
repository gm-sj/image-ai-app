import styled from 'styled-components';

export const SelectorStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 5px 20px;
    gap: 5px;
    border: none;
    outline: 1px solid var(--skyblue-color);
    border-radius: 15px;
    cursor: pointer;
  }
`;
