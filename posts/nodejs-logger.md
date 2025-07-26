---
title: Node.js logging
publish_date: 2025-06-01
---

Logging is essential for almost every application. A good logger should include levels, timestamps, and file output - features you’d expect to be built into Node.js by default. Yet, surprisingly, Node.js still lacks a robust built-in solution.

As a result, many developers immediately turn to NPM modules, adding yet another dependency to their projects. This leads to an unnecessary import in nearly every file - a small annoyance that adds up over time.

What if you could enhance Node.js’s built-in console to handle structured logging without extra dependencies? In this post, I’ll show you how.

## Default logs

The legendary `console.log` works simply as possible - it just outputs to the console what you have passed to it:
```ts
// src/main.ts
console.log("This is default console.log");
console.log("test", 2025, true, { data: [] });
```
```sh
$ npx tsx src/main.ts
This is default console.log
test 2025 true { data: [] }
```

You may also know about other methods of the global `console` object, such as `info`, `warn`, `error`, `debug`:

```ts
// src/main.ts
console.info("info message");
console.warn("warn message");
console.error("error message");
console.debug("debug message");
```
```sh
$ npx tsx src/main.ts
info message
warn message
error message
debug message
```

By default, these methods behave almost identically to `console.log` - they print plain text without additional formatting. The only technical difference is that `log`, `info`, and `debug` write to stdout, while `warn` and `error` write to stderr. However, this distinction is rarely visible in most development environments, so we’ll focus on enhancing their usability.

## Modification

Let's modify the global behavior of these methods step by step. For convenience, I create a separate file for this:

```
$ touch src/utils/logger.ts
```

1. Define constants and imports

```ts
import fs from "fs";
import path from "path";

const LOG_EMOJI = {info: "💬", warn: "⚠️", error: "🛑", debug: "🔨"};
const LOGS_DIR = path.join(path.dirname("."), "logs");
```

We will use the Emoji symbol to indicate each of the levels. Using emoji for logs is simpler than ANSI color codes because they’re instantly readable (e.g., ❌ Error vs. `\x1b[31mError\x1b[0m`), work cross-platform (unlike ANSI colors, which require terminal support), add semantic meaning, and enhance visual scanning.

We also define the folder where the log files will be saved. Just the `./logs` folder in the root of the project is suitable for this. Feel free to change some of this to your liking.

2. Write helpers

Log files need a naming strategy that balances convenience and maintainability. While a single fixed filename would work initially, it would eventually grow too large, slowing down access and making debugging harder. A simple solution is to rotate logs daily by including the current date in the filename (e.g., 05-26.log). This approach:

- Prevents unbounded file growth
- Organizes logs chronologically for easy retrieval
- Requires no manual cleanup

Here’s the helper function to implement this:

```ts
const padZero = (value: number) => String(value).padStart(2, "0");

function getLogFilePath() {
    const now = new Date();
    const mm = padZero(now.getMonth() + 1); // Month (01-12)
    const dd = padZero(now.getDate()); // Day (01-31)
    const filename = `${mm}-${dd}.log`;
    return path.join(LOGS_DIR, filename);
}
```

Next, we need a time prefix for our logs in the form of a string. I'll just take the string representation of the date in the current locale. Again, feel free to change it to your liking:

```ts
function getDateString() {
    return new Date().toLocaleString();
}
```

And finally, we will assemble a helper to write the log to a file:

```ts
function logToFile(prefix: string, ...args: unknown[]) {
    fs.appendFileSync(getLogFilePath(), `${prefix} ${args.join(" ")}\n`);
}
```

3. Write modification

Now we can write our modifier:

```ts
function modifyConsoleLogs() {
    const originalInfo = console.info;
    const originalWarn = console.warn;
    const originalError = console.error;
    const originalDebug = console.debug;

    console.info = (...args: unknown[]) => {
        const prefix = `${getDateString()} ${LOG_EMOJI.info}`;
        originalInfo(prefix, ...args);
        logToFile(prefix, ...args);
    };

    console.warn = (...args: unknown[]) => {
        const prefix = `${getDateString()} ${LOG_EMOJI.warn}`;
        originalWarn(prefix, ...args);
        logToFile(prefix, ...args);
    };

    console.error = (...args: unknown[]) => {
        const prefix = `${getDateString()} ${LOG_EMOJI.error}`;
        originalError(prefix, ...args);
        logToFile(prefix, ...args);
    };

    console.debug = (...args: unknown[]) => {
        // Skip debug logs in production
        if (process.env.NODE_ENV === "production") return;

        const prefix = `${getDateString()} ${LOG_EMOJI.debug}`;
        originalDebug(prefix, ...args);
        logToFile(prefix, ...args);
    };
};
```

