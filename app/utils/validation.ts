/**
 * Utilitários de validação para formulários
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>; // field -> error message
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

/**
 * Mensagens de erro padronizadas
 */
const errorMessages = {
  name: {
    required: "Nome é obrigatório",
    minLength: "Nome deve ter pelo menos 2 caracteres",
    maxLength: "Nome deve ter no máximo 100 caracteres",
    invalid: "Nome contém caracteres inválidos",
  },
  email: {
    required: "Email é obrigatório",
    invalid: "Email inválido",
  },
  phone: {
    required: "Telefone é obrigatório",
    invalid: "Telefone inválido. Use formato: (11) 99999-9999",
  },
  company: {
    minLength: "Nome da empresa deve ter pelo menos 2 caracteres",
    maxLength: "Nome da empresa deve ter no máximo 100 caracteres",
  },
  message: {
    maxLength: "Mensagem deve ter no máximo 2000 caracteres",
  },
};

/**
 * Valida se um email é válido
 * @param email - Email a ser validado
 * @returns true se válido, false caso contrário
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.trim().length === 0) {
    return false;
  }

  // Comprimento mínimo: a@b.c (5 caracteres)
  if (email.length < 5) {
    return false;
  }

  // Comprimento máximo: RFC 5321
  if (email.length > 254) {
    return false;
  }

  // Regex pattern básico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida se um telefone brasileiro é válido
 * Aceita formatos:
 * - (11) 99999-9999
 * - 11 99999-9999
 * - 11999999999
 * - +55 11 99999-9999
 * @param phone - Telefone a ser validado
 * @returns true se válido, false caso contrário
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || phone.trim().length === 0) {
    return false;
  }

  // Remove caracteres não numéricos exceto + no início
  const cleaned = phone.replace(/[^\d+]/g, "");

  // Verifica se começa com +55 (código do país)
  let digits = cleaned;
  if (cleaned.startsWith("+55")) {
    digits = cleaned.substring(3);
  } else if (cleaned.startsWith("55") && cleaned.length > 10) {
    digits = cleaned.substring(2);
  }

  // Deve ter 10 ou 11 dígitos (com DDD)
  if (digits.length < 10 || digits.length > 11) {
    return false;
  }

  // Extrai DDD (primeiros 2 dígitos)
  const ddd = parseInt(digits.substring(0, 2), 10);

  // DDD válido: 11-99
  if (ddd < 11 || ddd > 99) {
    return false;
  }

  return true;
}

/**
 * Sanitiza input removendo caracteres perigosos
 * @param input - String a ser sanitizada
 * @returns String sanitizada
 */
export function sanitizeInput(input: string): string {
  if (!input) {
    return "";
  }

  // Trim whitespace
  let sanitized = input.trim();

  // Normalizar espaços múltiplos
  sanitized = sanitized.replace(/\s+/g, " ");

  // Remover caracteres perigosos para XSS
  const dangerousPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
  ];

  dangerousPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, "");
  });

  // Limitar comprimento (prevenir DoS)
  const maxLength = 10000;
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized;
}

/**
 * Valida dados do formulário
 * @param data - Dados do formulário
 * @returns Resultado da validação
 */
export function validateFormData(data: FormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Validar Nome
  if (!data.name || data.name.trim().length === 0) {
    errors.name = errorMessages.name.required;
  } else {
    const name = data.name.trim();
    if (name.length < 2) {
      errors.name = errorMessages.name.minLength;
    } else if (name.length > 100) {
      errors.name = errorMessages.name.maxLength;
    } else {
      // Apenas letras, espaços e caracteres acentuados
      const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
      if (!nameRegex.test(name)) {
        errors.name = errorMessages.name.invalid;
      }
    }
  }

  // Validar Email
  if (!data.email || data.email.trim().length === 0) {
    errors.email = errorMessages.email.required;
  } else if (!isValidEmail(data.email.trim())) {
    errors.email = errorMessages.email.invalid;
  }

  // Validar Telefone
  if (!data.phone || data.phone.trim().length === 0) {
    errors.phone = errorMessages.phone.required;
  } else if (!isValidPhone(data.phone.trim())) {
    errors.phone = errorMessages.phone.invalid;
  }

  // Validar Empresa (opcional)
  if (data.company && data.company.trim().length > 0) {
    const company = data.company.trim();
    if (company.length < 2) {
      errors.company = errorMessages.company.minLength;
    } else if (company.length > 100) {
      errors.company = errorMessages.company.maxLength;
    }
  }

  // Validar Mensagem (opcional)
  if (data.message && data.message.trim().length > 0) {
    if (data.message.length > 2000) {
      errors.message = errorMessages.message.maxLength;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

