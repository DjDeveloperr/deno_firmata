export const DEFAULT_BAUD_RATE = 57600;

export interface TransportOptions {
  baudRate?: number;
}

export interface Transport {
  /**
   * Opens or connects to the transport
   */
  open(options: TransportOptions): void | Promise<void>;

  /**
   * Send data to the transport.
   *
   * @param data Bytes Buffer
   */
  send(data: Uint8Array): void | Promise<void>;

  /**
   * Close the transport.
   */
  close(): void | Promise<void>;

  /**
   * Async Iterator for reading data from the transport.
   */
  [Symbol.asyncIterator](): AsyncIterableIterator<Uint8Array>;
}
