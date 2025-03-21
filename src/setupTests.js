import "@testing-library/jest-dom";

// Solución para "ReferenceError: TextEncoder is not defined"
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
