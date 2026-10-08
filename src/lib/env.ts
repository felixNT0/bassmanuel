/**
 * Environment Variable Validation
 * Ensures required environment variables are set and validates their format
 */

export function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];

  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export function getEnvVarOrThrow(key: string): string {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export function getEnvVarOrDefault(key: string, defaultValue: string): string {
  return process.env[key] || defaultValue;
}

export function validateEnvVars() {
  const required: string[] = [];
  const optional: string[] = [];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.warn(`Missing optional environment variables: ${missing.join(", ")}`);
  }

  const warnings = optional.filter((key) => !process.env[key]);

  if (warnings.length > 0) {
    console.warn(`Optional environment variables not set: ${warnings.join(", ")}`);
  }

  return {
    required: { missing },
    optional: { missing: warnings },
  };
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

export function isTest(): boolean {
  return process.env.NODE_ENV === "test";
}
