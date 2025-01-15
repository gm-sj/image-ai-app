import styled from 'styled-components';

export const MainStyle = styled.div<{ deviceType: string }>`
  main {
    width: 100%;
    padding-top: 80px;
    max-width: 1080px;
    margin: 0 auto;
  }

  .contents {
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main-title-wrraper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: ${(props) => (props.deviceType === 'mobile' ? '30px' : '0px')};

      h2 {
        margin-bottom: 6px;
        font-size: ${(props) =>
          props.deviceType === 'mobile' ? '21px' : props.deviceType === 'tablet' ? '36px' : '50px'};
        font-weight: 700;
        line-height: 1.2;
      }
      p {
        font-size: ${(props) => (props.deviceType === 'mobile' ? '14px' : '16px')};
        line-height: 1.2;
        color: rgb(94, 94, 94);
      }
    }
  }
`;
