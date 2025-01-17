import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  /* 헤더 css */
  .header-wrapper {
    position: fixed;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    max-height: 80px;
    width: 100%;
    background-color: var(--white-color);
    box-shadow: -1px -1px 8px 4px rgba(0, 0, 0, 0.4);
    opacity: 1;
    transition: opacity 0.7s ease;
    &.scrolled {
      opacity: 0;
    }

    .menu-item-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title-wrapper {
        color: rgba(0, 0, 0, 0.8);

        img {
          width: 138px;
          height: 26px;
        }
      }

      .web-nav-list-wrapper {
        display: block;

        ul {
          display: flex;
          gap: 10px;
        }
      }

      .mobile-nav-list-wrapper {
        display: none;
        position: relative;

        .mobile-menu-btn {
          width: 22px;
          height: 14px;
          position: relative;
          cursor: pointer;
          z-index: 2;
          display: flex;
          justify-content: space-around;
          flex-direction: column;

          span {
            width: 100%;
            height: 2px;
            background-color: var(--black-color);
            transition: all 0.3s ease;
            position: absolute;

            &:nth-of-type(1) {
              top: 0;
            }
            &:nth-of-type(2) {
              top: 6px;
            }
            &:nth-of-type(3) {
              bottom: 0;
            }
          }

          &.open span:nth-of-type(1) {
            transform: rotate(45deg);
            top: 10px;
          }
          &.open span:nth-of-type(2) {
            opacity: 0;
          }
          &.open span:nth-of-type(3) {
            transform: rotate(-45deg);
            top: 10px;
          }
        }

        .menu-area {
          position: fixed;
          top: 0;
          right: 0;
          width: 250px;
          height: 100vh;
          background-color: rgba(5, 5, 5, 0.7);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          color: var(--white-color);

          &.open {
            transform: translateX(0);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .header-wrapper {
      .menu-item-wrapper {
        .web-nav-list-wrapper {
          display: none;
        }

        .mobile-nav-list-wrapper {
          display: block;
        }
      }
    }
  }
`;
