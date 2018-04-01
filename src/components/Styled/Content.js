import styled from 'styled-components';

import { lightestGray } from './variables';

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${lightestGray}
`;

export const Logo = styled.img.attrs({
  src: 'static/logo.png',
})`
  max-width: 549px;
  max-height: 480px;
  overflow: hiden;

  @media(max-width: 550px) {
    max-width: 410px;
    max-height: 310px;
  }

  @media(max-height: 550px) {
    max-width: 410px;
    max-height: 310px;
  }
`;

export const Disclaimer = styled.div`
  margin-bottom: 50px;
`;