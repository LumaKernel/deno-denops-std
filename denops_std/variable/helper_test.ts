import { test } from "../vendor/https/deno.land/x/denops_core/test/mod.ts";
import {
  assertEquals,
  assertThrowsAsync,
} from "../vendor/https/deno.land/std/testing/asserts.ts";
import { buffers, globals, tabpages, vim, windows } from "./helper.ts";

test({
  mode: "any",
  name: "globals.get() return the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
    const result = await globals.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name: "globals.set() replace the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
    await globals.set(denops, "denops_std_vim_variable_test", "world");
    const result = await globals.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "world");
  },
});
test({
  mode: "any",
  name: "globals.remove() remove the variable",
  fn: async (denops) => {
    await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
    await globals.remove(denops, "denops_std_vim_variable_test");
    const result = await globals.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, null);
  },
});

test({
  mode: "any",
  name: "buffers.get() return the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let b:denops_std_vim_variable_test = 'hello'");
    const result = await buffers.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name: "buffers.set() replace the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let b:denops_std_vim_variable_test = 'hello'");
    await buffers.set(denops, "denops_std_vim_variable_test", "world");
    const result = await buffers.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "world");
  },
});
test({
  mode: "any",
  name: "buffers.remove() remove the variable",
  fn: async (denops) => {
    await denops.cmd("let b:denops_std_vim_variable_test = 'hello'");
    await buffers.remove(denops, "denops_std_vim_variable_test");
    const result = await buffers.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, null);
  },
});

test({
  mode: "any",
  name: "windows.get() return the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let w:denops_std_vim_variable_test = 'hello'");
    const result = await windows.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name: "windows.set() replace the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let w:denops_std_vim_variable_test = 'hello'");
    await windows.set(denops, "denops_std_vim_variable_test", "world");
    const result = await windows.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "world");
  },
});
test({
  mode: "any",
  name: "windows.remove() remove the variable",
  fn: async (denops) => {
    await denops.cmd("let w:denops_std_vim_variable_test = 'hello'");
    await windows.remove(denops, "denops_std_vim_variable_test");
    const result = await windows.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, null);
  },
});

test({
  mode: "any",
  name: "tabpages.get() return the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let t:denops_std_vim_variable_test = 'hello'");
    const result = await tabpages.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name: "tabpages.set() replace the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let t:denops_std_vim_variable_test = 'hello'");
    await tabpages.set(denops, "denops_std_vim_variable_test", "world");
    const result = await tabpages.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "world");
  },
});
test({
  mode: "any",
  name: "tabpages.remove() remove the variable",
  fn: async (denops) => {
    await denops.cmd("let t:denops_std_vim_variable_test = 'hello'");
    await tabpages.remove(denops, "denops_std_vim_variable_test");
    const result = await tabpages.get(
      denops,
      "denops_std_vim_variable_test",
    );
    assertEquals(result, null);
  },
});

test({
  mode: "any",
  name: "vim.get() return the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let v:errors = ['hello']");
    const result = await vim.get(
      denops,
      "errors",
    );
    assertEquals(result, ["hello"]);
  },
});
test({
  mode: "any",
  name: "vim.set() replace the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let v:errors = ['hello']");
    await vim.set(denops, "errors", ["world"]);
    const result = await vim.get(
      denops,
      "errors",
    );
    assertEquals(result, ["world"]);
  },
});
test({
  mode: "any",
  name: "vim.remove() throws error",
  fn: async (denops) => {
    await assertThrowsAsync(
      async () => {
        await vim.remove(denops, "errors");
      },
      undefined,
      "Vim variables",
    );
  },
});