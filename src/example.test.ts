import { hello } from "./hello.js";
import { expect } from "chai";

describe(`example.test.ts`, () => {
    it(`example.test.ts`, () => {
        expect(hello()).to.deep.equal("ytslib_policy package 'int_id_manager_for_better_sqlite3' started successfully!");
    });
});
