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
    border-radius: 15px;
    background-color: var(--white-color);
    cursor: pointer;
    &:hover {
      background-color: var(--gray-color);
    }
    &.active {
      background-color: var(--skyblue-color);
      color: var(--white-color);
      outline: none;
    }
  }
`;
