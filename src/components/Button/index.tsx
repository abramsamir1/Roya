import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: object;
  styleTitle?: object;
}

const Button: React.FC<ButtonProps> = ({label, onPress, style, styleTitle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styleTitle}>{label}</Text>
    </TouchableOpacity>
  );
};

export {Button};
