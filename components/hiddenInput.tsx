import { useEffect, useState } from 'react';

interface HiddenInputProps {
  name: string;
  value: string;
}

const HiddenInput = ({ name, value }: HiddenInputProps) => {
  return <input type="hidden" name={name} value={value} />;
};

export default HiddenInput;
