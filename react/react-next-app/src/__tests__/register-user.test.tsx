import { render } from '@testing-library/react';
import { describe, it } from "node:test";
import RegisterUser from "../pages/login/register-user";

import '@testing-library/jest-dom/extend-expect';


describe("RegisterUserTests", () => {
    it("should create the component", () => {
        render(
            <RegisterUser />
        )

    })
})