// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Tests for isPhoneNumber
test('isPhoneNumber - valid phone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber - invalid phone number 1', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

test('isPhoneNumber - invalid phone number 2', () => {
  expect(isPhoneNumber('phone123')).toBe(false);
});

// Tests for isEmail
test('isEmail - valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail - valid email 2', () => {
  expect(isEmail('user.name@domain.co')).toBe(true);
});

test('isEmail - invalid email 1', () => {
  expect(isEmail('not-an-email')).toBe(false);
});

test('isEmail - invalid email 2', () => {
  expect(isEmail('missing@domain')).toBe(false);
});

// Tests for isStrongPassword
test('isStrongPassword - valid password 1', () => {
  expect(isStrongPassword('Abc123_')).toBe(true);
});

test('isStrongPassword - valid password 2', () => {
  expect(isStrongPassword('Strong_Pass1')).toBe(true);
});

test('isStrongPassword - invalid password 1', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('isStrongPassword - invalid password 2', () => {
  expect(isStrongPassword('weak')).toBe(false);
});

// Tests for isDate
test('isDate - valid date 1', () => {
  expect(isDate('05/06/2025')).toBe(true);
});

test('isDate - valid date 2', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('isDate - invalid date 1', () => {
  expect(isDate('2025-05-06')).toBe(false);
});

test('isDate - invalid date 2', () => {
  expect(isDate('31/12/1999')).toBe(false);
});

// Tests for isHexColor
test('isHexColor - valid hex color 1', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('isHexColor - valid hex color 2', () => {
  expect(isHexColor('#000')).toBe(true);
});

test('isHexColor - invalid hex color 1', () => {
  expect(isHexColor('123456')).toBe(false);
});

test('isHexColor - invalid hex color 2', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
