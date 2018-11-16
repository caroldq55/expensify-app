import { login, logout } from "../../actions/auth";

test("should setup login action object", () => {
    const action = login("123");
    expect(action.uid).toBe("123");
});

test("should setup logout action object", () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT"
    });
});