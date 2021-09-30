/// <reference path="./serial_types.d.ts" />

import {
  DEFAULT_BAUD_RATE,
  Transport,
  TransportOptions,
} from "../transport.ts";

// Deno extended spec to include name
export interface SerialPortFilterExt extends SerialPortFilter {
  name?: string;
}

export interface SerialPortInfoExt extends SerialPortInfo {
  name?: string;
}

export class SerialTransport implements Transport {
  constructor(public port: SerialPort) {}

  static async connect(portName: string): Promise<SerialTransport>;
  static async connect(
    filters: SerialPortFilterExt[],
  ): Promise<SerialTransport>;
  static async connect(
    v: string | SerialPortFilterExt[],
  ): Promise<SerialTransport> {
    const vtype = typeof v;

    if (vtype === "string") {
      const ports = await navigator.serial.getPorts();
      const port = ports.find((e) =>
        (e.getInfo() as SerialPortInfoExt).name === v
      );
      if (port === undefined) {
        throw new Error(`Failed to find port with name "${v}"`);
      }
      return new SerialTransport(port);
    } else if (vtype === "object" && Array.isArray(v)) {
      const port = await navigator.serial.requestPort({
        filters: v,
      });
      return new SerialTransport(port);
    } else {
      throw new TypeError(
        `Expected either port name or filters (got "${vtype}")`,
      );
    }
  }

  #writer?: WritableStreamDefaultWriter<Uint8Array>;
  #ensureWriter() {
    if (this.#writer) return;
    this.#writer = this.port.writable!.getWriter();
  }

  async open(options: TransportOptions) {
    await this.port.open({
      baudRate: options.baudRate ?? DEFAULT_BAUD_RATE,
    });
  }

  async send() {
    this.#ensureWriter();
    this.#writer!.write(new Uint8Array());
  }

  async close() {
    this.#writer?.releaseLock();
    await this.port.close();
  }

  [Symbol.asyncIterator]() {
    return this.port.readable![Symbol.asyncIterator]();
  }
}
