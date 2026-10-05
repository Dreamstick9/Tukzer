import { View, Text, Image } from 'react-native';

export default function ChatRow({ avatar, name, time, message }) {
  return (
    <View style={{ flexDirection: 'row', padding: 12, backgroundColor: '#000000', alignItems: 'center' }}>
      <Image
        source={{ uri: avatar }}
        style={{ width: 55, height: 55, borderRadius: 27 }}
      />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
          <Text style={{ color: '#888', fontSize: 13 }}>{time}</Text>
        </View>
        <Text style={{ color: '#888', marginTop: 2 }}>{message}</Text>
      </View>
    </View>
  );
}