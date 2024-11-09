import styled from 'styled-components';

export const ImageViewStyle = styled.div`
  width: 100%;
  .tab-menu {
    width: 100%;
    max-width: 1200px;

    .tabs {
      display: flex;
      justify-content: center;
      border-bottom: 2px solid var(--gray-color);
      margin-bottom: 20px;
      gap: 100px;

      .tab-link {
        padding: 10px 20px;
        border: none;
        background: none;
        color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
        font-size: 16px;
        transition: color 0.7s ease;

        &.active {
          border-bottom: 2px solid var(--blue-color);
          font-weight: bold;
          color: var(--blue-color);
        }
      }
    }

    .tab-content {
      padding: 20px;

      .grid-container {
        display: grid;
        grid-template-areas:
          'item1 item2 item3 item4'
          'item1 item5 item6 item7'
          'item8 item9 item6 item10';
        gap: 16px;
        max-width: 100%;
      }

      /* 그리드 아이템 스타일 */
      .grid-item {
        background-color: var(--gray-color);
        border-radius: 12px;
        height: 200px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
        cursor: pointer;
        position: relative;

        &:hover {
          transform: scale(1.05);
        }
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          transition: transform 0.5s ease;
          border-radius: 14px;
          z-index: -1;
          transform: translateY(200%);
          transform-origin: bottom;
        }
        &:hover::before {
          transform: translateY(0);
        }
      }
      .item1 {
        grid-area: item1;
        height: 100%;
      }

      .item2 {
        grid-area: item2;
      }

      .item3 {
        grid-area: item3;
        height: 100%;
      }

      .item4 {
        grid-area: item4;
      }

      .item5 {
        grid-area: item5;
      }

      .item6 {
        grid-area: item6;
        height: 100%;
      }

      .item7 {
        grid-area: item7;
      }

      .item8 {
        grid-area: item8;
      }

      .item9 {
        grid-area: item9;
      }

      .item9 {
        grid-area: item10;
      }
    }
  }
`;
