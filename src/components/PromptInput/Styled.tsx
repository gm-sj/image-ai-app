import styled from 'styled-components';

export const PromptInputStyle = styled.div`
    width: 100%;
    .input-contents-wrraper {
        margin-top: 35px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 100%;
        padding: 20px;
        justify-content: center;
        align-items: center;
        textarea {
            box-sizing: border-box;
            position: relative;
            width: 100%;
            height: 100px;
            padding: 14px 18px;
            background: rgb(255, 255, 255);
            border: 2px solid rgba(0, 198, 251, 1);
            border-radius: 14px;
            resize: none;
            outline: none;
            transition: border 1s ease;
            &::placeholder {
                font-size: 14px;
            }
            &:focus {
                border: 2px solid rgba(0, 0, 255, 0.4);
            }
        }
        button {
            position: relative;
            overflow: hidden;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 182px;
            height: 100px;
            margin: 0 auto;
            background: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
            border-radius: 14px;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            z-index: 1;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to top, #00c6fb 100%, #005bea 0%);
                transition: transform 0.5s ease;
                border-radius: 14px;
                z-index: -1;
                transform: scaleY(1);
                transform-origin: bottom;
            }

            &:hover::before {
                transform: scaleY(0);
            }
        }
    }
`;
