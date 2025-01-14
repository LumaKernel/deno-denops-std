# variable

`variable` is a module to provide helper accessor functions to variables.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/variable/mod.ts)

## Usage

### globals (alias g)

Use `globals` (or `g`) to access global variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { globals } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set global variable
  await globals.set(denops, "hello", "world");

  // Get global variable
  console.log(await globals.get(denops, "hello"));

  // Remove global variable
  await globals.remove(denops, "hello");
}
```

### buffers (alias b)

Use `buffers` (or `b`) to access buffer variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { buffers } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set buffer variable
  await buffers.set(denops, "hello", "world");

  // Get buffer variable
  console.log(await buffers.get(denops, "hello"));

  // Remove buffer variable
  await buffers.remove(denops, "hello");
}
```

### windows (alias w)

Use `windows` (or `w`) to access window variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { buffers } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set window variable
  await windows.set(denops, "hello", "world");

  // Get window variable
  console.log(await windows.get(denops, "hello"));

  // Remove window variable
  await windows.remove(denops, "hello");
}
```

### tabpages (alias t)

Use `tabpages` (or `t`) to access tabpage variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { buffers } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set tabpage variable
  await tabpages.set(denops, "hello", "world");

  // Get tabpage variable
  console.log(await tabpages.get(denops, "hello"));

  // Remove tabpage variable
  await tabpages.remove(denops, "hello");
}
```

### vim (alias v)

Use `vim` (or `v`) to access Vim variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { vim } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set vim variable
  await vim.set(denops, "version", "world");

  // Get vim variable
  console.log(await vim.get(denops, "version"));

  // Remove tabpage variable
  // Always throw an error
  await vim.remove(denops, "version");
}
```
