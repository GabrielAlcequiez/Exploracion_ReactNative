import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { Colors } from '../constants/colors';

interface MultiplierRow {
  multiplier: number;
  result: number;
}

export default function TablaMultiplicarScreen() {
  const [baseNumber, setBaseNumber] = useState('');
  const [tableData, setTableData] = useState<MultiplierRow[] | null>(null);
  const [error, setError] = useState<string | undefined>();

  const handleGenerate = () => {
    setError(undefined);

    const trimmed = baseNumber.trim();
    if (!trimmed) {
      setError('Ingresa un número base.');
      setTableData(null);
      return;
    }

    const n = parseFloat(trimmed);
    if (isNaN(n)) {
      setError('Ingresa un número válido.');
      setTableData(null);
      return;
    }

    const rows: MultiplierRow[] = [];
    for (let i = 1; i <= 13; i++) {
      const res = Math.round(n * i * 1000000) / 1000000;
      rows.push({
        multiplier: i,
        result: res,
      });
    }

    setTableData(rows);
  };

  const handleClear = () => {
    setBaseNumber('');
    setTableData(null);
    setError(undefined);
  };

  return (
    <ScreenContainer>
      <View style={styles.card}>
        <Text style={styles.title}>Tabla de Multiplicar</Text>
        <Text style={styles.subtitle}>Genera la tabla de multiplicar hasta el 13.</Text>

        <CustomInput
          label="Número"
          placeholder="Ej: 5"
          keyboardType="numeric"
          value={baseNumber}
          onChangeText={(val) => {
            setBaseNumber(val);
            if (error) setError(undefined);
          }}
          error={error}
        />

        <View style={styles.buttonRow}>
          <CustomButton
            title="Generar Tabla"
            onPress={handleGenerate}
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

        {tableData && tableData.length > 0 ? (
          <View style={styles.table}>
            {tableData.map((row) => (
              <View
                key={row.multiplier}
                style={[
                  styles.tableRow,
                  row.multiplier % 2 === 0 && styles.rowEven,
                ]}
              >
                <Text style={styles.operationText}>
                  {baseNumber} × {row.multiplier}
                </Text>
                <Text style={styles.resultText}>
                  = {row.result}
                </Text>
              </View>
            ))}
          </View>
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
  table: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  rowEven: {
    backgroundColor: '#F8FAFC',
  },
  operationText: {
    fontSize: 15,
    color: '#0F172A',
    fontWeight: '500',
  },
  resultText: {
    fontSize: 15,
    color: '#2563EB',
    fontWeight: '700',
  },
});
