'use dom';

import type { DOMProps } from 'expo/dom';

export default function Hello(props: { name: string; dom?: DOMProps }) {
  return <p style={{ fontSize: 20 }}>Hello {props.name} from a DOM component</p>;
}
