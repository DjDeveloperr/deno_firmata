import { Board, SerialTransport } from "../mod.ts";

const transport = await SerialTransport.connect("/dev/ttyUSB0");
const board = new Board(transport);
