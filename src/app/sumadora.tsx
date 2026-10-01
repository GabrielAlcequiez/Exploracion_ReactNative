import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { ResultCard } from '../components/ResultCard';
import { Colors } from '../constants/colors';

export default function SumadoraScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error1, setError1] = useState<string | undefined>();
  const [error2, setError2] = useState<string | undefined>();

  const handleCalculate = () => {
    let hasError = false;
    setError1(undefined);
    setError2(undefined);

    const val1 = num1.trim();
    const val2 = num2.trim();

    if (!val1) {
      setError1('Ingresa el primer número');
      hasError = true;
    } else if (isNaN(Number(val1))) {
      setError1('Valor no numérico');
      hasError = true;
    }

    if (!val2) {
      setError2('Ingresa el segundo número');
      hasError = true;
    } else if (isNaN(Number(val2))) {
      setError2('Valor no numérico');
      hasError = true;
    }

    if (hasError) {
      setResult(null);
      return;
    }

    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);
    const sum = Math.round((n1 + n2) * 100000000) / 100000000;
    setResult(sum);
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
    setError1(undefined);
    setError2(undefined);
  };

  return (
    <ScreenContainer>
      <View style={styles.card}>
        <Text style={styles.title}>Sumadora</Text>
        <Text style={styles.subtitle}>Suma dos números y obtén el resultado.</Text>

        <CustomInput
          label="Número 1"
          placeholder="0"
          keyboardType="numeric"
          value={num1}
          onChangeText={(val) => {
            setNum1(val);
            if (error1) setError1(undefined);
          }}
          error={error1}
        />

        <CustomInput
          label="Número 2"
          placeholder="0"
          keyboardType="numeric"
          value={num2}
          onChangeText={(val) => {
            setNum2(val);
            if (error2) setError2(undefined);
          }}
          error={error2}
        />

        <View style={styles.buttonRow}>
          <CustomButton
            title="Sumar"
            onPress={handleCalculate}
            variant="primary"
            style={styles.calcBtn}
          />
          <CustomButton
            title="Limpiar"
            onPress={handleClear}
            variant="secondary"
            style={styles.clearBtn}
          />
        </View>

        {result !== null ? (
          <ResultCard
            title="Resultado"
            value={result}
            subtitle={`${num1} + ${num2} = ${result}`}
          />
        ) : null}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginTop: 12,
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 6,
  },
  calcBtn: {
    flex: 2,
  },
  clearBtn: {
    flex: 1,
  },
});
