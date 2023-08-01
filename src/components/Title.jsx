import { useEffect } from 'react';

function Title() {
  useEffect(() => {
    document.title = 'Rakhis de Yudha';
  }, []);
}

export default Title;