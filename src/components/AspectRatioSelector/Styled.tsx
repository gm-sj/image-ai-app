import styled from 'styled-components';

export const SelectorStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  align-items: center;
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
    outline: 1px solid var(--blue-color);
    cursor: pointer;
    &:hover {
      background-color: var(--gray-color);
    }
    &.active {
      background-color: var(--blue-color);
      color: var(--white-color);
      outline: none;
    }
  }
`;
