// Page1.js (示例)
import React, {useLayoutEffect}from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page1() {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="返回" onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <TextInput
        placeholder="输入姓名"
        value={name}
        onChangeText={setName}
      />
      <Button title="下一步" onPress={() => navigation.navigate('Page2')} />
    </View>
  );
}