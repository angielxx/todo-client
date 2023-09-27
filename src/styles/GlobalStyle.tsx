import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';

const styles = css``;

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  ${styles}
	
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css");

  body {
		font-family: 'Pretendard', sans-serif;
    color: ${theme.colors.textMain}
	}
`;

export default GlobalStyle;
