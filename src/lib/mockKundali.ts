import { KundaliReport } from '@/types/astrology';
import { generateParashariKundali } from './parashari';

/**
 * Generate Kundali using Parashari Vedic Astrology System
 * 
 * Features:
 * - Lahiri (Chitra Paksha) Ayanamsa - Official Indian Government Standard
 * - Parashari whole sign house system for Lagna chart
 * - Equal house system from Lagna degree for Chalit (Bhava) chart
 * - Accurate Nakshatra and Pada calculations (27 Nakshatras, 108 Padas)
 * - Complete Panchang: Tithi, Nakshatra, Yoga, Karana, Vara
 * - Planetary perturbations for improved accuracy
 */
export function generateMockKundali(
  name: string,
  dateOfBirth: string,
  timeOfBirth: string,
  placeOfBirth: string,
  latitude: number,
  longitude: number
): KundaliReport {
  // Use Parashari Vedic Astrology calculation engine with Lahiri Ayanamsha
  return generateParashariKundali(
    name,
    dateOfBirth,
    timeOfBirth,
    placeOfBirth,
    latitude,
    longitude
  );
}

// JSON Schema for Kundali Report (for API documentation)
export const KUNDALI_SCHEMA = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "dateOfBirth": { "type": "string", "format": "date" },
    "timeOfBirth": { "type": "string", "format": "time" },
    "placeOfBirth": { "type": "string" },
    "latitude": { "type": "number" },
    "longitude": { "type": "number" },
    "timezone": { "type": "string" },
    "ayanamsha": { "type": "number", "description": "Lahiri Ayanamsha value used" },
    "ascendant": {
      "type": "object",
      "properties": {
        "sign": { "type": "string" },
        "degree": { "type": "number" },
        "nakshatra": { "type": "string" }
      }
    },
    "planets": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "sign": { "type": "string" },
          "signIndex": { "type": "integer" },
          "degree": { "type": "number" },
          "house": { "type": "integer" },
          "isRetrograde": { "type": "boolean" },
          "nakshatra": { "type": "string" },
          "nakshatraPada": { "type": "integer", "minimum": 1, "maximum": 4 }
        }
      }
    },
    "houses": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "houseNumber": { "type": "integer" },
          "sign": { "type": "string" },
          "planets": { "type": "array", "items": { "type": "string" } },
          "cusp": { "type": "number" }
        }
      }
    },
    "panchang": {
      "type": "object",
      "description": "The five limbs of Vedic time",
      "properties": {
        "tithi": {
          "type": "object",
          "properties": {
            "number": { "type": "integer", "minimum": 1, "maximum": 30 },
            "name": { "type": "string" },
            "paksha": { "type": "string", "enum": ["Shukla", "Krishna"] },
            "phase": { "type": "number", "minimum": 0, "maximum": 1 }
          }
        },
        "nakshatra": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "pada": { "type": "integer", "minimum": 1, "maximum": 4 },
            "lord": { "type": "string" }
          }
        },
        "yoga": {
          "type": "object",
          "properties": {
            "number": { "type": "integer", "minimum": 1, "maximum": 27 },
            "name": { "type": "string" }
          }
        },
        "karana": {
          "type": "object",
          "properties": {
            "number": { "type": "integer", "minimum": 1, "maximum": 60 },
            "name": { "type": "string" }
          }
        },
        "vara": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "sanskrit": { "type": "string" },
            "lord": { "type": "string" }
          }
        }
      }
    },
    "createdAt": { "type": "string", "format": "date-time" }
  },
  "required": ["id", "name", "dateOfBirth", "timeOfBirth", "ascendant", "planets", "houses"]
};
