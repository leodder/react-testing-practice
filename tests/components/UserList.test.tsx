import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";
describe("UserList", () => {
    it("should render No users available when users is empty", () => {
        render(<UserList users={[]} />)
        expect(screen.getByText(/No users available/i)).toBeInTheDocument();
    });
    it("should render user name when users is not empty", () => {
        const users: User[] = [
            { id: 1, name: "John" },
            { id: 2, name: "Leo" }
        ];
        render(<UserList users={users} />);
        // const link = screen.getByRole("link");
        // expect(link).toBeInTheDocument();
        // expect(link).toHaveTextContent(/John/i);
        // expect(link).toHaveAttribute("href", "/users/1");
        users.forEach((user)=> {
            const link = screen.getByRole("link", {name: user.name});
            expect(link).toBeInTheDocument();
            expect(link).toHaveTextContent(new RegExp(user.name, "i"));
            expect(link).toHaveAttribute("href", `/users/${user.id}`);
        })
    });
})