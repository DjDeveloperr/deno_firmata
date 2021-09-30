export const ANALOG_MESSAGE = 0xE0;
export const DIGITAL_MESSAGE = 0x90;
export const REPORT_ANALOG_PIN = 0xC0;
export const REPORT_DIGITAL_PIN = 0xD0;
export const START_SYSEX = 0xF0;
export const SET_PIN_MODE = 0xF4;
export const SET_DIGITAL_PIN_VALUE = 0xF5;
export const SYSEX_END = 0xF7;
export const PROTOCOL_VERSION = 0xF9;
export const SYSTEM_RESET = 0xFF;

export const SYSEX_EXTENDED_ID = 0x00;
export const SYSEX_RESERVED_RANGE: [number, number] = [0x01, 0x0F];
// Proposed
// export const SYSEX_RCOUTPUT_DATA = 0x5C;
// Proposed
// export const SYSEX_RCINPUT_DATA = 0x5D;
// Proposed
// export const SYSEX_DEVICE_QUERY = 0x5E;
// Proposed
// export const SYSEX_DEVICE_RESPONSE = 0x5F;
export const SYSEX_SERIAL_DATA = 0x60;
export const SYSEX_ENCODER_DATA = 0x61;
export const SYSEX_ACCELSTEPPER_DATA = 0x62;
// Proposed
// export const SYSEX_REPORT_DIGTIAL_PIN = 0x63;
// Proposed
// export const SYSEX_EXTENDED_REPORT_ANALOG = 0x64;
// Proposed
// export const SYSEX_REPORT_FEATURES = 0x65;
// Proposed
// export const SYSEX_SERIAL_DATA_2 = 0x67;
// Beta
// export const SYSEX_SPI_DATA = 0x68;
export const SYSEX_ANALOG_MAPPING_QUERY = 0x69;
export const SYSEX_ANALOG_MAPPING_RESPONSE = 0x6A;
export const SYSEX_CAPABILITY_QUERY = 0x6B;
export const SYSEX_CAPABILITY_RESPONSE = 0x6C;
export const SYSEX_PIN_STATE_QUERY = 0x6D;
export const SYSEX_PIN_STATE_RESPONSE = 0x6E;
export const SYSEX_EXTENDED_ANALOG = 0x6F;
export const SYSEX_SERVO_CONFIG = 0x70;
export const SYSEX_STRING_DATA = 0x71;
// Deprecated
// export const SYSEX_STEPPER_DATA = 0x72;
export const SYSEX_ONEWIRE_DATA = 0x73;
// Beta
// export const SYSEX_DHTSENSOR_DATA = 0x74;
// Proposed
// export const SYSEX_SHIFT_DATA = 0x75;
export const SYSEX_I2C_REQUEST = 0x76;
export const SYSEX_I2C_REPLY = 0x77;
export const SYSEX_I2C_CONFIG = 0x78;
export const SYSEX_REPORT_FIRMWARE = 0x79;
export const SYSEX_SAMPING_INTERVAL = 0x7A;
export const SYSEX_SCHEDULER_DATA = 0x7B;
// Proposed
// export const SYSEX_ANALOG_CONFIG = 0x7C;
// Beta
// export const SYSEX_FREQUENCY_COMMAND = 0x7D;

export const SYSEX_NON_REALTIME = 0x7E;
export const SYSEX_REALTIME = 0x7F;
