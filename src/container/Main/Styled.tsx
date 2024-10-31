import styled from 'styled-components';

export const MainStyle = styled.div`
    /* 헤더 css */
    .header-wrapper {
        position: fixed;
        padding: 15px 20px;
        width: 100%;
        background-color: #fff;
        box-shadow: -1px -1px 8px 4px rgba(0, 0, 0, 0.4);
        opacity: 1;
        transition: opacity 0.7s ease;
        &.scrolled {
            opacity: 0;
        }

        .menu-item-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title-wrapper {
                color: rgba(0, 0, 0, 0.8);

                h1 {
                    font-size: 22px;
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
                        background-color: #000;
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
                    color: #fff;

                    &.open {
                        transform: translateX(0);
                    }
                }
            }
        }
    }
    /* 헤더 css 끝 */
    main {
        width: 100%;
        padding-top: 52px;
        max-width: 1080px;
        margin: 0 auto;
    }

    .contents {
        padding-top: 52px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .main-title-wrraper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h2 {
                margin-bottom: 6px;
                font-size: 50px;
                font-weight: 700;
                line-height: 1.2;
            }
            p {
                font-size: 16px;
                line-height: 1.2;
                color: rgb(94, 94, 94);
            }
        }
        .input-contents-wrraper {
            margin-top: 35px;
            display: flex;
            flex-direction: row;
            gap: 10px;
            width: 100%;
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
                transition: border 0.5s ease;
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
                transition: color 0.3s ease;
                z-index: 1;

                &:hover {
                    color: #fff;
                }

                /* 애니메이션을 위한 ::before 요소 추가 */
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

                /* 호버 시 배경 애니메이션 */
                &:hover::before {
                    transform: scaleY(0);
                }
            }
        }
        .option-wrraper {
            margin-top: 35px;
            display: flex;
            flex-direction: row;
            gap: 10px;
            width: 100%;
            justify-content: flex-start;
            align-items: center;
            font-size: 12px;
            gap: 20px;
            .select-item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                position: relative;
                padding: 5px 20px;
                gap: 5px;

                &.img-upload {
                    border: 1px solid #00c6fb;
                    border-radius: 15px;
                }
                .item-select {
                    width: 15px;
                    height: 15px;
                    background-color: #005bea;
                }
                .upload-btn {
                    position: absolute;
                    label {
                        position: absolute;
                        inset: 0px 44px 0px 0px;
                        overflow: hidden;
                        opacity: 0;
                        cursor: pointer;
                    }
                    input {
                        display: none;
                    }
                }
                .ratio-item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    padding: 5px 20px;
                    gap: 5px;
                    border: 1px solid #00c6fb;
                    border-radius: 15px;
                    &.active {
                        background-color: #cdcdcd;
                    }
                    span {
                        width: 15px;
                        height: 15px;
                        background-color: #005bea;
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
                    /* 오타 수정 */
                    display: block;
                }
            }
        }
    }
`;
