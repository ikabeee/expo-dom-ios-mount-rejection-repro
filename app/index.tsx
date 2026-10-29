import { View } from 'react-native';
import Hello from '../components/Hello';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Hello name="iOS" dom={{ style: { height: 120 } }} />
    </View>
  );
}
