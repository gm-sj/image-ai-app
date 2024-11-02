import styled from 'styled-components';

export const OptionStyld = styled.div`
    width: 100%;
    .option-wrraper {
        margin-top: 35px;
        display: flex;
        flex-direction: row;
        padding: 0 20px;
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
`;
