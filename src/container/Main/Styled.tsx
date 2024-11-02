import styled from 'styled-components';

export const MainStyle = styled.div`
    /* 헤더 css */
    .header-wrapper {
        position: fixed;
        padding: 15px 20px;
        height: 100%;
        max-height: 80px;
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
        padding-top: 80px;
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
                    cursor: pointer;
                    &.active {
                        background-color: #cdcdcd;
                        border: 2px solid #005bea;
                    }
                    span {
                        width: 15px;
                        height: 15px;
                        background-color: #005bea;
                    }
                }
            }
        }
        .tab-menu {
            width: 100%;
            max-width: 1200px;

            .tabs {
                display: flex;
                justify-content: center;
                border-bottom: 2px solid #ddd;
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
                        border-bottom: 2px solid #005bea;
                        font-weight: bold;
                        color: #005bea;
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
                    padding: 16px;
                    max-width: 100%;
                }

                /* 그리드 아이템 스타일 */
                .grid-item {
                    background-color: #cdcdcd;
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
    }

    .footer-wrraper {
        margin-top: 30px;
        height: 100%;
        min-height: 150px;
        padding: 15px 20px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        .footer-contents {
            width: 100%;
            max-width: 1080px;
            color: #fff;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .info-area {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                > p {
                    &:not(:last-child)::after {
                        content: '';
                        position: relative;
                        width: 1px;
                        height: 12px;
                        background-color: #fff;
                        margin: 0 10px;
                        display: inline-block;
                        top: 0;
                        left: 0;
                    }
                }
            }
            .link-area {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                position: relative;
                > p {
                    &:not(:last-child)::after {
                        content: '';
                        position: relative;
                        width: 1px;
                        height: 12px;
                        background-color: #fff;
                        margin: 0 10px;
                        display: inline-block;
                        top: 0;
                        left: 0;
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
