import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { ResultCard } from '../components/ResultCard';
import { ScreenContainer } from '../components/ScreenContainer';
import { numberToSpanishWords } from '../utils/numberToWords';

export default function TraductorScreen() {
  const [inputVal, setInputVal] = useState('');
  const [resultText, setResultText] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>();

  const handleTranslate = () => {
    setError(undefined);

    const trimmed = inputVal.trim();
    if (!trimmed) {
      setError('Ingresa un número.');
      setResultText(null);
      return;
    }

    const parsed = Number(trimmed);
    const translation = numberToSpanishWords(parsed);

    if (!translation.success) {
      setError(translation.error);
      setResultText(null);
    } else {
      const formatted = translation.text!.charAt(0).toUpperCase() + translation.text!.slice(1);
      setResultText(formatted);
    }
  };

  const handleClear = () => {
    setInputVal('');
    setResultText(null);
    setError(undefined);
  };

  return (
    <ScreenContainer>
      <View style={styles.card}>
        <Text style={styles.title}>Traductor de Números a Letras</Text>
        <Text style={styles.subtitle}>Convierte un número del 1 al 1000 a letras en español.</Text>

        <CustomInput
          label="Número (1 - 1000)"
          placeholder="Ej: 125"
          keyboardType="number-pad"
          value={inputVal}
          onChangeText={(val) => {
            setInputVal(val);
            if (error) setError(undefined);
          }}
          error={error}
        />

        <View style={styles.buttonRow}>
          <CustomButton
            title="Traducir"
            onPress={handleTranslate}
            variant="primary"
            style={styles.actionBtn}
          />
          <CustomButton
            title="Limpiar"
            onPress={handleClear}
            variant="secondary"
            style={styles.clearBtn}
          />
        </View>

        {resultText ? (
          <ResultCard
            title="En letras"
            value={resultText}
            subtitle={`Número: ${inputVal}`}
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
  actionBtn: {
    flex: 2,
  },
  clearBtn: {
    flex: 1,
  },
});