We store the original console methods to prevent infinite recursion - without this, our overridden methods would call themselves indefinitely (e.g., `console.error` triggering itself). The constants preserve the native functions for safe reuse.

Then each modified method prepends a timestamp and corresponding emoji, logs to the console, and saves to a file. Debug logs are skipped in production (`NODE_ENV` === 'production'), keeping development-only logs clean.

4. Combine into single function call

Finally, we can combine all stuff into a single initialization function for our new logger to call it when the application starts:

```ts
/**
 * Initializes the logger by:
 * 1. Creating logs directory if it doesn't exist
 * 2. Modifying console methods to add enhanced logging
 */
export const initLogger = () => {
    if (!fs.existsSync(LOGS_DIR)) fs.mkdirSync(LOGS_DIR, { recursive: true });
    modifyConsoleLogs();
};
```

## The result

Let's run our logger:

```ts
// src/main.ts
import { initLogger } from "./utils/logger";

const main = async () => {
    try {
        initLogger();

        console.log("This is default console.log");
        console.info("This is modified console.info");
        console.warn("This is modified console.warn");
        console.error("This is modified console.error");
        console.debug("This is modified console.debug");
    } catch (error) {
        console.error(error);
    }
};

main();
```
```sh
$ npx tsx src/main.ts
This is default console.log
5/26/2025, 12:25:07 PM 💬 This is modified console.info
5/26/2025, 12:25:07 PM ⚠️ This is modified console.warn
5/26/2025, 12:25:07 PM 🛑 This is modified console.error
5/26/2025, 12:25:07 PM 🔨 This is modified console.debug
```

As we can see, logging to the console has become much more pleasant and informative visually, while `console.log` works as before. Let's check the saving to a file:

```sh
$ tree logs
logs
└── 05-26.log

1 directory, 1 file
```
```sh
$ cat logs/05-26.log
5/26/2025, 12:28:36 PM 💬 This is modified console.info
5/26/2025, 12:28:36 PM ⚠️ This is modified console.warn
5/26/2025, 12:28:36 PM 🛑 This is modified console.error
5/26/2025, 12:28:36 PM 🔨 This is modified console.debug
```

Now, every new day, the logs will be saved in the appropriate file.

## Full code

```ts
// src/utils/logger.ts
import fs from "fs";
import path from "path";

const LOG_EMOJI = { info: "💬", warn: "⚠️", error: "🛑", debug: "🔨" };
const LOGS_DIR = path.join(path.dirname("."), "logs");

/**
 * Initializes the logger by:
 * 1. Creating logs directory if it doesn't exist
 * 2. Modifying console methods to add enhanced logging
 */
export const initLogger = () => {
    if (!fs.existsSync(LOGS_DIR)) fs.mkdirSync(LOGS_DIR, { recursive: true });
    modifyConsoleLogs();
};

function modifyConsoleLogs() {
    const originalInfo = console.info;
    const originalWarn = console.warn;
    const originalError = console.error;
    const originalDebug = console.debug;

    console.info = (...args: unknown[]) => {
        const prefix = `${getDateString()} ${LOG_EMOJI.info}`;
        originalInfo(prefix, ...args);
        logToFile(prefix, ...args);
    };

    console.warn = (...args: unknown[]) => {
        const prefix = `${getDateString()} ${LOG_EMOJI.warn}`;
        originalWarn(prefix, ...args);
        logToFile(prefix, ...args);
    };

    console.error = (...args: unknown[]) => {
        const prefix = `${getDateString()} ${LOG_EMOJI.error}`;
        originalError(prefix, ...args);
        logToFile(prefix, ...args);
    };

    console.debug = (...args: unknown[]) => {
        // Skip debug logs in production
        if (process.env.NODE_ENV === "production") return;

        const prefix = `${getDateString()} ${LOG_EMOJI.debug}`;
        originalDebug(prefix, ...args);
        logToFile(prefix, ...args);
    };
};

const padZero = (value: number) => String(value).padStart(2, "0");

function getLogFilePath() {
    const now = new Date();
    const mm = padZero(now.getMonth() + 1); // Month (01-12)
    const dd = padZero(now.getDate()); // Day (01-31)
    const filename = `${mm}-${dd}.log`;
    return path.join(LOGS_DIR, filename);
}

function getDateString() {
    return new Date().toLocaleString();
}

function logToFile(prefix: string, ...args: unknown[]) {
    fs.appendFileSync(getLogFilePath(), `${prefix} ${args.join(" ")}\n`);
}
```