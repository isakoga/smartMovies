import styled, { css } from 'styled-components';

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${ theme.body };
  `}
  width: 100%;
  height: 200px;
`

export const Loading = styled.div`
  ${({ theme }) => css`
    color: ${ theme.text };
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 75px;
    height: 75px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #9370DB;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;

    &:::before {
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #BA55D3;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }

    &:::after {
      content: "";
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #FF00FF;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }

    @-webkit-keyframes spin {
      0%   {
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
      }
      100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
      }
    }
    @keyframes spin {
        0%   {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
  `}
`