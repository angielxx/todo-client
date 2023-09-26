import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const styles = css``;

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  ${styles}
	
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css");

  body {
		font-family: 'Pretendard', sans-serif;
	}
`;

export default GlobalStyle;
