import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Colors } from '../constants/colors';

interface ResultCardProps {
  title?: string;
  value: string | number;
  subtitle?: string;
  style?: ViewStyle;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  title = 'Resultado',
  value,
  subtitle,
  style,
}) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  title: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
  },
  subtitle: {
    color: '#475569',
    fontSize: 13,
    marginTop: 4,
    textAlign: 'center',
  },
});
