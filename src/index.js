import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 한번에 하나의 component만을 렌더링 함
// 따라서 모든 컴포넌트는 App에 들어가야 함
ReactDOM.render(<App />, document.getElementById('root'));