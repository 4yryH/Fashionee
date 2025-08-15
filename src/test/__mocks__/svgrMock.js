import React from 'react';
export default function SvgMock(props) {
  return React.createElement('svg', { 'data-testid': 'svg-mock', ...props });
}
