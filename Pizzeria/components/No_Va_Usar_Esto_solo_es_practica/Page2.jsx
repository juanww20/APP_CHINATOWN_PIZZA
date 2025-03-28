// Page1.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Page2() {
  const [name, setName] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="输入姓名"
        value={name}
        onChangeText={setName}
      />
      <Text>Cehsi</Text>
      <Button title="下一步" onPress={() => navigateToPage2()} />
    </View>
  );
}

// 类似地创建 Page2.js, Page3.js, Page4.js