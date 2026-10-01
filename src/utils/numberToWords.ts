const UNIDADES = [
  '',
  'uno',
  'dos',
  'tres',
  'cuatro',
  'cinco',
  'seis',
  'siete',
  'ocho',
  'nueve',
];

const ESPECIALES_10_19 = [
  'diez',
  'once',
  'doce',
  'trece',
  'catorce',
  'quince',
  'dieciséis',
  'diecisiete',
  'dieciocho',
  'diecinueve',
];

const VEINTENAS = [
  'veinte',
  'veintiuno',
  'veintidós',
  'veintitrés',
  'veinticuatro',
  'veinticinco',
  'veintiséis',
  'veintisiete',
  'veintiocho',
  'veintinueve',
];

const DECENAS = [
  '',
  'diez',
  'veinte',
  'treinta',
  'cuarenta',
  'cincuenta',
  'sesenta',
  'setenta',
  'ochenta',
  'noventa',
];

const CENTENAS = [
  '',
  'ciento',
  'doscientos',
  'trescientos',
  'cuatrocientos',
  'quinientos',
  'seiscientos',
  'setecientos',
  'ochocientos',
  'novecientos',
];

function convertBelow100(n: number): string {
  if (n <= 0) return '';
  if (n < 10) return UNIDADES[n];
  if (n >= 10 && n < 20) return ESPECIALES_10_19[n - 10];
  if (n >= 20 && n < 30) return VEINTENAS[n - 20];

  const d = Math.floor(n / 10);
  const u = n % 10;
  if (u === 0) {
    return DECENAS[d];
  }
  return `${DECENAS[d]} y ${UNIDADES[u]}`;
}

export interface TranslationResult {
  success: boolean;
  text?: string;
  error?: string;
}

export function numberToSpanishWords(value: number): TranslationResult {
  if (isNaN(value)) {
    return {
      success: false,
      error: 'Por favor, ingresa un número válido.',
    };
  }

  if (!Number.isInteger(value)) {
    return {
      success: false,
      error: 'Por favor, ingresa un número entero (sin decimales).',
    };
  }

  if (value < 1 || value > 1000) {
    return {
      success: false,
      error: 'El número debe estar estrictamente entre 1 y 1000.',
    };
  }

  if (value === 1000) {
    return { success: true, text: 'mil' };
  }

  if (value === 100) {
    return { success: true, text: 'cien' };
  }

  if (value < 100) {
    return { success: true, text: convertBelow100(value) };
  }

  // 101 a 999
  const c = Math.floor(value / 100);
  const remainder = value % 100;
  const centenaText = CENTENAS[c];

  if (remainder === 0) {
    return { success: true, text: centenaText };
  }

  const remainderText = convertBelow100(remainder);
  return {
    success: true,
    text: `${centenaText} ${remainderText}`,
  };
}
