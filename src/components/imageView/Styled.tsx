import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ImageViewStyle = styled.div<{ deviceType: string }>`
  width: 100%;
  .tab-menu {
    width: 100%;
    max-width: 1200px;

    .tabs {
      display: flex;
      justify-content: center;
      border-bottom: 2px solid var(--gray-color);
      margin-bottom: 20px;
      gap: ${(props) => (props.deviceType === 'mobile' ? '40px' : '100px')};

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
        grid-template-areas: ${(props) =>
          props.deviceType === 'mobile'
            ? `
          'item1'
          'item2'
          'item3'
        `
            : props.deviceType === 'tablet'
              ? `
          'item1 item2'
          'item3 item4'
          'item5 item6'
        `
              : `
          'item1 item2 item3 item4'
          'item1 item5 item6 item7'
          'item8 item9 item6 item10'
        `};
        gap: 16px;
        max-width: 100%;
      }

      /* 그리드 아이템 스타일 */
      .grid-item {
        background-color: var(--gray-color);
        border-radius: 12px;
        height: ${(props) => (props.deviceType === 'tablet' || 'mobile' ? '100%' : '200px')};
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
        cursor: pointer;
        position: relative;
        animation: ${fadeIn} 2s ease-in-out;

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
          border-radius: 15px;
          z-index: 0;
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
        height: ${(props) => (props.deviceType === 'tablet' || 'mobile' ? '100%' : '200px')};
      }

      .item3 {
        grid-area: item3;
        height: 100%;
      }

      .item4 {
        grid-area: item4;
        height: ${(props) => (props.deviceType === 'tablet' || 'mobile' ? '100%' : '200px')};
      }

      .item5 {
        grid-area: item5;
        height: ${(props) => (props.deviceType === 'tablet' || 'mobile' ? '100%' : '200px')};
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
